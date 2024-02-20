---
title: "'Error: The list of component operations is not valid.' passing custom types to Razor Components"
layout: post
author: Dylan Beattie
meta:
  og_description: "A bafflingly opaque error message trying to pass custom types to Razor Components, and what it actually means"
typora-copy-images-to: ../../images/posts/2024/
typora-root-url: .\..\..
---

In theory, Razor Components sound frikkin' *awesome*. The best of all possible worlds: client-side, server-side, hybrid, wrap 'em in a WebView and run them in your desktop or your mobile app. You want responsive offline client experiences? Run them on WebAssembly. You want to wire them into your existing ASP.NET application? Run them server-side. You can even use them in headless apps to render fragments of HTML.

Everything I just said is technically correct, but even six years on, ~~Blazor~~ Razor Components still has more than few rough edges -- and considering how much Sufficiently Advanced Technology is going on under the hood, when it breaks, it can be utterly baffling working out what just happened. Throw in all the shiny new stuff that's just shipped with .NET 8 and C# 12, and you gotta ask yourself one question: do you feel lucky? Well? Punk? Do ya?

So, in theory, you can use a Razor Component to add interactive elements to your existing ASP.NET site. Razor, the view engine that runs Razor Pages and the "V" in ASP.NET MVC, has a helper method `RenderComponentAsync`.

Spin up a new ASP.NET Razor Pages project with `dotnet new razor -o AlbumApp`, then add:

`/Components/AlbumRating.razor`

```csharp
@for (var i = 0; i < rating; i++) { <a class="filled-star" @onclick="Rate(i)">★</a> }
@for (var i = rating; i < 5; i++) { <a class="hollow-star" @onclick="Rate(i)">☆</a> }
&nbsp;
@Album.Title (@Album.Artist, @Album.ReleaseDate) @rating/5
@code {
	[Parameter] public Album Album { get; set; }
	private int rating = 4;

	private Action Rate(int rating) => () => this.rating = rating + 1;
}
```

