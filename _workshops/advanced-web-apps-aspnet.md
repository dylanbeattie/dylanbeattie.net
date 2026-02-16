---
layout: workshop
title: "Advanced Web Applications with ASP.NET Core 10"
category: web
published: true
sequence: 1
summary:
  "An interactive workshop for developers who want to take their ASP.NET Core skills to the next level, covering architecture,
  performance, testing, frontend, and observability."
bullets:
    - Web application architecture
    - "Advanced testing patterns for ASP.NET"
    - Async performance secrets
    - Observability with OpenTelemetry and Aspire
length: 4 x half-days
meta:
    description: "Learn to create powerful, responsive web applications using the advanced features of Microsoft's flagship development platform: from asynchronous programming patterns like channels and callbacks, to cutting-edge frontend technologies like Razor Components, Blazor, and SCSS. Explore advanced testing strategies for ASP.NET applications, and add observability into your .NET apps using OpenTelemetry and ASP.NET Aspire."
    keywords: dotnet, efcore, nodatime, css-grid, aspdotnet, dotnet mvc, fullstack, web
    og_image: /images/workshops/aspnet-20260317.jpg

testimonials_title: "Here’s what attendees have said about Dylan Beattie's .NET workshops:"
testimonials:
  - It was very nice overview of interesting technologies. Simple and fast. Exceeded my expectations.
  - Everything was great, content, presentation, examples, answers to questions. All clear and understandable.
  - I liked the way the lecturer kept the tempo and captured attention. Everything was well prepared and worked right away or almost right away.
  - I really enjoyed the humour and that Dylan showed personality throughout the workshop.
  - Really great organization and preparation. It shows that you have experience with this kind of workshops.

#dates:
#  - isodate: 2026-03-17 14:00:00
#    time: 14:00-17:30 UTC
#    duration: 4 half-days
#    date: 17-20 March 2026
#    venue: Online (Zoom)
#    cost: £375 / £475
#    url: https://www.eventbrite.com/e/1981392797194?aff=oddtdtcreator
---

<strong>{{ page.summary }}</strong>

We've all seen the "hello world" demos: models, views, controllers, a DataContext, maybe some minimal API endpoints. In this workshop, we'll go beyond the basics and explore the full potential of C# 14, ASP.NET Core 10, EF Core, and the rich ecosystem of libraries and packages that's available for building web apps with .NET in 2026.

The workshop is based around "Rockaway", a .NET web app for selling concert tickets. We'll send our favourite rock bands, from Dev Leppard to Mott the Tuple, on tour around the world; along the way we'll encounter dozens of real-world scenarios, from data modelling, to timezones and currencies, to responsive layouts and email delivery.

We'll use asynchronous patterns and channels to build lightning-fast web apps which stay responsive even under heavy load. We'll look at how to extend the built-in Bootstrap libraries with Blazor and Razor Components to create beautiful, responsive frontend layouts that work seamlessly with ASP.NET, and we'll see how to test our applications at every level, from low-level isolation testing, to end-to-end integration tests which exercise the entire HTTP pipeline.

### **What You'll Learn:**

* Principles of web application architecture: areas, services, components and dependencies
* Testing ASP.NET Applications: WebApplicationFactory, Shouldly, AngleSharp
* Deploying web apps using Azure and GitHub Actions
* Observability with OpenTelemetry and .NET Aspire
* Interactive frontends with Blazor and Razor Components
* Advanced EF Core: mapping conventions and custom types
* Testing database code using EF Core and Sqlite
* Customising Bootstrap using SASS
* Globalisation: dates, times and currencies
* Async processing with threads and channels

This is a hands-on, interactive workshop: we'll be sharing code throughout using GitHub and VS LiveShare, you'll go home with a fully working copy of the sample application, and all the workshop code is published under the MIT license so you can use it for whatever you like.

Application code is all built on .NET 10 using C# 14, so we can use all the latest C# language features, and you'll also get to learn about many of my favourite developer tools like zoxide, oh-my-posh, MailTrap, Papercut, Postman, and ngrok: they're not specific to .NET, but they do make building and testing .NET applications a lot easier.

### Testimonials

What people have said about Dylan Beattie's .NET workshops:

* "Everything was great, content, presentation, examples, answers to questions. All clear and understandable."
* "I liked the way the lecturer kept the tempo and captured attention. Everything was well prepared and worked right away or almost right away."
* "I really enjoyed the humour and that Dylan showed personality throughout the workshop."
* "Really great organization and preparation. It shows that you have experience with this kind of workshops."

### Target Audience

This is for developers who already have some experience with ASP.NET Core; you should already be familiar with the model/view/controller patterns, the Razor view engine, and basic data access using Entity Framework.

Attendees will need the .NET 10 SDK installed, and a code editor such as Visual Studio, JetBrains Rider, or VS Code.

## About the Trainer

[Dylan Beattie](https://dylanbeattie.net/about) has been building data-driven web applications with C# and .NET since the beta release of the .NET Framework back in 2002. He's used .NET to build everything from tiny standalone websites, to large-scale distributed web applications, to video encoding pipelines for guitar karaoke, and he's been teaching .NET workshops for over fifteen years. Dylan is a [Microsoft MVP](https://mvp.microsoft.com/en-us/PublicProfile/5002699) and the creator of the [Rockstar](https://codewithrockstar.com) esoteric programming language, and he's presented talks about technology and software development at conferences and events all over the world. He's is online at [https://dylanbeattie.net/](https://dylanbeattie.net/) and on BlueSky as [@dylanbeatt.ie](https://bsky.app/profile/dylanbeatt.ie).
