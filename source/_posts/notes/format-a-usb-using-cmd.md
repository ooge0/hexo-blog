---
title: Format A Usb Using Cmd
layout: post
permalink: /format-a-usb-using-cmd/
---

---
title: How to Format a USB Using CMD (Command Prompt)
layout: post
date: 2024-10-31
categories:
  - Notes
tags:
  - usb
  - cmd
---


*source:* https://www.wikihow.com/Format-a-USB-Using-Cmd


A step-by-step guide to use the Command Prompt to reformat and clean a flash drive

1. Plug your USB drive[^1] into your computer.
2. Open Command Prompt as an administrator:
   - **Option 1:** Go to the `Start` menu, type `CMD`, and select **Run as administrator**.
   - **Option 2:** Press `WIN + R`, type `cmd`, and press `↵ Enter`.
3. Type `diskpart` and press `↵ Enter`.
4. Type `list disk` and press `↵ Enter`.
5. Type `select disk [Your disk]` and press `↵ Enter`. 
6. Type `clean` and press `↵ Enter`. 
7. Type `create partition primary` and press `↵ Enter`.
8. Type `format fs=ntfs` and press `↵ Enter`.
9.  Type `assign letter=[letter]` and press `↵ Enter`. 
10. Type `exit` and press `↵ Enter`. 

***Referencse:***

[^1]: [USB drive](https://en.wikipedia.org/wiki/USB_flash_drive).