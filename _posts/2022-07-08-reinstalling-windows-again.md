---
title: "Reinstalling Windows (again)"
date: 2022-07-08T12:00:00
layout: post
author: Dylan Beattie
meta:
  # og_image: /images/posts/2022/2022-07-08-reinstalling-windows-again.jpg
  og_description: "After six months, I've given up on Windows 11 and going back to Windows 10. Here's why - and what software and tools I install on a fresh Windows machine"
  # twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2022/
typora-root-url: .\..\..
---

In November last year I upgraded my main workstation to Windows 11. I didn't like it much. Lots of unnecessary window dressing - rounded corners, changes to the Start menu, context menu, stuff that wasn't a *problem* but didn't really improve anything. I found Windows 11 slower than Windows 10. Booting my PC in the morning took nearly 3 minutes, most of which it was just sat there with a blank screen, doing *something* -- I have no idea what? --  before it finally brought up the login screen. 

But the thing that clinched it was that something in Windows 11 couldn't handle certain kinds of image data on the clipboard; copying images to the clipboard would cause parts of the UI to flicker, crash, redraw, and basically make Windows unusable. Most noticeably anything in Adobe Photoshop - there's a [support thread here](https://community.adobe.com/t5/photoshop-ecosystem-bugs/p-windows-11-icons-and-menus-quot-flicker-quot-after-copying-a-selection-in-photoshop/idc-p/12727108#M47174) all about it, but it's not a Photoshop problem; various other applications caused the same behaviour, up to and including [right-clicking the icon in the Google Chrome Help > About page](https://twitter.com/dylanbeattie/status/1505859188811083782).

So bye-bye Windows 11. 

When it comes to reinstalling Windows, this is not my first rodeo. I keep everything important on a separate drive, with all my work either pushed to GitHub or backed up in Dropbox, so my D: drive just comes along for the ride completely intact, meaning it's not *that* big a deal to reformat C: and put a fresh Windows install on it. So I [took a backup copy of my C: drive](https://dylanbeattie.net/2021/11/12/copying-your-hard-drive-with-robocopy.html) -- just in case -- and then grabbed the latest Windows 10 Pro ISO, used Rufus to burn it to an 8Gb USB stick, and off we go.

Windows 10 install took about 15 minutes. Here's what goes on afterwards:

#### Configure Windows

* Explorer, View, Folder Options
  * Check "Display the full path in the title bar"
  * Uncheck "Hide extensions for known file types"
* Set desktop wallpaper to something suitably atmospheric from [kvacm](https://www.deviantart.com/kvacm) (and if you like Michal's stuff, [support him on Patreon](https://www.patreon.com/kvacm)!)

### The Essentials

I use [Ninite](https://ninite.com/) to install Chrome, Firefox, Evernote, Steam, Zoom, Discord, Dropbox, Python x64 3, WinSCP, PuTTY, Visual Studio Code, Winamp, Audacity, Spotify, K-Lite Codecs, WinDirStat, and 7-Zip.

For the last few months I've been using Vivaldi as my default browser, but this time around I'm gonna stick with Edge for a while and see how it goes. 

Sign in to Chrome, that syncs my bookmarks and browser extensions, including [LastPass](https://www.lastpass.com/), which has credentials for pretty much everything I do online.

> It always surprises me how usable the system is at this point. So much stuff is web/cloud based now that a connection, a browser and LastPass is enough to get into Google Drive, Gmail, Twitter, Facebook, GitHub

### The Big Bag O' Fonts

I have a *lot* of fonts. They're all backed up in Dropbox. Ctrl-A, right-click, "Install for All Users..."

![image-20220708150027713](/images/posts/2022/image-20220708150027713.png)

I like fonts.

### The Command Line Stuff

* Windows Subsystem for Linux

  * installed by opening an Administrator command prompt and running `wsl --install`

* Powershell

  * Not to be confused with Windows Powershell, which ships as part of Windows 10

* [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-gb&gl=GB)

  * not to be confused with Windows Terminal Preview, which is the same, but different.

  ![image-20220708150542169](/images/posts/2022/image-20220708150542169.png)

* [oh-my-posh](https://ohmyposh.dev/docs/installation/windows)

  * ...the necessary nerd fonts are already installed at this point 'cos they're part of the Big Bag O' Fonts I installed earlier.

* [Cygwin64](https://www.cygwin.com/)

  * Default selection, plus `curl`, `wget`, and `openssh` 
  * Everything goes into C:\Windows\Cygwin\bin, and I add this to the system path. This becomes my default location for any utilities  I want to be available from the command line, like `ffmpeg` -- like `/usr/local/bin` on a *nix system.

  ![image-20220708151906343](/images/posts/2022/image-20220708151906343.png)

* [git for windows](https://git-scm.com/download/win)

* [OpenSSL for Windows](http://slproweb.com/products/Win32OpenSSL.html)

* ffmpeg

  * using the Windows precompiled binaries from [https://github.com/BtbN/FFmpeg-Builds/releases](https://github.com/BtbN/FFmpeg-Builds/releases)
  * Usually the [master latest win64 lgpl](https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-lgpl.zip) build is the one to go for.


### Languages and SDKs

* .NET Core SDK 3.1
* .NET Core SDK 5
* .NET Core SDK 6
* [nodeJS 16.x](https://nodejs.org/en/download/)
  * and select the option to install build tools for building native C/C++ modules.
* [Ruby for Windows](https://rubyinstaller.org/downloads/)

### GUI Apps

Then it's a big long list of apps I use on a daily basis, which I'm listing here as much for my benefit as yours:

* Zoom, Slack, WhatsApp, Signal, Telegram, Discord...
  * yes, every single one of these platforms is the communication tool of choice for at least one friend, collaborator or online community that I'm connected to.  And that's not counting the ones who use Twitter DMS, Facebook Messenger, Facetime, Skype... or even good old fashioned email.
* [OBS Studio](https://obsproject.com/)
  * great for streaming, great for screen recording, great for doing cool stuff with overhead cameras and pens and paper during Zoom training sessions.
  * Scenes and profiles are all copied over from the old system; they're stored at `C:\Users\dylan\AppData\Roaming\obs-studio\` 
* [SnagIt](https://www.techsmith.com/download/snagit/) and [Camtasia](https://www.techsmith.com/download/camtasia)
  * I set up SnagIt with `Shift`+`Ctrl`+`\` as a quick capture hotkey.
* Microsoft Office
  * Powerpoint, Word, and Excel, I use on a daily basis. Access, maybe once in a blue moon. Teams when I have no choice. Outlook, OneNote, and Publisher, I don't think I've ever opened except by mistake, but hey, they're part of the installer now, and it looks like the screen in the Office installer where you choose the bits you actually want has been banished to the great recycle bin in the sky, so I guess I've got them too. Meh. Storage is cheap.
* Microsoft Visio
  * Visio rocks. For architecture diagrams, floor plans, presentation slides that are just a bit too complicated for PowerPoint, I find it indispensable. 
* Visual Studio 2019
  * including .NET Framework 4.6.2, 4.7 and 4.8, for running training with clients using .NET Framework 4.x
* Visual Studio 2022

> After installing Visual Studio and Resharper, to into Tools > Options > Source Control > Plugin Selection and set it to None. Otherwise you'll get an error message "Files still read-only" when trying to do various refactoring and renaming things with Resharper.
>
> [https://stackoverflow.com/questions/26715783/resharper-function-shows-files-still-read-only](https://stackoverflow.com/questions/26715783/resharper-function-shows-files-still-read-only)

* Docker Desktop for Windows
  * using the WSL2 subsystem, not the old HyperV system
* [SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)
  * these days I always run the actual server inside a Docker container, but the SQL client tools are still useful
* Adobe Creative Cloud
  * Photoshop, Illustrator, Premiere, AfterEffects, Dimension, Audition, Character Animator.
  * ...and remember to go into Preferences in the Creative Cloud Desktop app, enable "older apps", and install the Extendscript Toolkit CC for running JS automation scripts in AfterEffects.
* Axialis [IconWorkshop](https://www.axialis.com/iconworkshop/) and [CursorWorkshop](https://www.axialis.com/cursorworkshop/)
* JetBrains Toolbox
  * and then DataGrip (for poking PostgreSQL stuff running in Docker containers), WebStorm (for nodeJS), Resharper, Rider, and Pycharm
* [NCrunch](https://www.ncrunch.net/)
* [NGrok](https://ngrok.com/)
* [Open Hardware Monitor](https://openhardwaremonitor.org/)
* [Microsoft PowerToys](https://github.com/microsoft/PowerToys)
* [Typora](https://typora.io/)
* [Beyond Compare](https://www.scootersoftware.com/)
* [Instant Eyedropper](http://instant-eyedropper.com/downloads/)
* [SysInternals suite](https://docs.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite)
  * unzip the whole thing into `C:\Program Files\SysInternals\`
* [Postman](https://www.postman.com/)
* [qBittorrent](https://www.qbittorrent.org/)
* [Protocol Buffers](https://github.com/protocolbuffers/protobuf/releases/)
* [Elgato StreamDeck](https://www.elgato.com/en/downloads)


And there you go - fresh install to a usable system in less than a day. Sure, I'll be finding odd bits that aren't set up quite right for a week or two, and there will invariably be some app I reach for one day a few months from now and discover I forgot to install it, but WIndows 10 just feels so much snappier than 11 ever did -- and best of all, I can use the clipboard in Photoshop again. 😊
