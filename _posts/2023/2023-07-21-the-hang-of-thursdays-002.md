---
title: "The Hang of Thursdays #2"
layout: post
author: Dylan Beattie
meta:
  og_image: /images/posts/2023/thoth003.jpg
  og_description: "This week we're talking MVP renewals, London .NET, taking Guitaraoke to Denmark, rejected GitHub profile achievements, and social media going into meltdown."
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2023/
typora-root-url: .\..\..
---

## The MVP Renewal Cycle #mvpbuzz

This week my networks have been buzzing with people sharing the news that they’d been renewed as a Microsoft MVP. MVPs — “Most Valuable Professionals” — are “technology experts who passionately share their knowledge with the community”. People who work with Microsoft technology and who run meetups, speak at conferences, write books, write blogs, maintain open source projects; activities which aren’t really your *job*, but which benefit the wider community.

Microsoft aren’t the only company that does this; I know a few Google Developer Experts and Java Champions, and I even met a Docker Captain once. I know there are some mixed feelings about these kinds of programmes in general, and the Microsoft MVP programme in particular — usually sentiments along the lines of “wow, you did all this free marketing for a trillion-dollar company and they sent you a certificate!”

But, whatever you think about Microsoft, corporations, and these kinds of programmes, just about every Microsoft MVP I’ve ever met has been a thoroughly excellent person, and that alone makes it a programme I’m proud to be part of.

So **congratulations** to all the Microsoft MVPs out there who got renewed, and particular congratulations to everybody who’s just been awarded for the first time. For me, this will be my seventh award, but I can still remember vividly what it felt like when I got my first MVP award: I was absolutely delighted*.* Recognition is a big deal.

## London .NET Meetup with Angeliki Patsiavou and Nick Chapsas

