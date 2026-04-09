---
layout: post
title: "Don't Reinvent The Wheel: Use What Works"
date: 2026-04-09T11:19:00
author: Dylan Beattie
---
> **“Your scientists were so preoccupied with whether or not they&#32;_could_, they didn’t stop to think if they&#32;_should_.”**

When Jeff Goldblum's rock star mathematician - sorry, _chaotician_ - spoke those immortal lines in _Jurassic Park_, none of us had any idea how the craft of software development was going to unfold over the next few decades. It was 1994. The world wide web was a handful of academic websites scattered across university servers, Jeff Bezos was on Usenet looking for C++ developers who knew HTML, corporate software was COBOL terminals or Visual Basic on Windows 3.1. There was plenty of free software around, if you knew what to do with a tarball and a makefile, and a few intrepid early adopters were running GNU operating systems built around Linus Torvalds' Linux kernel, but the term "open source" didn't exist yet. There was no Java, no .NET, no Python, no JavaScript, no cloud, no AI.

Three decades later, it turns out Dr Malcolm wasn't just talking about cloning dinosaurs -- not unless the dinosaurs in question are authentication frameworks, object mappers, message queues, and cloning them is building your own version 'cos corporate won't pay for a license -- but look back at your own career, your own projects, and ask yourself: how many times have you built something because you _could_, without stopping to think whether you _should_?

I've been working as a professional developer for almost as long as Jurassic Park's been around. I learned HTML in 1992, I started building data-driven web apps in 1996 - classic ASP, VBScript, ADO DLLs and Microsoft Access databases - and I've been solving problems with code ever since. 

At least, I honestly believed I was solving problems... turns out that sometimes, I was creating more problems than I was solving. Not immediately, of course; me & my teams were cranking out useful features, keeping customers happy, and generating revenue. We liked it. Customers liked it. The Business liked it. One of the thing The Business _really_ liked was when we'd evaluate some expensive library, or package, or software-as-a-service platform, and go "no, that's way too expensive. We can build our own" - and we did. I've probably built half-a-dozen homebrewed customer databases for companies that didn't want to pay for CRM. I've built email clients, marketing tools, content management systems, object-relational mappers, authentication, authorization... one time I even figured out how to use a SQL Server database as a message queue, 'cos hey, we were already paying for SQL, right? Might as well use it![^1]

> Folks, when I talk about "me & my team" here, this is definitely one of those "share the credit, accept the blame" situations. On just about every team I've worked with, I've been the one making the decisions. I've been lucky enough to work with a lot of really smart, capable developers, who built the _thing right_, and on the occasions it turned we hadn't built the _right thing_? That's usually been on me.

Now, I'm not going to lie. I learned a _lot_ building all those things, it gave me a deep appreciation for the complexities - and the difference between building something that "works on my machine", and something that'll work in production across a dozen nodes in a server farm, 24/7, for years at a time. But turns out that homebrewed everything really isn't a great idea when it comes to what they call TCO.[^2]

In most cases, the initial build took a couple of weeks: we'd crank something out, get it into production, and move on to the next thing. But then, somewhere down the line, the thing we built would break. Or it'd start to creak under the volume of traffic, concurrency issues, deadlocks. Or we'd just need to add new features - not cool, innovative features we could charge more money for. Boring features. New file formats. Unicode support for localization - stuff that "the business" obviously thought should have been there from the beginning, even though nobody had ever asked for it.

And, because all the software was ours, the only people in the world who knew how to fix bugs and add features were... us. We couldn't just install the latest version, or upgrade, or outsource. Sure, we hired more developers - but it'd take them months to get up to speed on our codebase's quirks and idiosyncrasies.

Imagine if we'd built those apps around established open source components and libraries. Senior developers and contractors could have hit the ground running, and be pushing new features to production way sooner. Baseline features like file formats and Unicode support wouldn't be down to our team - or if they were, the developer who implemented it could submit those changes to the upstream project, which benefits the entire community _and_ looks pretty good on their CV when it's time to move on to the next thing. And junior developers aren't spending their time learning homebrewed abstraction patterns and in-house workflows; they're learning skills, patterns and practises that will stand them in good stead throughout their career.

