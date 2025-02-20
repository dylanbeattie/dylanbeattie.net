---
layout: post
title: Faking the HTTP Request URL in ASP.NET MVC
date: 2025-02-15T17:57:00
author: Dylan Beattie
---
Because I always, _always,_ forget how to do this: here's how you fake, spoof, whatever you want to call it the HTTP request in ASP.NET Core. Useful if you've got controller actions that do things like generate absolute URL links to put into outgoing emails, and you want them to reflect the URL where the code was actually running (so code running on `localhost` sends mails with links to `localhost`, code running on `test.example.com` links to `test.example.com`, and so on), and you want to write tests for that code because why wouldn't you write tests?

Looks like this:

```csharp
protected ControllerContext SimulateControllerContext(string uriString) {
	var uri = new Uri(uriString);
	return new ControllerContext {
		HttpContext = new DefaultHttpContext {
			Request = { Scheme = uri.Scheme, Host = new HostString(uri.Host) }
		}
	};
}

var controller = new WhateverController() {
	ControllerContext = SimulateControllerContext("https://example.com")
}
```

I'll normally mix this up with a little extension method, usually while wishing that the people who wrote the very excellent `Path.Combine` had elbowed their way into the room where they were building `System.Uri` and Got Involved:

```csharp
public static class UriExtensions {
	public static Uri Append(this Uri uri, params string[] paths)
		=> new(paths.Aggregate(uri.AbsoluteUri, (current, path)
			=> $"{current.TrimEnd('/')}/{path.TrimStart('/')}"));

	public static Uri GetWebsiteBaseUri(this HttpRequest request)
		=> new($"{request.Scheme}://{request.Host}/");
}
```

(also, yay blogging with Sveltia means no more messing around with git. Write, publish. done.)
