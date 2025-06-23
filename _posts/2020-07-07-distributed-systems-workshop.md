---
title: "Workshop: Introduction to Distributed Systems with .NET"
date: 2020-07-07T12:00:00
layout: post
author: Dylan Beattie
meta: 
  og_description: I'm running an online workshop about building distributed systems in .NET
  og_image: /images/posts/2020-07-07-distributed-systems-workshop/summary.png
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2020-07-07-distributed-systems-workshop
typora-root-url: .\..\..
---

Next **Thursday, July 16th,** I'm running a workshop with the folks from Fusion Workshops in Birmingham, all about building distributed systems using .NET Core. It'll be completely online, hands-on, delivered using Zoom and various online tools - plus a lot of live coding, hooking our code into various cloud services and watching things running live over the internet. I've run this workshop with a couple of different groups and the online format actually works brilliantly - plus it's *way* more impressive running a distributed application when you're sending messages a few hundred miles between cities, instead of between two laptops in a classroom.

**Tickets are on sale now: [https://www.eventbrite.com/e/distributed-systems-net-with-dylan-beattie-tickets-107811475024](https://www.eventbrite.com/e/distributed-systems-net-with-dylan-beattie-tickets-107811475024)**

**What's a distributed system?** 

Good question. Fundamentally, it's a software system where you have multiple components that communicate across a network. After that, it can get very complicated, very quickly... before long you're reading about microservices and REST APIs, GraphQL, gRPC, message queues, pub-sub, "backends for frontends" - there's a *lot* of good ideas, and some very powerful patterns out there, but it can all be a bit overwhelming if you're not sure where to start.

**What's in the workshop?**

This is very much a hands-on workshop - lots of code, lots of demos, and by the end of the day you'll have working examples on your own PC of most of the things we're looking at. Using a (very simplified!) used car sales platform as our example, we'll kick off by building a simple REST API (and yes, it will *actually* be RESTful - with HATEOAS and everything!) that dealers can use to add new cars to our platform. Then we'll plug that into a set of message queues, using EasyNetQ, and build some microservices that receive messages from those queues. We'll plug in some gRPC endpoints to handle price calculation, and finally hook the whole lot into a SignalR hub to display live notifications in a web browser. 

Along the way, we'll discuss the pros and cons of each of these models, look at why and when you'd used them in production, and where you can go to find out more about running them on production systems.

The best part is that, because we're all remote, the code we write during the day will be an actual real-world distributed system - we'll be bouncing messages and HTTP requests around the country, triggering workflows on each other's laptops, seeing messages from other participants being filtered through our own code, and get a chance to see how things like latency and bandwidth affect the reliability and performance of real-world distributed systems.

You're not going to learn everything in a day. We're not going to talk about security, monitoring, logging, deployment... the idea of this course is to give you an overview of how everything fits together, and a solid foundation to go away and learn more (or take another course!) before putting these ideas into production.

**Who's it aimed at?**

Developers who have done at least some .NET, who want to understand more about the different patterns and architectural styles used to create distributed applications, and the frameworks that exist in .NET Core to help you build those kinds of applications.

The course assumes some familiarity with .NET - if you've built websites with ASP.NET MVC or done any kind of .NET development, you should be fine.

![image-20200707170109366](/images/posts/2020-07-07-distributed-systems-workshop/summary.png)
