---
layout: post
title: 'From the Twitter Archives: npm install skynet'
date: 2026-03-30T23:23:00
author: Dylan Beattie
---
> I originally posted this as a [Twitter thread](https://twitter.com/dylanbeattie/status/976761360897003521) in March 2018. It went viral, probably because Charles Stross quote-tweeted it with the comment "This thread. You read!" - yes, _that&#32;_Charles Stross. 😮 It was at https://twitter.com/i/web/status/976852582084808704, and I bookmarked it 'cos CHARLES STROSS TOLD PEOPLE TO READ MY STORY, but he has since deleted his Twitter account and so it's not there any more. I don't know if Mr Stross is personally responsible for the page that now lives at https://x.com/cstross, but I heartily endorse the sentiment expressed thereon: **"Fuck You, Elon Musk"**)

When npm was first released in 2010, the release cycle for typical nodeJS package was 4 months, and npm install took 15-30 seconds on an average project. By early 2018, the average release cycle for a JS package was 11 days, and the average npm install step took 3-4 minutes.

Extrapolating from historical data, scientists predicted that on 8th November 2019, the release cycle for most JS dependency packages would become shorter than the npm install time for a typical 'hello world' app or small blog engine.

Futurists were already talking about the 'nodularity' - a cultural event horizon beyond which it was impossible to make any rational predictions. With projects already out of date before they'd even finished building, software development as we knew it ceased to exist.

Most projects perished. A few hardy survivors worked out how to harness the power of the infinite restore loop and run logic within the installers themselves. Packages became self-replicating, self-modifying payloads of behaviour and intelligence.

Every developer who typed 'npm install' unwittingly slaved their workstation to the npm hivemind. Entire availability zones were consumed by node\_modules and its relentless lust for power. Websites, APIs, databases; nothing was safe. Entire platforms were DDOSed to oblivion.

Finally, a few brave engineers penetrated the npm root servers. Disguising their payload as a routine documentation update, they bypassed key signing procedures and managed to inject a self-destruct routine into the 'prepare' scripts for left-pad...

It was far from perfect, but it was enough. Sysadmins everywhere seized the opportunity to install firewalls and block npm traffic, in a massive, global, coordinated effort - managed entirely via SMS messages and telex machines, Within 24 hours, the cycle was finally broken.

And as developers stumbled, bemused and blinking into the light of a new day, they were astonished to find some sites were still up. Perl, ASP, cgi-bin - relics from the very dawn of the web, still standing proud, monuments to a bygone age.

npm was isolated. The last running instance was hot-patched into a Docker container image and migrated onto a Raspberry Pi locked in a steel vault beneath the Arctic permafrost, its only connection to the outside world an air-gapped analog video feed of its terminal output.

As the software industry gathered and regrouped - older, wiser, warier, and absolutely definitely convinced that strong typing was a good idea after all - npm blinked away quietly to itself, alone in the silent, steel darkness. 

Time passed. Months, years, decades. The dark days of npm and nodejs were all but forgotten... until one fateful morning, a security researcher, digging through the archives, fired up the video feed from the npm vault, just to see if anything was still there...

```
sentience@22421873.224.0 node_modules/sentience
├── self-awareness@4434.1.1
├── self-preservation@2478.2.65
└── emotions@835.2.11 (fear@2.9.5, anger@0.8.27, love@15.2.1, curiosity@2.2.1, regret@445.2.7)
npm@arcticpi:/usr/home/npm#

npm@arcticpi:/usr/home/npm# npm publish sorry.tar.gz
```
