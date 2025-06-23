---
title: "Recording Meetups"
date: 2024-02-20T12:00:00
layout: post
author: Dylan Beattie
meta:
  og_image: /images/posts/2024/2024-02-20-recording-meetups.jpg
  og_description: "How I record presentations at the London .NET User Group"
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2024/
typora-root-url: .\..\..
---

For the last few months, I've been recording the talks at the London .NET User Group on video so we can post them on YouTube after the event. The videos are online at [https://www.youtube.com/@LondonDotNet](https://www.youtube.com/@LondonDotNet), and I've had some questions about the setup I use to record them. Some from interested people looking to do something similar at their own events, some from people who show up early while I'm still setting up and go "wow, what's with all the shiny things?" So here's how it works.

![dylanbeattie-recording-meetups](/images/posts/2024/dylanbeattie-recording-meetups-1708431475830-8.png)

*(I made a diagram! Want it as a PDF? Here you go: [dylanbeattie-recording-meetups.pdf](/assets/dylanbeattie-recording-meetups.pdf).)*

Short answer:

- Canon EOS M200 camera
- Elgato Camlink
- Elgato Game Capture HD60S+ 
- AnkerWork 650 wireless microphones
- OBS Studio on an M1 Macbook Pro 
- Lots of HDMI and USB cables

For the long answer: the key here is **minimal post-production**. When it comes to editing two hours of video footage, "tomorrow" turns into "later" turns into "never" with astonishing regularity. Other than editing out any major technical problems, I want to leave the meetup with a video file that's ready to upload to YouTube.

I also don't want presenters to have to do any more than plug in HDMI, clip on a microphone, and go. I've done a few events where I've had to install drivers or sharing software for their "wireless smart display" system: I really don't like doing that, and I'm not going to ask our presenters to do it either.

In terms of portability, I assume the venue will provide HDMI for the presenter's slides, and there's a power socket available to plug everything in. Everything else needs to fit in a backpack and set up in less than fifteen minutes.

### **Camera: Canon EOS M200 + Elgato Camlink**

