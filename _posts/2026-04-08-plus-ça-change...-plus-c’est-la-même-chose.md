---
layout: post
title: Plus ça Change... Plus c’est la Même Chose
date: 2026-04-08T15:18:00
author: Dylan Beattie
---
**It's 2007**. I'm working on a big rewrite _(yes, I know)_ of a big system; a database-driven web app built in C#. A significant part of the project is just the code to get data in and out of the database. Object-relational mappers are still very much in their infancy; somebody's ported Java's Hibernate project to .NET but it's a little rough around the edges and involves quite a lot of XML. But no worry - I've found this amazing tool called CodeSmith. CodeSmith can generate C# code based on your database schema (It still exists - it's called [CodeSmith Generator](https://www.codesmithtools.com/product/generator) now). I start using CodeSmith to build a template-driven data access layer. Build the perfect DB schema, generate C# classes for every table with built-in persistence logic... this is gonna save _so_ much time! Don't worry about the frontend, validation, business logic - once the data layer is in place, all that stuff is gonna be a walk in the park. Let's get the data layer sorted first. Days pass. Weeks. A month. Two months. I learn about cursors and table locks. I learn about something called a topological sort, to ensure that complex data operations involving foreign key constraints can be applied in the correct order.

I have a couple of prototypes and proofs-of-concept, but nothing that will form the basis of a working product. Nothing to show potential customers or stakeholders... but that's OK. When this thing works, it's going to be amazing; just iron out the last few glitches and then everything else will magically fall into place...

...what's that? I should put the magic tools away, take what I've got, and just do the hard work to turn it into something we can actually launch? Don't be ridiculous. It's nearly done!

_(It wasn't nearly done. It was never done. The project was cancelled after six months, without ever shipping a single line of code.)_

**It's 2026**. I'm using Claude Code. I've got a prompt file - `ANALYST.md` - that makes Claude ask me questions about what I'm building. The analyst prompt generates `REQUIREMENTS.md`. The requirements look good. They look very good; at a cursory glance, they're better than any set of requirements I've ever seen from an actual client. I feed `REQUIREMENTS.md` to the `ARCHITECT.md` persona. There are more questions. It creates a `SPEC.md` and a `PLAN.md`. I fire up a pair of agents, `DEV.md` and `QA.md`. Dev writes the code. QA reviews the code. I run the result. It's not quite right. I missed something in the requirements. Something obvious, but I didn't mention it and `ANALYST.md` didn't ask. I fire up the analyst again. We have another chat. The requirements get updated. I fire up the architect. It reviews the new requirements. The plan and the spec are updated. The agents go another few rounds. I review the result. It's still not right. Sure, it _says_ it's monitoring the filesystem for changes, but it isn't. Back to the requirements. Did we miss something? Is this a problem for the analyst? Is it architectural? Did the dev agent miss something? Did the QA agent miss something? I'm not sure. Back to the beginning. Round and round and round we go...

I've been doing this for a week now.

I have a couple of prototypes and proofs-of-concept, but nothing that will form the basis of a working product. Nothing to show potential customers or stakeholders... but that's OK. When this thing works, it's going to be amazing; just iron out the last few glitches and then everything else will magically fall into place...

...what's that? I should put the magic tools away, take what I've got, and just do the hard work to turn it into something we can actually launch? 

Don't be ridiculous. 

It's nearly done!
