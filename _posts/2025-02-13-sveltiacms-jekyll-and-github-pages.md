---
layout: post
title: SveltiaCMS, Jekyll and GitHub Pages
date: 2025-02-13T20:38:00
author: Dylan Beattie
---
I used to blog a lot. Back in the good old days of Windows Live Writer and Blogger, when I could click "New post", bash out a few hundred words, paste an image or two, and... done.

In 2020 I moved all my stuff from Blogger to Jekyll and GitHub Pages, because I wanted more control over the content on my site. It worked, and I love Jekyll dearly and it's a fantastic tool, but it kinda killed my blogging because even a two-paragraph post meant git pull, create a new Markdown file, make sure to get the filename right (and filenames are based on dates, so it if you don't get around to posting it the day you started it you've gotta rename stuff), git add, git commit, build... yeah.

So I asked around for whatever's the closest thing to Windows Live Writer - with the caveats that cntent stays in Markdown, and for now it stays on Github. I own my content. I want it under my control, in a portable format.

[Chris Simon](https://chrissimon.au/) pointed me at [Decap CMS](https://decapcms.org/), which looked really interesting: it's a JS app that runs from a subfolder inside your static site, connects directly to GitHub, and edits Markdown files right in your repo. Except (a) I managed to crash their live demo editor within fifteen seconds by trying to paste an image into it _(I know! Pasting an image! Into a blog post! Totally weirdo edge case that'll never happen in real life!),_ and (b) once I'd figured out how to Not Paste Images, I couldn't get the auth for it running reliably. It uses Netlify to authenticate with GitHub -- GitHub can't do pure JS authentication 'cos it needs a server to handle the post-authentication callback -- and seemed to have some problems using Netlify to authenticate when the site I was trying to edit wasn't hosted on Netlify.

Then I found [Svelti](https://github.com/sveltia/sveltia-cms)[a CMS](https://github.com/sveltia/sveltia-cms). It's the same idea: CMS as a JS app, in a subfolder of a static website, that pushes stuff straight to a GitHub repo - along with a Cloudflare worker app that handles the authentication bit.

So if you're reading this? It worked: this was posted from Sveltia, which is hooked into dylanbeattie.net/admin, and maybe means bashing out those quick 2-paragraph blog posts might just be as easy as it was in the days of Live Writer.
