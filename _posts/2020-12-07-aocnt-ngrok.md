---
title: "Dylan's Advent of Cool Nerd Things Day 7: ngrok"
date: 2020-12-07T12:00:00
layout: advent2020
author: Dylan Beattie
meta:
  og_image: /images/posts/2020-12-advent/cards/2020-12-07-aocnt-ngrok.png
  og_description: "ngrok: secure tunnels to your localhost server through any NAT or firewall."
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2020-12-advent/
typora-root-url: .\..\..
categories:
    - advent2020
tool:
    name: ngrok
    url: https://ngrok.com
    summary: ngrok creates secure tunnels to your localhost server through any NAT or firewall.
---

Most of them time, when I'm building web apps and websites, I follow a fairly common workflow: get stuff working locally, test it locally, and then push it out on the Actual Internet somewhere where people can see it. Most of the time, this works pretty well, although there are definitely occasional cases of ["well, it worked on **my** machine!"](https://blog.codinghorror.com/the-works-on-my-machine-certification-program/) when code that was working perfectly on localhost doesn't do what you expect when it goes live.

But there are a handful of workflows where testing on localhost isn't an option because something else, out there on the wild wild web, needs to interact with your code. Maybe you're building something like an OAuth2 flow so users can sign in to your apps using their social media accounts. Maybe you're using a cloud-based CRM or a deployment system that's using webhooks to pass notifications back to your own code, and you need a way of testing that the webhooks are working. For these kinds of applications, localhost isn't enough - you need a way that somebody else's code, running out there on the web, can talk to the development code that you're running on your machine right now.

Now, you could set up a certificate, open a port on your home or office firewall, register a domain name, set up some DNS host records... in fact, I've posted recently about how I've done exactly this. But it's a lot of effort and it's easy to overlook something and end up leaving something exposed on the internet that shouldn't be there. 

Alternatively, you can use ngrok. Ngrok is brilliant. It's a tiny executable. You download it, you run it, you tell it what port to listen on, and it creates a secure, temporary tunnel from the internet to that port on your local machine. The tunnel stays open for a long as ngrok is running – and when you stop ngrok, the tunnel goes away. 

![image-20201206172913178](/images/posts/2020-12-advent/image-20201206172913178.png)

There's a "free forever" plan that'll give you a single process supporting up to 4 tunnels on randomly assigned URLs; if you upgrade to one of their paid plans you can get reserved domains, reserved TCP addresses, SSO, and higher connection limits. Like a lot of the tools on this list, I used the free version for a while and then paid for a pro license because I realised it would save me so much time it would easily offset the cost of licensing it; it's one of those tools that once you get the hang of it, you'll find it's useful for all kinds of things. I've used it to test "sign in with Twitter"-style OAuth2 flows; I've used it to debug webhooks from Paypal and from Microsoft Dynamics 365; I've even used it to share work-in-progress code with folks over a Zoom call or something so they can check it on their own browsers & mobile devices.

Check out ngrok at [https://ngrok.com/](https://ngrok.com/)

