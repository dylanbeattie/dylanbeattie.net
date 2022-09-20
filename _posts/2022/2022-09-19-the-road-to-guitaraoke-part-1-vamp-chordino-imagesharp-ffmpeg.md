---
title: "The Road To Guitaraoke, Part 1: Vamp, Chordino, ImageSharp, and ffmpeg"
layout: post
author: Dylan Beattie
meta:
  # og_image: /images/posts/2022/2022-07-08-reinstalling-windows-again.jpg
  og_description: "A proof-of-concept using Vamp, Chordino, ImageSharp and ffmpeg to add live guitar chord charts to karaoke videos"
  # twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2022/
typora-root-url: .\..\..
---

One of my side projects at the moment is running a monthly karaoke night at my local brewery tap, the awesome Ignition Brewery in Sydenham -- but it's karaoke with a twist.

[<img src="/images/posts/2022/guitaraoke-social-media-banner.jpg" alt="guitaraoke-social-media-banner" style="zoom:50%;" />](https://guitaraoke.live/)

As well as singing, you can get up and play guitar or bass; instruments and backline are provided, and I've created 5-channel mixes of all the backing tracks so we can fade out specific instruments if somebody wants to play them live.

I ran the first Guitaraoke night in August, and it went great (despite a heat wave and a train strike!) -- but by far the most common bit of feedback I got was "it would be great it we could see the guitar chords on the video". Well... yeah, it would. After all, the whole point of karaoke is that the singer doesn't have to know the words... if we're going to do Guitaraoke properly, the players shouldn't need to know the songs.

So, that's the requirement: **guitar chords on screen on the night.** For the last couple of weeks, I've been investigating possible ways of doing this -- from editing the videos by hand in Premiere (which is way too time-consuming), to building some sort of custom video player that'll read chord charts from a text file and overlay them onto the video (turns out building a video player is *hard*), to complicated systems involving OBS.

Today I hit a bit of a milestone, though. Here's how I got there.

### Vamp and Chordino

[Vamp](https://www.vamp-plugins.org/) is "an audio processing plugin system for plugins that extract descriptive information from audio data". I'd never heard of Vamp until a few days ago, and I have to say, it's not the most user-friendly platform I've ever seen -- the "documentation" for quite a few of the plugins is the scientific paper published by the authors describing what the plugin does. ([No, really...](https://code.soundsoftware.ac.uk/projects/beatroot-vamp))

> Caveat: I spent a few days trying to get this stuff running on my M1 Macbook Pro, with limited success. Arm64 binary hosts can't load x64 binary plugins, and a lot of this stuff involves getting program A to load library B which requires library C. Windows 10 has been straightforward, though - and I suspect Intel Macs and Linux would be just as easy.

To try it out and see how well it worked, I installed the [Vamp Plugin Pack](https://www.vamp-plugins.org/pack.html), and then used Audacity as a host application to play around with the plugins. Once you've installed the plugin pack, click Analyze, Add / Remove Plug-ins... and enable the "Chordino: Chord Estimate" plugin:

![image-20220919193238986](/images/posts/2022/image-20220919193238986.png)

Then open an audio file, highlight the audio waveform, go to Analyze > Chordino: Chord Estimate... and you'll get this:

![image-20220919202250234](/images/posts/2022/image-20220919202250234.png)

This was my first "wow, this might actually work" moment... the plugin has done a pretty good job identifying the chords to "Man! I Feel Like A Woman" by Shania Twain, but it's also extracted the exact timing of the chord changes. This is going to be useful.

The next step was to get this data out into a format I could actually work with. Turns out that the [Vamp developer SDK](https://www.vamp-plugins.org/develop.html) includes a simple command-line host, so I grabbed a copy of that. 

To use the command line host, I had to convert my input file to WAV audio (Audacity will quite happily analyze MP3 audio and MP4 video files if you've got the ffmpeg library installed). It took a bit of trial and error to get the exact syntax right; the command I needed is:

```
D:\projects> VampSimpleHost.exe nnls-chroma:chordino man-i-feel-like-a-woman.wav

VampSimpleHost.exe: Running...
Reading file: "man-i-feel-like-a-woman.wav", writing to standard output
Running plugin: "chordino"...
Using block size = 16384, step size = 2048
Plugin accepts 1 -> 1 channel(s)
Sound file has 2 (will mix/augment if necessary)
Output is: "simplechord"
 0.185759637: N
 0.464399093: Bmaj7
 3.854512471: Bb
 5.061950113: Gm
 5.619229025: Bb
 20.944399093: Eb7
 22.244716553: Bb
 28.653424036: Eb7
 29.907301587: Bb
 31.950657596: Gm
 32.554376417: Bb
 34.411972789: Ab
 34.690612245: Bb
 38.220045351: Ab
 38.545124716: Bb
 ...
```

Easy. That's the timestamp (in seconds, as a decimal fraction), and the chord ("N" denotes "no chord").

OK. Later, we can wire this into some kind of automated processing pipeline. For today, what I did was to redirect that into `chords.txt` and move on to the next part: turning this into video.

### Turning Chord Data Into Video

There's a bunch of ways to turn data into video, but there's two things to remember. One -- it always comes down to rendering individual frames and then sticking them together. And two -- if [ffmpeg](http://ffmpeg.org/) can't do it, you don't need it. If you've not worked with ffmpeg before, it's a command-line application that can read, write, convert and stream just about every audio and video format ever invented.

So, here's my approach:

1. Create a program that'll read that chord data and turn it into individual video frames
2. Feed those frames to ffmpeg to produce a transparent video file
3. Composite that video file onto the top of the original karaoke track (kinda like showing a subtitle track on a movie).

#### Rendering video in .NET using ImageSharp and FFMpegCore

I used .NET here because I know it, and I like it. To actually draw the chord names onto each frame, I'm using ImageSharp; each frame is then wrapped in an `ImageVideoFrameWrapper`, a class I wrote to pass data from ImageSharp to ffmpeg. I'm then using the `FFMpegCore` library to read those frames directly from memory and render them into the output video stream. Note that I'm using the `.webm` format here, and specifying `libvpx-vp9` as the video codec -- this is because I want my output video to support alpha transparency. 

Here's the program code:

```csharp
using ChordMaker;
using FFMpegCore;
using FFMpegCore.Arguments;
using FFMpegCore.Pipes;
using SixLabors.Fonts;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Drawing;
using SixLabors.ImageSharp.Drawing.Processing;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;

const int FPS = 60; // frames per second
const float SPF = 1f / FPS; // seconds per frame

var chords = File.ReadAllLines("chords.txt").Select(line => new Chord(line)).ToList();
for (var i = 1; i < chords.Count; i++) {
    chords[i-1].Duration = chords[i].Time - chords[i-1].Time;
}

var frameCount = (int)((chords.Max(pair => pair.Time) + 5) * FPS);
const int width = 1920;
const int height = 1080;
const int speed = width/6;
var frames = CreateFramesSD(frameCount, width, height, chords);
var videoFramesSource = new RawVideoPipeSource(frames) { FrameRate = FPS };
FFMpegArguments
    .FromPipeInput(videoFramesSource)
    .OutputToFile("chords.webm", overwrite: true, options => options
    .WithVideoCodec("libvpx-vp9"))
    .ProcessSynchronously();
Console.WriteLine("Done");

static IEnumerable<IVideoFrame> CreateFramesSD(int count, int width, int height, List<Chord> chords) {
    var family = new FontCollection().Add(System.IO.Path.Combine("fonts", "ttf", "FreeSansBold.ttf"));
    
    DrawingOptions options = new() {
        GraphicsOptions = new() {
            ColorBlendingMode = PixelColorBlendingMode.Normal
        }
    };

    var playheadPosition = width / 8f;
    var chordBarHeight = height / 8f;
    var chordBarTop = chordBarHeight * 6.5f;
    var font = family.CreateFont(chordBarHeight * 0.6f);
    var chordTextTop = chordBarTop + chordBarHeight * 0.2f;
    var transBlack = Brushes.Solid(Color.FromRgba(0, 0, 0, 200));
    var transRed = Brushes.Solid(Color.FromRgba(255, 0, 0, 127));
    for (var frame = 0; frame < count; frame++) {
        Console.WriteLine();
        Console.Write($"Frame {frame}/{count}: ");
        var time = frame * SPF;
        using Image<Rgba32> image = new(width, height, Color.Transparent);
        image.Mutate(x => x.Fill(options, transBlack, new RectangularPolygon(0, chordBarTop, width, chordBarHeight)));
        var lastChord = String.Empty;
        foreach (var chord in chords) {
            if (chord.Name == "N") continue; // No chord
            if (chord.Name == lastChord) continue; // No change
            if (chord.Name.Length > 4) continue; // ignore chords like Bm7b5 which Chordino sometimes returns
            if (chord.Duration < 0.5f) continue; // skip chords which are very, very short
            lastChord = chord.Name;
            var offset = playheadPosition + speed * (chord.Time - time);
            if (offset < -playheadPosition || offset > width) continue;
            var point = new PointF(offset, chordTextTop);
            Console.Write($"{chord.Name} ");
            image.Mutate(x => x.DrawText(chord.PrettyName, font, Color.White, point));
        }
        image.Mutate(x => x.Fill(options, transRed, new RectangularPolygon(0, chordBarTop, playheadPosition, chordBarHeight)));
        image.Mutate(x => x.Fill(options, Brushes.Solid(Color.White), new RectangularPolygon(playheadPosition - 2f, chordBarTop, 4, chordBarHeight)));
        using ImageVideoFrameWrapper<Rgba32> wrapper = new(image);
        yield return wrapper;
    }
}
```

This is the `Chord` class:

```csharp
class Chord {
    public float Time { get; set; }
    public string Name { get; set; }
    public float Duration { get; set; } = 0f;
    public string PrettyName => Name.Replace("b", "♭").Replace("#", "♯");

    public Chord(string line) {
        var tokens = line.Split(":");
        Time = float.Parse(tokens[0].Trim());
        Name = tokens[1].Trim();
    }
}
```

and the `ImageVideoFrameWrapper<T>` class that I'm using to get data from ImageSharp into the FFMPEG input buffer:

```csharp
using System.Runtime.CompilerServices;
using FFMpegCore.Pipes;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;

namespace ChordMaker; 

public class ImageVideoFrameWrapper<T> : IVideoFrame, IDisposable where T : unmanaged, IPixel<T> {
    public int Width => Source.Width;
    public int Height => Source.Height;
    public string Format => "rgba";
    public Image<T> Source { get; private set; }
    public ImageVideoFrameWrapper(Image<T> source) {
        Source = source ?? throw new ArgumentNullException(nameof(source));
    }

    public void Serialize(Stream stream) {
        byte[] pixelBytes = new byte[Source.Width * Source.Height * Unsafe.SizeOf<Rgba32>()];
        Source.CopyPixelDataTo(pixelBytes);
        stream.Write(pixelBytes, 0, pixelBytes.Length);
    }

    public async Task SerializeAsync(Stream stream, CancellationToken token) {
        var pixelBytes = new byte[Source.Width * Source.Height * Unsafe.SizeOf<Rgba32>()];
        Source.CopyPixelDataTo(pixelBytes);
        await stream.WriteAsync(pixelBytes, 0, pixelBytes.Length);
    }

    public void Dispose() {
        Source.Dispose();
    }
}
```

That'll spit out a `.webm` video file.  The final step is to composite this video onto the original backing video, which is another job for `ffmpeg`:

```bash
ffmpeg
		# input file #0:
		-i original.mp4
		# video codec for input file #1: libvpx-vp9
		-c:v libvpx-vp9 
		# input file #1
		-i chords.webm
        # video filter: scale video #1 to 1280x720, store that in [z], then overlay [z] onto video #0
		-filter_complex "[1:v]scale=1280:720[z];[0:v][z]overlay" 
		# video codec for output: libx264
		-c:v libx264 
		# video bitrate for output@: 2500kbps
		-b:v 2500k 
		# output filename
		composite.mp4
```

That'll produce `composite.mp4`, which is the original backing video with the transparent chord overlay composited onto the top of it. It's also a 4-minute video I don't have permission to publish online, with a 5.1 surround sound mix that's going to sound really weird unless you're running it through the right audio gear, so just for all you folks following along at home, I ran it through `ffmpeg` one more time:

```bash
ffmpeg 
	# input file: 
	-i .\composite.mp4 
	# audio channels: 2
	-ac 2 
	# audio filter: render 5.1 down to 2.0 audio.
	#  FL (front left) = 0.7 * FC (front center), + 0.70 * FL (front left) + 1.0 * BL (back left)
	#  FR (front left) = 0.7 * FC (front center), + 0.70 * FR (front right) + 1.0 * BR (back right)
	-af "pan=stereo|FL=0.7*FC+0.70*FL+1.0*BL|FR=0.7*FC+0.70*FR+1.0*BR" 
	# skip start time to 45 seconds 
	-ss 00:00:45 
	## trim video length to 30 seconds
	-t 00:00:30 
	# use the codec for video: libx264
	-c:v libx264 
	# set the video bitrate to 2500kbps
	-b:v 2500k 
	# use the codec for audio: aac
	-c:a aac 
	# output filename
	guitaraoke-demo.mp4
```

That'll produce a 30-second clip, in regular stereo, which I've uploaded to YouTube so you can see the results:

<iframe width="640" height="360" src="https://www.youtube.com/embed/r_e4PJLCEdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

That's a pretty convincing proof of concept... but there's a world of difference between doing it once, with one clip, and being able to churn out the 50+ tracks you need to actually run a karaoke night. So next steps are to add beat detection, so I can quantise the timing of the chord changes to land on the beat exactly. Not essential, but nice to have.

I also need to automate the various steps - video > WAV > chords > overlay > composite - so I can churn this thing across a folder full of tracks and spit out dozens of videos at a time. I suspect some tracks will need some manual editing of the chord data before rendering the video, so I also need to figure out a way to run a high-speed version, 12fps at 640x360, to check the results, and then the high-quality 1280x720 60fps version to produce the final video.

And if you want to see it in action, come along to the [Ignition Brewery and Taproom](https://ignition.beer/) on the third Saturday of the month and check it out. Bonus points if you actually get up and play something. 🎸🤘🍻