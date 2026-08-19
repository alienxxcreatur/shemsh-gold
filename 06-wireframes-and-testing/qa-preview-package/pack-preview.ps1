$ErrorActionPreference = 'Stop'

$packageRoot = [System.IO.Path]::GetFullPath($PSScriptRoot)
$distRoot = [System.IO.Path]::GetFullPath((Join-Path $packageRoot 'dist'))
$zipPath = [System.IO.Path]::GetFullPath((Join-Path $packageRoot 'shemsh-wireframe-qa-preview.zip'))

if ([System.IO.Path]::GetDirectoryName($distRoot) -ne $packageRoot -or [System.IO.Path]::GetFileName($distRoot) -ne 'dist') {
  throw "Unsafe dist path: $distRoot"
}

if ([System.IO.Path]::GetDirectoryName($zipPath) -ne $packageRoot -or [System.IO.Path]::GetFileName($zipPath) -ne 'shemsh-wireframe-qa-preview.zip') {
  throw "Unsafe zip path: $zipPath"
}

if (-not (Test-Path -LiteralPath $distRoot -PathType Container)) {
  throw "Preview dist does not exist: $distRoot"
}

if (Test-Path -LiteralPath $zipPath) {
  Remove-Item -LiteralPath $zipPath -Force
}

Compress-Archive -Path (Join-Path $distRoot '*') -DestinationPath $zipPath
Get-Item -LiteralPath $zipPath | Select-Object FullName, Length
