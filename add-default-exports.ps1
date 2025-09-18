# Script to add default exports to Components1 files
# Run this from your project root directory

# Adding default export to 3d-marquee
$filePath = ".\Components1\3d-marquee.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\3d-marquee.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "3dmarquee".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to 3d-marquee" -ForegroundColor Green
    }
}

# Adding default export to 3d-scroll-trigger
$filePath = ".\Components1\3d-scroll-trigger.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\3d-scroll-trigger.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "3dscrolltrigger".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to 3d-scroll-trigger" -ForegroundColor Green
    }
}

# Adding default export to ai-prompt
$filePath = ".\Components1\ai-prompt.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\ai-prompt.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "aiprompt".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to ai-prompt" -ForegroundColor Green
    }
}

# Adding default export to alert-dialog
$filePath = ".\Components1\alert-dialog.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\alert-dialog.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "alertdialog".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to alert-dialog" -ForegroundColor Green
    }
}

# Adding default export to alert
$filePath = ".\Components1\alert.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\alert.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "alert".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to alert" -ForegroundColor Green
    }
}

# Adding default export to animated-blob-background
$filePath = ".\Components1\animated-blob-background.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\animated-blob-background.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "animatedblobbackground".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to animated-blob-background" -ForegroundColor Green
    }
}

# Adding default export to aspect-ratio
$filePath = ".\Components1\aspect-ratio.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\aspect-ratio.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "aspectratio".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to aspect-ratio" -ForegroundColor Green
    }
}

# Adding default export to aurora-background
$filePath = ".\Components1\aurora-background.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\aurora-background.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "aurorabackground".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to aurora-background" -ForegroundColor Green
    }
}

# Adding default export to aurora-text-effect
$filePath = ".\Components1\aurora-text-effect.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\aurora-text-effect.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "auroratexteffect".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to aurora-text-effect" -ForegroundColor Green
    }
}

# Adding default export to avatar
$filePath = ".\Components1\avatar.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\avatar.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "avatar".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to avatar" -ForegroundColor Green
    }
}

# Adding default export to badge
$filePath = ".\Components1\badge.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\badge.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "badge".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to badge" -ForegroundColor Green
    }
}

# Adding default export to bento-grid
$filePath = ".\Components1\bento-grid.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\bento-grid.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "bentogrid".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to bento-grid" -ForegroundColor Green
    }
}

# Adding default export to border-beam
$filePath = ".\Components1\border-beam.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\border-beam.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "borderbeam".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to border-beam" -ForegroundColor Green
    }
}

# Adding default export to breadcrumb
$filePath = ".\Components1\breadcrumb.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\breadcrumb.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "breadcrumb".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to breadcrumb" -ForegroundColor Green
    }
}

# Adding default export to button
$filePath = ".\Components1\button.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\button.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "button".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to button" -ForegroundColor Green
    }
}

# Adding default export to canvas-confetti-cursor
$filePath = ".\Components1\canvas-confetti-cursor.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\canvas-confetti-cursor.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "canvasconfetticursor".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to canvas-confetti-cursor" -ForegroundColor Green
    }
}

# Adding default export to card
$filePath = ".\Components1\card.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\card.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "card".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to card" -ForegroundColor Green
    }
}

# Adding default export to carousel
$filePath = ".\Components1\carousel.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\carousel.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "carousel".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to carousel" -ForegroundColor Green
    }
}

# Adding default export to chart
$filePath = ".\Components1\chart.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\chart.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "chart".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to chart" -ForegroundColor Green
    }
}

# Adding default export to checkbox
$filePath = ".\Components1\checkbox.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\checkbox.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "checkbox".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to checkbox" -ForegroundColor Green
    }
}

# Adding default export to collapsible
$filePath = ".\Components1\collapsible.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\collapsible.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "collapsible".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to collapsible" -ForegroundColor Green
    }
}

# Adding default export to command
$filePath = ".\Components1\command.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\command.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "command".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to command" -ForegroundColor Green
    }
}

# Adding default export to confetti-button
$filePath = ".\Components1\confetti-button.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\confetti-button.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "confettibutton".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to confetti-button" -ForegroundColor Green
    }
}

