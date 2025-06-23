---
title: "The ONYX BOOX Note Air: Android 10.0 on an E-Ink Tablet"
date: 2021-06-11T12:00:00
layout: post
author: Dylan Beattie
meta:
  og_image: /images/posts/2021-06-11-onyx-boox-note-air.jpg
  og_description: "In which Dylan gets quite excited about an e-ink tablet running Android 10.0 that supports Bluetooth keyboards."
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2021/
typora-root-url: .\..\..
redirect_from: "/boox"
---

I write a lot. Conference talks, blog posts, articles, song lyrics, training material – almost everything I do starts off as words. Maybe the odd heading or bullet list, but really it's just getting a few thousand words out of my head and into an Evernote document, where I can review, edit, and eventually do something useful with them. For a long while, I've been looking for something that does for writing what Kindle does for reading. Something that's digital, connected, lightweight, syncs to the cloud - but with an e-ink display I can use outdoors, in bright sunlight, and that doesn't feel like using a computer. 

There are some wonderful handwriting devices out there – I tried out a [reMarkable](https://remarkable.com/) tablet a few years ago and was blown away by how good the UX was. But I'm one of those people who vastly prefers typing to handwriting. I own many pencils, and an embarrassing collection of notepads, sketch pads and jotters, but when it comes to getting words out of my head and onto a page, give me a QWERTY keyboard every time. *(I recall reading that Neal Stephenson wrote all 2,600 pages of the Baroque Cycle [longhand, using a fountain pen](https://www.josephpatrickpascale.com/post/physical-writing-process-pt-3), and I get carpal tunnel syndrome just* thinking *about that.)*

I've owned every generation of Kindle, and loved them all dearly, but they're closed devices. They run an "experimental" web browser that's just about good enough to sign in to airport Wi-Fi if you're patient, but there's no filesystem access, no app store, no way to connect an external keyboard or install your favourite writing app. Ditto the reMarkable – although there's an active hacker community working on extending the capabilities of those devices, they're still a closed platform and for me that's a deal-breaker. 

Last week, after a particularly bright and sunny day which I spent indoors, with the curtains drawn, because I had work do to and every screen I own is so [super-shiny and reflective](https://en.wikipedia.org/wiki/Black_Mirror_(disambiguation)), I asked on Twitter for any recommendations for an e-ink device that supported an external keyboard, and [Scott Hanselman](https://twitter.com/shanselman) pointed me to a [review he'd just done](https://www.youtube.com/watch?v=lJWwlXS_cTM) comparing the reMarkable 2, the ONYX BOOX Note Air and the ONYX BOOX Nova 3. The ONYX BOOX Note Air *(which I shall refer to hereafter as just the Note Air)* looked like exactly what I was after, and, well, it's been a rough couple of weeks and buying gadgets is one of my coping mechanisms, so I ordered one from Amazon. I've been playing with it for a couple of days now and it's delightful.

**Check out the full video review at [https://youtu.be/LaL8TQ-PzYs](https://youtu.be/LaL8TQ-PzYs) to see all the various features in action:**

<iframe  class="youtube" width="640" height="360" src="https://www.youtube.com/embed/LaL8TQ-PzYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### TL;DR:

* It's an e-ink tablet that runs full Android 10.0, and costs about £420 here in the UK.
* It's not Google "Play Protect" certified, so you need to jump through a few hoops to get the Google Play store on it.
* Most apps *run*; whether they're usable or not all depends how well they handle the e-ink display.
* Bluetooth keyboards work just fine.
* Bluetooth audio works beautifully, and it'll run Spotify.
* The pen stylus works brilliantly on the built-in Notes app, but most third-party apps have too much display lag to use with handwriting.
* **Evernote**, **Notion**, **Microsoft Word** work (as long as you're typing rather than handwriting)
* **Google Keep** and **Microsoft OneNote** are unusable.
* Battery lasts about 15 hours - that's using various apps, with Bluetooth and Wi-Fi enabled the whole time. A full charge takes  about 2 hours.

![2021-06-11-onyx-boox-note-air](/images/posts/2021/2021-06-11-onyx-boox-note-air.jpg)

### First Impressions

When you first open the box, it's clear ONYX has paid a lot of attention to first impressions. The packaging is seriously classy, the device itself looks amazing - 6mm thick, fantastic build quality, and the e-ink screen is stunning. It's crisp, it's smooth, it's perfectly even without any rogue bright spots.

> *This is the point where I should confess that this is the first Android device I have ever owned. I've run Windows, Linux, macOS, and multiple iPhones and iPads, but until today I've never actually owned a device that ran Android. So on one hand, I have absolutely no idea where anything is or how any of it works. But, on the other hand, the Note Air runs a heavily modified version of Android with a bunch of bespoke apps and stuff, so perhaps that's not such a bad thing.*

It also has a rather nice feature whereby the display has two separate backlights that you can adjust independently; one has a bluish light, one is more red, so you can adjust the colour balance of the display to get a more relaxed reddish light if you're reading before bedtime, for example. It's hard to capture on video (one of the tricky things about reviewing and comparing e-ink devices is that looking at picture of an e-ink display online is nothing like looking at the display itself in real life) but here's a screen recording where I've animated the colour balance to show you how it works:

<video width="720" height="360" controls>
  <source src="/images/posts/onyx-boox-brightness-backlight.mp4" type="video/mp4" />
</video>

### Second Impressions

Once you get over the initial wow factor, there's a definite moment of "hang on a second... this smells a little odd". The Note Air includes an "App Store", but it's not the official Google Play store, and the first time you fire it up you get a rather unsettling message about how "all of the proposed apps in the App Store are collected from the Internet, for study reference only" - and when the first app on that list is *Amazon Kindle for Andorid9\10* [sic] the alarm bells start ringing just a little – mainly since most of the stuff I actually want to do with this tablet requires signing in to assorted cloud providers, and, well, I'm not 100% OK with typing my Google or Amazon credentials into a device that offers the *Kindle for Andorid9\10* app "for study reference only".

<img src="/images/posts/image-20210608173658080.png" alt="image-20210608173658080" style="zoom:33%;" />



I did a little digging and [found some instructions on how to enable the Google Play store](https://blog.the-ebook-reader.com/2019/03/19/how-to-enable-google-play-app-on-onyx-boox-ereaders-video/). First, you need to enable the Google Play framework - there's an option for this in the device settings. I hit the button, a dialog popped up saying "Checking info...", and then nothing happened for fifteen minutes - but when I got bored of waiting and reset the device, when it booted back up, the Google Play store had appeared in the Apps menu. I opened it up and got another warning - "This device isn't Play Protect certified". Now, I'm guessing that's some kind of Google certification program that ONYX hasn't enrolled in; the workaround is to sign in to your Google account, and manually register the device ID as a trusted device.

The Note Air actually includes an interface for doing this - but to use it, you need to enter your Google credentials, and the form provided to do that is part of the Air Note UI – which means no address bar, no information about where they're going, and no way to view or verify any certificate information. I wasn't entirely happy with that, so rather than registering from the device itself, I opened up [https://www.google.com/android/uncertified/](https://www.google.com/android/uncertified/) on my desktop, signed in to my Google account, typed in the GSF ID of the device, waited a few minutes for the cloud to catch up, and I was in business.

### Using the Note Air as an e-reader

Once I'd installed the Kindle app from the Play Store and signed in to my Amazon account, it worked flawlessly. There's not a huge amount to say beyond that - it just works. 

### Handwriting support and the Notes app

The Note Air ships with a handwriting stylus. It's an [EMR stylus](https://essentialpicks.com/emr-stylus-how-wacom-pens-work/) (aka a "Wacom stylus"); it's powered by an electromagnetic field generated by the tablet itself, so it doesn't require any batteries, and it works incredibly well. Used with the built-in Notes app, it provides a really immediate, tactile experience, that feels  closer to digital paper than anything I've ever tried.![Doing the Guardian cryptic crossword using the Notes app on the ONYX BOOX Note Air tablet](/images/posts/2021/Screenshot_20210610-174008.png)

The acid test of handwriting devices for me is whether I can use them to do a cryptic crossword, and this is the first device I've used that just works. It takes a bit of tweaking - to get to this point, I had to download the PDF of the puzzle from the Guardian website, open it up in Acrobat, grab a screenshot, and then insert that screenshot as an image into the Notes app – but once that's done, it just feels like solving the puzzle on digital paper. The e-ink means it works outside in bright sunlight, the backlight means you can use it in the dark as well. The images and screenshots here really don't do justice to how responsive it feels actually using the device.

> One thing that I noticed is that the Note Air uses some sort of two-pass rendering. When you're using the built-in Notes app with the stylus, lines and pen strokes appear immediately, but if you're screen-casting or capturing a screen recording, the same pen strokes don't appear in the recording for a few seconds. My guess is that there's some kind of immediate feedback system built into the device itself that's running on top of the Android display subsystem, so that when you move the pen, your line shows up on the screen immediately - before the operating system even knows you've drawn it.
>
> **The downside of this is that it means third party apps like OneNote that aren't specifically optimised for the device just don't work with the stylus for any kind of handwriting or sketching**.

### Writing with Evernote and a Bluetooth keyboard

The main thing I want to do with the Note Air is writing; I've previously used my iPad with a Logitech K380 Bluetooth keyboard and Evernote to write all kinds of things, so I wanted to do a side-by-side comparison of the two. Here they are, literally side by side, outside in my garden in bright sunshine:

<img src="/images/posts/2021/IMG_0595.JPG" alt="Side-by-side photo of the ONYX BOOX Note Air alongside an iPad" />

The iPad is running at full brightness there - and it's completely unusable; it's just too reflective. The Note Air, on the other hand, is just like paper: bright sunlight makes it *easier* to read. 

Like most apps, the Evernote UI is a little hit and miss – app menus with lots of nice photography and animation are never going to work well on this kind of display. But once you open the document you're working on and make it full-screen, it works just fine. 

### Other Note-Taking Apps

I tried out a couple of other third party note taking apps to see how well they work with the e-ink display:

**Notion:** Works nicely with an external keyboard hooked up; I could easily see myself using it as an alternative to Evernote if I had to. 

**Microsoft Word:** works pretty well. I downloaded the Office 365 edition from the Play store, and found it very usable apart from some UI glitches, like the "new document" icon being a white page, with a pale grey hairline outline, on a white background… on the e-ink display it just looks like blank space. But once you know where it is, it's fine :)

**Google Keep notes:** Nope. It works, but the way it renders text onto the e-ink display is so poor as to be illegible.

**Microsoft OneNote:** OneNote was by far the worst of the apps I tried – it's just completely incompatible with the e-ink display. The UI is illegible (lots of white-buttons-on-white-backgrounds), and as discussed above, the stylus doesn't really work with third-party apps so you can't use any of the handwriting features. (Well, you can, but you can't see what you're writing until you finish writing it, which means it's effectively unusable.)

###  Termux, vim, ssh, nodeJS and git, oh my!

The Note Air supports [Termux](https://termux.com/), a teminal emulator and Linux environment for Android – which means you can open a terminal, install nodeJS, Python, Ruby, git, vim; pretty much any text mode applications that will run on Linux. And it supports SSH, so you can spin up a Linux VM in the cloud, take your Note Air to the park or the beach, and ssh into the cloud from there – and yes, because it's e-ink, bright sunlight isn't a problem.

*(Did I mention it works in direct sunlight? It works in direct sunlight!)* 🌞

### Music, video, and screen casting to ChromeCast

The Note Air has a built-in speaker and microphone. They're nothing particularly special – the speaker is perhaps a little louder and clearer than the speaker in most smartphones, but we're not talking high fidelity audio here. It supports Bluetooth audio, though, so you can pair an external speaker or Bluetooth headset; I've installed Spotify on mine; the UI looks a little odd but it's usable and plays music just fine.

As for video: you're probably wondering why anybody would watch video on a device that can just about manage 8 shades of grey at 4 frames per second… but because the Note Air runs Android, it can cast your display to a Google ChromeCast, which will give you full HD HDMI, in colour, on an external monitor or TV. I wouldn't use it for anything particularly interactive – there's a tiny bit of latency on the video signal – but for streaming Netflix or Amazon Prime to the TV in your hotel room, it works just great.

### Remote Desktop

There's an official Microsoft Remote Desktop client for Android, so I installed that just to see what it could do – and again, I was surprised at how usable it is. I'm writing this right now in Typora, via an RDP connection to my main Windows 10 machine, and it's working remarkably well. Enabling Windows' "high contrast" display mode makes a huge difference here, especially if you have dark mode enabled; those lovely muted navy-blue-on-midnight-blue colour schemes that look so good on a 32" TFT aren't gonna work here, but nice bold black on white works just fine.

![Visual Studio 2019 running via Remote Desktop on an e-ink display](/images/posts/2021/IMG_8329.JPG)



### Miscellany

* Yes, it runs Doom. Is it playable? Not remotely. It's hard to dell the difference between a wall and a monster when you only have 8 shades of grey at 4fps. But it runs.
* A few folks on Twitter asked about using it for sheet music: it'll render PDFs just fine, and I tried it out with a [PEDPro AirTurn Bluetooth footpedal](https://www.airturn.com/products/airturn-pedpro) and it worked perfectly.
* Charging is via a single USB-C port, which you can also use to connect peripherals. I hooked up a powered USB hub and was able to run a wired keyboard and external HD quite happily. Note that the USB-C port appears to support either charging or data, but not both - so if you're taking an external HD on the road, you're going to be running the drive off the Note Air' internal battery, which probably isn't a good idea. 
* WiFi and Bluetooth both seem pretty solid; there's no SIM card support so for mobile internet you'll need to tether to your phone or rely on public Wifi.
* The screen scratches easily, so be really careful about protecting it with something when you're carrying the device around.
* The stylus attaches to the edge of the device with magnets, but it's not particularly secure and if you lose it you're looking at £50 for a new one. The stylus has a replaceable nib (£18 for 5 from Amazon) since they apparently wear down in normal use. When I'm holding a pen in my hand I tend to, y'know, scratch my nose with it, twiddle it between my fingers, that kind of thing, and I actually managed to accidentally remove the nib from mine a few times and drop it; the nibs are extremely tiny and the stylus doesn't work without them, so might be worth carrying a few spares just in case.

### Conclusions

First off, it's a huge amount of fun. I've had a blast setting this thing up, seeing what I can get it to do. For specific applications – handwriting notes, crosswords, Evernote, reading books via the Kindle app – it works very, very well, but the vast majority of apps in the Android ecosystem aren't even tested on e-ink displays, let alone optimised for them, and it shows. For travelling, the Note Air probably replaces the Kindle + iPad combo that I used to carry around with me everywhere, but I'll still be taking a laptop and a smartphone along for the ride.

This is still very much an expensive gadget for people who like expensive gadgets and aren't afraid to tinker with them. Some things work even though they probably shouldn't, like Windows Remote Desktop; other things, like OneNote, should in theory work really nicely with this kind of device but in practice are completely unusable. There is also clearly a whole world of applications out there – music composition springs to mind — that could work beautifully on this kind of device if they were designed for it. 

It's an interesting device, though. Being just about old enough to remember the days of connecting home computers up to a portable black & white TV, there's a certain amount of nostalgic novelty to it, and if you think back to the 4-colour LCD displays in the earliest laptops, this is infinitely better than those ever were:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Very cool!<br><br>And, you know… That screen refresh is possibly faster than my first Mitac 386 laptop had on its greyscale lcd 😂</p>&mdash; Stacy Cashmore (@Stacy_Cash) <a href="https://twitter.com/Stacy_Cash/status/1402664436398276608?ref_src=twsrc%5Etfw">June 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The key question I always ask about gadgets is: if I lost this one, would I buy another one? I'm not sure, but only because I think within a year we'll probably see something twice as good for half the price. I'm looking forward to seeing what happens with e-ink over the next few years. ONYX are already shipping a colour e-ink device, the [BOOX Nova3 Color](https://www.boox.com/nova3color/), and I'm sure it's only a matter of time before the industry fixes the problems with ghosting and refresh rate and we're looking at e-ink displays that can handle 8-bit colour at 24 fps.

But, hey – summer is here, the sun is shining, the prospect of being able to sit outside in the sunshine and get a little writing done at the same time is too good to pass up, and this is the best device I've seen yet for doing that.

### Links

* [My YouTube video review](https://youtu.be/LaL8TQ-PzYs) of the ONYX BOOX Note Air
* [www.boox.com/noteair/](https://www.boox.com/noteair/ ) - ONYX BOOX Note Air official product page: 
* [/r/Onyx_Boox](/r/Onyx_Boox) - Reddit community all about Boox devices.
* [Scott Hanselman's video review](https://youtu.be/lJWwlXS_cTM) of the ONYX BOOX Note Air, the BOOX Nova 3, and the reMarkable 2
