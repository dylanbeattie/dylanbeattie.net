# Regex pattern to match date in filename: e.g., 2025-06-20
$DatePattern = '\d{4}-\d{2}-\d{2}'

Get-ChildItem -Recurse -Path $Directory -File -Filter *.md | ForEach-Object {
    $File = $_
    if ($File.Name -match $DatePattern) {
        $Date = $Matches[0] + "T12:00:00"

        # Read the file content
        $Lines = Get-Content $File.FullName

        # Find all lines that are just '---'
        $FrontMatterMarkers = ($Lines | Select-String '^---$' -AllMatches).LineNumber

        if ($FrontMatterMarkers.Count -ge 2) {
            $FrontMatterStart = $FrontMatterMarkers[0]
            $FrontMatterEnd = $FrontMatterMarkers[1]

            # Extract just the lines in the front matter block
            $FrontMatterLines = $Lines[($FrontMatterStart + 1)..($FrontMatterEnd - 1)]

            # Check if a 'date:' line already exists in the front matter
            if (-not ($FrontMatterLines | Where-Object { $_ -match '^date:\s*\d{4}-\d{2}-\d{2}' })) {
                # Insert date line after the opening '---'
                $InsertIndex = $FrontMatterStart
                $Lines = $Lines[0..$InsertIndex] + "date: $Date" + $Lines[($InsertIndex + 1)..($Lines.Count - 1)]
                # Write updated content back to file
                Set-Content -Path $File.FullName -Value $Lines
                Write-Host "✅ Updated: $($File.Name) with date $Date"
            } else {
                Write-Host "⏭️ Skipped (date already present): $($File.Name)"
            }
        } else {
            Write-Host "⚠️ Skipped (no valid front matter): $($File.Name)"
        }
    } else {
        Write-Host "❌ Skipped (no date in filename): $($File.Name)"
    }
}
