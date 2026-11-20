---
title: How to check, kill, and block a port on Windows 11
layout: post
permalink: /dev/tools/os/manage_ports_windows11/
date: 2026-11-20
categories:
  - Posts
tags:
  - windows11
  - cli
  - networking
  - troubleshooting
---

## INTRO
Sometimes a local server or app fails to start because `<my_port>` is already busy. Here are the most important commands for Windows 11 (CMD, PowerShell, and Git Bash) to check port availability, find which app uses it, stop the process, and block it in the future.

## 1. CHECK PORT AVAILABILITY & FIND THE APP
First, check if `<my_port>` (for example, `4001`) is in use and get its **PID** (Process ID) and application name. If the command returns nothing, the port is free.

### PowerShell

#### Simple port occupation check 

```powershell
# Check port status and get the Process ID (PID)
Get-NetTCPConnection -LocalPort <my_port> | Select-Object LocalPort, State, OwningProcess

# Find the app name using the PID
Get-Process -Id <PID>
```

#### More informative script

```powershell
Get-NetTCPConnection -LocalPort <my_port> | Select-Object LocalPort, State, OwningProcess, @{N='Name';E={(Get-CimInstance Win32_Process -Filter "ProcessId = $($_.OwningProcess)").Name}}, @{N='ExecutablePath';E={(Get-CimInstance Win32_Process -Filter "ProcessId = $($_.OwningProcess)").ExecutablePath}}, @{N='CommandLine';E={(Get-CimInstance Win32_Process -Filter "ProcessId = $($_.OwningProcess)").CommandLine}}
```


### CMD (Command Prompt)
```cmd
:: Find PID using <my_port>
netstat -ano | findstr :<my_port>

:: Find app name using the PID
tasklist | findstr <PID>
```

### Git Bash
```bash
# Find PID using <my_port>
netstat -ano | grep :<my_port>

# Find app name using the PID
tasklist //FI "PID eq <PID>"
```

## 2. TERMINATE THE PROCESS
Once you have the `<PID>`, force-stop the process to free `<my_port>`.

### PowerShell
```powershell
Stop-Process -Id <PID> -Force
```

### CMD
```cmd
taskkill /PID <PID> /F
```

### Git Bash
```bash
# Use double slashes (//) in Git Bash
taskkill //PID <PID> //F
```

## 3. BLOCK THE APP FROM USING THE PORT
If an unwanted program keeps taking `<my_port>`, you can block its network access or stop it from auto-starting.

### Block via Windows Firewall (PowerShell as Administrator)
First, get the full path to the program's `.exe` file, then add a firewall rule to block it:
```powershell
# 1. Get the app's executable path (run before killing it)
(Get-Process -Id <PID>).Path

# 2. Block the app in Windows Firewall
New-NetFirewallRule -DisplayName "Block App on Port" -Direction Inbound -Program "C:\Path\To\App.exe" -Action Block
```

### Disable Auto-Start (For Background Services)
If a Windows service keeps restarting and taking `<my_port>`:
1. Press `Win + R`, type `services.msc`, and press **Enter**.
2. Find the service in the list, right-click it, and click **Properties**.
3. Set **Startup type** to **Manual** or **Disabled**, then click **OK**.