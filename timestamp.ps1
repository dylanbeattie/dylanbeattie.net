$DatePattern = '\d{4}-\d{2}-\d{2}'

Get-ChildItem *.md -File -Recurse | ForEach-Object {
    $File = $_
    if ($File.Name -match $DatePattern) {
        $Date = $Matches[0]+ "T16:00:00"
        $Lines = Get-Content $File.FullName
        $FrontMatterEnd = ($Lines | Select-String '^---$' -AllMatches).LineNumber
        if ($FrontMatterEnd.Count -ge 2) {
            $InsertIndex = $FrontMatterEnd[0]  # Line after first ---
            # Check if 'date:' already exists
            if ($Lines -notmatch '^date:') {
                # $Lines = $Lines[0..$InsertIndex] + "date: $Date" + $Lines[($InsertIndex + 1)..($Lines.Count - 1)]
                # Set-Content -Path $File.FullName -Value $Lines
                # Write-Host "Updated: $($File.Name) with date $Date"
            } else {
                Write-Host "Skipped (date already present): $($File.Name)"
            }
        } else {
            Write-Host "Skipped (no valid front matter): $($File.Name)"
        }
    } else {
        Write-Host "Skipped (no date in filename): $($File.Name)"
    }
}
