---
sequence: 4
layout: workshop
title: "Workshop: Distributed Systems Deep Dive with Microsoft .NET"
format: Online
length: 3 days (20 hours of teaching)
author: Dylan Beattie
permalink: /workshops/deep-dive-distributed-systems-with-dotnet/
summary: |
  A three day "deep dive" course for developers who want to build distributed systems, APIs and microservices using Microsoft .NET. Over three days, you'll build a sample application that uses HTTP APIs such as REST and GraphQL, message queues, gRPC and SignalR to 
  deliver a responsive, scalable user experience from a complex microservice-style backend architecture.
css-class: transcript 
meta: 
  og_description: Dylan Beattie presents a deep dive workshop on building distributed systems with Microsoft .NET
  og_image: /workshops/communication-for-developers/summary_large_image.jpg
date: '2020-05-18T14:00:00.000+00:00'
---
{{ page.summary }}

## Course Structure and Contents

### Introduction
* What are “distributed systems”?
* Monoliths and microservices
* Common integration patterns
* Principles of distributed architecture

### Connecting Components using HTTP
* HTTP architectural patterns - XMLRPC, REST, GraphQL
* Designing HTTP APIs
* HTTP frameworks: WebAPI, NancyFX, ServiceStack
* Working with HTTP APIs: testing and tooling
* Scaling HTTP APIs: caching strategies
* **Exercise: building an HTTP API client and server**

### Message queues and pub/sub
* Principles of message queues
* Message queueing in .NET - Redis, MSMQ, EasyNetQ
* Queueing strategies and error handling
* Advanced architectural patterns: CQRS, event sourcing
* **Exercise: building a pub/sub system using .NET**

### Protocol Buffers and gRPC
* History of RPC on .NET - SOAP, DISCO, WSDL, WCF
* Introduction to Protocol Buffers
* Contract-first development
* Advantages of gRPC
* **Exercise: high-performance architecture using gRPC**

### Connecting to the Web
* Integrating browsers with distributed systems
* The “Backends for Frontends” pattern
* Working with SignalR
* **Exercise: real-time browser notifications using SignalR**

## Target Audience and Prerequisites

This workshop is aimed at developers with some experience writing applications using C# and Microsoft .NET. Attendees will need to bring a laptop running Windows, macOS or Linux, and ideally install the Microsoft .NET SDK from https://dotnet.microsoft.com/download.

Exercises can be done in .NET Framework 4.6+ or .NET Core 2.0+

The ideal class size for this workshop is between 6–20 people. If you’d like to run it for a smaller or a larger group, please get in touch and let’s chat.