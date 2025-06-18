---
title: "Using the Contour ShuttleXpress with Camtasia"
layout: post
author: Dylan Beattie
meta:
  og_image: /images/posts/2024/2024-03-17-using-the-contour-shuttlexpress-with-camtasia.jpg
  og_description: "How to set up the Contour ShuttleXpress controller to work with TechSmith's Camtasia video editing application"
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2024/
typora-root-url: .\..\..
---

The Contour ShuttleXpress is a controller designed for editing audio and video. I use it all the time in applications like Logic Pro X; the jog dial and shuttle wheel are brilliant for, well, jogging and shuttling around your project's timeline.

![contour-shuttlexpress-camtasia-settings](/images/posts/2024/contour-shuttlexpress-camtasia-settings.png)

[Camtasia](https://www.techsmith.com/video-editor.html) is a screen recording and video editing app from the folks at TechSmith, which I use for doing the screen recordings I use in my presentations and workshops.

Out of the box, the ShuttleXpress doesn't support Camtasia, so I created an application profile for it.

| Action             | Keystroke                         | What it does                                                 |
| ------------------ | --------------------------------- | ------------------------------------------------------------ |
| Jog Left           | `,`                               | Step backwards in timeline                                   |
| Jog Right          | `.`                               | Step forwards in timeline                                    |
| Shuttle left/right | `,` `.`                           | Move forwards backwards in timeline. Each position on the shuttle is independently programmable, so "shuttle in left 7" sends `,` as fast as possible, "shuttle in left 6" sends 60 strokes per second, and so on. It's not a perfect timeline shuttle but it's close enough. |
| Button 1           | `Ctrl` + `Home`                   | Jump to beginning of timeline                                |
| Button 2           | `Ctrl`+`Alt`+`,`                  | Move playhead to previous clip                               |
| Button 3           | `Shift`+`Ctrl`+`Alt`+`Left Arrow` | Extend selection to previous clip                            |
| Button 4           | `Ctrl`+`Alt`+`.`                  | Move playhead to next clip                                   |
| Button 5           | `Shift`+`Ctrl`+`S`                | Split all tracks at playhead                                 |

The workflow here is:

1. Shuttle until you find the start of the mistake
2. Button 5 to split all tracks
3. Shuttle forward to the end of the mistake
4. Button 5 again to split all tracks
5. Button 3 to select the new region with the mistake in it
6. `Delete` to remove the region.

and if you switch on "magnet mode" for the track you're editing, when you delete the mistake it'll automatically snap the remaining pieces together so it doesn't leave a gap.

You can download the settings file here:

[CamtasiaStudio-ShuttleXpress.pref](/download/CamtasiaStudio-ShuttleXpress.pref)

and import it using Settings Management > Options > Import Settings in the Contour Shuttle Device Configuration app:

![image-20240317193728441](/images/posts/2024/image-20240317193728441.png)



Happy shuttling :)







