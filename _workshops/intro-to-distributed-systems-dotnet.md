---
layout: workshop
title: Introduction to Distributed Systems with C# and .NET
category: dotnet
sequence: 2
published: true

summary: "A hands-on workshop with Dylan Beattie, covering HTTP, REST, GraphQL, gRPC, RabbitMQ, and SignalR: what they do, why you would use them, and how they all work with C# and .NET."
length: 2 days
bullets:
  - What is a "distributed system" - and why does it matter?
  - Building HTTP APIs using ASP.NET Core
  - Working with message queues and RabbitMQ
  - Support SPAs and mobile devices using GraphQL
  - High-performance remote procedure calls with gRPC
  - Realtime browser communication with SignalR
meta:
  description: "A hands-on workshop with Dylan Beattie, covering HTTP, REST, GraphQL, gRPC, RabbitMQ, and SignalR: what they do, why you would use them, and how they all work with C# and .NET Core."
  keywords: training, architecture, dotnet, c#, .net, rabbitmq, rest, http, graphql, grpc, signalr
  og:
    image: /images/workshops/intro-to-distributed-systems-dotnet.png
testimonials:
  - It was very nice overview of interesting technologies. Simple and fast. Exceeded my expectations.
  - Everything was great, content, presentation, examples, answers to questions. All clear and understandable.
  - I liked the way the lecturer kept the tempo and captured attention. Everything was well prepared and worked right away or almost right away.
  - Really great organization and preparation. It shows that you have experience with this kind of workshops.
dates:
---
<strong>{{ page.summary }}</strong>

Once upon a time, software was simple. You built a website, connected it to a database, and you were done. Then customers started asking for APIs, mobile apps, notification emails, realtime chat... Today, cloud hosting lets us build "elastic" systems -- websites that automatically scale up to handle demand, using message queues and publish/subscribe patterns to handle spikes in traffic and workload without impacting your end users.

If you're just starting out with distributed systems design, the possibilities can be overwhelming. APIs, message queueing, REST, GraphQL, gRPC... what should you choose, how does it work, how do you get started? 

This workshop gives you a hands-on introduction to the most important messaging patterns used in modern application development. Using C# and .NET, we'll build a series of small example apps and services, wire them together using these patterns, and discuss how -- and when -- you'd apply the same patterns in your own applications.
## Course Structure and Contents

### Introduction
* What are “distributed systems”?
* Monoliths and microservices
* Common integration patterns
* Principles of distributed architecture

### HTTP, REST and Hypermedia 
* Designing HTTP APIs
* Understanding REST
* Working with HTTP APIs: testing and tooling
* Interactive documentation with OpenAPI and Swagger

### Message queues and pub/sub
* Principles of message queues
* Message queueing in .NET with RabbitMQ and EasyNetQ
* Queueing strategies and error handling

### Protocol Buffers and gRPC
* Introduction to Protocol Buffers
* Contract-first development using protocol definitions
* Cross-platform gRPC

### GraphQL in ASP.NET
* Introduction to GraphQL
* Graph types, queries and schemas
* GraphQL in context: the "backends for frontends" pattern

### Connecting to the Web
* Integrating browsers with distributed systems
* Protocols for realtime communication
* Working with SignalR

## Target Audience and Prerequisites

This workshop is aimed at developers with some experience writing applications using C# and Microsoft .NET.

The workshop can be run in person or online. Attendees will be writing and running .NET code during the workshop, so will need a computer running Windows, macOS or Linux, and the Microsoft .NET 8 or 9 SDK from https://dotnet.microsoft.com/download.

The sample application and examples used during the workshop all run on .NET 8, and are tested on Linux, macOS and Windows.

The ideal class size for this workshop is between 10–25 people. If you’d like to run it for a smaller or a larger group, please get in touch and let’s chat.

## About the Trainer

[Dylan Beattie](https://dylanbeattie.net/about) wrote his first web page in 1992, and has been using .NET and C# since the beta release of Visual Studio .NET way back in 2002. With over 25 years' experience as a professional developer and systems architect, Dylan has worked on everything from static websites to distributed microservice architectures. Dylan is a [Microsoft MVP](https://mvp.microsoft.com/en-us/PublicProfile/5002699) and the creator of the [Rockstar](https://codewithrockstar.com) esoteric programming language, and he's presented talks about technology and software development at conferences and events all over the world.

Dylan has been speaking at technology events and meetups for over a decade. [Recordings of his presentations](https://youtube.com/playlist?list=PLw0jj21rhfkM8gBoADhQlLsGqlNW0c29b) have been watched online by millions of people. Dylan is online at [https://dylanbeattie.net/](https://dylanbeattie.net/) and on BlueSky as [@dylanbeatt.ie](https://bsky.app/profile/dylanbeatt.ie).
