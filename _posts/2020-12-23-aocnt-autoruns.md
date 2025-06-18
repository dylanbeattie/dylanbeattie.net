---
title: "Dylan's Advent of Cool Nerd Things Day 23: Autoruns"
layout: advent2020
author: Dylan Beattie
meta:
  og_image: /images/posts/2020-12-advent/cards/2020-12-23-aocnt-autoruns.png
  og_description: "Autoruns shows you every program, driver, and process that's configured to run when you start Windows."
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2020-12-advent/
typora-root-url: .\..\..
categories:
    - advent2020
tool:
    name: Autoruns
    url: https://docs.microsoft.com/en-gb/sysinternals/downloads/autoruns
    summary: "Autoruns shows you every program, driver, and process that's configured to run when you start Windows."
---

I've been using Microsoft Windows since [version 2.1](https://en.wikipedia.org/wiki/Windows_2.1x), and one of the things that has held true of almost every version of Windows I've ever run is that they get slower. A fresh installation of Windows is a joy - snappy, responsive, all those lovely acres of empty hard drive space... and then after a year or so, it's just not so snappy any more. I'm sure it's partly psychological, and I'm sure some of it is also related to security patches and essential updates (hey, it's easy to go fast when you don't care about data security) – but a large part of it is to do with clutter. Clutter is the stuff you don't know you've got. The operating system equivalent of the drawer in your kitchen that was empty when you moved in, and now somehow it's full even though you never really decided what to put in it, or that pile of dead biros and scratched CDs that lives in the glovebox of your car. 

In most modern operating systems, including Windows, desktop search has got so good that cleaning up is easy. Just shove everything in a folder called Clutter (yes, really), and get on with your life. It's out of sight, out of mind, and if you need it again, just search for it. But there's some stuff that isn't quite so easy to clean up.

Often, when you install an application or utility, it'll configure something to run automatically when Windows starts. Sometimes, this is a good thing - I have apps like [Discord](https://discord.com/) and [Dropbox](https://www.dropbox.com/) that run automatically when I start Windows, because it makes sense for them to be running all the time. They sit in the background and do useful work. Sometimes, it's not. You'd be astonished how many applications and devices install a program whose job is just to run in the background all the time, that serve no purpose at all other than occasionally pinging the company's website to see if there's a new version available. Then there are the drivers for devices you don't use any more; the utilities that insist they want to run at startup even though you're quite happy to start them yourself when you want to use them, and the various extensions that add features to things like the Windows Explorer right-click menu.

Well, it's time to get [Marie Kondo](https://www.vox.com/culture/2019/1/11/18175683/marie-kondo-tidying-up-netflix-life-changing-magic-konmari-explained) on your Windows install, and to do that, we're going to use a tool called Autoruns. Autoruns is part of the [SysInternals suite](https://docs.microsoft.com/en-gb/sysinternals/), an astonishingly powerful set of free tools for managing Windows computers. SysInternals was founded by [Mark Russinovich](https://en.wikipedia.org/wiki/Mark_Russinovich), who also wrote most of the tools in the suite. Mark is now the CTO of Microsoft Azure, and the SysInternals suite has been maintained and distributed by Microsoft since they acquired the company in 2006.

SysInternals is absolutely packed with goodies, but let's take a look at Autoruns first. When you fire it up, you'll get a surprisingly long list of things:

![image-20201223110409808](/images/posts/2020-12-advent/image-20201223110409808.png)

Windows has a lot of different mechanisms for running things automatically, and each "group" here reflects one of those mechanisms - registry keys, system folders, scheduled tasks, and so on. I fire up Autoruns every month or so to see what new delights have been added to my system by over-enthusiastic installers. There's normally a few that I obviously don't need, and one or two I need to take a closer look at to work out what they actually are. What's really useful here is that using the checkbox alongside each entry, you can disable it without deleting it. Untick the boxes you think you don't need, restart your computer, see how you go. If you suddenly realise one of them was actually something really important, no problem - fire up Autoruns again, check the box to switch it back on, and reboot. 

You can download the whole SysInternals suite, including Autoruns, from [https://docs.microsoft.com/en-gb/sysinternals/](https://docs.microsoft.com/en-gb/sysinternals/) - but if you don't want (or aren't allowed) to install anything, the entire suite is available as standalone portable EXEs at [https://live.sysinternals.com/](https://live.sysinternals.com/) - grab the tool you want, save it to the desktop, run it, then delete it when you're done. 

Oh, and if you want to know what the CTO of Microsoft Azure does for fun... there's a VM configuration in Azure with 420 CPUs and 24Tb of RAM, and a few weeks back Mark wrote a program for it that will max out individual CPU cores in turn so the CPU load meter display plays a game of Tetris:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Achievement unlocked: playing Tetris on Task Manager on the Azure 24TB Mega Godzilla Beast VM: <a href="https://t.co/4ntTsRqHEi">pic.twitter.com/4ntTsRqHEi</a></p>&mdash; Mark Russinovich (@markrussinovich) <a href="https://twitter.com/markrussinovich/status/1335651115958894593?ref_src=twsrc%5Etfw">December 6, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Absolute legend. I bet the CTOs of AWS and Google Cloud never do anything this cool. 😎