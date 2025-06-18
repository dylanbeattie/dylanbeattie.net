---
title: "Dylan's Advent of Cool Nerd Things Day 24: Mailtrap"
layout: advent2020
author: Dylan Beattie
meta:
  og_image: /images/posts/2020-12-advent/cards/2020-12-24-aocnt-mailtrap.png
  og_description: "Mailtrap is an online tool for testing and validating emails before your software sends them to real people."
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2020-12-advent/
typora-root-url: .\..\..
categories:
    - advent2020
tool:
    name: Mailtrap
    url: https://mailtrap.io/
    summary: "Mailtrap is an online tool for testing and validating emails before your software sends them to real people."
---

When you develop websites, or just about any kind of internet application, it's only a matter of time before you need to send email. I don't mean sending an email manually - I mean writing a feature into your software that sends templated, personalised emails you've never seen, to people you've never met, who have put their email address into one of your web pages. Order acknowledgements, receipts, password reminders, registration confirmations... nerds like me build applications that use email for all kinds of useful things. On one hand, email is amazing – a secure, reliable way to send messages to anybody, anywhere on the planet, regardless of what device, platform or internet provider they're using.

On the other hand... email is complicated. The SMTP standard that governs most internet email was ratified in 1982, and by the time it began to creak in the mid 1990s, there were already so many people using it that replacing it with something better was, and remains, basically impossible. We've added all kinds of security features, encryption and encoding improvements, but they're all fundamentally built on the same set of protocols we've been using since *Return of the Jedi* first came out. 

Integrating email into your applications is a headache. People expect slick HTML emails now, with formatting, images, and links – but, believe it or not, there is no standard for adding rich formatting to emails. Most email systems rely on a labyrinth of nested tables and old-school inline styles straight out of 2006, and that's before you even start thinking about alternate body encodings, internationalization, security, validation... yep, emails are hard to design, hard to build, and hard to test.

When it comes to designing them, find a good designer who's worked with email as a medium. Or find a design you like, and copy it. When it comes to building them, the best tool I've ever found for layouts is the fantastic [Foundation for Emails 2](https://get.foundation/emails.html) from Zurb; the MailChimp email designer is also pretty good, although it's not quite so easy to integrate into your own apps and websites.

But when it comes to testing emails, my go-to is a web app called Mailtrap; I've used it for years, and it works beautifully. Mailtrap gives you a set of SMTP server credentials, along with sample code for connecting and sending email in just about every web development platform out there:

![image-20201224011600585](/images/posts/2020-12-advent/image-20201224011600585.png) 

Plug the appropriate config into your test or staging application, send your email, then open up Mailtrap's web interface and see what you've got.

![image-20201224011359482](/images/posts/2020-12-advent/image-20201224011359482.png)

You can preview your email as it will appear on desktop, tablet and mobile devices - it's not 100% perfect, but it's easily good enough to see any glaring omissions or problems with the layout. It also gives you a detailed technical breakdown of all sorts of useful metrics and stats about your emails

The free plan gives you 500 test emails a month and a single test inbox - which is more than enough for hobby projects and trying it out. The various paid plans unlock higher limits and features like auto-forwarding, so you can bounce your test emails through Mailtrap and forward them to your real mailbox (or your boss, or your client), and the Team Plan is available for free to non-profits and open source projects.

Check it out at [https://mailtrap.io/](https://mailtrap.io/) - it's great. In fact, I have only one criticism of Mailtrap, and that's their current branding. It's OK, I guess, nothing special... but until a few years ago, their homepage had this absolutely fantastic illustration on it; a grinning octopus riding in a bin, chasing down stray emails with a fly-swatter and a rolled-up newspaper. I thought it was wonderful - memorable and distinctive and so much more engaging than just another bland corporate homepage... but hey, I guess they decided that "mad octopus riding in a bin" wasn't really on brand for them. Thankfully, the Wayback Machine never forgets – and hey, Mailtrap is still an excellent platform, and highly recommended.

![image-20201224013002203](/images/posts/2020-12-advent/image-20201224013002203.png) 

