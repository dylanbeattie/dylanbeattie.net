---
title: "How I Write Timed Talks"
layout: post
author: Dylan Beattie
meta: 
  og_description: Dylan Beattie describes how he writes a talk to fit a specific time
  og_image: /images/posts/2020-07-09-how-i-write-timed-talks/summary.png
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2020-07-09-how-i-write-timed-talks
typora-root-url: .\..\..
---

This is one of those blog posts that started life as a tweet, and then a tweet thread, and quickly grew to a point where it actually makes more sense as a post. It started out with this:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Folks who give lots of talks, and create new *timed* talks from scratch, do you follow a specific process/use a template etc? <br><br>Trying to learn how to get better at this. 🙃</p>&mdash; C:\hristina 👩🏽‍💻 (@divinetechygirl) <a href="https://twitter.com/divinetechygirl/status/1281260967423283200?ref_src=twsrc%5Etfw">July 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

So, here's how I do it.

**First: figure out how fast you talk.** In my case, I took some videos of a couple of talks I've given that went well, and transcribed them - literally word for word, number for number. Every single word. Then I measured the word and character counts compared to the length of the videos. I talk at almost exactly 1,000 characters per minute - which works out around 178 words per minute, give or take.

That's useful, because it means I can easily turn a time limit into a word limit. A 5-minute lightning talk needs about 5,000 characters worth of material - just under 1,000 words. A one-hour keynote talk needs roughly 60,000 characters.

**Second: learn how to write the way you speak.** This can take a while, but it's a really useful skill to develop. When I write talks, I write them exactly the way I talk when I'm talking - jokes, contractions, I spell out numbers long form (262,144 is only six characters on a word count, but "two hundred and sixty two thousand, one hundred and forty four" takes about four seconds to say out loud).

I'm not writing a script - what I actually say on the day probably correlates about 50% with what I wrote - but they include all the important bits. The key statistics and figures, the important points (and how I want to phrase them), the punchlines to the jokes. Think of it like the score for a jazz standard - the intro, the melody, the refrain and the ending are all pretty clearly mapped out, but they leave structured spaces for improvisation.

Sometimes, at this point, I just start writing. Not necessarily at the beginning - I'll often start writing in the middle, I'll put in placeholders and headings, I'll move things around. If I know I'm using prerecorded video clips during the talk, I'll check the durations of these and adjust the word limit accordingly. Other times, I'll map out the talk into chunks:

* Intro: 5 minutes (5,000 characters / 950 words)
* History of radio, signal processing: 15 minutes (15,000 characters / 2,880 words)
* Digital cameras & JPEG compression: 15 minutes (15,000 characters / 2,880 words)
* Unicode, text encoding: 10 minutes (10,000 characters /  1,920 words)
* Conclusions and wrap up: 5 minutes (5,000 characters / 950 words)

I'll keep writing and editing and tweaking until I have something that's about the right length. Then I'll record myself **reading** it out loud. This is normally where a bunch of things jump out that sounded good on paper... so I'll tweak and edit some more.

Then I'll go through the whole thing and identify the points where I need a slide. Sometimes I'll talk for 2-3 minutes around a single image; sometimes I'll literally have a slide or animation for each word in a sentence. Sometimes a line or two becomes the storyboard for a piece of animation I'll create.

Then I'll fire up an empty Powerpoint presentation, and for each chunk of prose that accompanies a slide, I'll paste that chunk of text onto the Notes area on the slide and put in a one-line placeholder ("PICTURE OF ELEPHANT HERE", "ANIMATION ABOUT 16QAM HERE") as the slide heading. That'll let me start using Powerpoint's outline view to navigate around. Finally, I'll go through each slide and add the relevant images, text, titles, video clips - whatever's needed to support that part of the talk.

![image-20200709180850917](/images/posts/2020-07-09-how-i-write-timed-talks/image-20200709180850917.png)

For each slide, I'll also add a few bullet points in the speaker notes summarizing what I need to say - and what I need to **end** with for the transition to the next slide to make sense. 

Then I'll do a "dress rehearsal" - run through the whole thing, check the timings, transitions, animations, make sure my own speaker notes make sense - and I'm good to go.

![Untitled Project](/images/posts/2020-07-09-how-i-write-timed-talks/Untitled Project.gif)

<figcaption>Using <a href="https://agendadefender.app/>AgendaDefender.app</a> to keep track of time during a talk</figcaption>

When I'm actually giving a talk, I'll use a tool I built called [Agenda Defender](https://agendadefender.app) to stay on track with timing - I'll put in the actual start times for each section of the talk, and Agenda Defender draws live animated progress bars for each section of the talk so I can tell whether I need to speed up a bit, or have time for a bit of audience Q&A, maybe throw in a few jokes or stories that weren't in the original talk outline.

That's pretty much it. A couple of things to add:

* The first time I deliver a new talk, I normally don't refer to the notes at all - it's all fresh in my mind. But the notes are *invaluable* if you're invited to give the same talk again six months later and need to refresh your memory.
* Breaking down the talk structure into timed sections makes it almost "modular" - if you need to adapt a 45-minute talk to fit a 30-minute time slot, sometimes there's literally a chunk you can just cut out and tweak the rest a bit to make it flow across the gap.
* When I first started out, I used the 2-minutes-per-slide approach - for a 60 minute talk, I need to make 30 slides, then for each slide, come up with 2 minutes of content for it. I worked like that for a year or two and absolutely hated it.
* A one-hour talk is about 10,000 words. That's the same length as an undergraduate dissertation at many UK universities. Preparing talks this way is a lot of work - I normally reckon on about 30-50 hours of prep time from the first rough outline to the having the talk "stage ready."

And for the sake of comparison, this blog post is 1,156 words - it'd make a pretty good 5-minute lightning talk with a bit of trimming - and it's taken me just over 45 minutes to write it. Maybe I should just have replied on Twitter after all... :)