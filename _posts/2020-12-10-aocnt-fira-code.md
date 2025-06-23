---
title: "Dylan's Advent of Cool Nerd Things Day 10: Fira Code"
date: 2020-12-10T12:00:00
layout: advent2020
author: Dylan Beattie
meta:
  og_image: /images/posts/2020-12-advent/cards/2020-12-10-aocnt-fira-code.png
  og_description: "Fira Code: the best programming font in the world, ever."
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2020-12-advent/
typora-root-url: .\..\..
categories:
    - advent2020
tool:
    name: Fira Code
    url: https://github.com/tonsky/FiraCode
    summary: "Fira Code is the best programming font in the world, ever."
---

Today's Cool Nerdvent Thing isn't a tool, or a utility, or a website, or a hidden Windows feature... it's a font. But not just any font – this font is Fira Code, and it is absolutely the best font ever created for computer programming.

Modern computer font systems like TrueType and OpenType support a feature called **ligatures**. Ligatures date all the way back to the days of mechanical typesetting and movable type, when printers (as in, people who run printing presses, as opposed to, say, HP Laserjets) would pick a specific glyph to represent common pairs of characters:

![ligatures](/images/posts/2020-12-advent/ligatures.png)

You can get lots of fonts that include ligatures for common letter sequences like those above, but Fira Code takes things to a whole new level by using ligatures to replace common programming character sequences with symbols. It's not the only programming font that uses ligatures – there's a [great article on Better Web Type about monospaced fonts with coding ligatures](https://betterwebtype.com/articles/2020/02/13/5-monospaced-fonts-with-cool-coding-ligatures/) – but it's one of the best, and it's definitely my personal favourite. 

Here's a snippet of F# code using the regular Consolas typeface, and the same code shown in Fira Code:

![image-20201208180855193](/images/posts/2020-12-advent/image-20201208180855193.png)

This is **exactly the same source code** – it's a regular ASCII text file; the only thing that's changed is the font. At a glance, the ligatures might look like an eye-catching gimmick, but I find them really, really useful for working on code that has lots of gnarly operators - if you've ever had a JavaScript bug caused by double-equals (`==`') vs triple-equals (`===`), you'll appreciate how visually distinct Fira Code makes these two character sequences. 

![img](https://repository-images.githubusercontent.com/26500787/bf313080-6b02-11ea-9cd5-c3dca880736d)

Underneath the ligatures, though, there's a really solid, readable monospaced font, available in various weights for different kinds of editors and displays. **Fira Code** is released under the SIL Open Font License 1.1, and it's available as a TrueType TTF file that'll work on most operating systems, most text editors and programming tools, and it's available in Open Font WOFF format for use on your website as well.

Fira Code is created by [Niki Tonsky](https://twitter.com/nikitonsky), and it's available at [https://github.com/tonsky/FiraCode](https://github.com/tonsky/FiraCode). 
