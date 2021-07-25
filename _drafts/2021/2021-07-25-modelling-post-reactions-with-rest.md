---
title: "Modelling reactions to a post with REST"
layout: post
author: Dylan Beattie
meta:
#  og_image: /images/posts/2021-07-21-how-not-to-respond-to-a-cfp.jpg
  og_description: "Modelling reactions to a social media post using REST"
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

There's a thing called the Richardson Maturity Model, developed by Leonard Richardson, which identifies a set of principles and patterns that we can use to classify the "maturity" – i.e. RESTful-ness – of APIs that use HTTP. I've often used the Richardson model to analyse HTTP APIs and figure out what sort of resources and responses would make sense for a particular scenario, so let's try that here.

At level 0, we're just using HTTP to tunnel an arbitrary set of commands and responses. Everything's an HTTP POST, every response is a 200 OK, and we're probably slinging XML backwards and forwards and relying on the client and server to decode it into something meaningful.

> You'll also notice that even in this relatively trivial example, we've got a naming collision: "post" might refer to an HTTP POST request, or a post on the social media platform we're discussing. 

So we submit our request something like this:

```xml
POST /reactionService
[various headers]

<reactionRequest>
	<post id="1234">
	<reaction type="haha" action="increment" />
</reactionRequest>
```

One possible response here is success:

```xml
HTTP/1.1 200 OK
<reactionRequestSuccess>
   <post id="1234">
   <status>success</status>
   <reactions>
     <reaction type="haha" count="5" />
     <reaction type="love" count="9" />
     <reaction type="care" count="2" />
   </reactions>
 </reactionRequestSuccess>
```

Or maybe the request failed?

```xml
HTTP/1.1 200 OK
<reactionRequestFailure>
   <post id="1234">
   <status>failure</status>
   <reason>Post no longer available</reason>
 </reactionRequestFailure>
```



