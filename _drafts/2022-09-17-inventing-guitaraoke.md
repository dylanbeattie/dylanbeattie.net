---
title: "Inventing Guitaraoke (Part 0)"
layout: post
author: Dylan Beattie
meta:
  # og_image: /images/posts/2022/2022-07-08-reinstalling-windows-again.jpg
  og_description: "In which Dylan describes how he thinks guitaraoke should work, and looks at some possible ways to make it happen."
  # twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2022/
typora-root-url: .\..\..
---

Last month I ran a karaoke night at my local brewery tap room -- but it was karaoke with a twist. As well as singing, members of the audience could get up and play guitar or bass. I created karaoke videos with 5.1 surround mixes of all the songs on my song list, ran each channel from a portable 5.1 audio interface into a separate channel on the mixing desk, and voila - we had a 5-channel mix, with lead, rhythm, bass, and the left+right backing track on five separate channels. (The .1 subwoofer channel apparently isn't a thing in Adobe Premiere... or at least, I couldn't find any way of sending a track to it). This meant I could fade any of those original guitar parts in or out, depending who wanted to play what on each song. The video track was just the regular karaoke lyric videos, which I've accumulated quite a lot of from from karaoke-version.co.uk over the years. Despite a heat wave and a train strike, it was a really fun night... and we're going to make it a regular thing; the third Saturday of every month.

Having run one proper night, though, I'm trying to figure out a different approach for creating and playing the backing tracks. Here's the things I want to be able to do:

#### 1: Players need to see the chords

I know hundreds of songs well enough to strum the verse/chorus around a campfire. I know vrew few of them well enough to play along to the original recording note-perfect... intros, outros, bridges, key changes, that weird extra bar at the end of the second verse... my theory is there's a whole lot of guitar players out there who would love to get up and jam but aren't entirely sure they know the song well enough. So I want to fix that. I want the chords to appear on the screen, just like the lyrics do for the singers, so you can follow along instead of having to know the song off by heart.

#### 2: Mix the tracks in the player, not on the desk

Using a 5.1 mix to run the show worked OK, but it's a bit of a hack. It also means I'm limited to three instrumental tracks plus the stereo backing, and I'd like to be able to accommodate more live musicians - keys, harmonica, saxophone.

I'd love to be able to use a multitrack container format like MKV with separate tracks for each instrument -- maybe even including a click, so I can go all the way to live drums -- and then find a player that'll let me mix individual tracks during playback, instead of having to run separate channels to an external mixing desk.

#### 3: Separate video feeds for the performers and the audience

Not essential... but it would be nice if the performers had one video track, with the lyrics and the guitar chords, and the audience could see a different video playing in sync with the first one. Maybe just the lyrics, maybe the original music video, maybe some cool visualisation effects.

> This also opens up the possibility of using the same setup for Linebreakers shows -- which means the folks on stage could see karaoke-style lyrics and/or guitar chords, which makes the whole show much more accessible when it comes to inviting guest musicians to perform with us.

#### 4: One laptop

Lots of folks on Twitter suggested using programs like VLC and OBS to wrangle multiple media streams playing on multiple devices... but this is for fun. The kind of fun that happens in noisy pubs where people are dancing and spilling drinks. I want each track to be a single file, I want the player/mixer to be about as complicated as WinAmp, and I want to run the whole thing from a single laptop without having to bring a multitrack audio interface along.

### Next Steps

#### Investigate file formats

First, I need a way to store the chord charts for each song, along with the timing information for each chord. There's an [open format called LRC](https://en.wikipedia.org/wiki/LRC_(file_format)) (LyRiC), designed for synchronising song lyrics with a backing track, which looks like this:

```
[ar:Bon Jovi]
[ti:Bed of Roses]
[al:Keep The Faith]
[length:06:35.05]
[ve:v1.2.3]
[00:34.82]Sitting here wasted and wounded
[00:38.32]At this old piano
[00:43.07]Trying hard to capture
[00:45.57]The moment this morning I don't know
```

I'm thinking the easiest way to capture chord charts is probably to hook up a MIDI keyboard, and find/build an app that will identify MIDI chords and write them to a file along with the timestamp when the chord was played... that way I can build a chart for a song by playing along to it in real time, which is probably going to be considerably quicker than anything involving editing a file.

