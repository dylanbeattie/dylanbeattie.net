---
title: "A VBA macro for storyboarding PowerPoint slide decks"
layout: post
author: Dylan Beattie
meta:
  # og_image: /images/posts/2022/2022-01-25-securing-admin-pages-with-aspnet-and-azure-ad.png
  og_description: "How I create slide decks, including the VBA macro I use to turn transcripts into skeleton decks"
  # twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2022/
typora-root-url: .\..\..
---

I'm working on a couple of new talks at the moment, and thought people might be interested in seeing a bit about how I actually put them together.

### Step 1: Write the Talk

All my talks start life as a written transcript. I speak at 1,000 characters per minute, so for a 1-hour talk, that's about 60,000 characters -- between 10,000 and 12,000 words. But the first draft of a talk is normally more like 15,000-20,000 words, because this is where I throw absolutely everything at the wall to see what sticks. All the ideas, all the stories, everything that's been rattling around in my brain or my Evernote library since I started thinking about writing the talk.

Once I've got everything drafted, I edit, edit, and edit again. I move things around, figure out how to connect the sections so the talk flows properly, and then go through and edit out the bombadil until I have something about the right length which I think hangs together nicely.

> Good morning, everybody! I'm Dylan, and I'm here today to talk to you about yak shaving. You're probably wondering what yak shaving is. Well... you know that thing where you need to do something really, really trivial? Like changing the year from 2021 to 2022 in the copyright footer on your website... shouldn't be a big deal, right? So you check out the code, and change it, and commit the change, and then you go to deploy it to production and discover that the SSL certificate used by your deployment pipeline has expired. So you roll a new certificate... but you can't install the new key onto the production server because your user account doesn't have permission to do that. So you try to sudo onto the box, but you don't know the root password, and the only person who does know it is backpacking in the Cordillera Huayhuash until March, so the only way to get it live is to physically log onto the server in recovery mode, but nobody's been into the server room for so long that the lock on the door has rusted shut, so you go to the hardware store and get some WD40, and you squirt it into the lock, and whack it a few times with a hammer to try and loosen it up... and somebody walks past and sees you attacking the server room door lock with a hammer and asks what you're doing, and you reply "CAN'T YOU SEE I'M TRYING TO UPDATE THE COPYRIGHT FOOTER ON THE WEBSITE?"
>
> Well, that's yak shaving.

I'll run through that at least once, just me, talking into a camera. No slides or anything yet; this is just me trying all the words on and checking they fit properly, making sure I know how to pronounce them all (how *do* you pronounce "Cordillera Huayhuash"?), and double-checking the timing.

If that's a train wreck, I'll go back, edit some more, and do it again. Eventually, I'll have a written transcript which I know is pretty much the right words, in the right order, and the right length.

### Step 2: Work out what slides I want

Then, I'll go through that transcript and put in slide markers. This is all real low-tech - I'm just hacking around plain text files here - but I'll identify the exact points in the presentation where I want to show a slide (or add/change something on an existing slide), and put in text markers. Markers will often be right in the middle of a sentence -- if that's the moment I want the slide to appear, that's where I put the marker:

> **[SLIDE: Title slide]** Good morning, everybody! I'm Dylan, and I'm here today to talk to you about **[SLIDE: that yak shaving cartoon from Ren & Stimpy]** yak shaving. You're probably wondering what yak shaving is. Well... you know that thing where you need to do something really, really trivial? Like **[SLIDE: screenshot of website footer copyright message]** changing the year from 2021 to 2022 in the copyright footer on your website... shouldn't be a big deal, right? So you check out the code, and change it, and commit the change, and then you go to deploy it to production and discover that **[SLIDE: expired certificate error message]** the SSL certificate used by your deployment pipeline has expired. So you roll a new certificate... but you can't install the new key onto the production server because **[SLIDE: insufficient permisssions message]** your user account doesn't have permission to do that. So you try to sudo onto the box, but you don't know the root password, and the only person who does know it is **[SLIDE: picture of somebody hiking in the mountains]** backpacking in the Cordillera Huayhuash until March, so the only way to get it live is to physically log onto the server in recovery mode and reset the root password, but nobody's been into the server room for so long that **[SLIDE: a really, REALLY rusty door lock]** the lock on the door has rusted shut, so you go to the hardware store and **[SLIDE: picture of WD40]** get some WD40, and you squirt it into the lock, and **[SLIDE: picture of a big old hammer]** whack it a few times with a hammer to try and loosen it up... and somebody walks past and sees you attacking the server room door lock with a hammer and asks what you're doing, and you reply **[SLIDE: picture of me looking really really stressed, with a speech bubble]** "CAN'T YOU SEE I'M TRYING TO UPDATE THE COPYRIGHT FOOTER ON THE WEBSITE?"

