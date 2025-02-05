---
layout: workshop
title: "Beyond the Basics: Advanced Web Apps with ASP.NET 8"
category: web
published: true
sequence: 1
summary:
   "There's a lot more to ASP.NET 8 than models, views and controllers. In this workshop, you'll learn how to make the most of the advanced features of Microsoft's flagship development platform: from powerful asynchronous programming patterns like channels and callbacks, to support for cutting-edge frontend technologies like Razor Components, Blazor, and SCSS. We'll look at advanced testing strategies for ASP.NET applications, and how to build observability into your .NET apps using OpenTelemetry and ASP.NET Aspire."
bullets:
    - Overview of .NET web application architecture
    - Managing data with Entity Framework Core
    - "HTTP routing in ASP.NET Core: MVC, named routes, areas"
    - Securing applications with OAuth2 and OpenIDConnect
    - "Dealing with the real world: Globalization, NodaTime, MailKit"
    - Building responsive layouts with CSS grids and SASS
length: 2 days
meta:
    description: "There's a lot more to ASP.NET 8 than models, views and controllers. In this workshop, you'll learn how to make the most of the advanced features of Microsoft's flagship development platform: from powerful asynchronous programming patterns like channels and callbacks, to support for cutting-edge frontend technologies like Razor Components, Blazor, and SCSS."
    keywords: dotnet, efcore, nodatime, css-grid, aspdotnet, dotnet mvc, fullstack, web
    og:
        image: /images/workshops/modern-webdev-with-dotnet.png

testimonials_title: "Here’s what attendees have said about Dylan Beattie's .NET workshops:"
testimonials:
  - It was very nice overview of interesting technologies. Simple and fast. Exceeded my expectations.
  - Everything was great, content, presentation, examples, answers to questions. All clear and understandable.
  - I liked the way the lecturer kept the tempo and captured attention. Everything was well prepared and worked right away or almost right away.
  - I really enjoyed the humour and that Dylan showed personality throughout the workshop.
  - Really great organization and preparation. It shows that you have experience with this kind of workshops.

# dates:
#  - isodate: 20240610
#    date: 10-11 June 2024
#    time: 09:00-16:00 CET (Norway)
#    venue: NDC Oslo 2024
#    cost: 15,490 NOK
#    href: https://ndcoslo.com/tickets

# dates:
#  - isodate: 20240610
#    date: 10-11 June 2024
#    time: 09:00-16:00 CET (Norway)
#    venue: NDC Oslo 2024
#    cost: 15,490 NOK
#    href: https://ndcoslo.com/tickets

# -   isodate: 20241026
#     date: 26 & 27 October 2021
#     time: 10:00-17:00 EEST (Bucharest)
#     venue: Online
#     partner: Hosted by Codecamp RO
#     partner_logo: codecamp.png
#     cost: 580 EUR
#     href: https://codecamp.ro/masterclasses/pure-javascript-web-components/

#    -   isodate: 20210417
#        date: 17 & 18 April 2021
#        time: 11:00-15:00 EET
#        venue: Online
#        partner: Hosted by fwdays Ukraine
#        partner_logo: fwdays.png
#        # cost: 3900 UAH
#        href: https://fwdays.com/en/event/pure-javascript-web-components
#    -   isodate: 20210427
#        date: 27 & 28 April 2021
#        time: 09:30-17:30 BST
#        venue: Online
#        partner: Hosted by Fusion Workshops
#        partner_logo: fusion.png
#        # cost: £300 - £600 + VAT
#        href: https://www.eventbrite.co.uk/e/pure-javascript-web-components-online-workshop-tickets-141301232791
---

<strong>{{ page.summary }}</strong>

We've all seen the "hello world" demos: models, views, controllers, a DataContext, maybe some minimal API endpoints. In this workshop, we'll go beyond the basics and explore the full potential of C# 12, ASP.NET Core 8, EF Core, and the rich ecosystem of libraries and packages that's available for building web apps with .NET in 2024.

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

Application code is all built on .NET 8 using C# 12, so we can use new C# language features like primary constructors and collection expressions.

You'll also get to learn about many of my favourite developer tools like zoxide, oh-my-posh, MailTrap, Papercut, Postman, and ngrok: they're not specific to .NET, but they do make building and testing .NET applications a lot easier.

### Testimonials

What people have said about Dylan Beattie's .NET workshops:

* "Everything was great, content, presentation, examples, answers to questions. All clear and understandable."
* "I liked the way the lecturer kept the tempo and captured attention. Everything was well prepared and worked right away or almost right away."
* "I really enjoyed the humour and that Dylan showed personality throughout the workshop."
* "Really great organization and preparation. It shows that you have experience with this kind of workshops."

### Target Audience

This is for developers who already have some experience with ASP.NET Core; you should already be familiar with the model/view/controller patterns, the Razor view engine, and basic data access using Entity Framework.

Attendees will need a laptop running the .NET 8 SDK, and a code editor such as Visual Studio 2022, JetBrains Rider, or VS Code.

## About the Trainer

[Dylan Beattie](https://dylanbeattie.net/about) has been building data-driven web applications with C# and .NET since the beta release of the .NET Framework back in 2002. He's used .NET to build everything from tiny standalone microservices to large-scale distributed web applications, and he's been teaching .NET workshops for over ten years. Dylan is a [Microsoft MVP](https://mvp.microsoft.com/en-us/PublicProfile/5002699) and the creator of the [Rockstar](https://codewithrockstar.com) esoteric programming language, and he's presented talks about technology and software development at conferences and events all over the world. He's is online at [https://dylanbeattie.net/](https://dylanbeattie.net/) and on Twitter as [@dylanbeattie](https://twitter.com/dylanbeattie).
