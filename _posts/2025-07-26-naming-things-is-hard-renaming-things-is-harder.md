---
layout: post
title: Naming Things is Hard. Renaming Things is Harder.
date: 2025-07-26T15:49:00
author: Dylan Beattie
typora-root-url: ./../
---
You know those little things that you just sort of ignore, over over and over again, until finally one day the planets align and you're like "No! I'm not putting up with this any more! There *must* be a way to fix it!"

![canon-eos-m200](images/canon-eos-m200.jpg)

Welcome to  my cameras. I have two Canon EOS M200 cameras, which I use for streaming, recording training videos, teaching online workshops, all kinds of stuff. One is black, one is white, they are otherwise identical. They're both connected to my main PC using Elgato Cam Link 4K HDMI capture devices, which for the remainder of this article I will call **camlinks** because they don't have a better generic name.

They're also connected using micro-USB, which means I can use Canon's Remote Shooting utility to control things like the F-stop, white balance, and ISO. The cameras themselves are permanently mounted around my desk --- one is above my main screen, the other one's built in to a teleprompter --- so it's kinda hard to fiddle with the settings menu.

<img src="images/my-image.png#block">

The problem is that when I go to fire up the EOS utility, it asks me to pick which camera I'm using... am I using the Canon EOS M200, or the Canon EOS M200? And then there's the fact that both of the dongles show up in Windows as "Cam Link 4K", which means setting up video sources in programs like OBS Studio normally involves picking the wrong camera at least once.

<img src="images/obs-studio-duplicate-cam-link-names.png" class="block">

Well, this morning I had that fateful nerd thought... *“I should fix this. How hard can it be?”* Well, grab your razor and strap in, friends... we're going yak shaving!
Now, most of the time, if you want to rename a thing in Windows, you right-click it, and choose "Rename", and give it a new name.

