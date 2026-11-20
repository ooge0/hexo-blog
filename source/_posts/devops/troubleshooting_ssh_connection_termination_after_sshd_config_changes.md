---
title: Troubleshooting SSH connection termination after `sshd_config` changes 
permalink: /devops/troubleshooting_ssh_connection_termination_after_sshd_config_changes/
layout: post
categories:
  - Posts
tags:
  - ssh
  - devops
date: 2024-12-19 10:18:22
---

## Steps to verify and resolve the issue:

1. **Check if SSH server (`sshd`) is installed**  
   ```bash
   dpkg -l | grep openssh-server
   ```

   If not installed:
   ```bash
   sudo apt-get install openssh-server
   ```

2. **Check if the SSH service is active**  
   Identify the SSH service and verify its status:
   ```bash
   sudo systemctl status ssh.service
   ```

   If not running:
   ```bash
   sudo systemctl start ssh.service
   sudo systemctl enable ssh.service
   ```

   If the service name differs:
   ```bash
   systemctl list-units --type=service | grep ssh
   ```

3. **Validate Changes to `sshd_config`**  
   Test for syntax errors in the configuration:
   ```bash
   sudo sshd -t
   ```

   Correct any errors found in `/etc/ssh/sshd_config`.

4. **Prevent system suspend by disabling suspend mode.**  
   Temporarily disable suspend mode:
   ```bash
   sudo systemctl mask sleep.target suspend.target hibernate.target hybrid-sleep.target
   ```

   To make this change persistent, edit `/etc/systemd/logind.conf`:
   ```bash
   sudo nano /etc/systemd/logind.conf
   ```

   Add or modify the following lines:
   ```ini
   HandleLidSwitch=ignore
   HandleSuspendKey=ignore
   HandleLidSwitchDocked=ignore
   IdleAction=ignore
   ```
   **!!! IMPORTANT**
   `Do not mixed up configuration if you did any manipulations with preventing machine be sleeping when 'lid' is closed.'

   Reload the configuration:
   ```bash
   sudosystemctlrestartsystemd−logindz
   ```
5. Confirm SSH Usage
   
   Check for active SSH sessions:
   ```bash
   who∣grepssh
   ```
   Verify the SSH port is open:
   ```bash
   sudonetstat−tuln∣grep:22
   ```
   If using a custom port, update firewall rules:
   ```bash
   sudoufwallow<customport>/tcpsudoufwreload
   ```
6. Custom scrtipt for preventing suspend mode from **/usr/lib/systemd/system-sleep/**
   1. Create script fiel`ssh_keep_awake.sh` 
      ```bash
      sudo nano /usr/lib/systemd/system-sleep/ssh_keep_awake.sh
      ```
   2. Add there script for getting `ip` of connected via SSH remote machine
      ```bash
      #!/bin/bash
      # add some sleep delay to manage execution of script. 
      sleep 1
      echo "Checking for active SSH sessions..." 

      # Run the 'w' command and store the output
      w_output=$(w -h)
      echo "w command output: $w_output"

      # Extract the IP addresses of users logged in via SSH
      ip=$(echo "$w_output" | grep -oP '(\d{1,3}\.){3}\d{1,3}')

      echo "Detected IP: $ip"

      if [ -z "$ip" ]; then
         echo "No active SSH session detected."
         exit 0
      else
         echo "User is still logged in from $ip"
         exit 1
      fi
      ```
   3. Check the script location and permissions:
      ```bash
      sudo ls -l /usr/lib/systemd/system-sleep/ssh_keep_awake.sh
      ```
      It should show something like:
      ```bash
      -rwxr-xr-x 1 root root 123 Dec 19 14:00 /usr/lib/systemd/system-sleep/ssh_keep_awake.sh
      ```
   4.  Grant access to the file
         ```bash
         sudo chmod +x /usr/lib/systemd/system-sleep/ssh_keep_awake.sh
         ```
   5. For checking active SSH session on remote Linux machine execute
      ```bash
      w -h 
      ```
      Console should show exisintg session for all users.

   6. Run and check script execution via
      ```bash
      sudo /usr/lib/systemd/system-sleep/ssh_keep_awake.sh
      ```
        **Expected Output:**
         - The output should print the raw result of w -h and then show the detected IP address.
         - If there is an active SSH session, it should print "User is still logged in from <IP>".
         - If no session is found, it should print "No active SSH session detected.".
   
7. Custom scrtipt for preventing suspend mode from **/etc/pm/sleep.d/**
      1. Create script fiel`ssh_keep_awake.sh` 
      ```bash
      sudo nano /usr/lib/systemd/system-sleep/ssh_keep_awake.sh
      ```
   2. Add there script for getting `ip` of connected via SSH remote machine
      ```bash
      #!/bin/bash
      sleep 1
      echo "Checking for active SSH sessions..." 

      # Run the 'w' command and store the output
      w_output=$(w -h)
      echo "w command output: $w_output"

      # Extract the IP addresses of users logged in via SSH
      ip=$(echo "$w_output" | grep -oP '(\d{1,3}\.){3}\d{1,3}')

      echo "Detected IP: $ip"

      if [ -z "$ip" ]; then
         echo "No active SSH session detected."
         exit 0
      else
         echo "User is still logged in from $ip"
         exit 1
      fi
      ```
   3. Check the script location and permissions:
      ```bash
      sudo ls -l /etc/pm/sleep.d/ssh_keep_awake.sh
      ```
      It should show something like:
      ```bash
      -rwxr-xr-x 1 root root 123 Dec 19 14:00 /etc/pm/sleep.d/ssh_keep_awake.sh
      ```
   4.  Grant access to the file
         ```bash
         sudo chmod +x /etc/pm/sleep.d/ssh_keep_awake.sh
         ```
   5. For checking active SSH session on remote Linux machine execute
      ```bash
      w -h 
      ```
      Console should show exisintg session for all users.

   6. Run and check script execution via
      ```bash
      sudo /etc/pm/sleep.d/ssh_keep_awake.sh
      ```
        **Expected Output:**
         - The output should print the raw result of w -h and then show the detected IP address.
         - If there is an active SSH session, it should print "User is still logged in from <IP>".
         - If no session is found, it should print "No active SSH session detected.".