---
title: "What's in a (Version) Number?"
layout: post
author: Dylan Beattie
meta:
  og_image: /images/posts/2023/2023-01-19-whats-in-a-number.jpg
  og_description: "On version numbers, prereleases, semantic versioning, release candidates - and why they might matter more than you think"
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2023/
typora-root-url: .\..\..
---

My Mastodon feed has been buzzing for the last few days with discussions about version numbers. 

First, there was this post from [Martin](https://hachyderm.io/@Martindotnet), asking what JS folks think about < 1.0 versions:

<iframe src="https://hachyderm.io/@Martindotnet/109683757201594015/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" height="400" allowfullscreen="allowfullscreen"></iframe><script src="https://hachyderm.io/embed.js" async="async"></script>

And then this one:

<iframe src="https://hachyderm.io/@Martindotnet/109700844080933628/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" height="400" allowfullscreen="allowfullscreen"></iframe><script src="https://hachyderm.io/embed.js" async="async"></script>

Now, this kind of rough'n'ready survey can be great to kick off some entertaining conversations, but this is software. The correct answer in both cases is "it depends". Because it *always* depends.

Turns out the specific scenario they're dealing with here is a project that's basically ready to go. It's running on production systems, it's solid, it's feature complete, but for political reasons the team behind it isn't prepared to stamp it as version 1.0.0 - and probably won't be for a year...![a doge meme. so politics. much bureaucrat. such efficient. WOW.](/images/posts/2023/image-20230119133925733.png)



So the actual question here is something closer to:

> We have a solid, finished product that can't be shipped as 1.0.0 because of politics. What version number would mean you were comfortable using our package on your projects?
>
> **▢** 0.9.x
>
> **▢** 1.0.0-rcx
>
> **▢** I can't/won't use either of those versions
>
> **▢** Either would be OK for me

Now that's a *much* more interesting question. I've run plenty of stuff in production that uses 0.9.x packages, but I have only very occasionally deployed a prerelease package as part of a production release, and only under very specific circumstances.

Let's say I have a project which uses Foobar 2.1.0. I know Foobar, I've used it on a bunch of projects, it's solid, I trust it. I find a bug. The bug will be fixed in the forthcoming 2.1.1 release... but I need it now. In that situation, I'll install 2.1.1-rc1, but as a temporary fix. This is reinforced by the way the NuGet package management ecosystem usually requires an explicit opt-in to find and install prerelease packages: It's not something you're likely to do by mistake:

![A screenshot of the NuGet package manager interface, with the "Include prerelease" checkbox highlighted](/images/posts/2023/image-20230119125322592.png)

To me, checking that "Include prerelease" box is about getting the latest version a few weeks before everybody else, and it's **completely different** thought process to what happens when I install a 0.9.x package.

To me, 0.9.x means "we're still working on it." There are TODOs in the source code, there are open issues on GitHub we haven't triaged yet, and there are specific features which will be part of a 1.0 release which are not available yet. 

That said - and as counterintuitive as this might seem - I'm probably more comfortable depending on a 0.9.x package than I am depending on a pre-release version. I'm certainly far more likely to install 0.9.x, take a bit of time to satisfy myself that's doing the right thing, and then run with it until 1.0 eventually ships. I think this is probably because I associate pre-release packages with "coming soon" -- but I don't think I've ever actually encountered the specific scenario here, where the entire product is a 1.0.0-rc and is likely to be like that for a while.

There's also a strong implication that the difference between 1.0.0-rc and 1.0.0 is technical: no new features, no new documentation, just give it a week or two for folks to kick the tyres and flush out any bugs we missed and then we'll ship 1.0. Whereas the difference between 0.9.x and 1.0.x could be down to any number of reasons - code, branding, politics, documentation.

If you'd asked me *before* I started writing this post, I'd have said that the right approach in this specific situation would be ship 0.9.x releases. And remember - semver is numeric, so if you add significant new features, you can ship 0.10.x, 0.11.x, 0.12.x and keep going until the stars align and you're ready to bump the major version to 1. The process of writing it has made me think hard about why that's the case, though... and after careful reflection, I realise that it doesn't actually make a huge amount of sense. But I suspect most folks out there won't have thought about it in this much detail, which is why I think that the vast majority of developers working in .NET would be more likely to install and use a 0.9.x release than a 1.0.0-rc release. 

And at the end of the day, though, it's a version number. Your team might have taken weeks of tests, checks, reviews and sign-off procedures to finally stamp a release as 1.0.0, while the package that's next to yours in the NuGet interface was one dev wired on Red Bull and synthwave YOLO'ing their code to NuGet at 4am and marking it 1.0.0 because they hadn't found any bugs for, like, *hours*... and to all us folks out here, they look *exactly the same*. It's what happens after we install them that actually matters.