![](images/windows-device-manager-with-duplicate-device-names.png#block)

That doesn't work in Device Manager. I mean, sure, rename a file, but why would *anybody* ever need to rename a *camera?*
OK, no big deal. Those names have got to come from somewhere. Probably the registry. So I fire up regedit, Ctrl-F, "Cam Link 4K", hit "Find Next":

![](images/regedit-search-cam-link-4k.png#block)

And I wait, and wait, and wait a bit, and then I get bored because this is a Ryzen 9950X3D with 128Gb of RAM and I didn't spend that kind of money so I could sit around and wait for things, dammit! 

I tried writing a Powershell script to do the same thing --- trawl the registry, look at all the keys and subkeys and entries and values --- but it did that infuriating thing where it takes so long to not do anything that it wasn't clear after 30 seconds whether the program worked, but hadn't matched anything, or I'd screwed up the matching logic.

Ok, much better approach: let's dump the entire system registry to a text file and then I can edit it properly. File, Export, `registry.txt`, takes about a second. Done.

I now have a 540Mb text file full of bits of Windows registry. It looks like this:

```ini
[HKEY_LOCAL_MACHINE\SYSTEM\DriverDatabase\DriverPackages\termbus.inf_amd64_7ccf415b3c0cf753\Descriptors\TI_COMPAT_DEVICE]
"Configuration"="TS_INPT_DEVICE.NT"
"Manufacturer"="%msft%"
"Description"="%ts_inpt_device.devicedesc%"

[HKEY_LOCAL_MACHINE\SYSTEM\DriverDatabase\DriverPackages\termbus.inf_amd64_7ccf415b3c0cf753\Descriptors\TS_BUS]

[HKEY_LOCAL_MACHINE\SYSTEM\DriverDatabase\DriverPackages\termbus.inf_amd64_7ccf415b3c0cf753\Descriptors\TS_BUS\TS_INPT]
"Configuration"="TS_INPT_BUS.NT"
"Manufacturer"="%msft%"
"Description"="%ts_inpt_bus.devicedesc%"

[HKEY_LOCAL_MACHINE\SYSTEM\DriverDatabase\DriverPackages\termbus.inf_amd64_7ccf415b3c0cf753\Strings]
"msft"="Microsoft"
"ts_inpt_device.devicedesc"="Remote Desktop Input Device"
"ts_inpt_bus.devicedesc"="Remote Desktop Input Bus Enumerator"

[HKEY_LOCAL_MACHINE\SYSTEM\DriverDatabase\DriverPackages\termkbd.inf_amd64_b0e97bc9e5ad246d]
"Version"=hex:ff,ff,09,00,00,00,00,00,6b,e9,36,4d,25,e3,ce,11,bf,c1,08,00,2b,\
  e1,03,18,00,c0,17,1d,14,c2,c9,01,7e,04,f4,65,00,00,0a,00,00,00,00,00,00,00,\
  00,00
"Provider"="Microsoft"
"SignerScore"=dword:0d000003
"FileSize"=hex(b):70,34,01,00,00,00,00,00
"StatusFlags"=dword:00000112
@="termkbd.inf"

```

Each chunk is in this format:

```ini
[HKEY_LOCAL_MACHINE\SYSTEM\Path\To\Registry\Key]
"Name"="String Value"
"AnotherName"=dword:12345678
"ThirdName"=hex(b):aa,bb,cc,dd,ee,ff,11,22
```

So I want to find every chunk that contains any entry whose value contains `"Cam Link 4K"` or `"Canon EOS M200"`, and then extract:

* The first row of that chunk, which is the path to the registry key I need to edit
* The entry itself

Then --- in theory --- I've got a handful of registry entries in a file, which I can edit in VS Code or something, import it into regedit, and presto! rename all the things.

First idea: pull it into VS Code, replace all the `\n` with a marker `__EOL__` so I get every block on its own line, delete all the lines that don't contain `"Cam Link 4K"` or `"Canon EOS M200"`, turn all the `__EOL__` back into `\n`, and then do the rest by hand.

Yeah... VS Code won't do that. 

![image-20250726170311811](images/vs-code-file-is-too-large-to-perform-a-replace-operation.png#block)

TextPad wouldn't do it either... 

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:tr4fmad7fpxeyaw26ky4esys/app.bsky.feed.post/3luubl42orc2h" data-bluesky-cid="bafyreidacemb5flajbdozv2ac7ga4vuh4zgk2es4t6jo5wbgzm6oow6qcu" data-bluesky-embed-color-mode="system"><p lang="en">But it&#x27;s OK. We solved this problem. We solved it BEFORE I WAS BORN. The beardy wizard people who created Unix knew all about editing files that wouldn&#x27;t fit in memory, because they built Unix for computers that had an ENTIRE MEGABYTE of RAM... which you had to share with the rest of the university.</p>&mdash; Dylan Beattie (<a href="https://bsky.app/profile/did:plc:tr4fmad7fpxeyaw26ky4esys?ref_src=embed">@dylanbeatt.ie</a>) <a href="https://bsky.app/profile/did:plc:tr4fmad7fpxeyaw26ky4esys/post/3luubl42orc2h?ref_src=embed">26 July 2025 at 10:42</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

Yep, this is a job for awk. You probably don't know what awk is. Awk is a stream-based editing utility originally created for Unix. So I asked Copilot to write me an awk script. *(what, you think I can remember how to write awk? University was a long time ago, friends...)*

```awk
BEGIN {
	RS = "\n\n";   # Blank lines separate records (blocks)
	ORS = "\n\n";  # Output blocks separated by two newlines
}

{
	if ($0 ~ /Cam Link 4K || $0 ~ /Canon EOS M200/) {
		n = split($0, lines, "\n")
		output = lines[1]
		for (i = 2; i <= n; i++) {
			if (lines[i] ~ /Cam Link 4K/ || lines[i] ~ /Canon EOS M200/) {
				output = output "\n" lines[i]
			}
		}
		print output
	}
}
```

Yeah, that's what awk looks like. Remember, this is the language that Larry Wall looked at, went “well, golly,I can do better than *that*”, and... invented Perl.

Of course, it didn't work. Me & my little electric copilot buddy had missed two rather significant details... first, the `RS` record separator? We're trawling a file created by Windows regedit. It's using `\r\n`, not `\n`. Easy fix; change `RS = "\r?\n\r?\n" `*(and look, now it'll work cross-platform if I ever need to awk the Windows registry on macOS!)*

Still doesn't work... because the Windows Registry Editor's Export feature creates text files that are encoded as `UTF16-LE`, and `awk` don't do `UTF16`. So I use VS Code to save the registry file as `UTF-8`, and off we go...

```bash
gawk -f filter.awk registry.txt > devices.txt
```

**It works!** `devices.txt` now has a little registry snippet for every single chunk of registry that includes `"Canon EOS M200"` or `"Cam Link 4K"`... 

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:tr4fmad7fpxeyaw26ky4esys/app.bsky.feed.post/3luudsqop7c2h" data-bluesky-cid="bafyreifk5zuj6hq76wtys4553s26tsgvulsj3krey7rerebasrkddscpoi" data-bluesky-embed-color-mode="system"><p lang="en">&quot;Canon EOS M200&quot; appears 25 times in the registry.

&quot;Cam Link 4K&quot; appears 60 times - and the exact entry &quot;FriendlyName&quot;=&quot;Cam Link 4K&quot; accounts for 41 of those... crikey.

That&#x27;s a lot of times.</p>&mdash; Dylan Beattie (<a href="https://bsky.app/profile/did:plc:tr4fmad7fpxeyaw26ky4esys?ref_src=embed">@dylanbeatt.ie</a>) <a href="https://bsky.app/profile/did:plc:tr4fmad7fpxeyaw26ky4esys/post/3luudsqop7c2h?ref_src=embed">26 July 2025 at 11:22</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

OK, let's figure out which one goes where.

> I am assuming at this point that nothing in Windows is stupid enough to actually open, connect, etc. devices based on a field called `FriendlyName`. If I'm wrong, things are about to extremely hilarious indeed.

So I use Textpad's really handy "sequence replace" feature, that'll let you use a regex to find something and then include an incrementing sequence number in the replacement expression:

![Textpad Search and Replace](images/textpad-search-replace.jpg#block)

The result is a registry file where every `FriendlyName` value is now unique - so I can in theory reboot, see which names appear in which drop-down menus and dialogs, and then edit them accordingly. In theory.

```
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Portable Devices\Devices\USB#VID_04A9&PID_32EF#9&39F7FE61&0&3]
"FriendlyName"="Canon EOS M200 UNIQUE12"

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Portable Devices\Devices\USB#VID_04A9&PID_32EF#A&D9BD236&0&3]
"FriendlyName"="Canon EOS M200 UNIQUE13"

[HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Class\{eec5ad98-8080-425f-922a-dabf3de3f69a}\0005]
"FriendlyName"="Canon EOS M200 UNIQUE14"

[HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Class\{eec5ad98-8080-425f-922a-dabf3de3f69a}\0009]
"FriendlyName"="Canon EOS M200 UNIQUE15"

[HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Enum\USB\VID_04A9&PID_32EF\9&39f7fe61&0&3]
"FriendlyName"="Canon EOS M200 UNIQUE38"

[HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Enum\USB\VID_04A9&PID_32EF\a&d9bd236&0&3]
"FriendlyName"="Canon EOS M200 UNIQUE39"

[HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Enum\USB\VID_0FD9&PID_0066&MI_00\a&1b1e3ad0&0&0000]
"FriendlyName"="Cam Link 4K UNIQUE40"

[HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Enum\USB\VID_0FD9&PID_0066&MI_03\a&1b1e3ad0&0&0003]
"FriendlyName"="Cam Link 4K UNIQUE41"
```

Add the first line to the file otherwise regedit rejects it:

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Portable Devices\Devices\USB#VID_04A9&PID_32EF#9&39F7FE61&0&3]
"FriendlyName"="Canon EOS M200 UNIQUE12"

...and so on...
```

Import...

![img](./images/registry-editor-successful-import.png#block)

Reboot... IT WORKED!

![image-20250726172549272](images/cam-link-unique-device-names.png#block)

Well, it worked mostly. At first, the Canon EOS Utility Launcher didn't pick it up at all, and it turns out some of the Canon EOS utilities read the `DeviceDesc` value from the registry, not `FriendlyName`, so I edited that one too... at this point I got into a good half-hour of editing something, rebooting, seeing what had changed, edit again, reboot again, turn it off and on again... and quite a few moments where I thought I'd tried everything I could think of, including a reboot, and it still hadn't worked... 

And then, one final, glorious reboot, and there it was.

![image-20250726172814992](images/image-20250726172814992.png#block)

![image-20250726173048019](images/image-20250726173048019.png#block)

And you know what?

I will bet money, good, solid, chunky cash dollar money, that at some point, somebody at Canon said “er... boss, what happens if somebody buys two of the same camera, and has them both plugged in at the same time over USB?” and somebody's boss said words to the effect of “stop derailing the planning meeting with your stupid edge cases, Chris, we have work to do and you're not helping.”

I see you, Chris.

I see you, and I salute you. 🫡

Oh, and Microsoft: if we could get right-click, Rename... in the Device Manager? That'd be, like, just *swell.*

