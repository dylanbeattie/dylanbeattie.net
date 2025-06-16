---
layout: post
title: What The Fork Is Going On?
date: 2025-06-16T16:58:00
author: Dylan Beattie
---
I got two emails recently that have weighed heavily on my mind.

One was from a restaurant booking service called The Fork. On Saturday afternoon, I had used their service to try to book a table for dinner at [Garlic & Shots](https://www.garlicandshots.com/), a legendary rock'n'roll bar in Stockholm. I tried calling them first: no answer, but hey, they're probably just not open yet, and there's a link on their website to reserve a table. 10 people, 7pm, email, phone number, confirm... "your reservation is pending".

I hate "pending". You can't do anything with pending. "Hey, is there a dinner plan?" "Yeah. Or maybe no. A reservation is pending." I suspect even Schrödinger's cat would baulk at dinner being in some sort of unresolved quantum state.

OK, the place doesn't open until 5pm, maybe they'll confirm it then. 5pm comes and goes, no confirmation. I give them a call. A recorded voice says "Welcome!" - in Swedish - and then disconnects the call. This happens three times. There is no option in The Fork app to talk to a human, make a phone call, or anything of that nature. Finally I figure it's not that far away, I get on the metro, head over, and talk to an actual human. They've been very busy: Iron Maiden has just played two arena shows in Stockholm, the city has been wall-to-wall metal fans for three days, and they've basically drunk all the beer in every rock bar in town - but no problem; they can take us for dinner. Might be 14 people, might be 8pm rather than 7pm... no problem at all. We have a delightful evening there. _So. Much. Garlic._

Sunday 15th June, around 11am, I'm on the train from Stockholm to Helsingborg, and I get an email from The Fork confirming my restaurant booking: 10 people, 7pm, on Saturday 14th.

I do not know what kind of mind is required to develop, test, launch, and support a service that will confirm a restaurant reservation the day after the meal has taken place. I also strongly suspect that the proprietors of Garlic & Shots couldn't honestly give half a microbollocks what The Fork is doing, but at some point some smooth-talking sales person probably said "no, it's fine, we'll handle all your reservations for you" and they just went "ok, whatever, now buy a drink or get out of my bar" and now it's just a thing.

The next email was from His Majesty's Revenue and Customs, informing me that there was an **important message** in my online tax account. They cannot, of course, tell me what the message _says_, or what it's about, or even include a link directly to it. "Security reasons".

An "important message" could actually be important. Not important like "there has been an update to the Netflix Terms & Conditions" important. Important like "you owe us money; pay up or go to jail" important.

So I open a browser, go to HMRC's website, sign in with my Unique Taxpayer Reference, go through the multifactor authentication, go into my tax account, and sure enough, there's an important message. I have a new tax statement. OK, cool. What does it say?

Oh, no, we can't tell you that:

> Your new Self Assessment statement has been prepared. You'll be able to view it online within 4 working days.

So there you go. Two emails. One confirming a restaurant reservation that already happened two days earlier, the other telling me that I need to sign in to a website to see another message telling me that the thing they actually want to tell me isn't ready yet but I should keep checking back because it'll be there within four working days.

All you folks out there who think that coding is the hard part, and AI is going to revolutionise software development because it'll replace the slow, unreliable human programmers with artificial intelligence that cranks out millions of lines of bug-free code in seconds? No. These emails didn't get sent at the wrong time because of bugs in the code, or because scheduling email delivery is a hard problem and the developers couldn't quite get it working in time. No, sending email to the right person, at the right time, is a solved problem. It's been solved for **decades**. But choosing what that right time _is_? Identifying the situation where maybe asynchronous communication and pending reservations isn't actually the best way to solve a problem? No, those require actual human intelligence, which is rapidly closing in on astatine's long-held status as the rarest naturally occurring element on planet Earth.

I got two stupid pointless emails because somewhere behind them there are stupid pointless humans making stupid pointless decisions. Not programmers. In fact, most of the programmers I know would take one look at the ticket asking them to send an email saying "hey, your new tax statement is ready but you can't read it yet" and go straight back to the product owner saying "um... how about we wait until the statement is actually available and _then_ send the email?"

On the other hand, any startups out there using AI to replace their product owners and keeping all their human developers? Give me a call, I'll come work for you. It would be _lovely_ to be able to provide a bit of additional context and get a feature request instantly updated to something more sensible without causing a major political incident in the process.

Oh, and if you don't know how to make sure email gets sent to the right person at the right time, I do that too. I made an entire course about it: [Sending Email with .NET: From Zero to Hero](https://dometrain.com/course/from-zero-to-hero-sending-email-with-dotnet/), it's on Dometrain, and they're having a summer sale right now so it's 30% off.
