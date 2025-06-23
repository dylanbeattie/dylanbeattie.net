---
title: Solving Advent of Code in Amstrad LOGO
date: 2020-12-14T12:00:00
layout: post
author: Dylan Beattie
meta:
  og_image: /images/posts/2020-12-14-solving-advent-of-code-in-amstrad-logo.png
  og_description: Can DR LOGO running on an emulated Amstrad with 128kb of RAM solve Advent of Code 2020 day 12? Let's find out...
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2020-12-14-solving-advent-of-code-in-amstrad-logo/
typora-root-url: .\..\..
---
[Advent of Code](https://adventofcode.com/) is an "Advent calendar of small programming puzzles"; every year, the creators come up with a set of 25 programming puzzles and release them each day from the 1st to the 25th of December. This year, I resolved to do Advent of Code every day, and to do it live on Twitch – most days I'm streaming at 16:00 UTC for an hour or two, so [feel free to stop by](https://twitch.tv/dylanbeattie)! It's been a lot of fun, and so far I've managed to solve both parts of every day's puzzle live on the stream; I think the longest time to solve so far is nearly 2.5 hours for the [nested luggage problem on day 7](https://adventofcode.com/2020/day/7).

On [day 12, "Rain Risk", the puzzle was about navigating a ship](https://adventofcode.com/2020/day/12) – and the puzzle input was provided as a set of commands that looked a little reminiscent of the first programming language I ever used: [LOGO](https://en.wikipedia.org/wiki/Logo_(programming_language)). My first computer was an [Amstrad CPC6128](https://en.wikipedia.org/wiki/Amstrad_CPC), and as kid I'd sit there for hours using LOGO to draw shapes and build little quiz games. When I created my talk "[The Art of Code](https://www.youtube.com/watch?v=6avJHaC3C2U)" last year, I wanted the intro sequence to reflect that, so I found an Amstrad CPC emulator (the extremely brilliant [WinAPE](http://www.winape.net/)), worked out how to boot LOGO on it, and how to edit LOGO programs and instructions in a proper editor on the host PC and then use WinAPE's auto-typing feature to replay those instructions into the LOGO interpreter.

(As an aside, WinAPE is so detailed that it not only plays sampled audio of the 3" disk drive used on the Amstrad CPC6128 when you're reading and writing files, it plays it through the right stereo channel because on the CPC the disk drive was on the right... the attention to detail that's gone into this thing is just unbelievable.)

So when I looked at yesterday's Advent of Code puzzle, my first thought was "hey... maybe I could solve this one using Amstrad LOGO". 

Want to know if it worked? Check out the YouTube video of the stream.

<iframe width="560" height="315" src="https://www.youtube.com/embed/sAzRc78TK0M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you want to catch the rest of Advent of Code *live*, I'm on [twitch.tv/dylanbeattie](https://www.twitch.tv/dylanbeattie) most days at 16:00 UTC – why not stop by and say hello?
