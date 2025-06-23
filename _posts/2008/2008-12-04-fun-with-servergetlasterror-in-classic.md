---
layout: post
date: 2008-12-04T12:00:00
title: Fun with Server.GetLastError() in classic ASP on Windows Server 2008
date: '2008-12-04T13:17:00.001Z'
author: Dylan Beattie
tags:
- howto
- webdev
- iis
- classic-asp
modified_time: '2008-12-04T13:17:03.298Z'
thumbnail: http://lh5.ggpht.com/_LV_l8kYLOwo/STfYR70eJfI/AAAAAAAAAHw/t4wZRKQpCNI/s72-c/image_thumb%5B1%5D.png?imgmax=800
blogger_id: tag:blogger.com,1999:blog-7295454224203070190.post-2173253789941327029
blogger_orig_url: http://www.dylanbeattie.net/2008/12/fun-with-servergetlasterror-in-classic.html
redirect_from: "/2008/12/fun-with-servergetlasterror-in-classic.html"

---
One of our sites, written many moons ago in classic ASP using JScript, uses a bunch of custom error pages to handle 404 errors, scripting errors, and so on.

Our error handling code looks like this:

``` javascript
var error=Server.GetLastError(); 
var errorMessage=""; 
errorMessage +=Server.HTMLEncode(error.Category); 
if (error.ASPCode) errorMessage +=Server.HTMLEncode(", " +  error.ASPCode); 
var errorNumber=error.number;
errorNumber = (errorNumber < 0 ? errorNumber + 0x100000000 : errorNumber).toString(16);
errorMessage +=" error 0x" + errorNumber + " (from " + Request.ServerVariables("SCRIPT_NAME").Item + ")\r\n\r\n";
if (error.ASPDescription) errorMessage += "ASPDescription: " + error.ASPDescription + "\r\n"; 
if (error.Description) errorMessage +="Description: " + error.Description + "\r\n"; 
// and then we can display/log the error message 
```

On our old server, this worked because the HTTP 500 error page was mapped to a custom URL, /errors/500.asp, which included the code above.

When we migrated our site onto IIS7 recently, this stopped working - the custom page was still executing, but Server.GetLastError() wasn't returning any information about what had gone wrong.

There was a very similar known bug in Vista which was supposedly fixed in SP1, but it looks like the same fix isn't part of Windows 2008 Server yet. There is a workaround, though - if you set the site's **default error** property (under IIS settings > Error Pages > Edit Feature Settings...)to the custom page (see below), IIS will invoke this page whenever an error is **not handled by an explicitly configured status-code
      handler** (so your 404, etc. handlers will still work) - but for some reason, handling the error this way means Server.GetLastError() still works properly.

  <img
        style="border-right: 0px; border-top: 0px; border-left: 0px; border-bottom: 0px" height="369" alt="image"
        src="http://lh5.ggpht.com/_LV_l8kYLOwo/STfYR70eJfI/AAAAAAAAAHw/t4wZRKQpCNI/image_thumb%5B1%5D.png?imgmax=800"
        width="400" border="0" />
