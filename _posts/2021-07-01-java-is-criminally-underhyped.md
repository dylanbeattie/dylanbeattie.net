---
title: "Java Criminally Underhyped? Not Back in 1997."
date: 2021-07-01T12:00:00
layout: post
author: Dylan Beattie
meta:
#  og_image: /images/posts/2021-07-01-.jpg
  og_description: "A tale of the Olden Times, when Network Computers running Java applets were going to take over the world."
#  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2021/
typora-root-url: .\..\..
---

Earlier today, a fun little moment of [Twitter serendipity](https://twitter.com/bitfield/status/1410589012969074688) alerted me to an article by Jackson Roberts, a computer science student at the University of Colorado, entitled "[Java is criminally underhyped](https://jackson.sh/posts/2021-04-java-underrated/)". It's a really interesting article, and Jackson's observations correlate with a lot of my own thinking about languages and platforms, although I am squarely in the .NET / CLR camp on that particular front.

But Jackson ends his article:

> I am curious why Java lost its hype in the first place. Programmer culture history is poorly documented and if you have insight, please [email me](mailto:jacksonroberts25@gmail.com) or leave a comment.

And, well, the comment I was leaving got a bit long, so I figured I'd blog about it instead. You see, I studied computer science at the University of Southampton, from 1997 to 2000, and when I was an undergraduate, the hype about Java was unbelievable. Java was too important to ignore; it was released in January 1996, and by the time I started university in September 1997 it was a mandatory course for all first year students; it was used throughout my degree course, right up to the final year module on programming language design where our coursework assignment was to build a Scheme interpreter – in Java.

**Java circa 1997 was probably the most hyped thing I have ever seen in my career.**

For starters, it was the first really mainstream language to introduce a lot of features we now take for granted in most high-level languages. Memory management? Readers, even to a first-year comp sci undergraduate who had spent a grand total of six weeks working with `malloc` and `free`, Java's automatic garbage collection was clearly a revelation. Concurrency? It has threads. They work. Job done. Exceptions? You mean I can just write functions that return what I want, instead of functions that leave the result in a `char*` pointer somewhere and return an arbitrary non-zero integer if it worked? Java introduced a lot of incredibly powerful ideas and patterns, and it's hard to underestimate how much impact it would have on the next two decades of programming language design.

But Java wasn't content with that. Java was going to solve ALL the problems. JavaScript? The language that would end up taking over the world wide web? JavaScript was a glue language. The idea was that all your **serious** applications would be deployed as Java applets, with JavaScript used for only the most superficial wiring between applets. Java applets were such a big deal in 1997 that some people seriously believed that they represented the end of desktop applications, the end of Microsoft Windows; even the end of the computer as we knew it. 

Corel, who at the time were still a credible threat to Microsoft's emerging monopoly, announced in 1996 that they were porting their WordPerfect office suite and their market-leading CorelDRAW! graphics software to Java. Check out [this Infoworld article from 1996](https://www.infoworld.com/article/2077194/office-productivity-comes-to-java.html) to see just how deep the hype hole really went:

> “The success of Java-based network computers, and perhaps Java itself, will likely require the availability of vertical productivity applications for word processing, spreadsheets and databases. At the JavaOne conference, Corel Corp. (www.corel.com) made a first stab at offering such products with the announcement that it plans to deliver a suite of office applications based on its QuattroPro and WordPerfect products. Both products should be available for sale by early next year.”

Java was going to revolutionise desktop development: Java Swing and the Java Native Interface (JNI) meant you could write your app once, and run it on Windows, Linux and Solaris.[^1]  And thanks to the amazing power of JavaBeans, once you had implemented a particular service or algorithm, you could create a "bean" for it and it could be reused anywhere, by anybody, and building software would be as easy as putting together Lego bricks. JavaBeans were often cited as the last component model we would ever need.

[^1]: Apple and macOS were having a bit of a crisis at this exact point in history. The blue iMac G3 in August 1998 marked the start of a slow journey back to the mainstream, that would continue with the release of macOS X in 2001 and conclude with the switch to Intel processors in 2006.

There was an industry spec for a "[Network Computer](https://en.wikipedia.org/wiki/Network_Computer)", a device profile that mandated support for HTTP, Java, JPEG and a handful of other standards… hardware companies would build and sell Network Computers, developers would use Java's "write once, run anywhere" model to build software for Network Computers, and the entire future would be Java applets running on set-top boxes (or "net-top boxes" as they were often dubbed.) Sun Microsystems actually shipped a thing called the JavaStation, a device based on their SPARCstation platform that ran JavaOS. 

![The Sun Microsystems JavaStation](/images/posts/Sun_Microsystems_JavaStation_right_side.jpg)



The problem is: Java was good, but it wasn't *that* good. For Windows desktop apps, Visual Basic and Visual C++ could run rings around it. For games and anything where performance was a consideration, C++ all the way, especially as we entered an age of affordable 3D graphics cards and OpenGL became a big deal. And for server-side web programming, we had Perl, PHP, Microsoft Active Server Pages, and good old `cgi-bin`, all of which would plug in alongside your hand-coded HTML website and let you gradually add interactivity without having to rebuild your whole site. We also had a handful of coursework assignments that bought into the hype, too. I remember having to build an interactive quiz game using Java Studio, a truly horrific piece of software where you had to wire together Java beans using a buggy IDE that had a frustrating tendency to crash and lose your work with it.

Java evolved. It continues to evolve. But that hysterical hype cycle of the late 1990s, when people seriously believed that the web was going to change the world *and everything connected to it would run Java*? That didn't survive the first dotcom crash.

Java eventually succumbed to the inevitable dichotomy of software platforms: sooner or later, every software project has to decide whether it wants to be exciting, or wants to be important. By the mid-2000s, the things in Java that turned out to be important – garbage collection, checked exceptions, threads – weren't exciting any more[^2], and the things that used to be exciting – Network Computers, applets, office suites written in Java – turned out not to be important. Not even important enough to invest time and money in getting them right. I still dream of a world where Microsoft Office 97 was toppled from its throne by a cross-platform WordPerfect office suite running on Java, but that timeline's well and truly deviated from ours and it isn't coming back.

[^2]: well, except to Comp Sci undergraduates who've just spent two months learning `malloc` and `free`

More than that, though, the best way to destroy hype is credible success. Hype is about excitement; it's about the tantalising possibility that if you jump on board at just the right time, you'll become part of something unprecedented and maybe end up rich and famous along the way. In the late 90s and early 2000s, a lot of people did exactly that – and, yes, many of them used Java along the way, and a fair few of those got rich and famous by getting in right at the beginning, and getting out before anybody realised their idea was never going to work. But by the mid-2000s, Java was being used in business and industry all over the world; not to build applets or to run CorelDRAW on set-top boxes, but to create stable, reliable, boring software. Java became the language of choice for calculating insurance premiums and booking railway tickets, and friends, nothing is ever going to be exciting to university undergraduates if people in suits are already using it to write pension management software.

The University of Southampton still teaches Java to first-year undergraduates, although I don't see Java applets anywhere [on the syllabus](https://www.southampton.ac.uk/courses/modules/comp1206#syllabus) – but not because it's new and exciting and they're afraid of getting left behind. Java succeeded. It's a solid, stable, reliable, cross-platform programming language with excellent tooling and a healthy ecosystem, but it's also a known quantity. And in the last decade, Java has seen an astonishing resurgence thanks to first-class support on Google's Android platform. 

And, of course, the exquisite irony is that, with over [3 billion devices](https://www.theverge.com/2021/5/18/22440813/android-devices-active-number-smartphones-google-2021) around the planet running Android, the Java dream of “write once, run anywhere” has damn near come true. It's just that back in '97, we didn't realise that would be because half the planet would be walking around all day with a JVM in their pocket.
