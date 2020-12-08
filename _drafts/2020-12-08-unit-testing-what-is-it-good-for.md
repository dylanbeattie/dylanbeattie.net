---
title: Unit Testing: What Is It Good For?
layout: post
author: Dylan Beattie
meta:
    og_description: 
typora-copy-images-to: ../../images/posts/2020-12-08-unit-testing-what-is-it-good-for/
typora-root-url: .\..\..
---
I'm writing more code at the moment than I have for literally years. It's December in London, we're in and out of lockdown. Being December, there's not a huge amount going on in terms of events and conferences - which in previous years has normally coincided with a hectic schedule of drinks and Christmas parties and catching up with family and friends, but, hey, 2020, right?

I'm working on three separate projects at the moment. One is a new set of language features for Rockstar, my esoteric programming language. One is iPuzzler, a web component for hosting crossword puzzles published in the iPuz format. And alongside those, I'm doing a daily livestream of Advent of Code using C# and .NET. They're all my own projects, which means no difficult customers (yay!) and no revenue (less yay!) - but I'm enjoying it all immensely and learning a huge amount as I go.

What's really interesting, though, is the contrast between the testing styles I'm using on the three projects. I found yesterday's Advent of Code a bit of a challenge - days 1-6 were comfortably completed within an hour, but yesterday took well over two hours to deliver a working solution, and I spent a significant amount of that time writing tests. Now, this might be a combination of hubris and hindsight talking, but I'm pretty confident - like, 90% confident - that if I'd not taken the time to write any tests, I'd have had a working solution within half an hour. Translating the brief for Advent of Code day 7 into a set of coherent test cases was surprisingly difficult; most days, the example provided will translate into 4-5 relatively simple test cases, but yesterday's example consisted of a complex set of business rules and only a single scenario against which to validate any implementation.

When I first learned about unit testing way back in the late 1990s, there was a phrase that really stuck in my head. I can't find the exact quote, but it was something like:

> Good unit tests mean that the cost of maintaining a codebase remains constant as the codebase grows more complex

I was reminded of this the other day when I was doing some work on Rockstar. I maintain the [Rockstar language specification](https://github.com/RockstarLang/rockstar/blob/master/spec.md), and a reference implementation called [Satriani](https://github.com/RockstarLang/rockstar/tree/master/satriani), which is a Rockstar parser and interpreter written in JavaScript - it's the one that's available on [https://codewithrockstar.com/online](https://codewithrockstar.com/online) 

Rockstar has pretty good test coverage, but the testing strategy it uses is a little unusual. 

A Rockstar test consists of two files - `test.rock`, and `test.rock.out`. `test.rock` is a Rockstar program, and `test.rock.out` is that program's expected output. (If the program expects user input, that's provided in `test.rock.in`) It is very high-level integration testing; there are no unit or component tests for the parser or the interpreter, just a big folder full of programs. The first step in implementing a new feature is to write a test case that exercises that feature, in the form of a Rockstar program, and to create the corresponding `rock.out` file that contains the expected output. Run the test suite, it fails - red. Implement the feature in the parser and interpreter - green. Then look at the design, see if you can clean things up - refactor. Red, green, refactor.

Satriani itself is only about 1,000 lines of code - 400 lines of PEG grammar, 400 lines in the interpreter itself, and a couple of tiny wrappers to make things play nicely with nodeJS and on the web. The grammar file, rockstar.peg, is translated at build time into an 8,000-line JavaScript file containing the actual parser; the parser takes a Rockstar program and translates it into a JavaScript object containing an abstract syntax tree, and then the interpreter takes that syntax tree, runs it, and produces the program output.

But it's still a metacircular evaluator, written in JavaScript, for an esoteric programming language based on rock music lyrics. It is some seriously gnarly code. And, like a lot of fun side projects, I'll go months and months without even looking at it, and then one day I'll find myself with a good idea and some time on my hands, open up the Rockstar codebase and start hacking on it. I'm absolutely certain that without the safety net of the test suite, Satriani would have collapsed under the weight of its own complexity a long time ago - it would be a mess of dead code that I'm scared to remove in case it breaks something, and the whole Rockstar project would be a mess of incompatible versions and undocumented features.

Having that test suite, though, gives me the confidence to try things out and see if they work, even if I don't really understand all the edge cases. And seeing that 

