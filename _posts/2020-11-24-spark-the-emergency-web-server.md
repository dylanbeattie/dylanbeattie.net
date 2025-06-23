---
title: Spark - a tiny standalone HTTP server
date: 2020-11-24T12:00:00
layout: post
author: Dylan Beattie
meta:
    og_description: Quick'n'dirty HTTP hosting with Spark, the emergency web server
typora-copy-images-to: ../../images/posts/2020-11-24-spark-the-emergency-web-server/
typora-root-url: .\..\..
---
*TL;DR: Spark ([https://github.com/rif/spark](https://github.com/rif/spark)) is a tiny standalone web server, written in Go, with binaries available for most platforms. And it's very cool.*

When it comes to web dev, I'm kinda old school. I've been building web apps long enough that I remember when you could build an entire web site just by pointing your browser at `file:///c:/websites/mysite/index.htm`, hack it around until it worked, then upload the whole folder via FTP and boom, job done.

These days, you can build some pretty amazing things using HTML, JavaScript and CSS; everything runs in the browser and all you need on the server side is a way of sharing static files over HTTP. But for all sorts of reasons - mainly to with security around things like AJAX requests - you're gonna need an actual web server running on your dev machine; most of the cool stuff that the modern web does just doesn't work over `file:///` URLs. So I've been looking around for a while for a really fast, lightweight HTTP server.

For a while, I was using Python for this - python 2.x has a builtin module called SimpleHTTPServer that will share the current directory over HTTP:

````
D:\projects\github\>python -m SimpleHTTPServer 80
Serving HTTP on 0.0.0.0 port 80 ...
````

![image-20201124104555262](/images/posts/2020-11-24-spark-the-emergency-web-server/image-20201124104555262.png)

That works pretty well, but it's a bit verbose. Plus, the module syntax has changed in the Python 3 - it's `http.server` instead of `SimpleHTTPServer` - and, obviously, it won't work without Python installed.

Enter **[Spark](https://github.com/rif/spark)**. It's a tiny standalone web server, written in Go by [Radu Ioan Fericean](https://www.fericean.ro/), with [binaries available for Windows, macOS, and Linux](https://github.com/rif/spark/releases). Add it to your system path, and then you can just type `spark` in any directory and it'll share it over HTTP on port 8080.

```
D:\Projects\github>spark
2020/11/24 11:19:49 Warning: serving files without any filter!
2020/11/24 11:19:49 Serving . on 0.0.0.0:8080/...

D:\Projects\github>spark -port 80
2020/11/24 11:19:58 Warning: serving files without any filter!
2020/11/24 11:19:58 Serving . on 0.0.0.0:80/...
```

 It'll serve static content, from a file or provided on the command line:

```
D:\Projects\github>spark "<h1>Hello World!</h1>"
2020/11/24 11:22:17 Serving <h1>Hello World!</h1> on 0.0.0.0:8080/...

D:\Projects\github>spark offline.html
2020/11/24 11:25:52 Serving offline.html on 0.0.0.0:8080/...
```

It supports SSL certificates, and some very rudimentary security features to exclude specific paths when sharing a directory. It's tiny, it's fast, and it's incredibly awesome.

In fact, the only problem with Spark is the name... when I went to put this post together, all I could remember about it is that it was a web server called Spark. It took me a good 10 minutes to find it again; it turns out there are [quite a lot of web server related things called spark](https://www.google.com/search?q=spark+web+server):

![[image-20201124113121663](https://news.ycombinator.com/item?id=7224162)](/images/posts/2020-11-24-spark-the-emergency-web-server/image-20201124113121663.png)

Yeah, I know, naming things is hard. But hey, one of the reasons I write posts like this is so that it really helps me remember stuff for next time. And if it doesn't, I can always google my own blog, right?
