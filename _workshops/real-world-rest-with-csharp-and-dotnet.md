---
layout: workshop
title: Real World REST with C# and .NET
category: dotnet
published: false
sequence: 5
length: 2 days

redirect_from: "/workshops/real-world-rest-with-dotnet-core.html"
summary: |
    A hands-on workshop about building REST APIs using C# and .NET. Covers API design, HTTP methods and 
    status codes, how to use hypermedia as the engine of application state (HATEOAS), and more.
bullets:
  - Foundations of REST as an architectural style
  - Understanding HATEOAS
  - Building API resources and endpoints with C# and .NET
  - "Advanced HTTP: going beyond GET and POST"
  - Tools and testing strategies
  - Security, monitoring and managing REST APIs
meta:
  description: "A live online workshop with Dylan Beattie, about building REST APIs using .NET Core. Covers API design, HTTP methods and status codes, how to use hypermedia as the engine of application state (HATEOAS), and more."
  keywords: rest, hypermedia, hateoas, http, api design, resources, schema, aspnet, webapi, c#, .net, rest apis
  og:
      image: /images/workshops/real-world-rest-with-dotnet-core.png
      description: |
          A live online workshop with Dylan Beattie, about building REST APIs using C# and .NET. Covers API design, HTTP methods and status codes, how to use hypermedia as the engine of application state (HATEOAS), and more.
# dates:
#    -   isodate: 20210413
#        date: 13-14 April 2021
#        time: 09:30-17:30 BST
#        venue: Online
#        partner: Hosted by Fusion Workshops
#        partner_logo: fusion.png
#        # cost: £450 / £600 + VAT
#        href: https://www.eventbrite.co.uk/e/building-rest-apis-with-net-core-hands-on-workshop-tickets-138137969385

---

**Most developers have heard of the architectural style known as REST, but even experienced developers often find it difficult to apply RESTful principles when building real-world applications. This workshop is all about building and running RESTful systems in the real world.**

<div style="text-align: center;">
<iframe width="560" height="315" style="margin: 8px auto;" src="https://www.youtube.com/embed/ixMQJnZre0I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Over two days, you'll get a comprehensive grounding in the principles and patterns behind HTTP APIs, the architectural style known as REST, and the frameworks and formats that exist to support developers building HTTP APIs using C# and Microsoft .NET. We'll start by going right back to Roy Fielding's original thesis "Architectural Styles and the Design of Network-based Software Architectures", in which he describes the set of constraints that define this much-misunderstood architectural style. We'll learn the significance of each of these constraints, and explore some examples of real-world systems that demonstrate each constraint in action.

We'll look in depth at how to use Microsoft .NET to build and host high-performance REST APIs. We'll discuss how running on .NET  opens up new possibilities for developing and hosting your APIs, from cross-platform IDEs like Rider and Visual Studio Code, to running .NET Core on Linux and using serverless hosting environments like AWS Lambda. We'll explore the various formats that exist for representing hypermedia resources in JSON -- HAL, SIREN, HYDRA, JSON-LD and Collection+JSON, and the relative merits of each. We'll go beyond `200 OK` and `404 Not Found` and explore how you can use the full range of HTTP verbs, headers and response codes to build expressive, responsive APIs. We'll look at ways of securing your HTTP APIs, and techniques and patterns you can use to document and test your APIs in development, and monitor them when they're running in production.

Finally, to put all this in context, we'll talk about why REST might not always be the best solution to your problem, look briefly at some of the alternative API patterns you may want to consider using, and finish up with some discussion of how RESTful services can fit into your organisation's technology strategy - and how to persuade your boss, and your team, that they're worth investing in.

You'll leave the workshop with a comprehensive understanding of building HTTP APIs in C# and .NET, your own working implementations of the patterns and techniques we've talked about, and a much clearer idea of what REST is - and why people are still talking about it, nearly twenty years after it was first defined.

## Key Takeaways

* Learn how to design and implement RESTful APIs in C# and .NET
* Learn how to use the full range of HTTP verbs and response codes effectively.
* Learn about the various hypermedia formats that are available for building HTTP APIs.
* Learn about the rich set of tools that can help you design, build and manage your APIs.

## Course Structure

### Introduction

* What is REST?.
* Architectural styles and constraints.

### Module 1: Retrieving Resources

* Building your first hypermedia API.
* Hypermedia formats and content negotiation.
* Linked resources and resource expansion.
* Layered systems and cacheability.

### Module 2: Creating and Updating Resources

* Understanding PUT and DELETE.
* Understanding POST and PATCH.
* Beyond CRUD: modelling complex domains with HTTP and REST.

### Module 3: Security and Identity for REST APIs

* Securing REST APIs.
* Authentication, API keys.
* Using OAuth2 and OpenID Connect.
* Request validation and signatures.

### Module 4: Content Types and Versioning

* Resource and representations.
* Content negotiation.
* REST API versioning strategies .
* Custom media types.

### Module 5: Tools and Testing

* Testing and monitoring hypermedia APIs.
* Tunneling APIs with NGrok.
* Building integration tests for REST APIs.

### Module 6: Running REST in Production

* Hosting APIs: IIS, OWIN, Kestrel.
* Deployment and hosting architecture APIs.
* Load balancers, API Gateways, Backends for Frontends (BFFs).
* Going serverless.

### Module 7: Integration and Collaboration

* Documenting and versioning HTTP APIs
* Integrating REST: message queues, gRPC, CQRS.

### Module 8: REST and API Strategy

* Alternatives to REST, and when to consider using them.
* REST on your roadmap - and how to sell it to your boss.

## Target Audience and Prerequisites

This course is aimed at developers who have some experience building web sites and applications using C# and Microsoft .NET.

The workshop is run fully online, using Zoom and various online collaboration tools. Attendees will be writing and running .NET code during the workshop, so will need to join the workshop on a computer running Windows, macOS or Linux, and install the Microsoft .NET SDK from [dotnet.microsoft.com/download](https://dotnet.microsoft.com/download).

The ideal class size for this workshop is between 6–20 people. If you’d like to run it for a smaller or a larger group, please get in touch and let’s chat.

## About the Trainer

[Dylan Beattie](https://dylanbeattie.net/about) created his first web page in 1992. With nearly 25 years' experience as a professional developer, he's worked on everything from static websites to distributed microservice architectures. Dylan is a [Microsoft MVP](https://mvp.microsoft.com/en-us/PublicProfile/5002699) and the creator of the [Rockstar](https://codewithrockstar.com) esoteric programming language, and he's presented talks about technology and software development at conferences and events all over the world.

Dylan has been speaking at technology events and meetups for over 10 years, and  [recordings of his presentations](https://youtube.com/playlist?list=PLw0jj21rhfkM8gBoADhQlLsGqlNW0c29b) have been watched online by over two million people. From 2017 to 2019 he was the Chief Technology Officer at Skills Matter in London, managing the technology platform used to promote and deliver Skills Matter's portfolio of conferences, community events and meetups. Throughout 2020 Dylan worked with NDC Conferences to help them adapt their international conferences to the online format, working directly with speakers, attendees and partners to solve the technical and logistical problems of online events. Dylan is online at [https://dylanbeattie.net/](https://dylanbeattie.net/) and on BlueSky as [@dylanbeatt.ie](https://bsky.app/profile/dylanbeatt.ie).
