---
title: Windows Defender detects Trojan:Script/Wacatac.B!ml in a zipped .NET 9 AOT binary
date: 2024-12-09T12:00:00
layout: post
author: Dylan Beattie
meta:
  og_description: Windows Defender is falsely reporting trojans in ZIP files containing .NET 9 AOT Windows binaries.
typora-copy-images-to: ../../images/posts/2024/
typora-root-url: .\..\..
---
Earlier today, somebody alerted me that Rockstar binary releases for Windows were being blocked by Windows Defender... and sure enough, since I switched the build system from .NET 8 to .NET 9, the Windows ZIP file releases on the [releases page](https://github.com/RockstarLang/rockstar/releases) are being incorrectly identified as being infected with  Trojan:Script/Wacatac.B!ml malware.

It's not just Rockstar, though. It's any .NET 9 binary compiled with AOT enabled and then compressed in a ZIP file. Try it. First, create a new .NET 9 console app:

```
dotnet new console -o HelloWorld
```

Then edit the .csproj file and add StripSymbols and PublishAot directives:

```xml
<Project Sdk="Microsoft.NET.Sdk">
    <PropertyGroup>
        <OutputType>Exe</OutputType>
        <TargetFramework>net9.0</TargetFramework>
        <ImplicitUsings>enable</ImplicitUsings>
        <Nullable>enable</Nullable>
    </PropertyGroup>
    <!-- ADD THIS PropertyGroup to create native binary EXE builds -->
    <PropertyGroup Condition="'$(Configuration)'=='Release'">
        <DebugSymbols>False</DebugSymbols>
        <DebugType>None</DebugType>
        <PublishAot>true</PublishAot>
        <StripSymbols>true</StripSymbols>
    </PropertyGroup>
</Project>
```

Now publish a binary release:

```
dotnet publish -c Release -o published
```

Look in `/published` and you'll see a single binary `HelloWorld.exe`

Create a ZIP file containing that EXE - in Windows Explorer, right-click, Send to > Compressed (zipped) folder:

![creating a ZIP file using Windows Explorer](/images/posts/2024/dotnet-9-trojan-add-to-zip.png)

Right-click the ZIP file, Scan with Microsoft Defender...

![Microsoft Defender Trojan result](/images/posts/2024/dotnet-9-trojan-result.png)

For a second opinion, upload the ZIP file to VirusTotal.com, and you'll probably see that Microsoft Defender thinks it's infected with a trojan. I've had multiple hits reporting `Trojan:Script/Wacatac.B!ml` and [one reporting Trojan:Win32/AgentTesla!ml](https://www.virustotal.com/gui/file/dfc668d9a8b10a65e29a3dbb4cf15c7392a1b6933d0092fa9fe78160f8cb81e4)



