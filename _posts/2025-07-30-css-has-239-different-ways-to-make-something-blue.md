---
layout: post
title: CSS Has 239 Different Ways To Make Something Blue
date: 2025-07-30T09:15:00
author: Dylan Beattie
meta:
  og_description: Modern CSS has 239 different ways to make something blue. No, really.
  og_image: /images/posts/css-has-239-ways-to-make-something-blue.jpg
  twitter_card: summary

---
I'm making a new video course for Dometrain at the moment, and it's all about CSS - one of the three pillars of the open web, along with HTML and JavaScript. I love CSS, I've been working with it literally since it was invented, but I absolutely understand why so many developers don't enjoy working with it.

CSS has had to incorporate conventions and standards from a wider range of disciplines than any other mainstream technology. Modern CSS incorporates ideas from mechanical typesetting dating back centuries, conventions around information design from hundreds of years of printing and publishing, fifty years of innovations from digital publishing and computer graphics, twenty years of getting stuff wrong on the web while we were still figuring out how to get it right - right up to things like how to account for the “dynamic island” on the latest iPhone handsets.

To say it's accumulated a few idiosyncrasies along the way would be an understatement. Yesterday, while putting together the module about how the various colours models work in CSS, I found myself wondering how many  different ways there are in modern CSS to give a box a blue background.

I got to 239. [Two hundred and thirty nine different ways](https://dylanbeattie.net/miscellany/blues.html) to say "the box is blue".

You've probably heard of named colours (`color: blue;`), and hex codes (`color: #0000ff`). Hex codes can also be written as three digits (`#00f`), four digits (`#00ff`), and eight digits (`#0000ffff`).

Then there's the `rgb()` function, which can take each colour component as a decimal or as a percentage. There's `hsl()`, which takes hue, saturation, and lightness, along with a bunch of new colour models - `hwb()`, `lab()`, `lch`, `oklab()` and `oklch()` - all of which also take a `hue` component.

Except `hue` in CSS is an angle - the colour's position on a colour wheel - and CSS already has a unit system in place for angles, that's used for rotations and transformation, so the colour models just reuse that. Which means you can write the `hue` component as degrees (with or without `deg`),  radians, gradians _(the cursed unit. 400 grads in a circle. Why does it even exist? I don’t know.)_, or turns. So if any colour specification involves hue, there are five different ways to write it.

Add in two different ways to specify alpha transparency - `/ 100%` and `/ 1.0` - and  you end up with well over two hundred different ways to say "the box is blue"... and this is just using the modern CSS colour syntax; we're not even getting into the legacy `rgb()` and `hsl()` function syntax, their aliases `rgba()` and `hsla()`, or any of the wonderful things you can do with `calc()` and relative colours.

OK, let's be fair here. If the language designers hadn't reused CSS angular units for hue, we'd be 
looking at more like 40, maybe 50 syntax variants. Pick a lane for how you want to specify transparency, you're down to 20 or so. You're very unlikely to use the LAB or LCH colour models in production unless you know exactly what you're doing, so that'll chop it down further; in reality, you're not going to encounter more than handful of these variants, and the vast majority of sites out there just use hex codes for everything.

But, y'know, if you've got the whole chaotic evil vibe going on, why not spec all your colours as `oklch`, lightness and chroma as arbitrary decimals, hue in grads, and give everything an alpha channel
that's randomly a percentage or a decimal, even for colours which are fully opaque?

I think you'll all agree that `color: blue;` looks kinda dumb, but `color: oklch(0.452 0.31 292grad / 100%);` is clearly the work of a genius.

Check out the whole list over at [https://dylanbeattie.net/miscellany/blues.html](https://dylanbeattie.net/miscellany/blues.html)
