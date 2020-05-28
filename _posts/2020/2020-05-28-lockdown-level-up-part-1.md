---
title: "Locking Down & Levelling Up, Part 1: New Computer Time"
layout: post
author: Dylan Beattie
meta: 
  og_description: In which Dylan builds a rather shiny computer to use for running online presentations and workshops.
  og_image: /images/posts/generic-post.png
typora-copy-images-to: ../../images/posts/2020-05-28-lockdown-level-up-part-1
typora-root-url: .\..\..
---
One of the nice things about this whole weird lockdown situation is that for the first time in a long, long while, I know exactly what my travel plans are going to be for the next few months: ***none***. Zip. Zilch. Nada. The likelihood of being asked to throw some things in a bag and jump on a plane tomorrow is... zero. Which kinda sucks, because I love travelling, but, hey – here I am. I'm at home, it looks like I'm gonna be here for a long while, and that means I have time, and incentive, to turn my home office into an ideal workspace.

Now, I have a bit of a head start here, because I do actually have a dedicated room in my house for "work". Which means it was already a combination of  office, recording studio, library and very occasional spare room, but when the lockdown hit and so many conferences and events started going online, I really wanted a proper setup for livestreaming and recording video, complete with greenscreens, studio lightning, all that kind of stuff. *(Yes, buying hardware is a coping strategy for me. This is OK.)*

Plus, with everything going online, I kept getting invited to join Slack workspaces. Compiling the .NET Framework from source while running Adobe Premiere and Far Cry simultaneously and livestreaming the whole lot to Twitch in 1080p in real time is one thing, but being in 15 Slack workspaces at the same time requires some *serious* processing power... 

*(Did I mention the bit about how buying hardware is a coping strategy? Cool. Glad we've cleared that up.)*

It's been a long while since I've had a proper workstation. Like most nerds of a certain age, I spent the 1990s and 2000s constantly tinkering with big PCs, adding RAM, upgrading CPUs and graphics cards - y'all remember 3Dfx and the Voodoo chipset? Some time back in 2015 the graphics card in my last one failed. I just copied everything across to my laptop and used that as my main machine until I got it fixed... and then never got it fixed. So step 1 of this process was to get a proper computer. I wanted to switch back to running Windows 10 as my main day-to-day operating system (and keep macOS on the laptop for music stuff); I wanted something that could drive a *stupid* number of external monitors and peripherals, and I wanted something that was blazing fast and whisper quiet.

Enter the lovely people at [QuietPC](https://www.quietpc.com/). A few hours poking around their website, and one very, very helpful phone call, and I had my ideal machine spec'ed out. After having a few too many recordings ruined by the sound of the fans on my Macbook firing up halfway through a take, I wanted something completely fanless. I got pretty close: the system I ended up with has a passive-cooled power supply and CPU cooler, I ended up adding a single 140mm BeQuiet case fan, and there's a fan on the GPU that only starts up when you drive it *hard*. Most of the time it's completely silent.

Here's the spec I went with:

- Case: [Streacom DA2 Black Full Aluminium Compact ITX Chassis](https://www.quietpc.com/st-da2)  
- PSU: [Silverstone Nightjar 450W Fanless Modular SFX Power Supply, NJ450-SXL](https://www.quietpc.com/sst-nj450-sxl)  
- CPU: [9th Gen Core i7 9700 3.0GHz 8C/8T 65W 12MB Coffee Lake CPU](https://www.quietpc.com/coffeelake-i7?product=5909)
- RAM: [Vengeance LPX 32GB (2x16GB) DDR4 2666MHz Memory](https://www.quietpc.com/corsair-vs-sodimm-2400?product=5502)
- Motherboard: [ROG STRIX B360-I GAMING LGA1151 Mini-ITX Motherboard](https://www.quietpc.com/asus-b360-i)
- CPU Cooler: [CR-80EH Copper IcePipe 80W Fanless CPU Cooler](https://www.quietpc.com/nofan-cr-80eh)
- HDD: 2 x [Samsung 970 EVO PLUS 500GB M.2 NVMe SSD, MZ-V7S500BW](https://www.quietpc.com/samsung-m2-970evo-plus)
- Graphics card: [ASUS GeForce GTX 1660 Ti DUAL OC Edition 6GB EVO Graphics Card](https://www.quietpc.com/asus-dual-gtx1660ti-o6g-evo)

I need to take a moment here to mention how awesome the folks at QuietPC are, because when I first placed the order, I picked a different CPU cooler – and they actually rang me up, explained that the cooler I'd ordered wouldn't fit in the case I'd ordered, offered an alternative, and sorted the whole thing out. That's some absolutely first-class customer service. And sure enough, a few days later, a large pile of exciting cardboard boxes arrived.

![IMG_3955](/images/posts/2020-05-28-lockdown-level-up-part-1/IMG_3955.JPG)

<figcaption>A large pile of exciting cardboard boxes.</figcaption>

Building computers is great fun. It's like the best Lego *ever*, and this one was no exception. Getting everything to fit on this system was a tiny, tiny bit fiddly... the [Streacom DA2 chassis](https://streacom.com/products/da2-chassis/) is a wonderful piece of engineering, based around an open chassis with mounting rails you can move to wherever you need them, but there's *really* not a whole lot of space inside. It all fit in the end – mainly thanks to the M.2 hard drives, which aren't really drives at all, they're SSD chips on their own circuit boards that mount directly onto the motherboard. I also had no idea just how big the fanless CPU cooler would actually be.

![IMG_3977](/images/posts/2020-05-28-lockdown-level-up-part-1/IMG_3977.JPG)

<figcaption>The <a href="https://www.quietpc.com/nofan-cr-80eh">CR-80EH Copper IcePipe 80W Fanless CPU Cooler</a> is... not small</figcaption>

I got it all put together, fired it up, installed Windows 10, everything ran beautifully - and absolutely silent. Like, ZERO MOVING PARTS silent. This worked great until I got Visual Studio and Adobe AfterEffects installed and starting putting it through its paces, at which point it crashed *hard*... turns out that a completely fanless PC is ever so slightly prone to overheating.

![IMG_3983](/images/posts/2020-05-28-lockdown-level-up-part-1/IMG_3983.JPG)

<figcaption>Oops.</figcaption>

So I compromised, and ordered [one very big, very quiet fan](https://www.bequiet.com/en/casefans/448) – it doesn't take a whole lot of airflow to keep things cool, and there's an ASUS utility called Fan Xpert that I used to create a fan profile, so it'll monitor the CPU temperature and automatically spin up the fan when required.

![image-20200519105650432](/images/posts/2020-05-28-lockdown-level-up-part-1/image-20200519105650432.png)

<figcaption>Creating a fan control profile using Asus Fan Xpert</figcaption>

That seems to have done the trick – it's been running stable for 6 weeks now; I've been using the rather good [Open Hardware Monitor](https://openhardwaremonitor.org/) *(which, by the way, is [written in C# and .NET](https://github.com/openhardwaremonitor/openhardwaremonitor)!)* to keep track of all the various temperatures and things, and haven't had any more crashes or CPU temperature errors.

![image-20200519112125667](/images/posts/2020-05-28-lockdown-level-up-part-1/image-20200519112125667.png)

<figcaption>Temperature readings over a typical 24 hour cycle. The CPU is the blue one.</figcaption>

In the next post, I'll talk you through how – and why – I'm using it to drive six monitors, four cameras and four microphones, and how I ended up building a bespoke computer desk to put it all on.