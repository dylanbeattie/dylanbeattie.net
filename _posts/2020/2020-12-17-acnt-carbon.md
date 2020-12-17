---
title: "Dylan's Advent of Cool Nerd Things Day 17: Carbon"
layout: advent2020
author: Dylan Beattie
meta:
  og_image: /images/posts/2020-12-advent/cards/2020-12-17-aocnt-carbon.png
  og_description: "Carbon creates beautiful images of source code"
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2020-12-advent/
typora-root-url: .\..\..
categories:
    - advent2020
tool:
    name: Carbon
    url: https://carbon.now.sh/
    summary: Carbon creates beautiful images of source code.
---

Source code is weird stuff. On one hand, it's just regular text with a whole lot of weird punctuation. On the other hand, it's indistinguishable from magic – arcane spells and incantations that we use to control the lightning that we trapped inside the rocks, solving hundreds of millions of calculations in a heartbeat, sending images and sounds and ideas flying around the world...

Code is hard to read. Any experienced developer will relate to the experience of opening up a file you've not seen before and staring at it blankly, trying to figure out what's going on... why does a function called `JoinStrings` return an integer? What on earth does the `HelperManagerFactory` do? Why doesn't `Array.map` return a `Map`?

Alas, we haven't yet invented something that makes code readable... but today's [#Nerdvent](/nerdvent) tool can at least make it look good. It's a website called [Carbon](https://carbon.now.sh/), which I found thanks to [Kevlin Henney](https://twitter.com/KevlinHenney), which lets you *"create and share beautiful images of your source code."* And I mean, this thing is stunning. Just lovely. Here's part of my [solution to Advent of Code day 15](https://dylanbeattie.github.io/advent-of-code-2020/day15/index.html), using the [SynthWave](https://en.wikipedia.org/wiki/Synthwave) '84 theme and the [Fira Code font we saw the other day](https://dylanbeattie.net/advent2020/2020/12/10/aocnt-fira-code.html):

![carbon-advent-of-code-in-js](/images/posts/2020-12-advent/carbon-advent-of-code-in-js.png)

Isn't that glorious? You can almost smell the rain sizzling on the neon lights...

Here's Duff's Device, with the Blackboard theme and the JetBrains Mono font:

![carbon-duffs-device](/images/posts/2020-12-advent/carbon-duffs-device.png)

Carbon will export your code images as PNG or SVG files, which is great for making presentation slides - but if you want to embed them online, there's an IFRAME option as well, which gives you beautifully highlighted code that your readers can still copy & paste:

<iframe   src="https://carbon.now.sh/embed/fzhYhqgR9mwHIuzRYHS7"   style="width: 680px; height: 362px; border:0; transform: scale(1); overflow:hidden;"   sandbox="allow-scripts allow-same-origin"> </iframe>

Carbon is over at [https://carbon.now.sh/](https://carbon.now.sh/) - check it out, give them a shout out on Twitter [@carbon_app](https://twitter.com/carbon_app), and have fun!