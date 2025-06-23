---
title: "Running Jekyll on WSL2"
date: 2020-05-19T12:00:00
layout: post
author: Dylan Beattie
meta: 
  og_description: "A performance comparison of the Jekyll static site generator running on the Windows Subsystem for Linux (WSL) 1 vs WSL2."
  og_image: /images/posts/2020-05-19-jekyll-on-wsl2/card.jpg
  twitter_card: summary_large_image
typora-copy-images-to: ../../2020-05-19-jekyll-on-wsl2
typora-root-url: .\..\..
---

Back in August last year, [I migrated this site, including 12 years worth of blog posts](/2019/08/14/migrating-from-blogger-to-github-pages.html), from Blogger to [Jekyll](https://jekyllrb.com/), primary so that I could host it on [Github Pages](https://pages.github.com/). At the time, my main system was a Macbook Pro running macOS, I was doing a lot of work with Ruby and had a full Ruby dev environment set up, so running Jekyll locally was trivial.

I've recently switched back to Windows as my main OS, and Windows is still very much a second-class citizen in the wonderful world of Ruby web development. It's a *lot* better than it used to be, and almost everything now works out of the box, but because the vast majority of Ruby devs (and sites) are running on macOS or Linux, Windows still isn't quite as slick, or as fast, when it comes to running tools like Jekyll.

But this is 2020, and that doesn't matter, because you can run Linux on Windows! Thanks to the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about) (WSL), you can boot a full Linux kernel environment on your Windows PC and run native Linux apps and toolchains. I've been running Jekyll under WSL 1 for a long while to run my sites locally, and it works great, but it's a little slow; spinning up a local copy of this site would take around 30 seconds, compared to 10–12 seconds on my old Macbook Pro.

I'd heard good things about performance improvements in WSL2, so last night I took the plunge, enabled the [Windows Insider Program](https://insider.windows.com/en-us/) on my main PC, and ran a rather hefty Windows Update.

![image-20200519114222214](/images/posts/2020-05-19-jekyll-on-wsl2/image-20200519114222214.png)



Now, by way of establishing a baseline, here's running `bundle exec jekyll serve` on WSL 1. This is what I've been using to run my site locally and test things for the past few months.

![image-20200519114816853](/images/posts/2020-05-19-jekyll-on-wsl2/image-20200519114816853.png)

30 seconds to build the site from scratch. Not great, not terrible.

This is on a the Ubuntu-20.04 LTS Linux kernel that's available from the Windows Store. Having upgraded Windows 10 to the 2004 build, I could now upgrade this in-situ to use WSL2 instead of WSL1:

```
C:\Users\dylan>wsl -l -v
  NAME            STATE           VERSION
* Ubuntu-20.04    Running         1

C:\Users\dylan>wsl --set-version Ubuntu-20.04 2
Conversion in progress, this may take a few minutes...
For information on key differences with WSL 2 please visit https://aka.ms/wsl2
Conversion complete.

C:\Users\dylan>
```

Ooh. Shiny. OK, let's see what this thing can do:

![image-20200519115505666](/images/posts/2020-05-19-jekyll-on-wsl2/image-20200519115505666.png)

155 seconds. Gosh. That's... not quite what I was expecting, and certainly not something I'd claim was a "performance improvement". So I did a little digging, and found [this article from scotch.io](https://scotch.io/bar-talk/trying-the-new-wsl-2-its-fast-windows-subsystem-for-linux), which includes a "[Gotchas with WSL 2](https://scotch.io/bar-talk/trying-the-new-wsl-2-its-fast-windows-subsystem-for-linux#toc-gotchas-with-wsl-2)" section that specifically says:

> To take advantage of all the new speed improvements in WSL 2, our files will need to be moved into the Linux filesystem.

Until now, I'd just kept everything on my Windows D: drive and used `/mnt/d/` under WSL to run everything. Apparently that's not a good idea any more... so I did a fresh git clone of my blog code into `~/dylan/github/dylanbeattie.net/` under WSL2 and ran it again:

![image-20200519120012376](/images/posts/2020-05-19-jekyll-on-wsl2/image-20200519120012376.png)

***TWO POINT ONE TWO NINE SECONDS! HOLY BATFISH CATMAN! THAT'S FAST!***

For the sake of comparison, running the same thing natively on Windows, using the Windows distribution of Ruby 2.6, takes about 21 seconds:

![image-20200519163007957](/images/posts/2020-05-19-jekyll-on-wsl2/image-20200519163007957.png)

So, running Jekyll on the Linux native filesystem is an **order of magnitude** faster than the same thing running natively on Windows, and **around two orders of magnitude** faster than running the same thing on WSL with a mounted Windows filesystem. That's quite an astonishing difference. 

Of course, this means that all my code now has to reside on the Linux filesystem, so it isn't quite so easy to get to it from Windows any more. But the Linux filesystem is shared via a network path, so I was able to go:

```
C:\Users\dylan>net use u: \\wsl$\Ubuntu-20.04\
C:\Users\dylan>u:
U:\home\dylan>cd github\dylanbeattie.net\
U:\home\dylan\github\dylanbeattie.net>
```

And having got this far, I couldn't resist running two more tests just to round the whole thing out. First, the same thing but on a full Ubuntu 20.04 desktop VM running under HyperV:

![image-20200519191303146](/images/posts/2020-05-19-jekyll-on-wsl2/image-20200519191303146.png)

That's 2.45 seconds – marginally *slower* than the WSL2 version with the native FS. And finally, just for the hell of it, here's the Windows native port of Ruby and Jekyll, against the repo checked out onto the Linux native FS, mounted as a network drive in Windows:

![image-20200519163357415](/images/posts/2020-05-19-jekyll-on-wsl2/image-20200519163357415.png)

618.84 seconds... just a *tiny* bit slower than the WSL2 native Linux result, wouldn't you agree?

Here's how the six different scenarios end up:

[![image-20200519191518846](/images/posts/2020-05-19-jekyll-on-wsl2/image-20200519191518846.png)](/images/posts/2020-05-19-jekyll-on-wsl2/image-20200519191518846.png)

### Conclusions:

I was genuinely surprised at the orders of magnitude of difference seen here. I expected a factor of maybe 2-3 times – I did not expect the slowest (albeit rather silly) option to be nearly *300 times slower* than the fastest. But clearly whatever the WSL team has done in WSL2 has made a substantial difference when it comes to performance – as long as you're working with a native Linux filesystem.

* If your base operating system is Windows, running WSL2 with the Linux filesystem is actually faster than any of the other options – including running Linux in a full VM.
* If you *need* Windows/Linux interop across the same filesystem, you're probably better off sticking with WSL1. The Linux kernel in the WSL2 system is significantly slower when dealing with files stored on the Windows filesystem than it was in WSL1.
* For simple Jekyll sites, using the Windows native versions of Ruby and Jekyll is probably fine.
* If performance is a big deal, go for WSL2 and clone your repo onto the Linux FS

Usual caveats apply, that one guy running one Jekyll site and writing a blog post about it is *not* a rigorous scientific analysis. I did this because I wanted to work out what solution worked best for my specific scenario. Your mileage, as the saying goes, may vary. But it's definitely worth trying out a few different options and seeing what works best for your particular workload - and hey, when you do, publish the results. I'm curious to see just how good WSL2 is across different scenarios, but early indicators are it's very, very good indeed.
