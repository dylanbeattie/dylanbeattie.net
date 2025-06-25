---
layout: post
title: The Linebreakers Video Macro
date: 2025-06-25T10:11:00
author: Dylan Beattie
---
Anybody who's seen the Linebreakers live knows that backing videos are a vital part of the show - partly 'cos that's where all the drums come from, 'cos it's way easier taking a Macbook on a plane than travelling with a drum kit, and partly 'cos having all the lyrics up on screen makes it much easier for the audience to keep up with the jokes, and there are a lot of jokes.

Those backing videos are all played from PowerPoint. It works, it's reliable, and having the entire show inside a single 5Gb PPTX file means it's trivial to run it from a spare laptop if something goes wrong. Every slide contains a single video clip, most of which start and end with a fade from/to black - so at the end of each song I'm staring at a laptop screen showing me that the last song is finished, and the next song is... black screen. So I rely on the speaker notes area to show me which song is on each slide, and updating this by hand is incredibly tedious and error-prone... so I wrote a macro for it. It'll scan every slide in the deck, look for the embedded video clips, and replace the slide notes with the clip name (which is the filename) of the current and the next slide.

In Visual Basic for Applications, no less. 

```vba
Sub UpdateSlideNotes()
  For Each Slide In ActivePresentation.Slides
    ThisName = "(no video)"
    For Each Shape In Slide.shapes
      If Shape.Type = msoMedia And Shape.MediaType = ppMediaTypeMovie Then
        ThisName = Shape.Name
      End If
    Next
    Slide.NotesPage.Shapes(2).TextFrame.TextRange.Text = "THIS: " & ThisName
    If Not LastSlide Is Nothing Then
        Set Notes = LastSlide.NotesPage.shapes(2).TextFrame.TextRange
        Notes.Text = Notes.Text & vbNewLine & vbNewLine & "NEXT: " & ThisName
    End If
    If (ThisName <> "") Then Set LastSlide = Slide
  Next Slide
End Sub
```
