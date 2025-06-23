---
title: "Custom Validation Attributes in ASP.NET Core 8"
date: 2024-01-24T12:00:00
layout: post
author: Dylan Beattie
meta:
  og_description: "Using custom validation attributes to make a checkbox mandatory in ASP.NET Core 8"
typora-copy-images-to: ../../images/posts/2024/
typora-root-url: .\..\..
---

ASP.NET Core 8 rocks. It's fast, powerful, cross-platform... and, yes, includes jQuery.

Chill. jQuery's fine. It's solid, it's proven, it works, and we're not here to impress hipsters hiring frontend devs for their Web3 startup, we're here to build stuff that works (and will probably still work next year.)

Out of the box, ASP.NET Core includes jQuery, jquery.validate and jquery.validation.unobtrusive, which together provide client-side validation that integrates really closely with the server-side validation provided by ASP.NET and System.ComponentModel.

Most of the stuff you'll find online about how to extend ASP.NET Core validation still works, but there's a few new things in .NET 8 which make it a little cleaner. Specifically, `IDictionary<TKey,TValue>` in .NET 8 includes a `.TryAdd(key, value)` method, which means the `MergeAttributes` helper method you'll find in lots of examples of custom validation attributes isn't required any more.

Here's how to extend ASP.NET with a custom validation attribute that'll make a checkbox a required field -- the classic "You must accept the terms and conditions" scenario.

The attribute itself:

```csharp
public class MustBeTrueAttribute : ValidationAttribute, IClientModelValidator {

	public override bool IsValid(object? value) => value is true;

	public void AddValidation(ClientModelValidationContext context) {
		var errorMessage = FormatErrorMessage(context.ModelMetadata.GetDisplayName());
		context.Attributes.TryAdd("data-val", "true");
		context.Attributes.TryAdd("data-val-must-be-true", errorMessage);
	}
}
```

You'll need to add two lines of custom JavaScript to your pages - I add these to the end of `_ValidationScriptsPartial.cshtml`.

```html
<script>
	jQuery.validator.addMethod("must-be-true", (_, element) => element.checked);
	jQuery.validator.unobtrusive.adapters.addBool("must-be-true");
</script>
```

> **Don't** put this code inside the jQuery onload handler (the one that's normally wrapped in `$(function() { })`  -- it doesn't rely on any DOM elements and the call to `jquery.validator.unobtrusive.adapters.addBool()` has to run *before* the validation code parses your form.

To use this attribute in your view model:

```csharp
public class SignupPostData {
	[MustBeTrue(ErrorMessage = "You must accept the terms and conditions")]
	public bool AcceptTerms { get; set; }
}
```

and then in your Razor view:

```html
@model SignupPostData

<form method="post">
    <label asp-for="@Model.AcceptTerms">
        <input type="checkbox" asp-for="@Model.AcceptTerms"/>
        I accept the terms and conditions
    </label>
    <span class="form-text text-danger" asp-validation-for="@Model.AcceptTerms"></span>
</form>

@section Scripts {
	@{ await Html.RenderPartialAsync("_ValidationScriptsPartial"); }
}
```

or, if you prefer using the HTML Helper syntax:

```html
@model SignupPostData

@using (Html.BeginForm(FormMethod.Post)) {
	@Html.ValidationSummary()
	@Html.LabelFor(model => model.AgreeToPayment)
	@Html.CheckBoxFor(model => model.AgreeToPayment)
	@Html.ValidationMessageFor(model => model.AgreeToPayment)
	<input type="submit"/>
}

@section Scripts {
	@{ await Html.RenderPartialAsync("_ValidationScriptsPartial"); }
}
```



