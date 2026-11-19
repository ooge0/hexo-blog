---
title: Windows services and VM usage
permalink: /notes/windows_services_and_vm_usage
layout: post
categories:
  - Notes
tags:
  - sys_conffigs
date: 2024-11-20 21:38:30
---

1. **Virtual Machine Setup**
Steps to create a virtual machine:
    1. Download a hypervisor:
       1. Go to [VirtualBox](https://www.virtualbox.org/wiki/Downloads) or [VMware](https://www.vmware.com/). Download and install the software on your machine.
       2. Obtain an OS image:
          1. Download the required ISO file for the operating system.
       3. Create the virtual machine:
          1. Open VirtualBox/VMware app.
          2. Create a new virtual machine according to requested specification.````
          3. Configure name, OS type, hardware settings like RAM, CPU, and disk space.
       4. Install the OS
          1. Start the virtual machine.
          2. Follow the installation steps in the OS setup wizard.
       5. Connect to the VM:
          1. For Linux VMs: Enable SSH in the VM during installation or after setup.
          2. Use SSH (on Linux/Mac) or tools like PuTTY (on Windows) to connect.
       6. Additional steps:
          1. Windows VM Remote Desktop:
             1. Enable Remote Desktop in the Windows VM settings. Use the RDP client, configuration described here >> [Remote Desktop clients for Remote Desktop Services and remote PCs](https://learn.microsoft.com/uk-ua/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients) on your host machine to connect.
             2. Connect RDP client to remote machine.


2. **Windows Services Management in PowerShell.**
 
   Task: 
   1. Print  list of services
   2. Run specific service
   3. Stop specific service
   4. Restart specific service
   5. Check status for specific service

    
    To get list of running services I will use :

    ```powershell
    Get-Service | Where-Object {$_.Status -eq 'Running'}
    ```
    
    Assuming that I want to run `"WSLService"`
    
    To start `"WSLService"` service  I'm using :
    ```powershell
    Start-Service -Name "WSLService"
    ```
    To stop the service:
    ```powershell
    Stop-Service -Name "WSLService"
    ```
    
    For restarting service:
    
    ```powershell
    Restart-Service -Name "WSLService"
    ```
    
    For checking the status of monitored service:
    
    ```powershell
    Get-Service -Name "WSLService"
    ```


3. **SSH connection to the Linux machine** actions are below.

   I added more information in advance because the original task does not contain information about the client machine from which the connection to the Linux machine will be made. There is 3 different cases:
   - Case 1: From another Linux client to Linux host
   - Case 2: From a Windows client  to Linux host
   - Case 3: From macOS client to Linux host
  
   For Linux/Mac: SSH is usually pre-installed but if it's missing install an SSH client (e.g. on Ubuntu):
      ```bash
      sudo apt install openssh-client -y
      ```
   After installation, start the service on Linux machine:
      ```bash
      sudo systemctl start ssh
      ```
   If SSH service not started , checked its status on Linux machine:
       ```
       sudo systemctl status ssh
       ```
        
   Generate SSH keys (on the host machine):
    
     ```powershell
     ssh-keygen -t rsa -b 2048
     ```
     The keys will be stored in ~/.ssh/id_rsa (private) and ~/.ssh/id_rsa.pub (public).
     Copy the public key to the Linux server:
    
     ```powershell
     ssh-copy-id user@server_ip
     ```
     Or manually append the content of id_rsa.pub to ~/.ssh/authorized_keys on the server.

     Connection via SSH for Linux:
      ```powershell
      ssh user@server_ip
      ```


4. Optional Configurations:

   Edit the SSH config file (~/.ssh/config) for aliases:
      ```bash
      Host server_alias  
         HostName server_ip  
         User username  
         IdentityFile ~/.ssh/id_rsa  
      ```
       
   This will simplify the connection:
      ```bash
       ssh server_alias
      ```

**Case 1**: From another Linux client to Linux host

  Verify SSH Client on the Local Machine:
   - Most Linux distributions come with the ssh client pre-installed. Confirm by running:
     ```bash
     ssh -V
     ```

      If it’s not installed, install it:
      ```bash
         sudo apt install openssh-client  
      ```

   Replace `<username>` with the remote machine's username.

   Replace `<remote_ip>` with the target machine's IP address.
    
  - Use Public Key Authentication (Optional):
     ```bash
     ssh-keygen
     ```
  - Copy the public key to the remote machine:
    ```bash
     ssh-copy-id <username>@<remote_ip>
    ```
 - Now, log in without entering a password:
   ```bash
   ssh <username>@<remote_ip>
   ```

**Case 2**: From a Windows client  to Linux host
 - Install an SSH Client:
   - Use the built-in OpenSSH client on Windows 10+. Open PowerShell or Command Prompt and check if SSH is installed:
       ```bash
       ssh -V
       ```
      * For Windows alternatively install [OpenSSH](https://www.openssh.com/) client from ["Optional Features"](https://learn.microsoft.com/en-us/windows/client-management/client-tools/add-remove-hide-features?pivots=windows-11) or [download PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)( third-party SSH client). 
 - Connect Using OpenSSH (Built-in).

   Open PowerShell or Command Prompt and run:  
    ```bash
   ssh <username>@<remote_ip>
   ```
 - Connect Using PuTTY:
   - Download and install PuTTY.
   - Open PuTTY and enter the hostname or IP address.
   - Set the Port to 22 and click Open.
   - Log in with your credentials.
   - Enable Key Authentication (Optional):
     - Use [puttygen](https://www.puttygen.com/) to generate a private/public key pair.
     - Copy the public key to the Linux machine's ~/.ssh/authorized_keys.
     - In PuTTY, configure the private key in Connection > SSH > Auth > Browse Private Key.

**Case 3**: From macOS client to Linux host 
 - Verify SSH Client:

    macOS includes an SSH client by default. Confirm it by running:
    ```bash
     ssh -V
    ```
 - Connect to the Linux Machine:
 
   Open Terminal and run:
    ```bash
    ssh <username>@<remote_ip>
    ```
 - Use Public Key Authentication (Optional):
    ```bash
    ssh-keygen
    ```
 - Copy the public key to the remote machine:
   ```bash
    ssh-copy-id <username>@<remote_ip>
   ```
- Now, I can log in without entering a password:
   ```bash
   ssh <username>@<remote_ip>
   ```