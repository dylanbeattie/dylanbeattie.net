---
title: "Dylan's Advent of Cool Nerd Things Day 12: Open Hardware Monitor"
layout: advent2020
author: Dylan Beattie
meta:
  og_image: /images/posts/2020-12-advent/cards/2020-12-12-aocnt-open-hardware-monitor.png
  og_description: "Open Hardware Monitor is a free open source software that monitors temperature sensors, fan speeds, voltages, load and clock speeds of a computer."
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2020-12-advent/
typora-root-url: .\..\..
categories:
    - advent2020
tool:
    name: Open Hardware Monitor
    url: https://openhardwaremonitor.org/
    summary: Open Hardware Monitor is a free open source software that monitors temperature sensors, fan speeds, voltages, load and clock speeds of a computer.
---

Until this year, my main computer was a 2014 Macbook Pro – in fact, for much of that time, it was the only computer I owned. I still use it for almost all my music production work, but when 2020 kicked in and it became apparent that there wasn't likely to be a whole lot of travel going on, I invested in building a proper powerhouse PC workstation. I wanted something that struck a very delicate balance between processing power and fan noise - it's pretty easy to get modern PCs to run ridiculously fast if you can just stop them overheating, but finding something that's fast *and* quiet is a bit trickier.

![image-20201211193353095](/images/posts/2020-12-advent/image-20201211193353095.png)

Enter Open Hardware Monitor. It's a free open source application that'll read just about every hardware sensor on any modern PC motherboard - CPU voltages, memory utilisation, various load metrics for SSD and NVRAM storage devices, and, most usefully for me, fan speeds and temperatures. I keep Open Hardware Monitor running pretty much all the time, and if one of my apps starts grinding or becomes unresponsive, a quick glance at OHM shows me whether something's overheating or not. The first couple of weeks running in my new system, I'd often have to tweak fan profiles and settings to get everything nicely balanced; these days it's all settled in quite nicely but it's still reassuring to look over at OHM and see that everything's under control.

![image-20201211194157139](/images/posts/2020-12-advent/image-20201211194157139.png)

Oh, and it's a .NET WinForms app. The BEST application development framework in the history of software development, ever, bar none. Remember when you could build apps without having a meeting to decide how to hire the design agency who would tell you what colour to make the buttons? A framework from a day when computers were beige, buttons were grey, and rounded corners were for soft play areas. And, hey, it's just been ported to .NET Core and will be part of the .NET 5 runtime, so who's laughing now, hey? Did somebody say WPF?

You can get Open Hardware Monitor from [https://openhardwaremonitor.org/](https://openhardwaremonitor.org/) - and if you fancy a bit of old-school WinForms hacking, the [source code is on GitHub](https://github.com/openhardwaremonitor/openhardwaremonitor) and released under the Mozilla Public License 2.0, so grab the code and see how we used to build apps back in the good old days. And if anyone wants to add "dark mode" to it, I'll buy them a beer... 🍺😃