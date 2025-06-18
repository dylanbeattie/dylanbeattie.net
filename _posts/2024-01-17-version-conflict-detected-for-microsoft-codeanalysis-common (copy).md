---
title: "Fixing 'Version conflict detected for Microsoft.CodeAnalysis.Common'"
layout: post
author: Dylan Beattie
meta:
  og_image: /images/posts/2024/2024-01-17-version-conflict-detected-for-microsoft-codeanalysis-common.png
  og_description: "Why you're getting a weird error upgrading your projects to .NET 8 - and how to fix it."
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2024/
typora-root-url: .\..\..
---

I've been upgrading projects from .NET 7 to .NET 8, and mostly it's been remarkably smooth: edit the .csproj files, replace net7.0 with net8.0, then upgrade any 7.x NuGet packages to their 8.x counterparts, and so far, it's just worked.

Today I got a weird error message:

```
error: NU1107: Version conflict detected for Microsoft.CodeAnalysis.Common. Install/reference Microsoft.CodeAnalysis.Common 4.5.0 directly to project Rockaway.WebApp to resolve this issue.

error:  Rockaway.WebApp -> Microsoft.EntityFrameworkCore.Tools 8.0.0 -> Microsoft.EntityFrameworkCore.Design 8.0.0 -> Microsoft.CodeAnalysis.CSharp.Workspaces 4.5.0 -> Microsoft.CodeAnalysis.Common (= 4.5.0)
error:  Rockaway.WebApp -> Microsoft.VisualStudio.Web.CodeGeneration.Design 7.0.10 -> Microsoft.DotNet.Scaffolding.Shared 7.0.10 -> Microsoft.CodeAnalysis.CSharp.Features 4.4.0 -> Microsoft.CodeAnalysis.Common (= 4.4.0).
```

I'm a big fan of error messages that tell you how to fix the error which caused them, like “Install/reference Microsoft.CodeAnalysis.Common 4.5.0 directly to project Rockaway.WebApp to resolve this issue.” in this one... except, if you look at the notes for [Microsoft.CodeAnalysis.Common](https://www.nuget.org/packages/Microsoft.CodeAnalysis.Common/), it quite clearly says:

> "Do not install this package manually, it will be added as a prerequisite by other packages that require it."

Here's what's actually going on.

Before upgrading, my project uses two NuGet packages, both version 7.x because they shipped with .NET 7:

* `Microsoft.EntityFrameworkCore.Tools` 7.0.12
* `Microsoft.VisualStudio.Web.CodeGeneration.Design` 7.0.10

Both of these packages have an indirect dependency on `Microsoft.CodeAnalysis.Common 4.4.0` -- this doesn't appear anywhere in the `.csproj` file, so I'm guessing it's controlled by this line:

```xml
<IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
```

So you try to upgrade `Microsoft.EntityFrameworkCore.Tools` to 8.x and it fails, because that package requires `Microsoft.CodeAnalysis.Common` 4.5.0, but your project includes `Microsoft.VisualStudio.Web.CodeGeneration.Design` 7.x, which requires `Microsoft.CodeAnalysis.Common` v4.4.0

The solution that worked for me was to remove the other package (v7.x), upgrade EF Core Tools, then install the other package (which installs the latest version, 8.x):

```
dotnet remove package Microsoft.VisualStudio.Web.CodeGeneration.Design
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 8
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
```