Thanks to everybody who came along to our [London .NET User Group](https://www.meetup.com/london-net-user-group/) meetup last night — and especially to our hosts [Codat](https://www.codat.io/) for providing the venue, drinks, pizzas and snacks. 

Our first speaker was [Angeliki Patsiavou](https://twitter.com/a_patsiavou?lang=en-GB), who presented a brand new talk about building and enabling cross-functional teams inspired by “The Avengers”, packed with insight and humour — not to mention one of the best slide decks I’ve seen in a while.

![img](/images/posts/2023/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff225516e-5b2d-4a2d-9cc1-b97af6d3aa15_6000x3368.jpeg)![img](/images/posts/2023/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2a1d8c87-8f43-4a14-b1b4-919b365eea4b_6000x3368.jpeg)

![img](/images/posts/2023/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc0fcfc97-9944-40f6-ae23-7d89988681c5_6000x3368.jpeg)![img](/images/posts/2023/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1600c0ea-8fd3-4dcf-8965-7d9078139f13_6000x3368.jpeg)

London .NET meetup at Codat, July 12 2023

Next up was [Nick Chapsas](https://www.youtube.com/@nickchapsas), with a great talk which was ostensibly about logging in .NET, but actually took us on a deep dive into the gritty internals of how strings are managed by the .NET runtime and how something as seemingly innocuous as formatting your log messages can actually have a big impact on your application’s performance and memory consumption.

For all the folks asking “did you record it?” — not this time, sorry! (although there’s a version of Nick’s talk from NDC Oslo [available on YouTube](https://www.youtube.com/watch?v=NlBjVJPkT6M).)

There’s good news on that front, though. LDNUG is taking a break in August, but when we come back in September, we’re planning to video all the talks from our meetups and share them online, so those of you who weren’t able to join us in person can catch up afterwards.

## Rejected GitHub Profile Achievements

[Flet](https://github.com/Flet) has created this [list of rejected GitHub Profile Achievements](https://github.com/Flet/rejected-github-profile-achievements), which made me laugh out loud. I’ve definitely earned a few Procrastinators, two Secret Santas that I’m aware of, and at least one Sith Lord from the days when my team was switching from Subversion to git — but I think my most interesting achievement would have been a Tee Hee. Many years ago, I had a web project that I was working on using both Windows and macOS, and I thought it’d be a good idea to share the project folder from macOS via SMB and then map a Windows drive to it. 

Turns out that if you clone a Git repo on macOS and then push it on Windows, you mess up every single line ending in the entire project. 

So… yeah, don’t do that.

Flet’s list is at https://github.com/Flet/rejected-github-profile-achievements if you fancy a laugh. 😁

You know what would be awesome? Getting enough subscribers on here that I could justify deleting all my other social media accounts. Yeah. That would rule.

## Guitar Karaoke at the Copenhagen Developers Festival

At the end of August, I’ll be heading to Denmark along with a lot of other familiar faces from the conference circuit to speak (and play, and sing, and generally be Loud and Extroverted) at the [Copenhagen Developers Festival](https://cphdevfest.com/), a new event from the folks behind NDC Conferences, which combines technical tracks during the day with live music, karaoke, science, gaming, and other fun stuff in the evenings.

I’m going to be sharing the story of how I created [Guitaraoke](https://guitaraoke.live/) — so between now and August, I need to figure out how to virtualise a bunch of the hardware I’ve been using to run it.

One big part of that is replacing paper sign-up sheets with a web app, which I’m working on this week and streaming live at [twitch.tv/dylanbeattie](https://www.twitch.tv/videos/1869840548). Like all the best software development, the stream so far is about 50% actually adding features, and 50% going “but why is that test failing? *why!?!*?”

I’ll be running the new app for real at the next Guitaraoke night, which is this Saturday 15th July, at [Ignition Brewery](https://ignition.beer/) in south-east London. After all, beta testing is best done live, in a brewery, with a guitar in one hand, a beer in the other, and room full of drunk people cheering you on.

![A neon sign reads "Ignition Open"; three musicians are playing and singing underneath a projector screen showing the song lyrics and chords. Everybody is very sweaty and there's cables and guitars everywhere. It looks like fun.](/images/posts/2023/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc0ea2539-712f-43f4-af0a-f477683550db_6000x4000.jpeg)

Guitaraoke at Ignition Brewery in London, 20 May 2023

### Modern Web Development with C# and .NET

I’m also going to be running a two-day workshop in Copenhagen on modern web development with ASP.NET Core. The web is wonderful, .NET rocks, and… well, I don’t like JavaScript frameworks.[1](#footnote-1) So I’m going to be showing folks how to build a website entirely in .NET, from frontend features like TagHelpers and SASS compilers, to minimal APIs and controllers, to some of the things .NET doesn’t really do well out of the box — email, timezones, y’know. Nice straightforward easy stuff.

Check out the workshop here: [**Modern Web Development with C# and .NET**](https://cphdevfest.com/workshops/modern-web-development-with-c-and-net/957e969dd365)

And if you want to know more about how I prepare these kinds of workshops, you might find [this post interesting](https://substack.dylanbeattie.net/p/structuring-workshops).

## **“Prompts are unsafe, and that means language models are not fit for purpose”**

I really liked [this article by **Baldur Bjarnason**](https://softwarecrisis.dev/letters/prompts-are-not-fit-for-purpose) on the challenges of avoiding injection-style attacks when using large language models like ChatGPT. We’ve known about [SQL injection attacks](https://owasp.org/www-community/attacks/SQL_Injection) for literally decades; avoiding them is trivial, but they’re still one of the most common vulnerabilities seen in the wild. Securing language models against “jailbreaking” is orders of magnitude more complex than avoiding SQL injection attacks; Baldur’s basically saying we have no idea how to do this so we shouldn’t be integrating language models with external services or exposing them to external users. Interesting and unsettling in equal measure.

## Threads, Twitter, and the Collapse of Social Media

It’s been an entertainingly chaotic few weeks in the wonderful world of social media. My [thoughts on the whole thing are here](https://substack.dylanbeattie.net/p/the-social-meltdown); I also enjoyed Alex Kirshner’s “[Meta’s New Threads App is Terrible. It Might Just Bury Twitter](https://slate.com/technology/2023/07/threads-app-meta-review-twitter-musk-facebook-winner.html)” on Slate.com, but only time will tell whether this is the beginning of the end for social media, or just the end of the beginning.

## This week I’ve been…

**Reading**: “[Code That Fits in Your Head](https://www.oreilly.com/library/view/code-that-fits/9780137464302/)” by Mark Seemann. I’ve met Mark at a few conferences over the years, I find the way he talks about software complexity really refreshing, and the book is no exception: a step-by-step, case-by-case walkthrough of building a restaurant reservation system. My personal highlight so far is what Mark calls the [Devil’s Advocate](https://blog.ploeh.dk/2019/10/07/devils-advocate/) technique: given a perfectly reasonable-looking unit test, what’s the weirdest, most off-the-wall code you can write to make the test pass — and then how can you improve the test so that it catches those loopholes and edge cases?

**Watching:** [South Park, season 25](https://en.wikipedia.org/wiki/South_Park_(season_25)). I signed to Paramount+ to watch Star Trek: Strange New Worlds, which is *excellent* — and then found every season of South Park is also on there and I had a bit of catching up to do. I’ve been a fan of South Park since watching season 1 on RealPlayer 25 years ago, and it still makes me laugh until milk comes out of my nose.

(*On a South Park-related note, the show’s creators, Trey Parker and Matt Stone, have recently* [*spent literally millions of dollars*](https://www.nytimes.com/2023/06/06/us/casa-bonita-restaurant.html) *refurbishing and reopening* La Casa Bonita*, the Colorado restaurant where they spent their childhood birthdays — complete with waterfalls, cliff divers, puppets, and a “person in a gorilla costume being chased by a sheriff”. I think that all sounds rather lovely.*)

**Listening to:** Iron Maiden, live at the O2 here in London last Friday. A fantastic live show by a band who show absolutely no signs of slowing down; triple guitar harmonies, thundering backline, and Bruce Dickinson happy bouncing between joking with the crowd, belting out those high notes like an air-raid siren, and exchanging pyrotechnic laser fire with Eddie, Maiden’s monstrous zombie mascot who would occasionally prowl the stage in the form of a giant 12’ puppet. 

Shout out to opening act [Lord of the Lost](https://www.youtube.com/channel/UCKmi2SZRPoCqXA01qtzIqrw) as well; as somebody who remembers the Eurovision Song Contest being the least credible thing *imaginable*, I find it wonderfully weird that an industrial goth rock band (!) can represent Germany in Eurovision (!!), finish last (!!!) — and then open for Iron Maiden at the O2 in front of over ten thousand people less than two months later. But we do, and they did, and it was very good indeed.

And that’s the week, folks. Take it easy, stay safe, and be excellent to each other.

*Dylan*

[1](#footnote-anchor-1) Apparently “server-side React” is a real thing that people do now. Just… wow.