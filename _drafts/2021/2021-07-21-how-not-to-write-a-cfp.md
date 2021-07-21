---
title: "How (Not) To Write a CFP"
layout: post
author: Dylan Beattie
meta:
#  og_image: /images/posts/2021-07-21-how-not-to-write-a-cfp.jpg
  og_description: "Tips from Dylan Beattie on what to watch out for when you're writing proposals and submitting talks to technology  conferences."
#  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2021/
typora-root-url: .\..\..
---

As the world tentatively relaxes COVID restrictions and we contemplate the prospect of actual in-person conferences again before the end of the year, it seems like a good time to revisit one of the perennial questions that people ask about speaking at conferences and technology events: **how do I write a good CFP submission?**

Many big technology conferences hold an open CFP[^1], and competition for speaking spots can be fierce; events I've worked with typically accept less than 10% of the talks that are submitted. Your submission will be reviewed by the programme committee, who decide which talks to accept, but it may also end up in the conference programme, often in the exact form you submitted it, where the conference attendees will use it to decide which talks to attend. The talks that get accepted normally represent a diverse range of speakers, technologies, presentation styles and audience levels, and consequently they're all different – there is no secret formula for writing a good proposal.

That said, there are some very common factors among the talks that **don't** get accepted, so rather than telling you how to write a proposal, I'm going to share some tips about what **not** to do.

[^1]: CFP stands for "call for papers", a term we've adopted from academic conferences where presentations are usually based on scientific papers published in academic journals. I've also seen it retconned as "call for proposals" or "call for presentations", but really everybody just calls them CFPs without worrying too much about what it stands for.

### Too short

There's a particular kind of Hollywood action movie that can be perfectly described in fewer than ten words. "*Die Hard* on a bus", "*The Matrix*, but with vampires", "Gangsters killed his dog… now he wants revenge."

Well, dear readers, this isn't Hollywood, and if you want to get your talks accepted, you'll need to work a little harder than that. I have reviewed submissions before where the entire talk description was “this is a talk about blockchain”. Literally six words. Nobody's gonna give you a speaking spot –  let alone cover hotel and airfare – based on a six word pitch. (*Especially* if the only one of those words that's remotely related to technology is "blockchain")

A good proposal should probably be around 200-400 words; long enough that you can establish some context, tell us a bit about who you are and what you're talking about, and give the audience some idea what they can expect to see if they come to your talk.

### Too long

At the other extreme are the essay submissions. You don't see too many of these in the wild, because most events use platforms like Sessionize that can impose a character limit on the talk description, but I've seen proposals that read like somebody pasted an entire blog posts into the submission form. Save the detail for the talk itself (or, hey – publish a blog post instead? After all, you've already written most of it!) – but when it comes to a CfP, it's all about striking a balance between brevity and detail .

### Nothing special

> **“In this talk I will show you how to get started with machine learning in Python”.** 

OK, great… but what would somebody get from attending this talk that they can't find on the web, or by watching YouTube videos? Are you a key contributor to an open-source project in that area? Have you or your team used that technology to do something particularly unusual or innovative? Is there something interesting about how you personally got involved with machine learning in Python? If the answer to all these questions is "no", your submission will probably be rejected in favour of something that offers more in the way of perspective and personality. 

There's another saying in Hollywood that a successful director's first movie is always a movie that nobody else could have made. Think about your talks the same way; try to pitch something that nobody else could do.

### Sales pitch

Also known as the "single vendor solution talk", programme committees can smell these a mile away:

>  **“GDPR is hard! In this talk, Bob will explain how OmniCorp DataMulch 3.0 will solve all your organisation's data management headaches”**

That's not to say you can't talk about your own company's products or platforms, but the rule of thumb here should be that the audience should go away having learned something that's useful *even if they're not using your product.* Explain the problem, explain the principles and ideas that are relevant, and, sure, throw in a demo that shows how your product applies those principles and ideas. But if you're here to sell stuff, get a booth on the expo floor like everybody else.

### Wrong audience

Every conference has an audience. Some are more diverse than others, and they change from year to year, but think about who's likely to be attending and what they want to hear about. If an event attracts an audience who predominantly work with Java and JVM-based languages, your talk about building APIs with C# probably isn't going to get accepted. Events with a frontend focus don't tend to accept talks about relational databases, and vice versa.
That doesn't mean you can't adapt your material; a topic like “Blazor for JavaScript Developers” will probably get a lot of attention, and if it's delivered well it could inspire some of those developers to go away and experiment with some new tech. Again, it's about what perspective and personality you can bring to the table beyond the videos and “getting started with X” guides that are available online.

### Poor writing

As a native English speaker, I'm acutely aware that many of the brightest people in technology speak English as a second, third, or even fourth language, and so critiquing submissions on the quality of the written English can provoke a certain amount of controversy. Most programme committees I've served on have been relatively forgiving of grammar and colloquialisms; English is a horrifically complicated language and the odd grammatical oversight is usually no barrier to comprehension. The red flags here are things like mis-spelling technical terms, or confusing the names of specific technologies. I've seen proposals talk about the Kestral [sic] web server that ships with ASP.NET, about Microsoft Sequel Server (yes, that's how we say it out loud, but nobody ever writes it that way), and one memorable submission about Angular, the popular Java framework.
In a perfect world, you'd follow up on every one of these - “hey, did you mean Angular, the popular Java***Script*** framework?” – but when a programme committee is trying to pick 75 talks out of 980 submissions, those kinds of errors indicate a lack of care on behalf of the person writing the proposal, and are often enough to justify an immediate rejection.

