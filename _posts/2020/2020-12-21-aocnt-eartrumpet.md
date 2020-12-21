---
title: "Dylan's Advent of Cool Nerd Things Day 21: EarTrumpet"
layout: advent2020
author: Dylan Beattie
meta:
  og_image: /images/posts/2020-12-advent/cards/2020-12-21-aocnt-eartrumpet.png
  og_description: "Ever wished you could have Zoom on one audio device, Spotify on another and YouTube on a third? EarTrumpet is the answer."
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2020-12-advent/
typora-root-url: .\..\..
categories:
    - advent2020
tool:
    name: EarTrumpet
    url: https://github.com/File-New-Project/EarTrumpet
    summary: EarTrumpet is a powerful volume control app for Windows.
---

In the beginning was the PC, and the PC had a speaker, and the speaker went "beep". And the PC users listened to the Amiga 500s and Atari STs, with their glorious 8-bit FM synthesizer chips, and got a bit jealous. And so we saved up and bought an Adlib card so that we could bask in the luxurious musical possibilities of 9 channels of FM synthesized music. And then there was the SoundBlaster II, which had an FM synthesizer and a PCM chip for playing digital sampled audio *(speech! actual actors! [in a computer game](https://en.wikipedia.org/wiki/Wing_Commander_II:_Vengeance_of_the_Kilrathi)! amazing!)*... and then there was wavetable synthesis, and SoundFonts, and the Gravis Ultrasound, and then sometime in the late 1990s PC manufacturers finally figured out that audio was a Thing People Wanted, and now every PC, laptop and motherboard on the market comes with some sort of audio capability, and most of the time you don't ever think about it beyond turning the volume up and down and maybe pairing some Bluetooth headphones.

A few years back, Windows worked out that a lot of folks were using their PC to make voice & video calls, so they added a feature that let you use one device for normal audio (music, games, etc.), and a second device for calls (a "communications device"). For most people, that works pretty well, but if you're an audio nerd - or you've just got more than two audio devices hooked up at the same time - you've probably found yourself wishing you had a little more control. And if you're doing any kind of remote training or live streaming, the ability to route different audio through different channels is an absolute lifesaver... we've all heard the horrible echo you get when someone's on a Zoom call on their speakers and you hear your own voice a second or two after you've said something; imagine that, only it keeps echoing and getting louder every time and you have no idea what button you press to make it stop, and you've got some idea what can go wrong. Imagine you're doing a remote workshop; you've got a PowerPoint deck with some audio in it. You need to hear the audio from your presentation; you need to hear the other people on the call, and you want to hear Windows desktop audio so you can still get chat notifications and stuff. Your audience need to hear your voice, and your presentation audio, but you don't want them to hear your chat notifications, and you definitely don't want them to hear themselves. That's the "easy" setting. Now imagine a presentation with audio in it, but now you have a co-presenter who's on a Zoom call with you and your audience are watching live on YouTube, so you need to make sure you're routing the Zoom audio into OBS to stream it to YouTube, and your co-presenter can see your presentation and hear the audio. Oh, yeah, and the YouTube stream has 25 seconds of latency so if you make a mistake, you won't find out about it for 25 seconds, then the YouTube chat will suddenly fill up with messages like "AUDIO PROBLEMS! BAD ECHO!" – and will CONTINUE to do this for another 25 seconds because that's how long it takes the audience to see that you've noticed the problem and you're fixing it... 

And... breathe. Let's meet EarTrumpet. EarTrumpet is a volume control app – all it really does is let you pick which apps play through which audio devices, and how loud those apps should be. It's technically possible to do this via the Windows device settings if you know where to find it, but EarTrumpet is simple, it works, and for doing anything complicated with multiple audio devices, it's an absolute lifesaver:

![image-20201221115454144](/images/posts/2020-12-advent/image-20201221115454144.png)

What's particularly useful is being able to pin any app to a specific audio device – for example, if you always want Zoom to use your headset, regardless of what else you're doing:

![image-20201221121008271](/images/posts/2020-12-advent/image-20201221121008271.png)

Finally, one thing to remember – not just with EarTrumpet, but with any device that can mute audio: it's way too easy to turn something way down, forget about it, and then come back to it next week and be absolutely baffled as to why your audio isn't working. A few weeks ago I used EarTrumpet to mute my web browser. Worked beautifully. A few days later... "why isn't YouTube playing any sound? What? I AM CONFUSED..." until I remembered I'd turned it off. But to be fair, I've done the same thing before with guitar audio pedals ("what's wrong with my amplifier? Maybe it's the cable. Maybe my guitar is broken. Maybe all my guitars and cables are broken. Oh, no, hang on, that pedal is turned all the way down... d'oh.")

EarTrumpet is slightly unusual, in that it doesn't actually have a website. Like many of the things I've shared during #nerdvent, the code is open source and it's [available on GitHub](https://github.com/File-New-Project/EarTrumpet), but to actually install it you can either [download it from the Microsoft Store](https://www.microsoft.com/en-gb/p/eartrumpet/9nblggh516xp?activetab=pivot:overviewtab), or get it via [Chocolatey](https://chocolatey.org/) (`choco install eartrumpet`)

Oh, and if you want to know where the synthwave wallpaper came from, it's [Falling Sun by Michal Kváč, via DeviantArt](https://www.deviantart.com/kvacm/art/Falling-Sun-791350935).