I save that as a text file.

### Step 3: Storyboard the PowerPoint deck

I have a PowerPoint template that contains my preferred fonts and colour scheme -- and which also contains a VBA macro I wrote, which will take the transcript TXT file and turn it into a slide deck. It'll put the slide marker text as the headline on each slide, and put the relevant chunk of the transcript into the slide notes area:

```visual basic
Public Sub BuildSlideDeckFromTranscript()
    Dim filePath As String
    Dim contents As String
    
    filePath = PromptForFilePath()
    If (filePath = "") Then Exit Sub
    contents = ReadUtf8TextFile(filePath)
    
    Dim slideTexts As Variant
    slideTexts = Split(contents, "[SLIDE: ")
    slideCount = UBound(slideTexts, 1)
    If slideCount <= 0 Then
        MsgBox ("I didn't find any slide markers in that file.")
        Exit Sub
    End If
        
    If MsgBox("Found " & slideCount & " slide markers. Do you want to create slides now?", vbYesNo) <> vbYes Then Exit Sub
    Dim pptLayout As CustomLayout
    Set pptLayout = ActivePresentation.Slides(1).CustomLayout
    SlideIndex = ActivePresentation.Slides.Count
    For Index = LBound(slideTexts, 1) To UBound(slideTexts, 1)
        slideText = slideTexts(Index)
        tokens = Split(slideText, "]")
        If (UBound(tokens, 1)) = 1 Then
            SlideIndex = SlideIndex + 1
            Set pptSlide = ActivePresentation.Slides.AddSlide(SlideIndex, pptLayout)
            pptSlide.Shapes(1).TextFrame.TextRange.Text = tokens(0)
            pptSlide.NotesPage.Shapes(2).TextFrame.TextRange.Text = tokens(1)
        End If
    Next Index

End Sub

Function PromptForFilePath() As String
    Dim filePicker As FileDialog
    Set filePicker = Application.FileDialog(msoFileDialogFilePicker)   
    Dim selectedItem As Variant
    Dim filePath As String
    With filePicker
        .InitialFileName = ActivePresentation.Path
        .Filters.Add "Text files", "*.txt", 1
        If .Show = -1 Then
            For Each selectedItem In .SelectedItems
                filePath = selectedItem
            Next selectedItem
        End If
    End With
    PromptForFilePath = filePath
End Function

Function ReadUtf8TextFile(filePath As String) As String
    Dim contents As String
    Dim stream
    Set stream = CreateObject("ADODB.Stream")
    With stream
        .Charset = "utf-8"
        .Open
        .LoadFromFile (filePath)
        contents = .ReadText()
        .Close
    End With
    Set stream = Nothing
    ReadUtf8TextFile = contents
End Function
```

That'll give me a deck full of blank slides, with each slide's title set to the slide marker text, and the relevant bit of transcript in the slides' speaker notes area:

![image-20220418111446698](/images/posts/2022/image-20220418111446698.png)

### Step 4: Make the actual slides

Finally, I go through the entire deck and replace each placeholder slide with the image, video, quote, or animation. Some slides will go through a couple of iterations, especially if I'm making custom visualisations or animations. Sometimes, I'll join 2-3 sections into a single slide with lots of animation; sometimes I'll split a slide out into a couple of separate ones.

I find this a really efficient way to work, but it also means that when I'm thinking about what I want to show on my slides, I'm not thinking in terms of PowerPoint layouts and bullet points; I'm thinking about what I *actually* want people to be looking at. It also means if I share a PDF of the deck, I can include the speaker notes, so underneath each slide in the PDF you see what I was actually talking about during that part of the presentation. Which I think is rather neat.