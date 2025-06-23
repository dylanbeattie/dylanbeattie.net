---
title: "Dylan's Advent of Cool Nerd Things Day 22: Beyond Compare"
date: 2020-12-22T12:00:00
layout: advent2020
author: Dylan Beattie
meta:
  og_image: /images/posts/2020-12-advent/cards/2020-12-22-aocnt-beyond-compare.png
  og_description: "Beyond Compare is a powerful file comparison tool for Windows, macOS and Linux."
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2020-12-advent/
typora-root-url: .\..\..
categories:
    - advent2020
tool:
    name: Beyond Compare
    url: https://www.scootersoftware.com/index.php
    summary: "Beyond Compare is a powerful file comparison tool for Windows, macOS and Linux."
---

Today's [#nerdvent](https://dylanbeattie.net/nerdvent) entry is another one of my must-have tools, a tool that's saved me so much time over the years that it's probably paid for itself many, many times over. It's a file comparison tool called Beyond Compare, it's available on macOS, Linux and Windows, and it absolutely rocks.

Let's start with the easy stuff. You've got two text files, you want to know if they're different – and if so, how. No problem. Open them up in Beyond Compare and it'll show you exactly what's changed between them:

![image-20201222104826351](/images/posts/2020-12-advent/image-20201222104826351.png)

Beyond Compare has comparison tools and viewers for many different file formats, so you can compare images visually to highlight any differences between them - and it'll automatically scale images so your sources don't even need to be the same size:

![image-20201222111707433](/images/posts/2020-12-advent/image-20201222111707433.png)

It's got a three-way merge feature, too. For readers who haven't encountered the joys of the three-way merge, it works kinda like this... imagine you and a friend are writing a book together - a thrilling airport blockbuster. You get a first draft that you're both happy with... then a few days later, you email your friend saying "hey, I've had a brilliant idea - I've moved the story from London to Chicago"  - and they email you back going "Oh, crap... I also had a brilliant idea... the lead character isn't a professor any more, she's a helicopter pilot!"

Now you have three different versions of your story - the original **base** draft that you both started with, **your** version, with all the landmarks and street names changed from London to Chicago, and **their** version, where our protagonist is a helicopter pilot instead of a professor. The changes aren't *fundamentally* incompatible - we can quite happily end up with a story about a pilot that's set in Chicago; we just need a bit of help reconciling the changes. That's how a three-way merge works - it'll compare your changes with those made by your co-author. Any passages where **they** didn't change the text will be updated to reflect **your** changes; any passages where **you** didn't change the text will be updated to reflect **their** changes, and any passages that you've **both** edited will be shown side-by-side so you can cherry-pick the bits you want to keep and/or rewrite that passage so it makes sense.

Turns out that kind of scenario actually happens a lot in collaborative software development (although we're normally writing websites and mobile apps, rather than airport thrillers) so having a decent comparison tool that supports three-way merges is incredibly useful.

It'll compare folders as well as files, which is useful in all kinds of scenarios - particularly if you've ended up with two different versions of a project that contains hundreds of files and subfolders, and you just need to know which bits are missing from each one. You can do a "quick compare", which just looks at the file paths, dates and sizes, or you can compare files based on their contents – and even configure the comparison rules to ignore things that don't matter (like Windows vs Unix-style line endings).

![image-20201222114631853](/images/posts/2020-12-advent/image-20201222114631853.png)

Unlike a lot of the tools in my [Nerdvent](https://dylanbeattie.net/nerdvent) list, Beyond Compare isn't free – but it does have a feature that I haven't seen in any other software which I think is absolutely brilliant. When you install it, you get a 30 day free trial, but *the trial only counts days that you actually use the software*. All too often, I'll set up a 14-day free trial of something, use it for a day or two, then get sidetracked by another project; come back to it after a few weeks to continue evaluating it and... ah, no, it expired. Oh well. But the Beyond Compare 30-day free trial can last for **months** if you're not using it very often - which means you get to evaluate it based on 30 days when you actually used it. And by the time it eventually runs out, you'll probably find it much easier to justify paying the $30 (Standard) or $60 (Pro) license fee. 

Beyond Compare is available at [https://scootersoftware.com/](https://scootersoftware.com/) for Windows, macOS, and several popular Linux distributions. 

