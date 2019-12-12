---
title: Shaving the Jekyll Yak
layout: post
author: Dylan Beattie
opengraph: 
  description:Tracking down a random build failure with Jekyll and pubconf.io
---

I use Jekyll and Github Pages for pretty much all my standalone websites these days, and I love it - the combination of static HTML, Markdown and YAML provides just enough data-driven behaviour to avoid lots of unnecessary duplication, but without any of the costs or overheads of running databases and server-side processing.

Until today. Today, dear reader, I hit a bump. And it starts, like so many things, at the pub. At [PubConf](https://pubconf.io/), to be more exact. [Todd Gardner](https://twitter.com/toddhgardner) is taking a bit of a break from travel in 2020, so I'm going to be running PubConf London at the end of January - which means I get commit access to pubconf.io (yay!) for the next two months. It's built using Jekyll and hosted on Github Pages, and I've had a local version of the PubConf website running on my Macbook for the last 4-5 months without any hassles... except last week, I repaved my Macbook with a clean install of macOS Catalina. And apart from a couple of weird quirks that I've managed to isolate, it's all good - including all my other Jekyll sites.

So I grab a fresh clone of the PubConf source tree, do the `bundle install` / `bundle exec jekyll serve` invocation, and... boom.

```bash
pubconf.github.io $ bundle exec jekyll serve
Configuration file: /Users/dylanbeattie/Projects/pubconf.github.io/_config.yml
NOTE: Inheriting Faraday::Error::ClientError is deprecated; use Faraday::ClientError instead. It will be removed in or after version 1.0
Faraday::Error::ClientError.inherited called from /Library/Ruby/Gems/2.6.0/gems/octokit-4.14.0/lib/octokit/middleware/follow_redirects.rb:14.
            Source: /Users/dylanbeattie/Projects/pubconf.github.io
       Destination: /Users/dylanbeattie/Projects/pubconf.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
jekyll 3.8.5 | Error:  wrong number of arguments (given 2, expected 1)
```

That's not good. And I hadn't even changed anything yet. So... here begins a protracted bout of yak-shaving. 

First thought: perhaps macOS Catalina uses a different default version of Ruby, that's no longer compatible with this particular Jekyll configuration. So I spend an hour or so installing rbenv, the version manager that lets you run different Rubies side-by-side. No luck - `2.4.5`,` 2.4.9` and the default `2.6.3` all produce the same result.

I Google the error message. Now, what I'm looking for here is something that's *recent* - looks like various folks have had this error message over the years, but I'm trying to work out what might have changed with that stack recently that could be causing this error to start happening. I find this, which looks pretty promising, including [this comment from 15 October](https://github.com/envygeeks/jekyll-assets/issues/622#issuecomment-542363774):

> I believe this is actually an issue with a change in sprockets 4.0.0:

I've never heard of Sprockets, but according to the internet "Sprockets is a Ruby library for compiling and serving web assets." Now, there are two things here which I think are interesting:

1. The code for pubconf.io uses a plugin called `jekyll-assets` - which I don't use on any of my other Jekyll sites.
2. `jekyll-assets` relies on Sprockets. 
3. Sprockets released version 4.0.0 on October 8th.

At this point, I remember another detail that might be interesting: the PubConf site is built using TravisCI, which means there's a separate build pipeline I can look at that's nothing to do with my laptop. Now, here's where it gets really interesting. I ran a fresh build on TravisCI, using the **exact same source tree** that built cleanly on November 8th -and boom. Failing build. But, interestingly, it failed with a different error message:

```bash
Configuration file: /home/travis/build/PubConf/pubconf.github.io/_config.yml
NOTE: Inheriting Faraday::Error::ClientError is deprecated; use Faraday::ClientError instead. It will be removed in or after version 1.0
Faraday::Error::ClientError.inherited called from /home/travis/build/PubConf/pubconf.github.io/vendor/bundle/ruby/2.4.0/gems/octokit-4.14.0/lib/octokit/middleware/follow_redirects.rb:14.
            Source: /home/travis/build/PubConf/pubconf.github.io
       Destination: /home/travis/build/PubConf/pubconf.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
  Liquid Exception: Liquid syntax error (/home/travis/build/PubConf/pubconf.github.io/_includes/head.html line 111): Unknown tag 'stylesheet' included in /_layouts/default.html
jekyll 3.8.5 | Error:  Liquid syntax error (/home/travis/build/PubConf/pubconf.github.io/_includes/head.html line 111): Unknown tag 'stylesheet' included 
The command "./_tools/build" exited with 1.
```

OK, so let's take a closer look at what happens if I lock my local Ruby for this project to `2.4.5`, the same version that's used on TravisCI:

```
pubconf.github.io $ rbenv local 2.4.5
pubconf.github.io $ ruby --version
pubconf.github.io $ ruby 2.4.5p335 (2018-10-18 revision 65137) [x86_64-darwin19]
pubconf.github.io $ rm Gemfile.lock
pubconf.github.io $ gem install jekyll
pubconf.github.io $ gem install bundler
pubconf.github.io $ bundle
pubconf.github.io $ bundle exec jekyll serve
```

Now, it still didn't work - but check this out: I'm now getting the same error locally as I get on TravisCI:

```bash
Liquid Exception: Liquid syntax error (/Users/dylanbeattie/Projects/pubconf.github.io/_includes/head.html line 111): Unknown tag 'stylesheet' included in /_layouts/default.html
jekyll 3.8.5 | Error:  Liquid syntax error (/Users/dylanbeattie/Projects/pubconf.github.io/_includes/head.html line 111): Unknown tag 'stylesheet' included 
```

This is progress! Because if my local system fails the same way as TravisCI does, then it stands to reason if I can get it working locally, the same fix will work on the Travis setup.

So... what the hell does `Unknown tag 'stylesheet' included ` mean? Well, like before, there's a bunch of search results for this, but none of them suggest anything that's changed within the last few months.

But I did find [this issue](https://github.com/envygeeks/jekyll-assets/issues/342) on the jekyll-assets Github repository, which includes this comment from [envygeeks](https://github.com/envygeeks/jekyll-assets/issues/342#issuecomment-360634222):

> Our website is an unreliable source of documentation (right now, I'm working on adding that to my pipeline.. it'll be a few weeks yet.) Yes, every tag but `{% asset %}` has been removed. As for the GitHub-pages issue, this issue belongs to them, we've not changed anything by way of integration with Jekyll, other than how we hook in, we have people who happily use Jekyll-Assets 3.x with Github Pages and have no problems.

The smoking gun here:

> **Yes, every tag but `{% asset %}` has been removed.** 

Now, this comment is from January 2018. Which suggests that the `{% stylesheet %}` tag that's used in the PubConf code templates has been deprecated since the release of `jekyll-assets` v3.0.0, in November 2017.

Now this is seriously weird. Sure, it explains what's broken, and the fix is easy – add `gem "jekyll-assets", "~> 2.3.2"` to the `group: jekyll_plugins do` section in the project's `Gemfile` – but doesn't give us any clues at all as to why this didn't break until now. Because as far as I can tell, on 8th November 2019 – just over a month ago – TravisCI was quite happily running that build and ending with `jekyll-assets` version 2.something and everything just worked. Despite the fact it, apparently, should have stopped working on November 2017, two years earlier, when the first 3.x version of `jekyll-assets` was shipped.

So, the sprockets thing was a rabbit hole, it's nothing to do with macOS Catalina, and chatting with Todd, turns out he's got another site with an identical configuration, on a freshly-paved laptop, that's pulling down `jekyll-assets 2.4.0` without having to specify a version. 

If anybody has any bright ideas as to what's going on, I'd be really curious to hear them. But, as happens so often in the wonderful world of modern web development, I got better things to do than try and figure out what caused the weird impossible bug that's not only now fixed, but according to all the available evidence should never even have happened in the first place... 

