---
layout: workshop
title: Parsing Esoteric Languages with .NET
category: art-of-code
published: false
length: 4 hours
sequence: 99
summary: |
  A half-day workshop based around using C# and .NET to create a parser and interpreter 
  for the Rockstar esoteric programming language.
bullets:
  - Introduction to esoteric languages
  - Compilers, transpilers, and interpreters explained
  - Working with abstract syntax trees
  - How to design a programming language
  - Creating a parsing expression grammar
  - Building a Rockstar interpreter with .NET
---

<strong>{{ page.summary }}</strong>

<div class="highlight">
There is also a <a href="/workshops/parsing-esolangs-with-javascript">JavaScript</a> version of this workshop.
</div>

In 2018, Dylan Beattie invented a programming language called [Rockstar](https://codewithrockstar.com/). Originally created as a joke, the Rockstar language inspired a community of developers to turn that joke into reality, and within a few weeks there were multiple working implementations of the Rockstar programming language.

Rockstar is just one example of an esoteric language, or _esolang_ -- a programming language designed around artificial
constraints, created for fun rather than to solve any real-world problem. Esolangs range from whimsical languages inspired by music, art and literature, to completely incomprehensible languages designed to be almost impossible to work with -- but underneath any esolang compiler you'll find the same patterns, techniques and principles used to interpret and compile “real” programming languages like C and Go.

In this workshop, you'll learn how to create a parser and interpreter for the Rockstar esoteric language, using .NET, C#, and an open source library called Pegasus. You'll learn how to build up a complete language in stable increments, adding features to the grammar, the parser and the interpreter. You'll learn how to implement function calls, flow control and recursion, and what's actually happening “under the hood” to control features like variable scope and operator precedence.

By the end of the workshop, you'll have a working Rockstar interpreter built in .NET, you'll have a rich understanding of exactly how parsers and interpreters work - and you'll be a bona fide, 100%, certified Rockstar Developer.

## Workshop Overview

### Introduction to esoteric languages

- Background and theory
- Notable examples of esoteric languages

### How programming languages actually work

- Compilers, transpilers, and interpreters
- Abstract syntax trees
- How to design a programming language

### Creating a parser with .NET

- Introduction to parsing expression grammar (PEG)
- Representing an abstract syntax tree in C#
- Advanced PEG patterns and recursive grammar

### Building an interpreter in .NET

- Evaluating expressions
- Statements, procedures, and return types
- Flow control and logic
- Errors and exception handling

### Prerequisites

You'll need a computer with a working .NET development environment. MacOS, Linux or Windows are all supported, and <a href="https://code.visualstudio.com/">Visual Studio Code</a> with a recent version of the <a href="https://dotnet.microsoft.com/en-us/download">.NET SDK</a> will work just fine.

If you can run `dotnet new console` and then `dotnet run`, you'll be fine.