# Adding default export to context-menu
$filePath = ".\Components1\context-menu.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\context-menu.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "contextmenu".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to context-menu" -ForegroundColor Green
    }
}

# Adding default export to count-up
$filePath = ".\Components1\count-up.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\count-up.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "countup".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to count-up" -ForegroundColor Green
    }
}

# Adding default export to dialog
$filePath = ".\Components1\dialog.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\dialog.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "dialog".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to dialog" -ForegroundColor Green
    }
}

# Adding default export to drag-order-list
$filePath = ".\Components1\drag-order-list.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\drag-order-list.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "dragorderlist".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to drag-order-list" -ForegroundColor Green
    }
}

# Adding default export to drawer
$filePath = ".\Components1\drawer.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\drawer.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "drawer".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to drawer" -ForegroundColor Green
    }
}

# Adding default export to dropdown-menu
$filePath = ".\Components1\dropdown-menu.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\dropdown-menu.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "dropdownmenu".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to dropdown-menu" -ForegroundColor Green
    }
}

# Adding default export to form
$filePath = ".\Components1\form.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\form.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "form".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to form" -ForegroundColor Green
    }
}

# Adding default export to glowing-lights
$filePath = ".\Components1\glowing-lights.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\glowing-lights.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "glowinglights".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to glowing-lights" -ForegroundColor Green
    }
}

# Adding default export to hover-card
$filePath = ".\Components1\hover-card.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\hover-card.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "hovercard".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to hover-card" -ForegroundColor Green
    }
}

# Adding default export to input-otp
$filePath = ".\Components1\input-otp.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\input-otp.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "inputotp".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to input-otp" -ForegroundColor Green
    }
}

# Adding default export to input
$filePath = ".\Components1\input.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\input.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "input".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to input" -ForegroundColor Green
    }
}

# Adding default export to interactive-card-gallery
$filePath = ".\Components1\interactive-card-gallery.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\interactive-card-gallery.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "interactivecardgallery".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to interactive-card-gallery" -ForegroundColor Green
    }
}

# Adding default export to interactive-card
$filePath = ".\Components1\interactive-card.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\interactive-card.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "interactivecard".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to interactive-card" -ForegroundColor Green
    }
}

# Adding default export to label
$filePath = ".\Components1\label.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\label.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "label".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to label" -ForegroundColor Green
    }
}

# Adding default export to lens
$filePath = ".\Components1\lens.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\lens.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "lens".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to lens" -ForegroundColor Green
    }
}

# Adding default export to menubar
$filePath = ".\Components1\menubar.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\menubar.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "menubar".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to menubar" -ForegroundColor Green
    }
}

# Adding default export to navigation-menu
$filePath = ".\Components1\navigation-menu.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\navigation-menu.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "navigationmenu".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to navigation-menu" -ForegroundColor Green
    }
}

# Adding default export to pagination
$filePath = ".\Components1\pagination.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\pagination.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "pagination".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to pagination" -ForegroundColor Green
    }
}

# Adding default export to password-strength-indicator
$filePath = ".\Components1\password-strength-indicator.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\password-strength-indicator.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "passwordstrengthindicator".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to password-strength-indicator" -ForegroundColor Green
    }
}

# Adding default export to popover
$filePath = ".\Components1\popover.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\popover.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "popover".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to popover" -ForegroundColor Green
    }
}

# Adding default export to progress
$filePath = ".\Components1\progress.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\progress.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "progress".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to progress" -ForegroundColor Green
    }
}

# Adding default export to radio-group
$filePath = ".\Components1\radio-group.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\radio-group.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "radiogroup".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to radio-group" -ForegroundColor Green
    }
}

# Adding default export to resizable
$filePath = ".\Components1\resizable.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\resizable.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "resizable".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to resizable" -ForegroundColor Green
    }
}

# Adding default export to scroll-area
$filePath = ".\Components1\scroll-area.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\scroll-area.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "scrollarea".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to scroll-area" -ForegroundColor Green
    }
}

