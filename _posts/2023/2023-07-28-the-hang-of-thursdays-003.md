---
title: "The Hang of Thursdays #3"
layout: post
author: Dylan Beattie
meta:
  og_image: /images/posts/2023/thoth003.jpg
  og_description: "Streaming code, We Are Developers World Congress, the Post Office Horizon scandal back in the news, the law of abstractions, and the return of The (Other) Man in the (Other) Hat"
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2023/
typora-root-url: .\..\..
---

## Coding Streams on Twitch and YouTube

I spent a substantial chunk of last week building a web app for running guitar karaoke nights. I streamed the whole thing live[1](#footnote-1), which means if you really want to, you can watch almost the entire development of the app on video — all [19 hours and 31 minutes of it](https://www.youtube.com/playlist?list=PLw0jj21rhfkOZ2qu5zREX4xTQC0NoKbUe). (And for the record: I ran it on Saturday night, and it worked flawlessly. There were a few features I’ll add for next time, and I definitely need to add some kind of security to make sure we don’t get internet weirdos signing up and messing with the stats,  but it worked. Which is nice.)

I really enjoy those kind of live-streaming coding sessions. It’s fun, I enjoy the folks asking questions in chat, but I also find that knowing there’s even a handful of people out there watching what I’m doing really helps my focus. 

I’d like to do a lot more streaming, but averaged over, say, a year, I probably only spend about 30% of my working time actually writing code — and at least half of that is stuff I’d never stream because it’s full of customer API keys and other stuff I don’t want going anywhere near a Twitch stream.

I do a lot of other stuff that might work well on a stream, though. Designing stickers in Illustrator; preparing workshop material and demos, making PowerPoint decks; I figure maybe some folks out there might like to see how it all comes together, so keep an eye on my [Twitch](https://www.twitch.tv/dylanbeattie) or [YouTube](https://www.youtube.com/dylanbeattie) channels if you’re interested.

When I hit a thousand subscribers, I’ll release a new version of Rockstar. Go on. Sign up. Make me regret saying that.

## “Is this React or Nuxt?”

Among the many fascinating questions that viewers shared in the chat during last week’s live stream, one the really stuck with me was somebody who dropped in while I was [adding some client-side JavaScript](https://github.com/guitaraoke/app.guitaraoke.live/blob/main/GuitaraokeWebApp/wwwroot/js/script.js) to handle a few specific interaction scenarios, and asked “is this React or Nuxt”?

I often wonder if there’s a generation of developers out there now who have been so immersed in frameworks and abstractions for their entire careers that they literally don’t grok what JavaScript actually is. Then I wonder if there was a generation of machine code programmers who felt the same way about those young whippersnappers with their assembly languages, and then a generation of assembly hackers who didn’t trust C compilers, and C programmers who didn’t trust Java, and that maybe that’s just the way the world works. I suspect that [Spolsky’s Law of Leaky Abstractions](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/) remains as relevant now as it was 20 years ago. You want to do React or Nuxt? Cool — but you probably need to know enough JavaScript to understand what’s happening when the abstractions break down.

On the other hand, I watched [Ben Smith](https://twitter.com/binjimint)’s [presentation at Joy of Coding](https://joyofcoding.org/speakers/ben-smith.html) in Rotterdam last month. Ben codes demos, in web assembly, by hand: less than 2 kilobytes of hand-coded instructions that’ll run a [maze race game](https://binji.github.io/posts/raw-wasm-making-a-maze-race-part-2/) right in your web browser, without a framework or compiler in sight. Yep, turns out that hand-coded assembly is alive and well right here in 2023. Pointless? Maybe. But sometimes, the point of a good demo is to remind you that not everything needs to have a point.

## We Are Developers World Congress in Berlin

July was supposed to be downtime. No conferences, no gigs, no travel, just a nice quiet month at home — catch up with friends, work on some new talks, workshops, write a couple of songs… you know the bit in the agile manifesto where it talks about “responding to change over following a plan?”

![A "speaker card" from We Are Developers World Congress, advertising Dylan Beattie Live: Specs, Bugs 'n' Rock'n'Roll. 27-28 July, Berlin CityCube. Also a grinning picture of me before I had any grey in my beard. I gotta get some new pictures, you know.](/images/posts/2023/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9b9c3d6a-3eac-453e-9585-6f8bb4976eec_1280x720.jpeg)

Yep, next week I’m off to Berlin to do my developer comedy rock music thing at We Are Developers World Congress. This event is *huge* — not only in terms of attendance, but it’s also the first time I’ve been on a conference bill alongside names like Tim Berners-Lee, John Romero, and Joel Spolsky. Y’know, the guys who invented (or co-invented) the web, the first person shooter, and Stack Overflow, respectively. Plus a whole bunch of other amazing speakers — and did I mention it’s in Berlin, one of the coolest cities in the world? Tickets [are on sale now](https://www.wearedevelopers.com/world-congress/tickets) — €579, but they’re doing a €299 ticket for early-stage startups and a €199 ticket for students. I’ll be rocking out on the Airstream Stage on Thursday evening; if you’re there, come & say hi. I might even be giving out stickers.

## The Horizon IT Scandal

In my talk “[Failure is Always an Option](https://www.youtube.com/watch?v=Vk2fi7NZ3OQ)”, I share the story of the [Horizon IT scandal](https://www.postofficescandal.uk/) which led Post Office Limited, the UK company that administers high street post office branches, to falsely prosecute more than 700 employees between 2000 and 2014 after a faulty IT system reported accounting discrepancies and financial shortfalls. Horizon is [back in the news](https://www.theguardian.com/business/2023/jul/17/post-office-inquiry-chair-criticises-horizon-compensation-scheme) this week, after the chair of the inquiry expressed concerns about whether the compensation programme set up in the wake of the scandal would be able to deliver on their commitment to fully compensate the affected parties by August next year.

Liability has always been a tough question when it comes to software engineering: compared to industries like healthcare and aviation, even the most cautious software projects still look like four drunks wrestling for control of a stolen car. We can’t build perfect software; in a world where we write abstractions on top of abstractions on top of abstractions, there are just too many variables — often both literally and figuratively. What I believe sets the Horizon scandal apart, though, is the managers’ and executives’ absolute refusal to acknowledge the possibility that the software might be to blame. 

Software has bugs, and if somebody is prepared to testify under oath that it doesn’t, they’re either lying, or they’re stupid[2](#footnote-2) — or quite possibly both. It’d just be nice to see the executives behind these kind of fiascos face some consequences once in a while.

### This week I’ve been…

**Listening to:** [“SIX” by Extreme](https://extreme-band.com/). I suspect I’m not the only Extreme fan who loves every moment of their second album[3](#footnote-3) but then finds most of their subsequent output rather less compelling. SIX is growing on me, though. A little whimsical in places, and a track or two that wouldn’t be out of place on a Muse album, but when SIX  kicks into gear, it kicks *hard*. Nuno Bettencourt remains one of the finest guitar players the world has ever seen — check out [this video](https://www.youtube.com/watch?v=fqkKFhFMaIw) of Queen’s Brian May reacting to Nuno’s solo on Get The Funk Out; it’s simply wonderful — and on tracks like BANSHEE and lead single RISE, the guitar work here is just sublime. No idea why they set all the song titles in CAPITALS, though.

**Watching:** [Indiana Jones and the Dial of Destiny](https://www.imdb.com/title/tt1462764/). Yes, they made another Indiana Jones film. Yes, Harrison Ford is 81 years old. Yes, the fourth one was a horrible mistake. Yes, that sound you can hear is *taurus pecunias* going “please, father, I’m so tired… let me sleep now?”

The thing is, I *love* cinema. A film has to be very, very bad indeed for me not to enjoy it on the big screen, and Indy V is not bad at all. The story is endearingly daft, there’s the odd spot of slightly wonky CGI, and plot holes you can fly a plane though — quite literally, in one case. But the cast are on cracking form; it has charm, and pace, and is packed with the kind of set-pieces that are so much fun to watch you don’t even think about how daft the whole thing is until afterwards.

**Reading:** [Nettle and Bone](https://www.waterstones.com/book/nettle-and-bone/t-kingfisher/9781803360997) by T. Kingfisher. I knew nothing about this book other than that it made the shortlist for this year’s [Hugo Awards](https://www.thehugoawards.org/). I’m planning to read — or at least start reading — all six shortlisted novels between now and the awards ceremony in October; I’d already read and thoroughly enjoyed John Scalzi’s *The Kaiju Preservation Society*, but T. Kingfisher is a new name to me, and so far I like it a lot. If dark fantasy with witches and dustwives and bone dogs and even an actual fairy godmother sounds like your kind of thing, check it out.

Yeah, I know. You never subscribe to things. Go on. Break the chains of your conditioning. Dare to dream the impossible dream. SUBSCRIBE!

And that’s the week, folks. Next week’s issue will be a special THOTH[4](#footnote-4) from We Are Developers World Congress in Berlin, and quite probably a review of [#barbenheimer](https://en.wikipedia.org/wiki/Barbenheimer).

Until then, stay safe, have fun, and be excellent to each other.

*Dylan*

[1](#footnote-anchor-1) At the moment, I’m using [restream.io](http://restream.io) to stream to both Twitch and YouTube; Twitch generally seems to be a better platform for this kind of streaming, but I have way more followers on YouTube so I’m hedging my bets for now.

[2](#footnote-anchor-2) Ok, or maybe they work for NASA.

[3](#footnote-anchor-3) Which I shan’t name here, because the title contains a naughty word and the spam filters won’t like it.

[4](#footnote-anchor-4) The Hang Of Thursdays. THOTH — you know, the [Egyptian god of maths, science and magic](https://en.wikipedia.org/wiki/Thoth).