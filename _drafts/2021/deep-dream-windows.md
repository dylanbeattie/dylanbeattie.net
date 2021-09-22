---
title: ""
layout: post
author: Dylan Beattie
meta:
#  og_image: /images/posts/2021-07-21-how-not-to-respond-to-a-cfp.jpg
#  og_description: "Modelling reactions to a social media post using REST"
#  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2021/
typora-root-url: .\..\..
---

Idly scrolling on Twitter last night, [this post](https://twitter.com/acemarke/status/1419024222077308933) from [Mark Erikson](https://twitter.com/acemarke) caught my eye:

> Silly but sincere question:
>
> Say I've got a typical REST API for Post objects, and I want to send the equivalent of this to the server: 
>
> `post.reactions[reaction]++` 
>
> How would you structure the URL and data for this?

This is a really interesting question. Now, my assumptions here are that by `Post` objects, Mark's referring to posts on some kind of social media platform, and that there's a defined set of reactions available to each post ("like", "love", "angry", "hug", "haha", that kind of thing), and what Mark's API needs to expose is a way to increment the count of a particular reaction to a particular post.

Now, what makes the question interesting is that `++`. One of the key things to take into account when designing RESTful systems is a concept called **idempotency**: the ability to safely retry an operation if you can't verify that it succeeded.

If you use HTTP GET to request a resource, and you get a request timeout, no big deal; you can just try again. In fact, every time anybody anywhere hits Ctrl-R or F5 to refresh their browser because a web page doesn't look quite right, that's exactly what they're doing – and when you're doing something like making an online payment and you get that warning "Do not refresh your browser", it's because you don't want to end up making the same payment twice.

It's important to realise that idempotency doesn't guarantee you'll get the same **response** every time; it guarantees that the **state of the server** will be the same even if you repeat a request. If you send an HTTP DELETE to remove a resource from the server, you'd normally expect an HTTP `200 OK`, or maybe at `204 No Content` (which is HTTP for "yep, it worked, and… I got nothing else to tell ya.").

Now, say you send an `HTTP DELETE` and get a request timeout, or a 500 server error, so you try again. What if it did actually work the first time? What response would you expect if you try to delete a resource that has already been deleted? Maybe you get a `404 Not Found`. Or maybe the server is tracking deletions, and responds with a `410 Gone`. That's not the same as a `200 OK`, but really, it doesn't matter; what matters is thing you wanted to delete isn't there any more. It's deleted. You can safely `DELETE` the resource two, three, a hundred times – sooner or later you'll either get `200`-range "success" response, or a 404 or a 410, and you know it's gone and you can stop retrying.

So picking apart this:

`post.reactions[reaction]++`

What does that actually mean – and what happens if you call it multiple times?

One of the reasons I like REST as an architectural style is that, like test-driven development, it often 