# Adding default export to scroll-timeline
$filePath = ".\Components1\scroll-timeline.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\scroll-timeline.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "scrolltimeline".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to scroll-timeline" -ForegroundColor Green
    }
}

# Adding default export to seasonal-hover-cards
$filePath = ".\Components1\seasonal-hover-cards.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\seasonal-hover-cards.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "seasonalhovercards".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to seasonal-hover-cards" -ForegroundColor Green
    }
}

# Adding default export to select
$filePath = ".\Components1\select.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\select.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "select".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to select" -ForegroundColor Green
    }
}

# Adding default export to separator
$filePath = ".\Components1\separator.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\separator.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "separator".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to separator" -ForegroundColor Green
    }
}

# Adding default export to sheet
$filePath = ".\Components1\sheet.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\sheet.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "sheet".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to sheet" -ForegroundColor Green
    }
}

# Adding default export to shine-button
$filePath = ".\Components1\shine-button.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\shine-button.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "shinebutton".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to shine-button" -ForegroundColor Green
    }
}

# Adding default export to sidebar
$filePath = ".\Components1\sidebar.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\sidebar.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "sidebar".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to sidebar" -ForegroundColor Green
    }
}

# Adding default export to skeleton
$filePath = ".\Components1\skeleton.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\skeleton.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "skeleton".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to skeleton" -ForegroundColor Green
    }
}

# Adding default export to slider
$filePath = ".\Components1\slider.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\slider.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "slider".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to slider" -ForegroundColor Green
    }
}

# Adding default export to sparkle-particles
$filePath = ".\Components1\sparkle-particles.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\sparkle-particles.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "sparkleparticles".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to sparkle-particles" -ForegroundColor Green
    }
}

# Adding default export to switch
$filePath = ".\Components1\switch.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\switch.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "switch".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to switch" -ForegroundColor Green
    }
}

# Adding default export to table
$filePath = ".\Components1\table.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\table.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "table".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to table" -ForegroundColor Green
    }
}

# Adding default export to tabs
$filePath = ".\Components1\tabs.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\tabs.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "tabs".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to tabs" -ForegroundColor Green
    }
}

# Adding default export to textarea
$filePath = ".\Components1\textarea.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\textarea.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "textarea".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to textarea" -ForegroundColor Green
    }
}

# Adding default export to toast
$filePath = ".\Components1\toast.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\toast.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "toast".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to toast" -ForegroundColor Green
    }
}

# Adding default export to toaster
$filePath = ".\Components1\toaster.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\toaster.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "toaster".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to toaster" -ForegroundColor Green
    }
}

# Adding default export to toggle-group
$filePath = ".\Components1\toggle-group.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\toggle-group.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "togglegroup".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to toggle-group" -ForegroundColor Green
    }
}

# Adding default export to toggle
$filePath = ".\Components1\toggle.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\toggle.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "toggle".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to toggle" -ForegroundColor Green
    }
}

# Adding default export to tooltip
$filePath = ".\Components1\tooltip.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\tooltip.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "tooltip".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to tooltip" -ForegroundColor Green
    }
}

# Adding default export to top-loader
$filePath = ".\Components1\top-loader.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\top-loader.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "toploader".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to top-loader" -ForegroundColor Green
    }
}

# Adding default export to trial-button
$filePath = ".\Components1\trial-button.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\trial-button.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "trialbutton".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to trial-button" -ForegroundColor Green
    }
}

# Adding default export to trusted-users
$filePath = ".\Components1\trusted-users.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\trusted-users.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "trustedusers".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to trusted-users" -ForegroundColor Green
    }
}

# Adding default export to typing-text
$filePath = ".\Components1\typing-text.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\typing-text.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "typingtext".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to typing-text" -ForegroundColor Green
    }
}

# Adding default export to video-text
$filePath = ".\Components1\video-text.tsx"
if (-not (Test-Path $filePath)) { $filePath = ".\Components1\video-text.ts" }

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw
    $componentName = "videotext".Split('-') | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
    $componentName = $componentName -join ''
    
    # Add default export if not already present
    if ($content -notmatch "export\s+default") {
        $newContent = $content + "

export default $componentName;"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added default export to video-text" -ForegroundColor Green
    }
}

