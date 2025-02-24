---
layout: post
title: Replaying Keystrokes with AutoHotkey macros
date: 2025-02-18T09:06:00
author: Dylan Beattie
---
[AutoHotkey](https://autohotkey.com/) is one of the strangest and most powerful things I've ever encountered in all the years I've been working with computers. It's a macro programming language and interpreter for Windows that will let you automate just about anything - keystrokes, mouse clicks, MIDI, game controllers, window handles... if you for some bizarre reason wanted to control your Windows audio volume using a Thrustmaster throttle controller, AutoHotkey could totally do that.

I've been using it to build little macros that will replay keystrokes from the clipboard, so that when I'm recording training videos, I can pause the camera, type in the code, cut it to the clipboard, un-pause the camera, and then replay those few lines without any pauses or typos while I explain what they're doing. It's not perfect, but it's the best solution I've found yet in terms of minimising prep time vs ending up with unusable footage.

Here's the latest version of the script I'm using for this.

- **F13** reloads the script. It'll also reload if you press Ctrl-S while the active window has "autohotkey" in the title, so when I'm editing the script in VS Code it'll reload every time I save my changes.
- **F14** will replay the entire contents of the clipboard, including line breaks, and pause for 100ms at the end of each line.
- **F15** will replay the next line from the clipboard each time you press it, including the linebreak.
- **F16** will replay the next line from the clipboard _without the linebreak_.
- If **Scroll Lock is ON**, every line will be trimmed before replaying it - this works around the quirk where most editors (VS Code, Visual Studio, etc) use "smart indentation" and don't start new lines from column 0, but if you're copying code it'll normally have a bunch of leading tabs/spaces included.
- It'll play a little **R2/D2** noise whenever you reload the script (you'll need the file [r2d2.wav](/assets/r2d2.wav) go to with it)

Finally, you've got to use physical keys. Don't ask me why. I tried remapping some of the buttons on my StreamDeck to simulate F13-F16; didn't work -- I guess AutoHotkey's hooking into the keyboard events at a lower level than StreamDeck's injecting them? But I reprogrammed the "playstation keys" on my [Keychron K5](https://www.keychron.com/products/keychron-k5-max-qmk-via-wireless-custom-mechanical-keyboard) to be F13-F16 and it that works just fine.

![A Keychron K5 mechanical keyboard showing the extended function key cluster labelled as \\"PlayStation keys\\"](/images/posts/keychron-k5-playstation-keys.png)

```
#Requires AutoHotkey v2.0
FileEncoding "UTF-8"

~^s:: {
    if WinActive("autohotkey") {
        SoundPlay "r2d2.wav", 1
        Sleep 200
        Reload
    }
}

SetKeyDelay 64  

F13:: {
    SoundPlay "r2d2.wav", 1
    Sleep 200
    Reload
}
; F14 will replay the entire clipboard, pausing for 100ms between lines
F14:: {
    SendMode "Event"
    firstLine := true
    loop parse A_Clipboard, "`n", "`r" {
        if (firstLine) {
            firstLine := false
        } else {
            Send('{Esc}')
            Send('{Enter}')
            Sleep 100
        }
        trimLines := GetKeyState("ScrollLock", "T")
        trimmedText := A_LoopField
        if (trimLines = 1) {
            trimmedText := Trim(trimmedText)
        }
        SendText trimmedText
    }
}

; F15 will replay the next line from the clipboard, including the trailing newline
F15:: {
    SendMode "Event"
    firstLine := true
    loop parse A_Clipboard, "`n", "`r" {
        if (firstLine) {
            firstLine := false
        } else {
            Send('{Esc}')
            Send('{Enter}')
            KeyWait "F15", "D"
            KeyWait "F15"
        }
        trimLines := GetKeyState("ScrollLock", "T")
        trimmedText := A_LoopField
        if (trimLines = 1) {
            trimmedText := Trim(trimmedText)
        }
        SendText trimmedText
    }
}

; F16 will replay the next line from the clipboard 
; lines are trimmed to remove leading/trailing whitespace
; but will NOT send newlines - you gotta type Enter yourself.
F16:: {
    SendMode "Event"
    loop parse A_Clipboard, "`n", "`r" {
        trimLines := GetKeyState("ScrollLock", "T")
        trimmedText := A_LoopField
        if (trimLines = 1) {
            trimmedText := Trim(trimmedText)
        }
        SendText trimmedText
        Send('{Esc}')
        KeyWait "F16", "D"
        KeyWait "F16"    
    }
}
```
