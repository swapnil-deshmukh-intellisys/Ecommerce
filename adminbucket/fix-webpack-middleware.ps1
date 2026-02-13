# Script to fix the webpack-dev-middleware range header issue

$file = "node_modules\@angular-devkit\build-angular\node_modules\webpack-dev-middleware\lib\util.js"
$content = Get-Content $file

# Find and replace the problematic line
for ($i = 0; $i -lt $content.Length; $i++) {
    if ($content[$i] -match "handleRangeHeaders\(content, req, res\) \{") {
        # Replace the next line that contains "if \(req\.headers\.range\) \{"
        if ($i + 2 -lt $content.Length -and $content[$i + 2] -match "if \(req\.headers\.range\) \{") {
            $content[$i + 1] = "    var rangeHeader = req.headers && req.headers.range;"
            $content[$i + 2] = "    if (!rangeHeader) {"
            $content[$i + 3] = "      return false;"
            $content = $content[0..($i + 2)] + @("    }") + $content[($i + 3)..($content.Length - 1)]
            break
        }
    }
}

# Write the fixed content back to the file
$content | Set-Content $file

Write-Host "✅ Fixed webpack-dev-middleware util.js"
