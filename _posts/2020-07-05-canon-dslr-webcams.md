---
title: "Using Canon DSLR Cameras as Webcams"
date: 2020-07-05T12:00:00
layout: post
author: Dylan Beattie
meta: 
  og_description: Notes on which Canon DSLR cameras will work with their EOS Utility software.
  og_image: /images/posts/2020-07-05-canon-dslr-webcams/card.png
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2020-07-05-canon-dslr-webcams
typora-root-url: .\..\..
---

I love Canon DSLR cameras; my main DSLR at the moment is an EOS 700D *(which is sold as the Rebel T5i outside the UK, for reasons I will never, ever understand)*, which for me hits the perfect sweet spot between affordability and quality. And, with the whole lockdown thing going on, I've been spending a lot of time looking for ways to use gear I already own to produce better live streams and studio recordings.

If you've read [Scott Hanselman's post](https://www.hanselman.com/blog/GoodBetterBestCreatingTheUltimateRemoteWorkerWebcamSetupOnABudget.aspx) from August last year about remote working, you'll know that the best webcams aren't actually webcams at all - they're proper cameras, running through some kind of HDMI > USB converter like the Elgato Camlink. I've been trying to pick up one of these for a while, but they've been out of stock everywhere since March, so instead I managed to track down an [Elgato Game Capture HD60 S](https://www.elgato.com/en/gaming/game-capture-hd60-s), which does kinda the same thing. 

Well, turns out my beloved Canon EOS 700D doesn't *quite* work as a webcam. Let's clarify that. Out of the box, it doesn't work at all - there's no way to produce what's called "clean HDMI" - i.e. a video stream with no overlays, menus, focus grids, or anything. 

But, it turns out there's an open source firmware upgrade for Canon DSLR cameras called [Magic Lantern](https://magiclantern.fm/). Now, this is some seriously gnarly stuff - if you're not happy downloading binaries from a website and then running them through the firmware upgrade routine on your DSLR camera, then it is probably not for you, and it is absolutely possible to brick your camera by fooling around with this kind of thing. But hey, nobody ever found fortune and glory by following the terms and conditions, right?

Magic Lantern actually worked really well for me. It allows me to switch off all the overlays and focus grids to get a clean HDMI signal out of the EOS 700D - and with a 50mm f1.8 lens, it looks fantastic. But it's not perfect. I used it for a live streamed gig last night, and it worked beautifully for about the first 45 minutes... then the shutter cycled (no idea why), and when it came back after about a second, there were some weird letterboxing artefacts around the video frame. Finally, after about 75 minutes of streaming, it stopped autofocusing completely. All temporary - turning it all off and on again got it all back to normal - but not ideal for a live broadcast.

![vlcsnap-2020-07-05-19h28m24s890](/images/posts/2020-07-05-canon-dslr-webcams/vlcsnap-2020-07-05-19h28m24s890.png)

<figcaption>Working beautifully...</figcaption>

![vlcsnap-2020-07-05-19h29m02s746](/images/posts/2020-07-05-canon-dslr-webcams/vlcsnap-2020-07-05-19h29m02s746.png)

<figcaption>...then some weird letterboxing...</figcaption>

![vlcsnap-2020-07-05-19h29m17s571](/images/posts/2020-07-05-canon-dslr-webcams/vlcsnap-2020-07-05-19h29m17s571.png)

<figcaption>...and finally the focus grid appeared in shot, and wouldn't go away. (And then the autofocus stopped working.)</figcaption>

Of course, having seen just how good it looks when it's working, I'm now in the market for something that looks that good but doesn't suffer from the same reliability issues. **Just so we're perfectly clear: this is absolutely not any kind of problem with the EOS 700D. I'm trying to use it for things it was never, ever designed to do, and the fact it worked at all is pretty remarkable!**

So, there's two options. One is to get a DSLR that is known to produce good clean HDMI for indefinite periods - there's a [list of these over on Elgato's website](https://www.elgato.com/en/gaming/cam-link/camera-check). 

The other is that a few months ago, Canon's engineers released [a beta of a USB utility](https://www.usa.canon.com/internet/portal/us/home/support/self-help-center/eos-webcam-utility/) that would allow you to use certain Canon DSLR and compact cameras as webcams directly, via the camera's onboard USB interface. This is officially only supported in the United States, which isn't a big deal - except that, for some ridiculous reason, many Canon DSLR cameras are sold under different names in the UK than they are in the US, and the [list of supported models](https://www.usa.canon.com/internet/portal/us/home/support/self-help-center/eos-webcam-utility/) refers only to the US model names.

So I've spent a couple of hours pulling together the list of supported cameras, adding the UK model names, cross-referencing it with the [Elgato camera checklist](https://www.elgato.com/en/gaming/cam-link/camera-check), and, just for good measure, adding in the Canon recommended retail price and a link to Amazon for those cameras that are currently available. 

Here's what I found: 

{% include_relative canon-eos-data.html %}

I was hoping to find a new camera body for around £300 that will work with my existing lenses, supports the new Canon EOS Utility software, and is verified for use with the Elgato HDMI capture devices; there's no clear winner, but the EOS 2000D and EOS 4000D aren't listed either way by Elgato so I will do some digging, see what I can find out. I'll keep you posted. ;)

*Oh, and if anybody has any idea at all why Canon decided to give their cameras different names in the UK and the US, I'd love to know...*




