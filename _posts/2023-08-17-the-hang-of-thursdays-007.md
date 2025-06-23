---
title: "The Hang of Thursdays #7"
date: 2023-08-17T12:00:00
layout: post
author: Dylan Beattie
meta:
  og_image: /images/posts/2023/thoth007.jpg
  og_description: "This week I'm talking about Moq, Sponsorlink and open source funding. Plus news about the next London .NET meetup, ULTRARAM, and a whole lot of crunchy deadlines."
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2023/
typora-root-url: .\..\..
---



Hey folks. So… you know the thing where you agree to do something, because it’s literally *months* away, and you’ll totally have time to get it all prepared by then — and then somehow it’s not months away any more, it’s two weeks… and it’s not one thing, it’s about five things?

Welcome to my week! I’m updating the course materials for the [workshop I’m giving at the Copenhagen Developers Festival](https://cphdevfest.com/workshops/modern-web-development-with-c-and-net/957e969dd365), all about how to build web apps with C# using all the amazing new shiny stuff that ships with .NET 7. *(Did I mention that tickets are still on sale, and as well as the workshops there’s an amazing programme of talks, shows and live entertainment?)* 

I’m also figuring out how to fit Guitaraoke on an aeroplane to take it to Denmark, preparing a new talk about how I created Guitaraoke (including a bit about how to fit it all on an aeroplane and take it to Denmark) — oh, and planning my 45th birthday party, which is not only going to be awesome, but is also going to be the public beta test of Guitaraoke: Portable Edition, including a bunch of changes to the software, which I’m going to do on *<looks at calendar>* Saturday morning, about eight hours before the show.

So, yes. Life is a little crunchy, and for some reason in the middle of all this I’m writing a newsletter to tell you all about how crunchy it is.

I may have chosen… poorly.

## Moq, Sponsorlink, and Open Source Funding

If you follow any of the .NET content on Twitter, Reddit, Github, or just about any online community with a strong .NET presence, you’ll have caught last week’s drama about Moq.


<img src="/images/posts/2023/substack-a2815a8a-b66a-4b05-b859-cb9ed0a04b59_6000x4000.jpeg" alt="A photograph of a cute otter making a funny face. She has cute little otter paws and does not want you to get angry about NuGet packages." style="zoom:80%;" />
<figcaption>If you find reading about open source makes you angry, please take a moment to contemplate this otter. Look at her little otter hands! Aaah… isn’t that better?  Photo © Ondrej Chvatal / Shutterstock.</figcaption>

Whatever you think about the specifics of this scenario, it got a lot of people talking about open source funding again — and that’s a good thing, because open source is completely broken. Companies like Meta, Google, Apple — not to mention your bank, your airline, your car, and every single app you have installed on your smartphone — use open source software. It’s a fact of modern software development. But they’re not giving anything back. These companies use open source libraries to create products that turn over hundreds of millions of dollars in revenue, and the developers who create and maintain those libraries are struggling to make ends meet.

David Whitney wrote about this way back in 2021, in his fantastic essay “[Open Source Exploitation](https://davidwhitney.co.uk/Blog/2021/12/13/open_source_exploitation)”, and he recorded a [.NET Rocks episode](https://www.youtube.com/watch?v=CYKdNphIr-k) on the same topic with Carl Franklin and Richard Campbell at NDC Oslo last year. SixLabors, the creators of the excellent ImageSharp library, have been similarly vocal — and eloquent — about [making license changes](https://sixlabors.com/posts/license-changes/) they consider necessary to create sufficient sustainable income to support the development of their product.

I’ve been involved with open source since the 1990s, and one of the most consistent tenets of open source evangelism is the principle that *if the project maintainers do something you don’t like, you can keep using the code you’ve already got.* That’s one of the key value propositions of using open source software in the first place: *it gives you control*. Nobody can take it away, nobody can stop you using it, and nobody can force you to upgrade to a version you don’t want to use.

The folks who created Moq owe you *absolutely nothing* unless you are in possession of a commercial support contract that says otherwise. It’s open source. You don’t like what they did with 4.20? Fork 4.19. Maintain that fork. It’s yours now; you can do whatever you want to with it. You need a feature? Build it. You find a bug? Fix it.

The people saying we all need to remove Moq from our code right now? How about just… don’t upgrade? Nobody’s forcing you to. If Moq 4.19 solved your problems last month, Moq 4.19 will still solve your problems this month, and next month. Besides, I’d wager good money that the people obsessing about a minor point upgrade are probably the same people who are still running .NET Framework 2.0 in production.

This is a topic I’ll come back to in a future article, but for now, I wanted to leave you with a number to think about. The creator of Moq, Daniel Cazzulino, aka [kzu](https://twitter.com/kzu), wrote a [great article in February](https://www.cazzulino.com/software-as-music.html) in which he compared open source licensing models to music subscription platforms. I thought this was an interesting idea, and I wondered what the numbers would look like.

NuGet has a page at https://www.nuget.org/stats/packages where they publish the total package downloads for the past 6 weeks. At the time of writing, Moq is the 12th most popular package on NuGet, with 19,992,598 downloads. 

Spotify pays around $0.003 per stream.[1](#footnote-1)

If NuGet paid as well as Spotify, Moq would have earned $63,576.46 in revenue in the past six weeks. That’s over $10,000 per week.

Just putting the number out there.

## London .NET September Meetup

The next London .NET meetup is going to be on September 13th, at Accurx’s office in Shoreditch.

We’ve got [Lotte Pitcher](https://twitter.com/lottepitcher?lang=en) coming along to give us an introduction to Umbraco for .NET developers. Umbraco’s the leading content management system (CMS) on the .NET platform; it’s free, it’s open source, and it’s supported by one of the most committed developer communities I’ve ever seen. Lotte’s going to give us the lowdown on all the latest Umbraco features, like headless content management and EF Core support, as well as everything a .NET developer needs to know to get started with the latest release.

Our second guest speaker is [David Whitney](https://twitter.com/david_whitney) — yes, the same one — talking about how he built a Gameboy emulator, for fun, in C#. I’ve seen a version of this talk before and I absolutely loved it: building an emulator means tackling some properly hardcore tech problems, and David’s an excellent speaker who always manages to strike a great balance between engaging storytelling and gritty technical detail.

If either or both of those sounds like your kind of thing, registration’s open now — sign up and come along!

https://www.meetup.com/london-net-user-group/events/295373351/

## ULTRARAM

So, this week I learned that (1) there’s a Flash Memory Summit in Santa Clara, (2) it has an awards ceremony, (3) one of the awards is for “Most Innovative Flash Memory Startup”, and (4) it’s just [been won by something called ULTRARAM](https://www.electronicsweekly.com/news/business/825195-2023-08/), invented at the University of Lancaster, which sounds like it could be an absolute game-changer.

We’ve always had to choose between two kinds of digital storage: volatile and non-volatile. Volatile memory — DRAM — is fast, but it’s expensive, and it only works as long as it’s drawing power. You turn off the power, anything you haven’t saved to disk is gone forever. Non-volatile memory — flash memory, SSDs, mechanical hard drives — is orders of magnitude slower, but it’s also orders of magnitude larger, and doesn’t require power to remember what’s stored on it. ULTRARAM sounds like the best of both worlds: high-capacity, non-volatile memory that’s as fast as DRAM.

It’s early days yet, but if it turns out to be viable, ULTRARAM would mean we could build devices that drew literally[2](#footnote-2) zero power while they were in sleep mode, and woke up instantly when you pressed a key or moved the mouse.

Their official site is at [ultraram.tech](https://ultraram.tech/), and Dave James has a good [write-up over at pcgamer.com](https://www.pcgamer.com/ultraram-may-be-a-silly-name-but-its-the-holy-grail-for-memory-tech-and-means-your-pc-could-hibernate-for-over-1000-years/).

## This week I’ve been…

**Reading**: “[The Calculating Stars](https://maryrobinettekowal.com/writing/the-calculating-stars/)” by Mary Robinette Kowal. There’s something wonderful about finishing a book by an author you’ve not read before, and that you thoroughly enjoyed, and then discovering there’s *all this other stuff they wrote* — and so, after finishing “The Spare Man”, I’m working through her back catalogue. “The Calculating Stars” is the story of Dr. Elma York’s endeavours to become the first woman in space, set against an immaculately realised alternative history of the United States of America in the mid-20th century.

**Listening to:** “[Drive](https://open.spotify.com/album/5VPHis9kklY9G0JbggEHtq)” by The Defiants, featuring current and former members of Danger Danger. “Drive” is apparently their third album — I honestly had no idea they existed until a review popped up in one of my social media feeds earlier this week, so I looked them up on Spotify, and I’ve had this album on repeat ever since. It’s not challenging, it’s not progressive, it’s not revolutionary — it’s just a big fat slab of very good, very slick, 80s-inspired melodic hard rock, and in a few places Paul Laine’s vocal sounds uncannily reminiscent of Jon Bon Jovi circa “New Jersey”.

**Watching:** Nothing. Seriously. Which is a little weird… when I decided to include a weekly rundown of my media habits, I honestly didn’t think there would be weeks when I watched literally zero minutes of film or TV, but here we are; there’s not been a whole lot of downtime this week and what little I’ve had has been spent reading books and playing guitar. Mind you, last year when I had COVID I watched the whole of Stranger Things in a week — I binged season 1 on Monday, season 2 on Tuesday, and so on, because I wanted to know why everybody was going on about “Master of Puppets” — so I guess it all averages out in the end.

And that’s a wrap. Have fun, take it easy, be excellent to each other (yes, *especially* when talking about open source on Reddit), and catch you next week.

*Dylan*

[1](#footnote-anchor-1)

According to [producerhive.com](https://producerhive.com/music-marketing-tips/streaming-royalties-breakdown/), Deezer pays $0.0011, Apple pays $0.008 and Tidal pays a whopping 1.28 cents per stream.

[2](#footnote-anchor-2)

Yes, literally, as in *literally* literally.
