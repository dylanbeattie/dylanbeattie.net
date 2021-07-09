---
title: "How Not To Write A CfP"
layout: post
author: Dylan Beattie
meta:
#  og_image: /images/posts/2021-07-01-.jpg
  og_description: "Things to watch out for when submitting talks and proposals to conferences and tech events."
#  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2021/
typora-root-url: .\..\..
---

As the world tentatively relaxes COVID restrictions and we contemplate the prospect of actual in-person conferences again before the end of the year, it seems like a good time to revisit one of the perennial questions that people ask about speaking at conferences and technology events: **how do I write a good CFP submission?**

Many big technology conferences hold an open CfP, and competition for speaking spots can be fierce; events I've worked with typically accept less than 10% of the talks that are submitted. Your submission will be reviewed by the programme committee, who decide which talks to accept, but it may also end up in the conference programme, often in the exact form you submitted it, where the conference attendees will use it to decide which talks to attend. The talks that get accepted normally represent a diverse range of speakers, technologies, presentation styles and audience levels, and consequently they're all different - there isn't really a formula for writing a good proposal.
That said, there are some very common factors among the talks that **don't** get accepted, so rather than telling you how to write a proposal, I'm going to share some tips about what **not** to do.

### Too short

I've seen submissions before where the entire talk description was "this is a talk about blockchain". Literally six words. Nobody's gonna give you a speaking spot - let alone cover hotel and airfare - for a six word pitch. A good proposal should probably be around 200-400 words; long enough that you can establish some context, tell us a bit about who you are and what you're talking about, and give the audience some idea what they can expect to see if they come to your talk.

### Too long

At the other extreme are the essay submissions. You don't see too many of these in the wild, because most events use platforms like Sessionize that can impose a character limit on the talk description, but I've seen proposals that read like somebody pasted an entire blog posts into the submission form. Save the detail for the talk itself (or, y'know, publish a blog post instead); when it comes to a CfP, it's all about striking a balance between brevity and detail .

### Nothing special

*"In this talk I will show you how to get started with machine learning in Python".* OK, great – but why you, and what would somebody get from attending this talk that they can't find on the web, or by watching YouTube videos? Are you a key contributor to an open-source project in that area? Have you or your team used that technology to do something particularly interesting or innovative? Is there something interesting about how you personally got involved with machine learning in Python? If the answer to all these questions is "no", your submission will probably be rejected in favour of something that offers more in the way of perspective and personality. There’s a saying in Hollywood that a great director's first movie is always a movie that nobody else could have made. Think about your talks the same way; try to pitch something that nobody else could do.

### Sales pitch

Also known as the "single vendor solution talk", programme committees can smell these a mile away, because they always start something like this:

*"GDPR is hard! In this talk, Bob will explain how OmniCorp DataMulch 3.0 will solve all your organisation's data management headaches."* 

That's not to say you can't talk about your own company's products or platforms, but the rule of thumb here should be that the audience should go away having learned something that's useful *even if they're not using your product.* Explain the problem, explain the principles and ideas that are relevant, and, sure, throw in a demo that shows how your product applies those principles and ideas. But if you're here to sell stuff, get a booth on the expo floor like everybody else.

### Wrong Audience

Every conference has an audience. Some are more diverse than others, and they change from year to year, but think about who's likely to be attending and what they want to hear about. If an event attracts an audience who predominantly work with Java and JVM-based languages, your talk about building APIs with C# probably isn't going to get accepted. Events with a frontend focus don't tend to accept talks about relational databases, and vice versa.
That doesn't mean you can't adapt your material; a topic like "Blazor for JavaScript Developers" will probably get a lot of attention, and if it's delivered well it could inspire some of those developers to go away and experiment with some new tech. Again, it's about what perspective and personality you can bring to the table beyond the videos and "getting started with X" guides that are available online.

### Bad writing

As a native English speaker, I'm acutely aware that many of the brightest people in technology speak English as a second, third, or even fourth language, and so critiquing submissions on the quality of the written English can provoke a certain amount of controversy. Most programme committees I've served on have been relatively forgiving of grammar and colloquialisms; English is a horrifically complicated language and the odd grammatical oversight is usually no barrier to comprehension. The red flags here are things like mis-spelling technical terms, or confusing the names of specific technologies. I've seen proposals talk about the Kestral [sic] web server that ships with ASP.NET, about Microsoft Sequel Server (yes, that's how we say it out loud, but nobody ever writes it that way), and one memorable submission about Angular, the popular Java framework.

