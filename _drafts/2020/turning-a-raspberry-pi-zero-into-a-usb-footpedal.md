---
title: "Building a USB Footpedal with a Raspberry Pi Zero"
layout: post
author: Dylan Beattie
meta: 
  og_description: "Turning a Raspberry Pi Zero W into a heavy-duty footswitch controller that emulates a USB keyboard."
typora-copy-images-to: ../../images/posts/2020-05-17-raspberry-pi-footpedal
---

I often find myself doing daft things with computers at the same time as playing the guitar. I use laptops on stage to run videos and backing tracks, I record my own music, and, most recently, I've been doing livestreamed music concerts over YouTube and Twitch for some of the online conferences I've spoken at.

I've used various kinds of foot controllers in the past. The two that have stuck around the longest are the AirTurn PedPro and the iRig Blueboard. The PedPro runs on Bluetooth and works great as a hands-free Powerpoint clicker - it connects to Windows or macOS as a Bluetooth keyboard, but it only has two keys, which are (normally) hardwired to be Left and Right. This works great for controlling Powerpoint, but it's a bit limited. The iRig Blueboard has four footswitches, and works great with iOS and macOS, but it connects to the host system as some kind of proprietary Bluetooth MIDI device, and it doesn't work (at all) on Windows.

So I figured building my own pedalboard might be a fun lockdown project. At a bare minimum, I wanted to be able to 

There's basically two approaches I could have  taken:

* Network-based: the pedal connects to wifi, sends signals to a host computer over the network, and I build some bespoke software to translate those signals into emulated keystrokes.

