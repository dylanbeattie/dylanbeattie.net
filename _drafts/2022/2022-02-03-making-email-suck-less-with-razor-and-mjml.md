---
title: "Making email suck less with Razor and MJML"
layout: post
author: Dylan Beattie
meta:
  og_image: 2022-02-03-making-email-suck-less-with-razor-and-mjml.png
  og_description: "How to create templated emails in .NET applications using Razor and Mailjet Markup Language"
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2022/
typora-root-url: .\..\..
---

Email is awesome. Really. For all the time we spend on Twitter and Discord and Slack and Teams, email is where the important stuff really happens. You order a new £2,500 laptop, you're not gonna relax until you get the email confirming your order. Plane tickets, concert tickets, job offers... when it comes to stuff that's important, billions of people around the world rely on email. It's not perfect, but it's pretty darn good.

Email also sucks. Back in 1982 when SMTP was invented, and people sent each other plain ASCII text messages and read them on Wyse VT20 terminals, it probably seemed like a pretty neat idea. But today we expect email to do so much more than that. Attachments, encodings, security, S/MIME, spam prevention, domain key validation... modern email is layer upon layer of hacks and kludges, designed to turn good old SMTP into something it was never intended to be -- while maintaining backward compatibility the whole way.

Today, we're talking very specifically about just one of the ways in which modern email is both wonderful and horrible: HTML emails. Used properly, email is a great way to get somebody's attention -- and that means using design, layout, color, typography, images; all tried and tested techniques that the design and publishing industries have refined over decades of making things look beautiful and accessible.

The problem is, though... writing HTML emails is *really* complicated. Some of you might remember the days of Netscape and Internet Explorer... testing all your code in multiple browsers that didn't necessarily support the same tags, features. HTML email is that, but ten times worse. First, you've got desktop vs webmail vs mobile; the same person might read the same email on a 3" touchscreen and a 42" widescreen monitor. Then you've got to consider at least half-a-dozen incompatible mail clients -- iOS Mail, GMail, Apple Mail, Outlook, Yahoo!, Android -- and countless others that you've probably never even heard of. And don't forget some of those clients will be running in "dark mode", which -- you guessed it -- tries to invert all the colors so text is light-on-dark instead of dark-on-light, which works beautifully until your clients' logo is a PNG containing a black image on a transparent background.

This is where mail markup languages come in. Most email platforms and frameworks have created their own markup language, usually an abstraction based on HTML, that lets you define the appearance and layout of your email without having to maintain hundreds of inline `style` tags and archaic HTML attributes. Zurb's [Foundation for Emails](https://get.foundation/emails.html) is one popular solution here; the open-source [MJML](https://mjml.io), created by [Mailjet](https://www.mailjet.com),  is another.

The other thing about email, though, is that sending them isn't one-size-fits-all. There's the email somebody sends you from their phone. There are the email campaigns you get, sent via Mailchimp or SendGrid. There are the personalised campaign emails -- you know, the ones that start "*Dear \_\_FIRSTNAME\_\_*" if you get them wrong. And there are the various emails sent automatically -- order confirmations, subscription renewals, and so on.

Now, I'm building a system that needs to send some email. Personalized order confirmation emails. They've got to look good, because they're part of the overall user experience of the system. They've also got to be personalised - not just by populating a few \_\_FIRSTNAME\_\_ style merge fields, but with loops and conditionals. You know: list all the items in a customer's order; only display certain information if they've entered their tax ID, that kind of thing.

Now, you can do this using most mail-as-a-service providers. Mailchimp, SendGrid, Mailjet -- they all offer a web interface for designing your HTML emails, and a rudimentary templating language for doing loops and conditionals. But that stuff is designed for marketeers, not developers. It doesn't integrate with Git. There's no unit testing or validation. If somebody logs in and edits one of those templates, you're not even going to know about it until customers start complaining that their email didn't arrive -- or didn't look right. And, well, I have trust issues. When I push a new build to production, I want to know that the emails are going to look right.







