$clients = @(
  @{name='qantas';     url='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Qantas_logo_2016.svg/320px-Qantas_logo_2016.svg.png'},
  @{name='woolworths'; url='https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Woolworths_Group.svg/320px-Woolworths_Group.svg.png'},
  @{name='commbank';   url='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Commonwealth_Bank.svg/320px-Commonwealth_Bank.svg.png'},
  @{name='atlassian';  url='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Atlassian-logo.svg/320px-Atlassian-logo.svg.png'},
  @{name='telstra';    url='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Telstra_logo_2022.svg/320px-Telstra_logo_2022.svg.png'},
  @{name='anz';        url='https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/ANZ_Logo.svg/320px-ANZ_Logo.svg.png'},
  @{name='nab';        url='https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/National_Australia_Bank_logo.svg/320px-National_Australia_Bank_logo.svg.png'},
  @{name='westpac';    url='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Westpac_Bank_logo.svg/320px-Westpac_Bank_logo.svg.png'},
  @{name='canva';      url='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Canva_Logo.svg/320px-Canva_Logo.svg.png'},
  @{name='optus';      url='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Optus_logo_2020.svg/320px-Optus_logo_2020.svg.png'},
  @{name='bhp';        url='https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/BHP_Logo.svg/320px-BHP_Logo.svg.png'},
  @{name='riotinto';   url='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Rio_Tinto_logomark.svg/95px-Rio_Tinto_logomark.svg.png'},
  @{name='macquarie';  url='https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Macquarie_Group_logo.svg/320px-Macquarie_Group_logo.svg.png'},
  @{name='microsoft';  url='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png'},
  @{name='cisco';      url='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/320px-Cisco_logo_blue_2016.svg.png'},
  @{name='seek';       url='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Seek.com.au.svg/320px-Seek.com.au.svg.png'},
  @{name='afterpay';   url='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Afterpay_logo.svg/320px-Afterpay_logo.svg.png'},
  @{name='wesfarmers'; url='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Wesfarmers_logo.svg/320px-Wesfarmers_logo.svg.png'},
  @{name='coles';      url='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Coles_logo.svg/320px-Coles_logo.svg.png'},
  @{name='cochlear';   url='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Cochlear_Limited_logo.svg/320px-Cochlear_Limited_logo.svg.png'}
)

$outputDir = "public\images\clients"
if (-not (Test-Path $outputDir)) { New-Item -Path $outputDir -ItemType Directory | Out-Null }

foreach ($c in $clients) {
  try {
    Invoke-WebRequest -Uri $c.url -OutFile "$outputDir\$($c.name).png" -UserAgent 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' -UseBasicParsing -TimeoutSec 15
    $size = (Get-Item "$outputDir\$($c.name).png").Length
    Write-Host "OK: $($c.name) ($size bytes)"
  } catch {
    Write-Host "FAIL: $($c.name) - $($_.Exception.Message)"
  }
}

Write-Host ""
Write-Host "Results:"
Get-ChildItem $outputDir | Select-Object Name, @{N='KB';E={[math]::Round($_.Length/1KB,1)}} | Format-Table -AutoSize
