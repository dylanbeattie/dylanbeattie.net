---
title: "Guru Meditation and Bad Error Messages"
layout: post
author: Dylan Beattie
meta:
  og_description: "Varnish, Guru Mediation, the Fastly outage - and the art of writing good error messages."
typora-copy-images-to: ../../images/posts/2021/
typora-root-url: .\..\..
---

Today's [Fastly outage](https://www.theguardian.com/technology/2021/jun/08/massive-internet-outage-hits-websites-including-amazon-govuk-and-guardian-fastly) is a nice moment to reflect on the fact that developers are absolutely terrible at writing error messages. Earlier today, some of the biggest sites on the web were offline for nearly an hour, including the BBC, the New York Times, Reddit, Stack Overflow, GitHub, and many UK government sites. During the outage, visitors to those sites got a cryptic error message: 

> **Error 503 Service Unavailable.** 
>
> Service Unavailable
>
> **Guru Mediation:** 
>
> Details: cache-lcy19240-LCY (and then a long, meaningless string of numbers)
>
> Varnish cache server

![iPhone screenshot showing a Varnish cache error from the Guardian website](/images/posts/image-20210608142115007.png)

Now, a quick recap about how to write good error messages. It comes down to remembering four things.

1. **Be helpful**. Explain what has gone wrong - and whether there's anything the user might be able to do to work around or fix the problem. “The website you're trying to reach isn't available right now. Please try again in a few minutes."
2. **Be human.** Don't use meaningless jargon. “The network is unavailable” is always better than “Unhandled connection timeout 0x80004005 (WCOM SystemTimeoutException)". The people who need error numbers and stack traces will know where to look for it.
3. **Be honest.** If you screwed up, you screwed up. It happens. Never make your error messages so ambiguous that the user might think they've done something wrong. Life is scary enough as it is.
4. **Be humble.** Apologise. Your software just broke and now somebody else is having a bad day and that's your fault. “We're really sorry. One of our systems has failed and so that website isn't available right now. Please try again in a few minutes."

(*The jury is still out on whether the fifth H should be “humorous"... humour is difficult and extremely subjective. If you know your audience, and you know that whatever went wrong is probably just inconvenient rather than disastrous, then sure, be funny. But be careful with it.*)

Now, let's talk about “503 Service Unavailable Guru Mediation.” That's a joke. No, really. To about a hundred people on the planet, that is incredibly funny, because “Guru Meditation” is what their old Amiga 500 used to say when something went badly wrong.

The error message in this case is actually coming from [Varnish](https://varnish-cache.org/), an open-source software application that many organisations use to improve website performance. Varnish is really, really good, but... let's just say that “user friendly” wasn't on their list of requirements. Varnish is a high-performance HTTP caching proxy and URL rewriting engine. You configure it by writing rules in a domain-specific language, VCL, which is based on C (yes, that C). Those rules are compiled into a shared binary that runs as part of the Varnish network pipeline. It's an app built by nerds, for nerds, to do one specific thing, and do it as fast as possible - and it does that one thing very well indeed. But at some point, one of the Varnish developers had to make a decision: "hey, what should we return if something goes wrong?" – and they decided that the best thing to do would be to return an HTTP 503 error, and include a joke about Amigas *(although keen eyes will notice that the original “Guru Med**ita**tion” has actually changed to “Guru Med**ia**tion” in the Varnish error message. Cute.)*

This morning, I reckon about 100 million people probably saw that error message. I reckon less than 1% of them understood it, and of the 1% who understood it, probably 1% of those even realised it was a joke, let alone found it funny. The other 99 million people who saw it? Most of them probably freaked out a bit, because it looked like half of the internet had suddenly stopped working. 

If the whole internet stops working, you assume it's your problem. Check the wifi. Reboot the router. Call your ISP. If one website goes down? Big deal. It'll be back. But when the BBC, the New York Times, the Guardian, Reddit, GitHub, Stack Overflow and the UK government all suddenly start returning “503 Service Unavailable Guru Mediation", people get a bit rattled. So they check Google and fast.com and Netflix, and those sites are all ticking along just fine - and that's when people start really freaking out. Virus? Malware? Terrorist attack? 

No. Somebody probably just messed up the Varnish config… and, probably, had no idea that an innocuous typo in a block of not-quite-C code was going to result in hundreds of millions of people going “argh… what the heck is a guru mediation?”

If you want to capture stack traces and correlation IDs and other diagnostic details when something goes wrong? Awesome. Log them. Don't have logs? Get logs. Don't have time to get logs? Go and set up some logging. Go on. Do it now. We can wait. But when it comes to the error message that ends up on your screen when something goes wrong... somebody else is going to see that. I guarantee it. And you have no idea who that will be, or what they'll be doing when they see it. 

So remember: Helpful. Human. Honest. Humble. Doesn't matter if you think nobody except your colleagues will ever see it. Doesn't matter if it's an error that you're absolutely certain is never going to happen. If you're wrong, your carefully-crafted error message could make a huge difference to somebody else's day. 

And if you're right? No big deal. You wrote a good error message anyway.