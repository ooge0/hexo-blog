---
title: Excel Commands Cheat Sheet (Google Sheets, LibreOffice Calc, OpenOffice Calc)
date: 2025-03-15
layout: post
categories:
  - Productivity
  - QA
tags:
  - qa
  - Excel
  - Google Sheets
  - LibreOffice Calc
  - OpenOffice Calc
permalink: /other/excel_commands_cheat_sheet/
---

# Excel Commands Cheat Sheet (Google Sheets, LibreOffice Calc, OpenOffice Calc)

## 1. Hotkeys for Common Actions
| Action | Google Sheets | LibreOffice Calc | OpenOffice Calc |
|--------|--------------|-----------------|-----------------|
| Select entire column | Ctrl + Space | Ctrl + Space | Ctrl + Space |
| Select entire row | Shift + Space | Shift + Space | Shift + Space |
| Auto-fill down | Ctrl + Enter | Ctrl + D | Ctrl + D |
| Auto-fill right | Ctrl + R | Ctrl + R | Ctrl + R |
| Insert new row | Ctrl + Shift + "+" | Ctrl + "+" | Ctrl + "+" |
| Insert new column | Ctrl + Shift + "+" | Ctrl + "+" | Ctrl + "+" |
| Delete row/column | Ctrl + "-" | Ctrl + "-" | Ctrl + "-" |
| Open find and replace | Ctrl + H | Ctrl + H | Ctrl + H |
| Open filter | Ctrl + Shift + L | AutoFilter icon | AutoFilter icon |

## 2. Working with Strings (Join, Concat, Split)
| Function | Google Sheets | LibreOffice Calc | OpenOffice Calc |
|----------|--------------|-----------------|-----------------|
| Concatenate strings | =CONCAT(A1, B1) | =CONCATENATE(A1; B1) | =CONCATENATE(A1; B1) |
| Join strings with delimiter | =TEXTJOIN(", ", TRUE, A1:A3) | =TEXTJOIN(", ", 1, A1:A3) | Not available |
| Split string | =SPLIT(A1, " ") | =TEXTSPLIT(A1, " ") | =TEXTSPLIT(A1, " ") |
| Extract left part | =LEFT(A1, 3) | =LEFT(A1; 3) | =LEFT(A1; 3) |
| Extract right part | =RIGHT(A1, 3) | =RIGHT(A1; 3) | =RIGHT(A1; 3) |
| Extract middle part | =MID(A1, 2, 4) | =MID(A1; 2; 4) | =MID(A1; 2; 4) |

## 3. Generate Data Through Columns and Rows
| Task | Google Sheets | LibreOffice Calc | OpenOffice Calc |
|------|--------------|-----------------|-----------------|
| Fill series (Numbers) | Drag handle | Drag handle | Drag handle |
| Fill series (Custom) | =SEQUENCE(10,1,100,5) | =SERIES(A1, A2, A3) | =SERIES(A1, A2, A3) |
| Auto-fill dates | Drag handle with Ctrl | Drag handle with Ctrl | Drag handle with Ctrl |

## 4. Generate Time in Different Formats
| Task | Google Sheets | LibreOffice Calc | OpenOffice Calc |
|------|--------------|-----------------|-----------------|
| Current date | =TODAY() | =TODAY() | =TODAY() |
| Current time | =NOW() | =NOW() | =NOW() |
| Custom date format | =TEXT(A1, "MM/DD/YYYY") | =TEXT(A1; "MM/DD/YYYY") | =TEXT(A1; "MM/DD/YYYY") |
| Custom time format | =TEXT(A1, "HH:MM AM/PM") | =TEXT(A1; "HH:MM AM/PM") | =TEXT(A1; "HH:MM AM/PM") |

## 5. Filtering by Conditions Between Two Columns (Same or Different Tabs)
| Condition | Google Sheets | LibreOffice Calc | OpenOffice Calc |
|-----------|--------------|-----------------|-----------------|
| Values in Col A greater than Col B | =FILTER(A:A, A:A>B:B) | AutoFilter | AutoFilter |
| Values in Col A less than Col B | =FILTER(A:A, A:A<B:B) | AutoFilter | AutoFilter |
| Values matching another sheet | =FILTER(A:A, A:A=Sheet2!B:B) | =VLOOKUP(A1, Sheet2.B:B, 1, 0) | =VLOOKUP(A1, Sheet2.B:B, 1, 0) |

## 6. Comparing Data by Different Columns
| Task | Google Sheets | LibreOffice Calc | OpenOffice Calc |
|------|--------------|-----------------|-----------------|
| Compare two columns for matches | =IF(A1=B1, "Match", "No Match") | =IF(A1=B1; "Match"; "No Match") | =IF(A1=B1; "Match"; "No Match") |
| Find duplicates | =COUNTIF(A:A, A1)>1 | =COUNTIF(A:A; A1)>1 | =COUNTIF(A:A; A1)>1 |

## 7. Searching for Specific Value(s) in a Range or Whole Table
| Task | Google Sheets | LibreOffice Calc | OpenOffice Calc |
|------|--------------|-----------------|-----------------|
| Find value in range | =MATCH(100, A:A, 0) | =MATCH(100; A:A; 0) | =MATCH(100; A:A; 0) |
| Find value in table | =VLOOKUP(100, A:B, 2, FALSE) | =VLOOKUP(100; A:B; 2; 0) | =VLOOKUP(100; A:B; 2; 0) |
| Find value across sheets | =VLOOKUP(100, Sheet2!A:B, 2, FALSE) | =VLOOKUP(100; Sheet2.A:B; 2; 0) | `=VLOOKUP(100;