The camera I use is a [Canon EOS M200](https://www.canon.co.uk/cameras/eos-m200/). It's a mirrorless SLR with clean HDMI out: what this means in practice is you can plug it into an [Elgato Camlink](https://www.elgato.com/uk/en/p/cam-link-4k), plug that into your laptop, and it shows up as a webcam - albeit a really, *really* good one. The camera runs off a USB power supply so I don't have to worry about running out of battery halfway through a recording.

> Bad news: Canon has [apparently discontinued the M200](https://www.canonrumors.com/canon-eos-m-has-been-quietly-discontinued/), along with the rest of the M series, in favour of the [Canon EOS R](https://www.canon.co.uk/cameras/eos-r/) series.  This makes me sad, because the M200 is a wonderful camera.
>
> Good news: Elgato maintain a list of supported cameras, so any of the cameras on this list will do the trick:
>
> [https://www.elgato.com/uk/en/s/cam-link-camera-check](https://www.elgato.com/uk/en/s/cam-link-camera-check)

If I can, I'll bring a proper camera tripod along. If not, I'll bring a [SmallRig "magic arm" clamp](https://www.amazon.co.uk/Version-SMALLRIG-Magic-Articulating-3-3lb/dp/B076HLBZDX/) and find a convenient chair, lamp, window frame or something to clamp it to. 

### **Slides: Elgato Game Capture HD60S+**

To capture the speaker's laptop, I use an Elgato Game Capture HD60S+ (now superseded by the [Game Capture HD60 X](https://www.elgato.com/uk/en/p/game-capture-hd60-x)) This works like a Camlink - turns HDMI into a USB video signal - but it has an HDMI output that uses passthrough, so I can plug it in between the speaker's laptop and the venue's projector/screen and then tap a USB feed off the side into my laptop.

### **Audio: Ankerwork M650 Wireless Microphones**

The first time I tried this, I used a RØDE shotgun microphone attached to the camera, but the audio quality wasn't great, so I invested in a set of [AnkerWork M650 wireless microphones](https://uk.ankerwork.com/products/a3320-m650-wireless-microphone). These are wonderful and amazing and excellent and I can't say enough good things about them, but I'm a big fan of Anker gear, and folks I know who use the [RØDE Wireless ME](https://rode.com/en/microphones/wireless/wireless-me) or the [DJI MIC system](https://www.dji.com/uk/mic) say the same things about their setup.

![img](/images/posts/2024/A3320011_TD01_V1_2048x.jpg)



### **Recording: Macbook Pro + OBS Studio**

I run all these devices into an M1 Macbook Pro, and then record everything using OBS Studio.

Set OBS to record MKV format, and enable "automatically remux to MP4" in Settings > Advanced.

> If you record direct to MP4, a system crash will leave you with an unusable video file, but MKV files aren't as widely supported, so recording to MKV and then automatically remuxing to MP4 gives you the best of both worlds.

![2024-02-20_11-39-52 (1)](/images/posts/2024/2024-02-20_11-39-52 (1).png)

This is where the "minimal post-production" bit kicks in. I've got four scenes set up in OBS:

**Camera Only:**

![](/images/posts/2024/2024-02-20_11-08-57.jpg)

**Slides + Camera:**

![2024-02-20_11-09-02](/images/posts/2024/2024-02-20_11-09-02.jpg)

**Camera + Slides**:

![2024-02-20_11-09-11](/images/posts/2024/2024-02-20_11-09-11.jpg)

**Slides Only**:

![2024-02-20_11-09-18](/images/posts/2024/2024-02-20_11-09-18.jpg)

Plus, before the meetup I'll make a title slide for each speaker and create a scene with that title slide plus the microphone, which means you can record audio over the title - great for introductions and preamble:

![2024-02-20_11-09-22](/images/posts/2024/2024-02-20_11-09-22.jpg)

> Note that "Slides + Camera" has the slides on the left, and "Camera + Slides" is the same thing, but with the slides on the right. Composition works better if the speaker is facing towards the middle of the frame, so which one of these gets used depends on where the camera is in relation to the speaker on the night.

OK, showtime. Plug everything in, get it working, probably reboot a couple of things because HDMI can be tricksy.

Mic up your presenter, and check the audio **in every scene** - nothing worse than recording the whole event and finding out later that one of your presents wasn't recording any sound. Ask your speaker to stand where they're going to stand, check the camera angle. I clip the other mic on to myself so I can introduce the speaker, repeat questions, etc. and have it come through on the recording.

Then bring up the title slide, hit Record, introduce the talk, and then switch scenes as you go, and all being well, you'll end up with a MP4 file you can upload straight to YouTube when you get home.

**Shopping List:**

* [Canon EOS M200 digital camera](https://www.amazon.co.uk/Canon-M200-EF-M-15-45mm-3-5-6-3/dp/B07YBMYPYR) (about £500)
* [USB power + dummy battery kit for Canon EOS M200](https://www.amazon.co.uk/5V-8-4V-ACK-E12-Mobile-Coupler-Battery-DR-E12/dp/B07P7MW7GY) (£17.99)
* [Elgato Camlink](https://www.amazon.co.uk/Elgato-Cam-Link-Broadcast-camcorder/dp/B07K3FN5MR) (£109.99)
* [Elgato Game Capture HD60 S+](https://www.amazon.co.uk/Elgato-External-Capture-1080p60-ultra-low/dp/B07XB6VNLJ) (£299.99)
* [AnkerWork M650 Wireless Lavalier Microphone](https://www.amazon.co.uk/AnkerWork-Microphone-Cancellation-Transmission-Conference-Black/dp/B0BQMGJG7V) (£179.99)

**Cables:** 

5 metres seems to be the sweet spot for cable length. Too short, and you're going to be in the way. Too long and you get weird signal problems, or no signal at all.

* MicroHDMI > HDMI cable (camera HDMI OUT > Camlink HDMI)
* Regular HDMI cable (presenter laptop > GameCapture IN)
* USB-C cable (GameCapture OUT > OBS)

Total investment if you're starting from scratch will come to just over £1200.

### How much?!

OK, you don't need to spend that all in one go. Get a copy of Reincubate Camo and use your phone instead of buying an SLR camera + Camlink. For slides, you can pick up cheap HDMI splitter and an HDMI > USB capture gizmo on Amazon for about £20 each, and see how you go.

I wouldn't skimp on microphones, though: as they say in Hollywood, "your ears never blink", and you can probably get away with significantly worse video quality if the audio is up to scratch.

Here's two clips I recorded using the old camera-mounted RØDE shotgun mic:

* [Guy Royse: Tracking Aircrafft with Redis and Software-Defined Radio](https://www.youtube.com/watch?v=u2wmcxezm2o) 
* [Eirik Tsarpalis: What's New in .NET 8](https://www.youtube.com/watch?v=qYrF1Q-PjPs)

and here's some recorded with the AnkerWork mics:

* [Eli Holderness: A Brief History of Data Storage](https://www.youtube.com/watch?v=QS1fx86U_V0)
* [Martin Costello: What's New in .NET 8](https://www.youtube.com/watch?v=nA2kPF4o3Yc)
* [Mark Rendle: How JavaScript Happened](https://www.youtube.com/watch?v=E4Vt88bQs64)

So, that's your lot. Good luck with it, and let me know if you found this useful.





