### Lazy copy/pasting

Good talks have a shelf life; it's normal to see the same material being presented at a dozen different events around the world before the speaker finally retires it. This is fine. Preparing a talk is a huge investment in terms of time and effort, and there's no reason you shouldn't seek to maximise your return on that investment by presenting it to as many different audiences as they can.

When you're submitting an existing talk to a new event, though, make sure you check the detail carefully. The most glaring error is a submission that still includes the name of another event: “Join Dylan Beattie at DDD East Midlands” doesn't *really* work if it's a submission to NDC Porto, y'know? Check dates, check product versions and codenames, check whether anything in the submission needs to be updated – whether it's just a cosmetic detail, or it's a whole chunk of your talk you'll need to go away and revise.

*Incidentally, it’s well known and generally accepted that certain parts of our industry move significantly faster than some conference selection processes… if you've submitted a talk about WombleJS version 2, and by the time the event actually takes place six months later WombleJS 2 is ancient history and everybody's on WombleJS version 5, then (a) be prepared to update your talk, references and demos, and (b) let the conference organisers know, ideally with an updated abstract, a few weeks ahead of time so they can make sure it's reflected in the schedule.*

### Poor structure

Finally, read through your submission and check it makes sense. I've seen proposals where I'm guessing somebody edited something for length, and removed a key sentence or phrase, leaving an abstract that really didn't make a huge amount of sense. Proposals along the lines of "machine learning is revolutionising the world of financial analysis. In this talk, we'll look at how you can use FoobarJS to streamline your deployments." - OK, fine, but what does FoobarJS and deployments have to do with machine learning or financial analysis?

### No further resources

If your submission ends up shortlisted and the committee is trying to work out which talks to pick, they'll often look online for anything else which supports your inclusion on the programme. If you've spoken at events before, include links to these – especially if it went OK and there's video of it happening. If you've published books, training courses or open source projects related to your submission, say so, and include links where you can.

And if you haven't, get started! Write some blog posts. Record a couple of short videos of you talking about something you're passionate and knowledgeable about, stick them up on YouTube, start getting your name and your personal brand out there where people can see it.

The key thing is – whatever you've got, make it easy for the programme committee to find it. They're unlikely to go googling your name when it's 9pm, there are 143 more talks to review and the only snacks left in the committee room are Norwegian salted liqorice.

### OK, great - so what SHOULD I do?

Come up with an idea. Something nobody else can talk about; you're unlikely to know more about F# than [Don Syme](https://en.wikipedia.org/wiki/Don_Syme), or more about Entity Framework than [Julie Lerman](https://thedatafarm.com/), but I guarantee there will be something in your own experience, a chapter of your own story on which you are the undisputed expert.
Figure out what you want to talk about. Maybe you're already written the talk; run through it, pick out the high points. Maybe it's something new, in which case sketch out your narrative arc: where do you start, where do you end, what do you talk about along the way? Condense that down to 500 words. Go for a walk. Come back to it, take out another 100 words. Spell check it. Double-check the product names, acronyms, and technical terms. Ask somebody else to take a look. Read it out loud, check it all makes sense, then hit “submit” and cross your fingers.

Above all, don't get discouraged. The acceptance rate for most public CFPs is somewhere below 10% – so if you're getting 1 acceptance for every 10 submissions, you're beating the odds. Get out there, good luck with it, and see you on a conference stage somewhere soon!

There are literally hundreds of events going on all over the world, all the time - check out the new "[Discover events](https://sessionize.com/app/speaker/discover)" feature on Sessionize to find things 

NDC Oslo 2021: [https://ndcoslo.com/cfp](https://ndcoslo.com/cfp) *(deadline: 1 August)*

NDC London 2022: [https://sessionize.com/ndc-london-2022](https://sessionize.com/ndc-london-2022) *(deadline: 26 September)*

DotNext Moscow 2021: https://dotnext-moscow.ru/en/callforpapers/



____

*I run live, interactive workshops for people who want to get started with public speaking, or to improve their presentation skills. The next one is on 1 & 2 of September 2021; 2pm-6pm BST, online. using Zoom and Slack. Tickets are strictly limited and on sale now from just £165; check out [https://ursatile.com/workshops/from-keyboard-to-keynote](https://ursatile.com/workshops/from-keyboard-to-keynote) for more details and booking:*

*<a href="https://urs.tl/kb2kn"><img class="screenshot do-not-autolink" src="/images/posts/2021/from-keyboard-to-keynote-web-banner-september-2021.png" alt-="A banner advertisement for Dylan Beattie's public speaking workshop"></a>*

