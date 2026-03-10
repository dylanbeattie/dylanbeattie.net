---
layout: post
title: Learning Claude Code, Part 1
date: 2026-03-10T12:30:00
author: Dylan Beattie
---
I've been doing a series of live streams with [Emmz Rendle](https://rendle.dev/) over the last few weeks, getting up and running with Claude Code and using AI agents to write software. It's been really interesting, but it's also up to 15 hours of video and still running, and, well, quite a lot of it is us just chatting about stuff while Claude sits there grinding away on various little tasks... a bit like "Deal or No Deal", the bits that actually matter are relatively few and far between. So, in these posts I'm going to summarize the highlights of each video - what did we do, did it work, what did I learn along the way.

So in part 1, this is getting started with Claude, starting from literally zero - setting up a plan, installing it, figuring out how to use it, and building my first Claude-Coded app.

<iframe width="100%" height="360" src="https://www.youtube.com/embed/TQfvEJ8f9oQ?si=cJdmlRQ87M6Bj4mo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

First thing I did was to open up claude.ai in a browser, log in (apparently I already had a free account from something I completely forgot I'd tried last year), and set up a paid billing plan.

[19:35](): Claude has a free tier, but to use Claude Code, you have to pay. There are three paid plans. Pro (£18/month or £180/year), and then two Max plans; £75/month + tax gets you 5x more usage than Pro, £180/month + tax gets you 20x more usage than Pro.

> Claude's plan limits are complicated. Usage is measured in **tokens**. There's a **usage limit**, which on the Pro plan resets every five hours, and a **length limit**, which is how big a single chat session can get before it won't fit in Claude's **context window** any more. For now: set up a Pro plan, pick a model, start doing stuff, keep an eye on your usage; if you're hitting limits, there are tricks you can use to reduce token usage, or you can buy a bigger plan.

[23:36]() Install Claude Code - yes, by [pasting a line of Powershell](https://code.claude.com/docs/en/setup#install-claude-code) into a terminal window that'll download the install script and run it. I must assume this didn't do anything sinister 'cos it's been two weeks now and as far as I can tell nobody has hacked my email or emptied my bank account.

[29:58](https://youtu.be/TQfvEJ8f9oQ?t=1798) Run Claude Code - open a terminal window, navigate to a working folder, type `claude`. Choose a color scheme (dark mode FTW), connect it to my Claude subscription (via a terminal menu option that pops up a browser window - I love it when that stuff just works).

Choose a model - type `/model` at the Claude prompt, it asks which model you want to use.

> "Model" here refers to a language model - a massive (like, hundreds of gigabytes) database of tokens, the thing that makes modern "AI" systems work. AI vendors don't publish any figures about how big the models actually are; all us consumers know is what they're called, what they cost, and how they perform relative to each other.
> 
> Claude has three models, called Opus, Sonnet, and Haiku. Opus is slower, burns more tokens, and gives better answers. Sonnet (the default) is in the middle, Haiku is the fastest, cheapest, and most likely to give incorrect results. Or something.

The rest of this session, we're just working with Claude in a very unstructured, conversational way:

> **Dylan**: please create a new app
> 
> **Claude**: What kind of app would you like to create? _(followed by a list of options - web app, API, full stack, CLI tool, or type something. We choose "web app")_
> 
> **Claude**: What's the purpose of the web app? Describe what it should do and any specific features you have in mind.
> 
> **Dylan**: I want to display a conference agenda based on information pulled from Sessionize's JSON endpoint
> 
> **Claude**: Do you have a Sessionize API endpoint or event ID?
> 
> **Dylan**: _(pastes in a URL)_
> 
> **Claude**: Which tech stack to you prefer? _(followed by options - Plain HTML/CSS/JS, React, Vue, or something else)_ 
> 
> **Dylan**: asp.net core 

[57.22](https://youtu.be/TQfvEJ8f9oQ?t=3442) - `dotnet run` and there it is; an ASP.NET Core web app that displays a session grid based on a Sessionize JSON endpoint. (This is what is technically known as a "holy crap I can't believe that worked" moment.)

I grab a screenshot of the output, open it up in the Snagit Editor and make a few very rough changes to the layout & colours. Exactly the kind of feedback loop I'd use with a human developer - "hey, the code is good, the data looks good, can we change the colours and layout to look more like this?" I save this to the project folder as `mockup.png`, and tell Claude

[59:41](https://youtu.be/TQfvEJ8f9oQ?t=3581) `it looks like this but I want it to look like that`

Claude picks up a bunch of CSS changes. It doesn't get it 100% right - it misses some of the layout changes - but it's still pretty impressive.

[1:20:27](https://youtu.be/TQfvEJ8f9oQ?t=4827) `render the schedule using a CSS grid instead of a table`

[1:25:00](https://youtu.be/TQfvEJ8f9oQ?t=5104) `remove the restaurant, make the keynote session span all the rooms`

Result: a working app in ASP.NET Core that did pretty much everything we'd asked it to do.

Things I learned in this session:

- There's no free plan - if you want to use Claude Code, you have to pay money.
- Unlike most previous developer tools, Claude Code isn't an IDE or a VS code extension: it's a command line app. A sort of extremely high-powered [read-eval-print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop). You run it in a terminal, it gives you a prompt, you type instructions in colloquial English, it responds with questions or outputs.
- Unlike a chatbot, Claude Code doesn't just reply to you; it can actually do stuff. Create files, run commands, retrieve content from URLs, connect to the network.
    - It's worth noting that, although it prompted me for permission before doing all this, I was running it on my main workstation just like I do any other developer tool and trusting that it wasn't going to do anything sinister. A more security-conscious user might have run Claude Code inside a virtual machine until they had a better idea what it was actually doing.
- It can accept input in the form of screenshots (except you've got to use Alt-V to paste, not Ctrl-V? Don't ask me why. I don't know.) as well as text prompts.
\`\`\`
