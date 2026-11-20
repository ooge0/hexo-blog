---
title: Remote access to Ubuntu machine via ssh. Commands.
permalink: /devops/remote_access_to_ubuntu_machine_via_ssh_commands/
layout: post
categories:
  - Posts
tags:
  - ssh
  - devops
date: 2024-12-19 10:18:22
---

## Task List:

1. Check that any SSH services are installed on the remote Linux machine  
   ```bash
   dpkg -l | grep ssh
   ```

1. Check for the correct cervice name
Run the following command to list all available services related to SSH:
   ```bash
   systemctl list-units --type=service | grep ssh
   ```
    You might see service names like:
    * ssh.service
    * sshd.service
    * openssh-server.service

1. Check that `openssh-server` is installed  
   ```bash
   sudo apt-get install openssh-server
   ```

1. Verify the installed `openssh-server` configuration  
   ```bash
   sudo systemctl status sshd
   ```

1. Check secure SSH access via the configuration file  
   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

1. Confirm that `openssh-server` is running  
   ```bash
   sudo systemctl start sshd && sudo systemctl enable sshd
   ```

1. Test SSH connection from a remote system  
   ```bash
   ssh username@<remote_machine_ip>
   ```

1. Transfer files using SSH from `<local_machine>` to `<remote_machine>`  
   ```bash
   scp /path/to/local/file username@<remote_machine_ip>:/path/to/remote/destination
   ```

## Additional Commands:

1. Restart the SSH service after making configuration changes  
   ```bash
   sudo systemctl restart sshd
   ```

1. Check the active SSH sessions on the remote machine  
   ```bash
   who | grep ssh
   ```

1. Allow only key-based authentication for SSH connections  
    ```bash
    sudo nano /etc/ssh/sshd_config
    # Change the following:
    # PasswordAuthentication no
    # PermitRootLogin no
    ```

1. Monitor SSH access logs  
    ```bash
    sudo tail -f /var/log/auth.log
    ```
1. Put the syste to suspend, by `power management` (alias `pm`):
    ```bash
    sudo pm-suspend
    ```
2. Put the syste to suspend by `systemctl`:
    ```bash
    sudo systemctl suspend
    ```