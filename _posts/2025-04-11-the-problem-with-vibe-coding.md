---
layout: post
title: The Problem with "Vibe Coding"
date: 2025-04-11T18:03:00
author: Dylan Beattie
---
The whole "vibe coding" thing is another reminder that quite a lot of people working in tech don't understand the difference between programs and products. 

To me, programs are "works on my machine" code. The kind of things many of us crank out a few times every week. Experiments, prototypes... that script you hacked up to rename all the MP4 files in a folder? You know the one. No error checking. Hard-coded path names. Does it work on Windows? Who cares? I'm on Linux right now and I got work to do.

I have dozens of these kinds of programs I use every day. They're tools I use to automate bits of my work. They crash all the time ("what? Oh... that person has a backslash in the title of their presentation... interesting.") - but that doesn't matter; I fix them, I get the results I need, I move on. The code is just a means to an end. The result is what matters.

If you're writing software that you're planning to ship; to distribute to other people, perhaps even sell it to paying customers? Well, now that's a whole different ball game.

Probably the single most important lesson I've learned in my career, the thing that I would argue is the hallmark of "experience", is understanding just how much work it takes to turn a working _program_ into a viable _product_. It's why developer estimates are so notoriously optimistic - and why experienced developers are so notoriously cynical. Let's say you crank out a bit of code that'll take responses from a web form and add them in an Excel spreadsheet. That's not that hard... yay! we just built a Typeform competitor in one afternoon! Except, no, you didn't. You made one thing work one time on one computer. You haven't considered encoding, internationalization, concurrency, authentication, telemetry, billing, branding, mobile devices, deployment. You haven't hit any of the weird limits yet - ever had a system work brilliantly for the first 65,535 requests and then fall over? You don't have a product. At best, you have a proof-of-concept of a good idea that, if some very smart people work very hard, might become a viable product.

One of the genuinely positive things about tools like Copilot and ChatGPT is that they empower people with minimal development experience to create their own programs. Little programs that do useful things - and that's _awesome_. More power to the users.

But that's not product development, it's programming. They aren't the same thing. Not even close.
