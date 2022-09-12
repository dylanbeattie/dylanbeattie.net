---
title: "Fun with Docker and /etc/hosts"
layout: post
author: Dylan Beattie
meta:
  # og_image: /images/posts/2022/2022-07-08-reinstalling-windows-again.jpg
  og_description: "A weird quirk with Docker images and /etc/hosts"
  # twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2022/
typora-root-url: .\..\..
---

I was running my Distributed Systems with .NET workshop with a team in Bucharest this week -- two days of learning all about microservices, HTTP APIs, message queues, gRPC, SignalR, and how they all work with .NET, and then on the third day we looked at the various ways teams can use Docker on these kinds of projects: hosting external services like RabbitMQ for local development; creating stable build environments, and, finally, hosting .NET apps and services directly in a Docker container.

All the exercises and demos went great right up until the last part of the third day... we went over how to package a .NET hosted service application as a Docker image, and then when we started up a container from that image... nothing. The service in question was a tiny component that would subscribe to messages coming in via a RabbitMQ queue, translate them into JSON, and forward them to a SignalR hub running in our web app. But when we fired up the component inside Docker, it couldn't connect to SignalR. We tried a half-dozen different things - DNS, creating a bridged network... but none of it worked, and I was completely stumped as to why. I'd never seen anything like this before. I know that to get network traffic *into* a Docker image you've got to open ports and things, but getting traffic *out*? I don't remember that ever even being a problem... it just works, right?

So we wrapped it up, without ever getting the final demo to work. Which I *hate* doing - it always feels like missing the end of the movie or something... so after I got home, I dug into what had gone wrong. 

Turns out it was incredibly simple -- but for complicated reasons.

There was absolutely nothing wrong. The code was fine, the Dockerfile was correct. And if I had run it on any machine, anywhere on the planet, **other than the machine I use to run my workshop demos**, it would have worked perfectly; I'd inadvertently created the diametric opposite of "works on my machine".

For running workshops, I use a Windows 11 VM hosted in Azure as my demo machine, and I have a bunch of ports open from this machine to the internet. I point a real DNS record -- `workshop.ursatile.com` -- at it, and install a real HTTPS certificate, so that I can run apps in Visual Studio, and the attendees can connect to https://workshop.ursatile.com on various ports and get a real, live HTTP connection, with a proper certificate, with my demo/example code running on the other end of it.

Except... virtual machines running in Azure can't see their own public IP addresses. If I want to connect to my own code, I have to connect to `localhost` - but because I've replaced the certificate, that doesn't work. 

So what I do is to edit the hosts file and add a record that says

```bash
127.0.0.1	workshop.ursatile.com
```

So when I connect to `workshop.ursatile.com` locally, it's connecting to `127.0.0.1`, but the rest of the world connects to the public IP in the DNS record.

But when I'm using that same VM to host Docker containers? **Those containers can't see the hosts file.** Which means when I try to run one of the example apps in Docker, it does a public DNS query, gets the Azure external IP address for `workshop.ursatile.com`, tries to connect... and can't, because as far as the Azure network is concerned, that traffic's coming from inside the VM and so can't see that external address.

So there you go. It's always DNS, and when it's not DNS, it's probably the hosts file. Which is kind of also DNS. And for future reference, there is a very simple, standalone .NET application and Dockerfile here:

[https://github.com/dylanbeattie/simple-dotnet-docker-service](https://github.com/dylanbeattie/simple-dotnet-docker-service)

which demonstrates how to build a .NET Hosted Service, run it inside Docker, and connect to external network resources.
