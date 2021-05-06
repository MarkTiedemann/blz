@echo off
curl -Lo blz.txt https://www.bundesbank.de/resource/blob/602632/931479c71c7da90686c23b941148d83b/mL/blz-aktuell-txt-data.txt
curl -Lo blz.xlsx https://www.bundesbank.de/resource/blob/602630/38698577eac2fb9d6fe2265bbbeacdd5/mL/blz-aktuell-xls-data.xlsx
curl -Lo xlsx_impl.js https://raw.githubusercontent.com/SheetJS/sheetjs/master/xlsx.mini.js
curl -Lo xlsx_types.d.ts https://raw.githubusercontent.com/SheetJS/sheetjs/master/types/index.d.ts
powershell -f make.ps1
deno run --allow-read --allow-write make.ts
