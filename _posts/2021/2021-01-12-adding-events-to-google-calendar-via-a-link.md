---
title: "Adding Events to a Google Calendar via a Link"
layout: post
author: Dylan Beattie
meta:
  og_image: /images/posts/2021/adding-events-to-google-calendar-via-a-link.png
  og_description: "How to create a link URI that will add an event to somebody's Google Calendar without having to create and send an invitation."
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2021/
typora-root-url: .\..\..
---

It's the 12th January 2021. Or the 43rd of December, 2020... or maybe the 317th of March, 2020? With so much of our lives being forced online, people all over the world working from home, it's becoming harder than ever to keep track of what day it is and what's happening.

I'm absolutely dependent on Google Calendar to keep track of what I'm doing -- events, appointments, social calls, birthdays, even which day I need to put the bins out. I know I'm not the only person who does this, and so for a long time I've wanted a way to publish a link that will allow other people to trivially add an event to their own Google Calendar. This isn't the same as actually sending an *invitation* -- this is for things like meetups, live streamed performances; the kind of events where you're not hugely concerned about whether a specific person can make it or not, but for folks who are interested, you want to help them remember that it's happening.

Well, I found out recently that, through an undocumented feature of the Google Calendar platform, you can actually create a link that will do exactly this. And since it's undocumented, I had to do a little digging to figure out the exact format of the URL you need to use.

First, the root URL: `https://calendar.google.com/calendar/u/0/r/eventedit`. If you [open that link without any query string parameters](`https://calendar.google.com/calendar/u/0/r/eventedit`), it opens a blank "Add event" screen on Google Calendar.

Now for the query string parameters. These are the ones I've figured out so far; I suspect things like notifications and guests can probably be prefilled via the query string as well.

| name      | description                                                  | Example / Comments                                           |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `text`    | The one-line summary of the event.                           | `Alice and Bob's Weekly Cocktail Night `                     |
| `dates`   | The event start and finish times, in [RFC 5545 date format](https://tools.ietf.org/html/rfc5545#section-3.3.5), separated by a `/` | `20210108T170000Z/20210108T190000Z`                          |
| `details` | The longer event description. This field supports a subset of HTML, so you can include formatting, bullet points and links by URL-encoding your HTML code. | (see below)                                                  |
| location | The intended venue for the activity. This field correlates to the `Location` property defined in [RFC5545 section 3.8.1.7](https://tools.ietf.org/html/rfc5545#section-3.8.1.7). | Google Calendar integrates this field with Google Maps, so entering something like "Zoom" will give you a handy link to the ZOOM+Care on Martin Luther King Blvd on Portland. Probably best to enter the URL again if it's for an online event. |
| `recur`   | The recurrence pattern for recurring events, supplied as an `RRULE` pattern conforming to [RFC5545 section 3.8.5.3](https://tools.ietf.org/html/rfc5545#section-3.8.5.3) | `RRULE:FREQ=WEEKLY;UNTIL=20210331T000000Z`                   |

The `details` field can include a URL-encoded HTML fragment, like this one:

```

%3Ch2%3EWe%27re+having+a+Zoom+party %3C/h2%3E%3Cul%3E%3Cli%3EVirtual%20backgrounds!%3C/li%3E %3Cli%3ESilly%20stories!%3C/li%3E%3Cli%3ESnacks!%3C/li%3E %3C/ul%3E%3Cp%3EYou%20can%20join%20it%20 %3Ca%20href=%22https://example.com/some/link%22%3Ehere%3C/a%3E%3C/p%3E

```

Putting it all together, you get a link that looks like this:

```

https://calendar.google.com/calendar/u/0/r/eventedit?text=Alice+and+Bob%27s+Weekly+Cocktail+Night&dates=20210301T190000Z/20210301T210000Z&details=%3Ch2%3EWe%27re+having+a+Zoom+party%20%3C/h2%3E%3Cul%3E%3Cli%3EVirtual%20backgrounds!%3C/li%3E%20%3Cli%3ESilly%20stories!%3C/li%3E%3Cli%3ESnacks!%3C/li%3E%20%3C/ul%3E%3Cp%3EYou%20can%20join%20it%20%20%3Ca%20href=%22https://example.com/some/link%22%3Ehere%3C/a%3E%3C/p%3E&location=https://example.com/some/link&recur=RRULE:FREQ=WEEKLY;UNTIL=20210601T000000Z

```



which looks unwieldly, but, hey, stick it behind some nice friendly text, and you've got your [add to Google Calendar](https://calendar.google.com/calendar/u/0/r/eventedit?text=Alice+and+Bob%27s+Weekly+Cocktail+Night&dates=20210301T190000Z/20210301T210000Z&details=%3Ch2%3EWe%27re+having+a+Zoom+party%20%3C/h2%3E%3Cul%3E%3Cli%3EVirtual%20backgrounds!%3C/li%3E%20%3Cli%3ESilly%20stories!%3C/li%3E%3Cli%3ESnacks!%3C/li%3E%20%3C/ul%3E%3Cp%3EYou%20can%20join%20it%20%20%3Ca%20href=%22https://example.com/some/link%22%3Ehere%3C/a%3E%3C/p%3E&location=https://example.com/some/link&recur=RRULE:FREQ=WEEKLY;UNTIL=20210601T000000Z) link ready to include in your event page.

![image-20210112131255896](/images/posts/2021/image-20210112131255896.png)

Nice.

