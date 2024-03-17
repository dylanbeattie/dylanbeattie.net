Sending Beautiful Emails with .NET, Razor and MJML

Hi! I'm Dylan, and in this video I'm going to show you how to send email with .NET.

I think email is wonderful - and judging from the amount of email I receive on any given day, seems like a lot of folks out there like email too. It's useful for talking to people, sure, but what makes email really powerful is how flexible it is. Orders, receipts, tickets, invoices, password resets, account recovery; all the stuff that doesn't seem like big deal until one day it doesn't work. Unfortunately, there's no such thing as a 100% guarantee when it comes to emails, but in this video I'm going to show you how to get as close as you can when it comes to creating, sending, and testing email from your .NET code.

Before we start hacking code, though, you'll need to understand a bit about how internet email actually works. Email runs on something called the Simple Mail Transfer Protocol - SMTP. This is how mail actually gets delivered, and it works in two different ways.

For incoming email, whoever provides your email runs an SMTP server, and they advertise that to the whole world by creating a something in DNS called an MX record, short for "mail exchanger". So anybody who wants to deliver mail to bob@gmail.com can go into DNS and look up the MX records for gmail.com, find out the address of Gmail's SMTP server, connect to it, and say "hey, I have an email for bob".

At least, that's the theory. The problem is, SMTP is insecure by design - it was built to allow literally anybody to send messages to literally anybody else. This seemed like a good idea in 1982, but four decades of spam and junk mail suggests maybe the creators of SMTP were a bit optimistic when it comes to predicting human behaviour. Now, anybody can open up a terminal and try to send a message to Gmail by typing raw SMTP into a Telnet prompt - it's really not that complicated. But if you try this from a public wifi network, you won't be able to connect, because Gmail's figured out that public wifi networks might get used by bad people, and the best way to stop the bad people is to not let them connect in the first place. You'll find the same thing with Outlook.com, Yahoo, iCloud.

So if you DO need to send mail to Gmail, you can do two things. One is to buy your own network connection, get a static IP address, look after it, make sure no bad people can use it, set up all kinds of complicated DNS records to prove that it's really you... but that's a *lot* of hard work. So a much better idea is to find somebody who's already done that, and ask them to send the emails for you.

Whenever you lot in to Gmail or Outlook.com and send an email, that's exactly what you're doing: Google and Microsoft maintain the outgoing SMTP servers on those networks, and because you've set up an account on their system, you're allowed to use their SMTP servers.

If you want to send mail from your own apps and websites, though, it gets a bit more complicated. In theory, you *could* use your Gmail or Outlook account to do this, but you're not really supposed to; if you're sending important email at any sort of scale, find a good commercial SMTP service and create an account with them.

One final word about SMTP servers: because SMTP is a standardised protocol, switching between different providers is really, easy; you shouldn't need to change any code, just edit your app's configuration and you're done. That's great for switching your production system to a different mail provider, but it's also great for plugging in tools that'll help design, test and debug your email code.

OK, so... you're building an application in .NET, and somewhere in your application code, you need to send an email. If you go online and search for "send email C# .NET", you'll find lots of very helpful articles, and many of those end up talking about something called System.Net.Mail.SmtpClient. This class ships with every version of .NET since 2.0, it's still there today, and if you're looking for a quick and dirty solution that doesn't install any libraries, it works just fine.

The world has moved in since .NET 2.0, though, and if you look up the docs today, you'll see that "The SmtpClient type is obsolete on some platforms and not recommended on others". Instead, the docs recommend a library called **MailKit**, so that's what we're going to use.

### Getting Started with MailKit

In this section, we'll create the simplest possible application that can actually send an email. For these examples, I'm running .NET 8 on Windows 10, but this will all work on macOS and Linux too, and should run on any version of .NET since 3.1. If you're running .NET Framework, the dotnet command line tools aren't available, but MailKit itself is a .NET Standard library so the interfaces and methods will be the same

When you add MailKit to your project, you're actually installing two libraries. One is MailKit itself, which we'll use to connect to our SMTP server and actually send the email. The other is called MimeKit. Modern email is based on a standard called MIME - short for Multipurpose Internet Mail Extensions - and MimeKit provides a bunch of classes we can use to build and validate MIME-formatted email messages.

Let's see it in action. Create a new .NET console application, and add the MimeKit package.

Next, we'll create a new MimeMessage.

Addressing in MailKit uses a class called MailboxAddress, so create two of those - one for who the mail is from, the other for who it's going to. The message's From and To properties are actually collections of mailboxes, so we set our From address by calling From.Add(), and our To address by calling To.Add. And, yes, an email message can come from more than one person - that's one of many odd edge cases that's technically valid, but every mail client I've ever seen just shows you the first one unless you actually go digging into the message headers.

We'll give our message a subject, we'll create a text body, and we're ready to send. Create a new SmtpClient, connect to our SMTP server, call client.Send(), and then disconnect.

OK, let's run it... and boom. SocketException: no connection could be made.

You know why? We've told it to connect to localhost on port 1025, but there's no SMTP server running at that address and port. So let's run one.

We're going to use an open source project called MailPit for this. MailPit is really useful; you download it, you run it, and while it's running it provides a simple SMTP server, and a web interface where you can see the messages you've sent.

So, run MailPit, then point a browser at localhost:8025, and you'll get this:

Now, run our console app again - and there it is. We sent an email.







 



























