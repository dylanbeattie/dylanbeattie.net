---
layout: post
title: The Subtle Art Of Deprecating API Endpoints
date: 2025-07-16T13:46:00
author: Dylan Beattie
---
I had an app fail in production the other day. Not seriously - only affected a couple of admin screens - but it failed because Hubspot had deprecated some of their API endpoints. (That's nerd speak for "we were using a thing and they turned it off.")

[https://developers.hubspot.com/changelog/breaking-change-removed-support-for-referencing-custom-object-types-by-base-name](https://developers.hubspot.com/changelog/breaking-change-removed-support-for-referencing-custom-object-types-by-base-name)

Sure, they announced in October 2024 that this particular endpoint was being deprecated. Only problem is... I didn't see the announcement, because I didn't even start working on this integration until April 2025 - in fact, I'd never worked with Hubspot's API at all prior to April 2025. I followed their docs, built the integration points I needed, tested it all... and I somehow managed to build and test an integration against an endpoint which was already scheduled for deprecation, without ever having the faintest clue.

Wouldn't it be nice if, the day they decide something's going to get switched off, that feature was no longer available to any new customers? Sure, the folks who were already using it before the announcement; makes sense to give _them_ six months or whatever to update their code. But seems a bit odd to me that they'd offer completely new integrations access to a feature they already know is going to shut down soon.

..then again, maybe I'm just salty 'cos I don't like it when other people break my stuff. I guess the lesson is to always assume that every single API request you make might randomly start returning an HTTP 400, at any point, for no good reason, and engineer around that as best you can. Fallback caching actually kept the thing running for at least a week after the endpoint in question was deprecated, which I'm kinda happy about - but I could also have wired it to actually tell somebody if it had been running on cached data for more than 24 hours.
