---
title: "The Hang of Thursdays #4"
layout: post
author: Dylan Beattie
meta:
  og_image: /images/posts/2023/thoth004.jpg
  og_description: "A special THOTH from We Are Developers World Congress in Berlin"
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2023/
typora-root-url: .\..\..
---

*Grüße aus Berlin!* I’m in town for the WeAreDevelopers World Congress (WADWC), so this week’s newsletter is all about what’s happening, who’s here, and what they’re talking about. And, yes, it’s Friday. I know. Relax. It’s fine.

This event is *huge* — somebody at the speaker dinner last night said there were 12,000 people here, and having been on site for two days, I can easily believe it. Fifteen stages, hundreds of speakers and sessions, two expo halls; it’s so big it fills both buildings of the Berlin Messe convention centre, and outside in the plaza area between the building there are more stages, food trucks and a few exhibitor stands. It’s absolutely colossal, and I can’t hope to do more than scratch the surface… but here are the bits I did manage to see.

## Tim Berners-Lee and the Future of the Open Web

The big name on this year’s programme at WADWC is Sir Tim Berners-Lee, inventor of the World Wide Web, whose opening keynote was an engaging riff on the history and future of the open web. Tim’s main research project for the past few years has been [SOLID](https://solidproject.org/), an initiative to add authentication, identity management and standardised data APIs to the web, and he talked about the challenges of decentralising identity, the problems with the data silos that have emerged post web-2.0 — “If you want to share a LinkedIn post with your Twitter followers, you can’t; you have to create a Twitter account to do that” — and the kinds of apps that we could build on top of decentralised identity and authentication.

![img](/images/posts/2023/substack-f358a4e3-28b6-42eb-a6de-ccd41e123919_4032x3024.jpeg)

He also talked about AI, which is very much a recurring theme at WADWC this year, and in particular the idea that we should have access to AIs that work for us — “the way your doctor works for you, or your lawyer works for you; they have access to your private data, and you trust them not to share it.”

The keynote was followed by a “fireside chat” session with Tim and [Sead Ahmetovic](https://www.linkedin.com/in/seadahmetovic/?originalSubdomain=de), the CEO of WeAreDevelopers, about the web, AI, and the career challenges which developers face in 2023. A couple of quotes really stood out for me. On whether he’d do anything differently if he was creating the web over again, Tim said:

> “I used the domain name system, and at the time it was managed by people like Jon Postel, and managed in a very responsible way; it wasn't just a fighting ground for investors. So maybe that was a mistake, or maybe it's something we can fix.” 

I love DNS, and I think it’s a fantastic system that works incredibly well; I’ve always thought the design of DNS was one of the key factors behind the success of the web, so it was interesting to hear that the creator of the web thinks DNS was a weak point.

On whether developers should generalise or specialise: 

> “From the point of view of running open source projects, as the CTO of a company that needs talent: it's good that there's a variety of talent. We need generalists, we need specialists, we need T-shaped people, or pi-shaped people, where you've got two deep specialities.”

That’s the first time I’d ever heard the phrase “pi-shaped”, and I think it’s delightful.

The quote that stuck with me the most, though, was when he was asked about social and ethical responsibility:

> “I suppose... one way to think about it is when you write your line of code, when you write a function: work local, but think global. Code it as though you are creating part of a huge, wonderful, very powerful system, that people are using to build effective democracy, effective science, to allow society to function much better than it does.”

I loved that.

## John Romero on Creating Doom

The afternoon keynote speaker was John Romero, sharing the story of how Id Software created Doom in 12 months.

It’s no exaggeration to say that Doom revolutionised computer gaming. It introduced the world to multiplayer network gaming. It pioneered the free-to-play model by making episode 1 a free download, back in the days of dial-up bulletin board systems. The 3D engine was more sophisticated than anything we’d ever seen before, the music still triggers pangs of nostalgia in an entire generation of gamers — and the word “deathmatch” was created to describe Doom’s competitive multiplayer mode.

![John Romero on stage, in front of a slide showing DOOM: 30 Years of RIP and TEAR. John wears a red and white floral shirt, black jeans, New Rock boots. He looks fabulous. ](/images/posts/2023/substack-2d165add-9f94-4adf-8c57-196f9ca92492_4032x3024.jpeg)

John Romero at WeAreDevelopers World Congress 2023

I’ve geeked out over the history of Id Software before; my talk “[The Web That Never Was](https://www.youtube.com/watch?v=9CSjlZeqKOc)” even has a whole alternate-history riff on what might have happened if the two Johns had been hired by Nintendo after they ported Super Mario to the IBM PC. Even so, I learned a few things watching John’s talk that I’d never heard of before, like the story of John Carmack walking through the snow to the bank to withdraw $11,000 in cash, so he could pay cash-on-delivery for his new NeXT workstation. 

John also revealed that 20th Century Fox offered Id the “Aliens” licence — cue a few astonished gasps from the audience — “but it only had aliens; there weren’t any demons. We talked about it for, like, half an hour, and decided no”.[1](#footnote-1) We also learned that Carmack’s decision to use BSP trees as the game’s main data structure came after a sunken octagonal staircase caused a recursion bug that slowed gameplay down to a crawl and sent Carmack digging through computer science papers looking for a solution.

## Other Highlights

I caught [Gift Egwuenu](https://www.thegiftcode.dev)’s session “Going Beyond Passwords: The Future of User Authentication”, which was a great overview of the history of password-based security, what’s wrong with it, and the current state of authentication — single sign-on, multifactor auth systems, and how security standards like FIDO fit into your system’s authentication flow. I “met” Gift at a Zoom workshop I ran back in 2020, when we were all doing everything online; she’s been doing all sorts of awesome things, so it was great to finally meet her in person.

Stack Overflow has a huge presence here. They sponsored the speaker dinner/reception event on Wednesday night, and they’re taking advantage of WADWC to announce a whole load of new features — basically their vision for incorporating generative AI into the Stack Overflow platform. I must say that Prashanth Chandrasekar’s product announcement session didn’t really grab me, but then later Prashanth returned to the stage alongside Joel Spolsky (you know, Joel on Software, founder of Stack Overflow, FogBuz, CityDesk, etc.) and Sead Ahmetovic for a Q&A session about the past and future of Stack Overflow. One comment that stood out for me was Joel talking about embracing the idea of Google as a user interface:

> “When we built Stack Overflow, we knew that Google was going to be the UI. We weren’t expecting people to come to Stack Overflow; we expected them to Google their problem and find the answer on Stack Overflow. Now, ChatGPT, and to a lesser extent Copilot, have become the frontend to Stack Overflow’s knowledge base. You don’t just get the answer, you get the answer modified to suit your codebase, ready to copy and paste into your solution, and I think that’s great; it makes life so much easier for developers.”

They talked a great deal about trust as well. Prashanth shared the statistic that, according to the most recent Stack Overflow developer survey, “70% of developers want to use AI tools, but only 40% of them trust AI”. He discussed the work they’ve been doing to close that gap, particularly with regard to sources and citations so a developer can find out exactly where the AI found the solution to a particular problem.

Personally, I’m optimistic about it all. Code reuse is clearly a good idea. Prashanth used the example of parsing phone numbers, which I thought was great: as a user, it sucks using platforms that keep rejecting your phone number as invalid, but it also doesn’t make sense for every dev team out there to build their own algorithm for parsing and validating phone numbers. We’ve had healthy package management ecosystems for long enough now to have a pretty good idea of what they can do, and there’s clearly still a whole class of problems out there that we don’t want to solve from scratch every time, but that don’t really lend themselves to importing a package or standard library.

The challenge, of course, is that AI is easily capable of producing an infinite amount of crap, and if we train the next generation of language models on the SEO clickbait produced by the previous generation, we’re in a race to the bottom in terms of quality. We’ll see how we go.

## Rocking in the rain

And then there’s my bit — two live sets of developer comedy rock’n’roll. I was playing on the Airstream Stage, a converted Airstream trailer outside next the food trucks and beer tents… which was absolutely fantastic until it started raining about an hour before I was due to go on… but you know what? I’m British. I’ve survived dozens of English summers and five Glastonbury Festivals,  and it takes more than a bit of rain to stop the show. 

![A handwritten set list next to a Zoom G1on guitar pedal. Both are soaked with rain.](/images/posts/2023/substack-37fd5b25-2f4d-47f4-8633-6cb912855bc8_4032x3024.jpeg)

I think I figured out where “Wet Wet Wet” got their name.

Thankfully, the audience agreed. Somebody even came up to me afterwards and said “you got our lead developer to sing along — we didn’t think we’d ever see that!”

![img](/images/posts/2023/substack-05fe871a-cd94-4950-847f-e7fb9e992485_2048x1536.jpeg)

On stage with Hila Fish and Keren Kenzi at WeAreDevelopers World Congress

Huge thanks to everybody who came along — and especially to [Hila Fish](https://twitter.com/Hilafish1) and [Keren Kenzi](https://twitter.com/KerenKenzi) for some outstanding (and unrehearsed!) guest vocal performances. And a shout out to [Framework](https://frame.work/at/en), whose 13” laptop turns out to be mostly showerproof as well as fast, light, modular and generally awesome. 

And that was that, apart from a few well-earned beers and the obligatory post-gig currywurst and Fritz-kola.

Time to grab lunch, say hello and goodbye to a few people, and head to the airport.

Catch you next time.

*Dylan*





 

  













[1](#footnote-anchor-1)

 A few years later, the “[Alien Quake](https://www.moddb.com/mods/alien-quake)” community mod turned the Quake engine into aliens vs space marines, and did a much better job than the official Alien vs Predator game.