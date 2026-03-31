---
layout: post
title: How to Find the Stories
date: 2026-03-31T15:05:00
author: Dylan Beattie
---
One of the folks who joined my presenter workshop last week (which was awesome, by the way!) emailed me this morning with a follow-up question:

> I first saw you speak at DDD South-West in Bristol (it was the “There’s No Such Thing as Plain Text” talk), and what stuck with me was your use of stories. They were interesting, quirky, and naturally interwoven with your talk. I try to bring elements of this approach into my own talks by focusing on "what will make people feel something?", before getting into technical detail.
> 
> I work at [...] a FinTech that largely serves the Business Travel industry (virtual cards for managing corporate spend). I’m currently searching for stories that (at least loosely) connect to our industry. The aim is to give a talk at one of the business travel conferences over the next year. It will inevitably touch on how AI is transforming our industry, and I'm comfortable talking about how [we are] using AI within our product set, but I'm aware of the importance of framing all of this with a story.
> 
> I've trawled through many industry "News Outlets" (who are largely just selling adverts with a sprinkling of text) but haven't yet found the kind of inspiration I'm looking for. I would love to be able to call the talk "The Suitcase that Abandoned its Owner", or "The $10,000 Uber Trip" - something a bit whacky that intrigues an audience.

First of all: excellent question. Technology as a positive force in the world is most effective when it's solving actual problems that real people have... and people _love_ to talk about their problems. Especially if they're interesting problems that happened in strange places. You want engaging stories about weird things that happened to international business travellers? Talk to some people who travel internationally for business. You're guaranteed to get a couple of good stories -- and along the way, you'll probably learn a lot of really valuable things about exactly what your customers are trying to do, and how your product can help them.

That's true of just about every industry, by the way: the closer your developers are to your customers, the more likely they are to make the right call when facing any one of the hundreds of decisions that inform the way their software gets built.

So let's kick things off with two fun stories of my own that I think fit the brief, and who knows, maybe a few of you can share some travel stories of your own in the comments.

The first one happened in Riga, Latvia, back in May 2018. I'd been at DevDays, and was on my way from the conference venue to the ferry terminal 'cos I was catching the overnight ferry to Stockholm for DevSum. Yandex Taxi had just rolled out in Latvia - kinda like Uber, but built in Russia. Yandex is like Russia's answer to big tech... it started out as a search engine, added food delivery, ride sharing, email hosting, basically copying all the things coming out of San Francisco but built for the Russian market.

So I get a Yandex Taxi. It works exactly like Uber, except a minute into the ride my phone pings. I've just paid Yandex Taxi thirteen cents. A minute later it pings again - 52 cents. 62 cents. 9 cents. 10 cents. 34 cents. Ping, ping, ping, ping, ping...  all the way to the terminal.

<img src="/images/posts/IMG_0115.PNG" style="margin: 10px auto; max-height: 320px;" alt="A screenshot of the Monzo app showing a series of very low-value payments to Yandex Taxi">

Weird, huh? But not actually a problem... just weird. 

Then a few months later, I was in Moscow for DotNext (this being back in the days when going to Russia to talk about software development was a completely fine and normal thing to do) and I got talking to one of the developers who built the payment system integrations for Yandex Taxi! So I naturally asked "hey, what's with the weird payment thing?"

Turns out Yandex had a huge problem with people ordering a cab using a virtual payment card and then cancelling the card _en route_, so the driver would drop the passenger at their destination, the passenger would run away, payment gets declined, driver has no recourse. So the solution? Charge the card every minute - so if a payment gets declined, the driver can kick the passenger out right there. Not a bad solution - but combine it with Monzo, the bank and app I use when I'm travelling, which has realtime notifications every time I make a payment, and you're getting ping-ping-ping all the way to your destination, for what are often comedically small amounts of money. I guess it all adds up.

The second story happened in 2024, en route from Hungary to Lithuania. I'd been in Budapest speaking at Liferay DEVCON, and had a very tight connection via Munich on my way to Vilnius for BuildStuff... first flight was delayed. A 90 minute connection became 60, then 45, then 30... by the time we landed, I had six minutes to make the connection... but, whether by accident or design, we parked right next to the gate for my connecting flight, no passport control, and I made it. My luggage did not.

No big deal. I've got an Apple Airtag tracker in it. When we landed in Vilnius three hours later, I could see my luggage was still at Munich airport, so I filled out all the forms and whatnot, told them where I was staying; no problem. Next day after breakfast, I checked Apple's "Find My" app... and there was my luggage, somewhere in Bavaria, in the middle of the forest, miles away from anywhere.

<img src="/images/posts/IMG_6537.PNG" style="margin: 10px auto; max-height: 320px;" alt="A screenshot of Apple's 'Find my Device' app showing Dylan's Luggage in the Steigerwald Nature Park in Germany.">

Apple's "find my device" network basically turns every iPhone on the planet into a node in a huge geolocation network, so I'm guessing what happened is an iPhone on board the plane could see my luggage's tag, and it was connected to the inflight wifi (or a cell tower) just long enough to register a location as the plane was flying over that particular spot. (Yes, I know the Steigerwald Nature Park is not actually on the way from Munich to Vilnius. No, I don't know either.)

 But according to the app, my suitcase spent a nice relaxing morning chilling out next to a little lake in a German national park, and then teleported itself to Vilnius airport, and was delivered to my hotel a few hours later.

What are your weirdest tech travel stories, dear readers? Share them in the comments (yeah, I have comments now!) and who knows, they might end up in a conference presentation.
