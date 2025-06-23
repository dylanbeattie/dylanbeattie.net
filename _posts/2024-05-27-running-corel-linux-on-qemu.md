---
title: "Running Corel Linux on QEMU"
date: 2024-05-27T12:00:00
layout: post
author: Dylan Beattie
meta:
  og_image: /images/posts/2024/2024-05-27-running-corel-linux-on-qemu.jpg
  og_description: "How I got Corel Linux running in a QEMU virtual machine on Windows 10"
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2024/
typora-root-url: .\..\..
---

In my latest YouTube video, I talk about Corel Linux, which I think is one of the most interesting "what if?" scenarios in the history of mainstream computing, and show some clips of Corel Linux actually running. It's not easy getting a 25-year-old Linux distro to boot on a modern PC - but here's how I did it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jgR5c6CcB_w?si=YqJ7MCkju2cvo4IW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Install QEMU

VirtualBox, HyperV et al won't work here - Corel Linux is just too old to support most of the virtual hardware they expose to their guest operating systems. Instead, we're going to use QEMU.

Download it from [https://www.qemu.org/](https://www.qemu.org/), install it, get it running. Check it works by running `qemu-system-i386` at a terminal window:

```
> qemu-system-i386 --version
QEMU emulator version 9.0.0 (v9.0.0-12054-g923cf646f4)
Copyright (c) 2003-2024 Fabrice Bellard and the QEMU Project developers
> 
```

### Create a virtual disk

This will create a 2Gb virtual disk file called `corel_linux_hd.img`:

```
qemu-img create corel_linux_hd.img 2G
```

### Download Corel Linux

I used the ISO image of Corel Linux 1.2 deluxe from [https://archive.org/details/corel_linux_1.2](https://archive.org/details/corel_linux_1.2)

While you're there, you might also want to download CorelDRAW and WordPerfect Office [https://archive.org/details/CorelForLinux/CorelDRAW%209%20Linux/](https://archive.org/details/CorelForLinux/CorelDRAW%209%20Linux/)

### Run the installer

```
qemu-system-i386 -hda corel_linux_hd.img -cdrom corel_linux_1.2.iso -m 256 -vga cirrus
```

You should get this:

![image-20240524131917442](/images/posts/2024/image-20240524131917442.png)

and then this...

![image-20240524131927733](/images/posts/2024/image-20240524131927733.png)

and then this:

![image-20240524132009470](/images/posts/2024/image-20240524132009470.png)

Yeah. This is where it gets interesting: the Cirrus VGA driver provided by QEMU displays garbled text until we get into the OS and hack it, but we can't do that until we've got it installed, so we'll need to walk through the installation without being able to read anything.

You probably also don't have any mouse support, so use Tab to move forwards, Ctrl-Tab to move backwards, and the Spacebar to click:

![image-20240524132852073](/images/posts/2024/image-20240524132852073.png)

Don't change anything here - "Install Standard Desktop" is already selected so just press Enter:

![image-20240524132431754](/images/posts/2024/image-20240524132431754.png)

The next few screens, accept all the defaults - tab to Next> if it's not already focused, press Enter:

![image-20240524132552504](/images/posts/2024/image-20240524132552504.png)

![image-20240524132659002](/images/posts/2024/image-20240524132659002.png)

and finally, **Install**:

![image-20240524132725616](/images/posts/2024/image-20240524132725616.png)

If you get to here, you're on the right track:

![image-20240524133012196](/images/posts/2024/image-20240524133012196.png)

Once it's installed, let it reboot, then at the loading screen select **Linux - Text Mode**

![image-20240524133627515](/images/posts/2024/image-20240524133627515.png)

It'll happily chunter away for a few screens worth of messages, and then you'll get a login prompt.

Log in a root with a blank password. *(Don't ask. It was the early 2000s. Things were different then.)*

Now we need to configure X11 so that it won't try to use various accelerated hardware features that don't work in QEMU.

> This bit comes from Ethan Gates' [Corel Linux in QEMU](https://forum.eaasi.cloud/t/corel-linux-in-qemu/64) post on forums.eeasi.cloud -- thank you Ethan! -- and that post was in turn inspired by Hayden Barnes' post [The one in which I kind of get Corel Linux 1.2 to work 21 years later](https://boxofcables.dev/corel-linux-1-2/) - thank you Hayden!

Use vim to edit `/etc/X11/XF86config`. Find the section called "Device", add three lines:

```
Option "no_bitblt"
Option "noaccel"
Option "sw_cursor"
```

![image-20240524140407311](/images/posts/2024/image-20240524140407311.png)

Save the file, reboot (`shutdown -r now`), and select **Corel Linux** from the boot menu:

![image-20240524140634742](/images/posts/2024/image-20240524140634742.png)

## Networking support

Networking support in QEMU is powerful, flexible, and incredibly complicated.

Here's how I made it work. Disclaimer: I don't 100% understand exactly what all this does... I tried just about every combination I could think of until I found something that worked.

First, you'll need to install a TAP network driver. This adds another network interface to Windows, which emulates a physical network card. Apparently.

I installed mine using [chocolatety](https://chocolatey.org/):

```
choco install tapwindows
```

Then, in Windows network settings:

1. Rename the new TAP connection to `TapWindows`
2. Right-click your main network connection (ethernet, wifi - whatever connects your Windows machine to the internet)
3. Properties > Sharing > Allow other network users to connect...
4. Choose your `TapWindows` connection as the "Home networking connection"

You'll get a popup about your LAN adapter. The wording here is misleading - it's not your LAN adapter, it's whichever adapter you selected as you" Home networking connection":

> If you remember using Internet Connection Sharing with a dial-up modem... this is the same tech, only we're pretending that QEMU is our house network, TapWindows is the network card connecting our PC to the rest of the house, and "Ethernet" is the dial-up modem that connects to the internet.

![image-20240524141328089](/images/posts/2024/image-20240524141328089.png)

Now, run QEMU using this command line:

> I'm using Powershell so a backtick ` is a line continuation character.

```
qemu-system-i386 -hda corel_linux_hd.img `
-m 256 -vga cirrus -audiodev driver=dsound,id=pa1 -device sb16,audiodev=pa1 `
-netdev tap,id=mynet0,ifname=TapWindows `
-device pcnet,netdev=mynet0
```

That's telling QEMU "create a network connection using TAP, call it `mynet0`, and connect it to the `TapWindows` interface on the host PC", and then on the next line "then create a virtual device using the `pcnet` and connect it to the `mynet0` network".

> For me, this worked 80% of the time. When it didn't work, it's because something meant the Linux guest couldn't get an IP address from Internet Connection Sharing's DHCP server. Manually setting the guest IP to `192.168.137.2`, subnet `255.255.255.0`, gateway `192.168.137.1` usually fixed this.

That got me to the point where I could boot Linux, open Netscape, point it at `http://info.cern.ch/`, and browse the world's first website.

![image-20240524142321136](/images/posts/2024/image-20240524142321136.png)

### Stuff I Couldn't Figure Out

I couldn't get audio working. QEMU audio works fine - I created a Windows 2000 guest just to test this - and I tried both the `ac97` and `sb16` virtual audio devices in QEMU, but no luck yet. 

I also couldn't figure out how to change the CD-ROM. When you're running QEMU, `Ctrl-Alt-F2` drops you into an emulation console where you can use `info block` to see which devices/images are connected, and `change ide1-cd0 <filename.iso>` to change the virtual disk:

![image-20240524142715085](/images/posts/2024/image-20240524142715085.png)

But... then I couldn't work out how to get Corel Linux to mount the disk image, so to install WordPerfect, CorelDRAW!, etc. I had to shut down the VM and then boot it specifying the `-cdrom` command line switch:

```
qemu-system-i386 -hda corel_linux_hd.img `
-m 256 -vga cirrus -audiodev driver=dsound,id=pa1 -device ac97,audiodev=pa1 `
-netdev tap,id=mynet0,ifname=TapWindows `
-device pcnet,netdev=mynet0 `
-cdrom .\wordperfect_office_2000_deluxe_cd_1.iso
```

Ah, the nostalgia.

