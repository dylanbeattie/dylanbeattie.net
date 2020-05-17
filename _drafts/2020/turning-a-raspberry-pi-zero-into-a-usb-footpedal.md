---
title: "Building a USB Footpedal with a Raspberry Pi Zero"
layout: post
author: Dylan Beattie
meta: 
  og_description: "Turning a Raspberry Pi Zero W into a heavy-duty footswitch controller that emulates a USB keyboard."
typora-copy-images-to: ../../images/posts/2020-05-17-raspberry-pi-footpedal
---

I often find myself doing daft things with computers and playing the guitar at the same time. I use laptops on stage to run videos and backing tracks, I record my own music, and, most recently, I've been doing livestreamed music concerts over YouTube and Twitch for some of the online conferences I've spoken at.

I've used various kinds of foot controllers in the past. The two that have stuck around the longest are the AirTurn PedPro and the iRig Blueboard. The PedPro runs on Bluetooth and works great as a hands-free Powerpoint clicker - it connects to Windows or macOS as a Bluetooth keyboard, but it only has two keys, which are (normally) hardwired to be Left and Right. This works great for controlling Powerpoint, but it's a bit limited. The iRig Blueboard has four footswitches, and works great with iOS and macOS, but it connects to the host system as some kind of proprietary Bluetooth MIDI device, and it doesn't work (at all) on Windows.

So I figured building my own pedalboard might be a fun lockdown project. At a bare minimum, I wanted to be able to switch between scenes in OBS and control some sort of media player at the same time, so I can stop/start videos and backing tracks and switch between different camera angles when doing live streams.

There's two approaches I could have  taken:

* **Network-based:** the footswitch device connects to wifi, sends signals to a host computer over the network, and I build some bespoke software to translate those signals into emulated keystrokes, or controls the target applications directly
* **Device emulation:** the footswitch connects directly to the host PC, via USB or Bluetooth, and shows up as a keyboard, joystick or some other kind of human interface device (HID).

I went for device emulation, mainly because the host PC is already going to be pretty busy handling multiple cameras, OBS, media playback, greenscreen effects, and live network streaming, and having my footswitch just show up as a keyboard seemed a lot more straightforward.

The Raspberry Pi Zero W

For this version of the project, I used the Raspberry Pi Zero W 