Over many, many years, I came to realise something: every release, every line of code, every day that my team and I spent working on stuff, should be building **things we can sell.** Call them what you want: strategic differentiators, special sauce... the stuff our customers can't get anywhere else. Customers aren't dealing with us 'cos we've got a fantastic login system, or a really cool message bus. They're dealing with us 'cos we're the best place to go to find acting jobs, or conference venues, or machine tools. And if you want your dev teams focused on the special sauce, everything else has to be as ordinary, as predictable, as _boring_ as possible. You need usernames, passwords, identity management? That's a solved problem. You need to synchronise data across multiple regions and time zones? That's a solved problem. You want resilient messaging? _That's a solved problem._

For me, that was the first milestone on the road to engineering maturity. The realization that, no matter how fun and interesting it'll be to build my own, it's probably the wrong answer; that my time and energy will be better invested in learning how to integrate and deploy an established solution that solves the problem. It helped that a lot of the time, that solution was free. Free as in free beer, free as in free speech - grab the code, install the package, configure it to do what we need, and get back to building stuff.

And so, over time, we switched from building our own data access layers to using NHibernate, Linq-to-SQL (hey, it was a long time ago!), and Entity Framework. We replaced our SQL-based message queues with EasyNetQ and NServiceBus. We moved from hosting on-premise, to a private cloud, to Amazon Web Services. It wasn't always plain sailing, but over time we ended up spending a lot less time reinventing common infrastructure, and a lot more adding features our customers wanted.

The second milestone for me was the realisation that, sometimes, the best **engineering** solution isn't going to be free. You know that feeling? When you click the "Pricing" tab and you think "oh, boy, that's a lot... I'm going to have to get approval for this" Most of us didn't become software developers because we wanted to sit in budget meetings; we became software developers because we wanted to, y'know, _develop software_. But, with the benefit of a great deal of hindsight, on almost every occasion that we hacked something together rather than spending money? Yeah. We should have done the analysis, created the business case, and spent the money.

There's a tendency to think of developer time as free - after all, your dev team is going to get paid _anyway_; it's not going to cost you any extra to have them build an in-house login system. That's completely the wrong way to look at it. It's not about build vs buy. It's about what they could be building _instead_ - and how much you'll be able to sell it for. You can spend two months building a login system - or you can buy a login system that works and get the dev team working on the features for the new Platinum membership tier, ship that two months earlier, and look at that - Platinum membership revenue just paid for the new login system _and then some_. You might even get a bonus.

When I start working on an unfamiliar codebase now, the first thing I do is look at the dependencies. Which packages and libraries does it use? Where's it hosted? How does the data access work? 

If all I see are two dozen .NET projects with namespaces like `MyCompany.Data.TableMapper`? That's a bad day. It's going to be uphill all the way.

If I see a list of familiar services, names like AutoMapper, IdentityServer, NServiceBus, MassTransit? That's a good day. I know those projects. I've used them, I trust them, I know where to find the docs. 

If it turns out there are paid support contracts & maintenance agreements for those dependencies? That's a _great_ day. It means **somebody else knows what's going on, they're getting paid to care about my problems, and they're ready to help if I need it** - and I get to focus on the special sauce.

![](/images/posts/usewhatworks-light.svg)

That's all a very roundabout way of saying that a bunch of us have got together and created a thing - the Use What Works initiative. It's a collaborative project intended to encourage, and support, more constructive conversations around sustainability in open source software.

The first iteration is live at [https://usewhatworks.org/](https://usewhatworks.org/) now. Swing by, take a look, let us know what you think. If you like what we're doing and want to put your name on it, there's a link to sign the manifesto. If you've got a scenario or a question we haven't thought of, give us a shout. We'd love to hear from you.

[^1]: The secret is WITH READPAST, if you're curious.

[^2]: That's "total cost of ownership" for the folks without an MBA.[^3]

[^3]:  Master of Business Administration - a college degree that won't teach you anything about using SQL as a message bus, but will teach you all about things like TCOs
