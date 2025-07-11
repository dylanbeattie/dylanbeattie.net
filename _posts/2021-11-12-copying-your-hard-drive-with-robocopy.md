---
title: "Copying Your Hard Drive With Robocopy"
date: 2021-11-12T12:00:00
layout: post
author: Dylan Beattie
meta:
  og_image: /images/posts/2021-11-12-copying-your-hard-drive-with-robocopy.png
  og_description: "How to use Robocopy to copy everything off your C: drive while it's in use."
  # twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2021/
typora-root-url: .\..\..
---

Time to reinstall Windows - after 18 months of running Insider builds, hacking around with weird WSL/Docker network configurations, and trying out more weird video streaming hardware than you can possibly imagine, I've hit the point where certain things just don't work any more.

The plan:

1. Copy everything from the C: drive to somewhere safe.
2. Do a clean reformat & reinstall.
3. Yay everything works now.

Turns out it's actually way harder to copy everything from your C: drive onto another drive when you're still running from that C: drive. Lots of files are locked because they're in use, and a bunch of weird junction points (Windows-speak for symbolic links) that in some cases can actually lead to infinitely deep recursive nested directories.

Here's the command that worked in the end:

`robocopy /s /b /z /xo /xj /V /R:0 /W:0 /copy:DT C:\ G:\backups\c\`

And here's how that breaks down:

```
robocopy	
/s		   Copy all subdirectories (except empty ones - use /e for that)
/b		   Copies files in backup mode (overrides file & folder permissions)
/z		   Copy files in restartable mode
/xo		   Ignore older files - useful if you need to restart the whole thing
/xj		   Ignore junction points.
/V		   Verbose. List everything as it's copied. Handy to see what's going on.
/R:0	   Retry files zero times if there's an error
/W:0	   Wait zero seconds before retrying
/copy:DT   Copy only data and timestamps (i.e. do not copy permissions, attributes)
```

Check out the full Robocopy docs at [https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy)





