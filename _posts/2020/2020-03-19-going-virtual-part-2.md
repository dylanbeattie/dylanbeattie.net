---
title: "Going Virtual, Part 2"
layout: post
author: Dylan Beattie
opengraph: 
  description: In which I share notes and observations after running a couple of remote meetups using Zoom.
  image: /images/posts/2020-03-19-going-virtual-part-2/card.png
typora-copy-images-to: ../../images/posts/2020-03-19-going-virtual-part-2
---

There's this whole Einstein relativity space/time continuum thing - you move faster in space, you move slower in time, and apparently vice versa. You know the one. And I gotta say, it feels like since we all decided we were going to stop moving around in space, the moving-through-time thing has gone into overdrive... today is March 19th. Two weeks ago I was in Copenhagen, celebrating my partner's birthday at Warpigs with a bunch of old and new friends from all over the world. We spent Friday cycling around Copenhagen on rented bikes; on Saturday we went to Sweden for the day. Sunday we flew back to London. A week later, Denmark had gone into total lockdown; as of today, [Copenhagen is deserted](https://twitter.com/anshulsharmaa_/status/1240386026444673026), and pretty much the entire software industry is hunkered down, working from home and waiting for this thing to blow over.

Last Friday I ran an online lunch over Zoom. [On Tuesday I ran a virtual meetup](https://dylanbeattie.net/2020/03/13/going-virtual-part-1.html). Tuesday night I had online drinks with the Linebreakers - and then somebody messaged me to say there was a party going on on Microsoft Teams as part of the Virtual MVP Summit, so I stopped by there for a bit, and then invited everyone back to Zoom... but let's face it, it wouldn't be a proper conference if I didn't turn up to some Official Corporate Drinks and drag half the attendees away to a sleazy rock bar somewhere. Nice to know that some traditions work just as well online as they do out in the Big Room.

And yes, this is all still *very* weird; the news cycle has gone into overdrive, nobody has the faintest idea what new restrictions and cancellations are going to be announced in the next 48 hours, and we're all figuring a lot of things out very, very quickly. As you probably saw, [NDC Conferences has hired me](https://dylanbeattie.net/2020/03/18/ndc-online-community-ambassador.html) as their Online Community Ambassador for the next few months whilst we're working this stuff out - which is awesome, because it means I can give this stuff my undivided attention until we've all worked out the details.

![2020-03-19_13-37-45](/images/posts/2020-03-19-going-virtual-part-2/2020-03-19_13-37-45.png)

Today I ran our second virtual meetup - we had [Filip Ekberg](https://twitter.com/fekberg) talking about pattern matching in C#, with lots of technical content and code samples; [Clifford Agius](https://twitter.com/CliffordAgius) talking about building a mobile flight simulator out of a burger van, and [Christine Seeman](https://twitter.com/Tech_Christine) talking about ashtanga yoga and even showing us a couple of yoga positions live via Zoom, which was really cool. We had 66 live attendees at one point, most of them live on camera and voice chat, and we tried out a couple of different things based on feedback and ideas from Tuesday; here's what we learned.

### **Timezones are Weird**

I mean, we knew that anyway - but we had a bunch of folks in Europe on their lunch break, Christine presenting live from Omaha, Nebraska where it was still early morning, and folks tuning in from as far away as Australia where it was already evening.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Doing some evening coding and joining some UK friends on their lunchtime talk testing 😁<br><br>For some reason <a href="https://twitter.com/dylanbeattie?ref_src=twsrc%5Etfw">@dylanbeattie</a> is now on my TV 😂 <a href="https://t.co/zeR85c4jej">pic.twitter.com/zeR85c4jej</a></p>&mdash; Amy 🏡👩‍💻🐺 (@Amys_Kapers) <a href="https://twitter.com/Amys_Kapers/status/1240626090806112259?ref_src=twsrc%5Etfw">March 19, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### **It Takes Two: A Producer and a Presenter**

For today's meeting, we had [Martin Thwaites](https://twitter.com/MartinDotNet) "producing" the meetup - I added him as a co-host on the Zoom call, and he was the one muting and unmuting people, switching the 'Video Spotlight' onto the speaker, answering questions in the chatroom, and that kind of thing. This was a huge improvement over Tuesday - it meant I was free to host the meetup, stand in front of a camera and actually talk to people without having to remember to click this and select that and keep one eye on the chat session.

We *might* have found some weird behaviour around "mute all" when working with multiple meeting hosts... further research required, but at the end of the session we found a few folks were stuck on mute and couldn't unmute themselves. We'll run some experiments and report back.

But generally, I think we file this one under "best practice" - the producer runs the meeting, the presenter does the talking. It also wasn't a problem at all that Martin and I weren't in the same room - or indeed in the same city; the platform coped with this just fine.

Martin's comments on Zoom:

* "Going full screen you can undock the speaker view - having the the speaker view, spotlight view and chat all on different screens helped"
* "Switching the Video Spotlight during the Q&A needs some thought - it's good to see you asking the question and the speaker answering it, but I'm not sure how jerky that was for the audience."
* "Having speakers as co-hosts might help - finding them (in the gallery view) to spotlight them was a pain"

### **Use Sli.do for questions**

We set up a [Slido](https://sli.do) event for this, and shared the link in the chat and as part of my intro slides. One great thing to remember about online events - if you want people to go to a URL, you don't have to rely on web addresses and QR codes on a PowerPoint slide; you can just get the producer to put the link into the chat.

During this part of the meetup, I used the Open Broadcast System (OBS) rig to superimpose my 'talking head' onto the Sli.do "presenter view" so that video attendees could see the questions, which worked great (and looked quite professional as well!)

During discussion at the end, Shahid Iqbal - who  recently hosted a virtual meetup as part of NDC DevOps - pointed out that it can be really confusing having questions going on Sli.do *and* people posting questions in the Zoom chat. Something else that we're going to need to figure out as we go along.

Martin's comments:

* "Dismissing questions is an easy way to moderate, they disappear from the screen. Having it behind you helped. Promoting the questions needs to be a bit more insync so that the video switching happens better."
* "I'm thinking that it might be an idea to think about streaming to a location that then outputs to Zoom, then something like OBS can combine the streams – so the idea would be that all the hosts somehow join a stream, and that stream is sent to the zoom... would make coordinating the speakers easier, but has some fairly significant downsides"

### **Equipment Makes a Difference**

I'm sure this doesn't come as a surprise to anybody, but when you're running an event like this, it's quite apparent that people fall into three broad categories when it comes to online presenting. 

1. People who haven't really ever done this before - which is fine; the main reason I'm running these virtual meetups is to give everyone a chance to practise, refine their setup, adapt their material and so on. 
2. People who are clearly experienced presenters and have also done a lot of video calls and remote meetings, but haven't really tried presenting online before. These are the folks who don't need a whole lot of practice, but for whom investing in a better mic or a decent lighting setup will make a huge difference to how well their material works in a virtual format
3. People who basically talk to cameras for a living. The folks with the professional-quality microphones, the hi-def cameras and green screen backdrops.

Now, there's definitely a law of diminishing returns here - particularly for live streaming, the difference between a built-in microphone and a £20 headset is obvious, but you're probably not going to hear much difference between a £100 mic and a £500 mic once it's been compressed through Zoom or Google Hangouts and streamed across the internet. I'll be doing some more research around this over the next week or so, and hoping to share some recommendations with you all for mics, headsets, cameras, lights, etc. that'll let you up your remote presentation game without breaking the bank.  

If you want to see what a really top-notch remote presenting rig looks like, check out this YouTube video of  [Aaron Parecki](https://twitter.com/aaronpk/status/1238496278561972225) running through his seriously impressive setup to see how deep the rabbit-hole *really* goes:

<iframe width="560" height="315" src="https://www.youtube.com/embed/yNzU-TPdxR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

What's next? Well, Friday afternoon we'll be running a remote live coding workshop with [Mathias Brandewinder](https://brandewinder.com/) - 16:00 UK time / 09:00 PDT - to figure out some details around running workshops with a lot of hands-on coding and collaboration; next week I'll be running a couple of webinars with NDC for speakers and attendees at their forthcoming events, and I'm talking with the crew from [BuildStuff](https://www.buildstuff.events/) about doing some online stuff with them as well. 

Exciting times. Stay tuned.