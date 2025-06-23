---
title: "Dylan's Advent of Cool Nerd Things Day 14: Typora"
date: 2020-12-14T12:00:00
layout: advent2020
author: Dylan Beattie
meta:
  og_image: /images/posts/2020-12-advent/cards/2020-12-14-aocnt-typora.png
  og_description: "Typora: a wonderfully minimal Markdown editor."
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2020-12-advent/
typora-root-url: .\..\..
categories:
    - advent2020
tool:
    name: Typora
    url: https://typora.io/
    summary: Typora is a beautiful, minimal editor for Markdown files.
---

Writing things on the web can be harder than it looks. At the one extreme, you can just publish plain text files – and, yes, I know there's no such thing as "plain text", but a UTF-8 file served with a `text/plain` MIME type header will be readable on just about any system that can render the alphabet it's written in.

At the other extreme, there's the rich tapestry of tags, layouts and formats provided in modern HTML – grid layouts, flow layouts, drop caps, web fonts, and all sorts of wonderful typographic things that we never even dreamed of back when I started hacking web pages together in the 1990s.

The problem is that *they both kinda suck*. Managing online web content is significantly harder than it looks - online content management is a multi-billion-dollar industry, and some very smart people have [written entire books](https://www.apress.com/gp/book/9781484257494) about managing the information and presentation architecture that's required by modern websites. And at the other end, plain text is... well, it's a bit *plain*, y'know?

Everyone has their own "sweet spot" – the point where you have just enough control to achieve the things you want to do, without incorporating so much flexibility that managing the options becomes a maintenance headache. For me, that sweet spot is a file format called Markdown, It's plain text with just enough special sauce to plug in images, headings, code snippets and bullet points – the kinds of things I *want* to think about when I'm writing articles – but without having to think about layouts, fonts and typography, which are the kind of things I want to think about once every five years and then forget about until the next redesign.

The last big overhaul of this site was in August 2019, when I [migrated the whole site from Blogger to GitHub Pages](https://dylanbeattie.net/2019/08/14/migrating-from-blogger-to-github-pages.html), using a publishing system called [Jekyll](https://jekyllrb.com/). Jekyll loves Markdown files, and all of the posts and articles I've published since then have been written in Markdown, using an editor called [Typora](https://typora.io/).

![image-20201213003003044](/images/posts/2020-12-advent/image-20201213003003044.png)

Typora is wonderful. It's a lightweight, minimalist editor for Markdown files that is what I called "just WYSIWYG enough" - things like headings, bullets and code snippets get rendered on the fly, so you can get an idea of the layout of your article, but if you need to include chunks of HTML to do things like embedding IFRAMES for playing YouTube videos, just do it - if Typora knows how to render them, it will, otherwise it'll just leave the HTML tags visible and you can check it in a browser.

Typora has a bunch more features I find really, really useful, like being able to use Jekyll frontmatter to define where to store your images, and then copy'n'paste images from the Windows clipboard and have them automatically converted to PNGs and dropped into the right folder. 

![image-20201213003111024](/images/posts/2020-12-advent/image-20201213003111024.png)

It's got a whole bunch more cool features that I've hardly scratched the surface of - sequence diagrams, tables, mathematical equations - but fundamentally, it's just a really, really good tool for writing blog posts and articles.

The only open question about Typora is how much it'll cost. At the moment it's in beta, and it's free-as-in-beer - it isn't open source, but it doesn't cost money. It's been on version 0.9.9.something for a while now, though, so I'm expecting it to ship 1.0 any day now, and I'm curious to see what their pricing model is going to be when that happens. I have no problem at all paying for good software, it's just a little disconcerting becoming this attached to a tool without knowing what it'll end up costing. But hey, right now it's in beta, the beta is rock-solid, and it's free for Windows, macOS and Linux. And it's excellent.

Check it out at [https://typora.io/](https://typora.io/)