In a perfect world, you'd follow up on every one of these - "hey, did you mean Angular, the popular Java**Script** framework?" - but when a programme committee is trying to pick 75 talks out of 980 submissions, those kinds of errors indicate a lack of care on behalf of the person writing the proposal, and are often enough to justify an immediate rejection.

### Copypasta

Good talks have a shelf life; it's normal to see the same material being presented at a dozen different events around the world before the speaker finally retires it. This is fine. Preparing a talk is a huge investment in terms of time and effort, and there's no reason you shouldn't seek to maximise your return on that investment by presenting it to as many different audiences as they can.
But when you're submitting an existing talk to a new event, check the detail carefully. The most glaring error is a submission that still includes the name of another event ("Join Dylan Beattie at DDD East Midlands" doesn't *really* work if it's a submission to NDC Porto, y'know?) Check dates, check product versions and codenames, check whether anything in the submission needs to be updated - whether it's just a cosmetic detail, or it's a whole chunk of your talk you'll need to go away and revise.

### Poor structure

Before submitting your CfP, read through it and check it makes sense. I've seen proposals where I'm guessing somebody edited something for length, and removed a key sentence or phrase, leaving a proposal that really didn't make a huge amount of sense. Proposals along the lines of "machine learning is revolutionising the world of financial analysis. In this talk, we'll look at how you can use FoobarJS to streamline your deployments." - OK, fine, but... what does FoobarJS and deployments have to do with machine learning or financial analysis?

### Being a jerk

Conferences want to be inclusive, constructive spaces, where people feel comfortable learning from each other, sharing their own ideas, and feeling like they're part of something positive and worthwhile. Before you're accepted to speak, the programme committee is, at the very least, going to search your name online, take a look at your public social media, and try to get some idea of who you are and what sort of personality and perspective you're bringing to the table. It's not about groupthink, or creating an echo chamber. It's about understanding how you present yourself, and how you respond when your ideas and preconceptions are challenged. If your particular brand of identity politics is likely to deter attendees - or worse, lead to other speakers boycotting the event - then you're probably not going to get accepted.

### So.. what SHOULD I do?

First, come up with an idea for something nobody else can talk about. You're unlikely to know more about F# than Don Syme, or more about Entity Framework than Julie Lerman, but I *guarantee* there will be something in your own experience, your own story, on which you are the undisputed expert.
Figure out what you want to talk about. Maybe you're already written the talk; run through it, pick out the high points. Maybe it's something new, in which case sketch out your narrative arc: where do you start, where do you end, what do you talk about along the way? Condense that down to 500 words. Go for a walk. Come back to it, take out another 100 words. Spell check it. Double-check the product names, acronyms, and technical terms. Ask somebody else to take a look. Read it out loud, check it all makes sense.
And don't get discouraged. Remember the acceptance rate for most public CfPs is somewhere below 10% - so if you're getting 1 acceptance for every 10 submissions, you're beating the odds. So get out there, good luck with it, and see you on a conference stage somewhere soon!







**FOOTNOTE:** CFP stands for "call for papers", a term we've adopted from academic conferences where presentations are usually based on scientific papers published in academic journals. I've also seen it retconned as "call for proposals" or "call for presentations", but really everybody just calls them CFPs without worrying too much about what it stands for.

premisecontext"the pain and the promise"technological backgroundwho's it forwhat are they going to learnPassion. Tlak about something you care about.
As the world tentatively tiptoes back towards running in-person events, conference
