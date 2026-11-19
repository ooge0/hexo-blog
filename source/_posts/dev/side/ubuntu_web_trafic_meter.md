---
title: Ubuntu web traffic meters
permalink: /dev_side/ubuntu_web_trafic_meter
layout: post
categories:
  - Posts
tags:
  - dev_side
  - ubuntu
  - API
date: 2023-10-25 16:21:12
---

On Ubuntu, several applications are available to control, monitor, and visualize network traffic and web activity for applications or services. Here are some of the top tools for these purposes:


Get list of network devices by UNIX apps: 
***ip***
	```bash
	ip link show
	```
***ifconfig***
      ```bash
      ifconfig -a
      ```

### 1. **Wireshark**

- **Description:** Wireshark is a powerful, GUI-based network protocol analyzer that captures and displays detailed information about network traffic. It supports filtering, visualization, and analysis of network packets.
- **Features:** Packet filtering, protocol analysis, real-time capture, and color-coded visualizations.
- **Installation:**
	```bash
    sudo apt update sudo apt install wireshark -y
	```
    
- **Usage:** Launch with `wireshark` and select a network interface to start capturing packets.

### 2. **nload**

- **Description:** A command-line tool that provides a real-time visual representation of incoming and outgoing network traffic per interface.
- **Features:** Bandwidth monitoring with visual bars and traffic graphs.
- **Installation:**
    ```bash
    sudo apt update sudo apt install nload -y
	```
    
- **Usage:** Run `nload` followed by the network interface name, for example:
    ```bash
    nload eth0
    ```
    

### 3. **ntopng**

- **Description:** ntopng is a web-based tool for monitoring network traffic. It provides detailed analytics on application usage, IP addresses, and protocol data. It also supports various filters.
- **Features:** Web-based UI, detailed traffic statistics, protocol analysis, and application-level monitoring.
- **Installation:**
    ```bash
    sudo apt update sudo apt install ntopng -y
    ```
    
- **Usage:** Access the web interface at `http://localhost:3000`.

### 4. **iftop**

- **Description:** A terminal-based tool for monitoring network traffic. It shows a list of connections with their bandwidth usage.
- **Features:** Sortable columns, bandwidth tracking, and customizable filters.
- **Installation:**
    
```bash
sudo apt update sudo apt install iftop -y
```
    
- **Usage:** Run with sudo for full functionality:
    ```bash
    sudo iftop
    ```
### 5. **Tcpdump**

- **Description:** A powerful command-line packet analyzer that captures network traffic and saves it for analysis.
- **Features:** Highly customizable packet capture, supports saving data in `pcap` format for analysis in Wireshark.
- **Installation:**
```bash
sudo apt update sudo apt install tcpdump -y
```
   `
    
- **Usage:** For capturing HTTP traffic on a specific interface, for example:
    ```bash
    sudo tcpdump -i eth0 'port 80'
    ```
    

Each of these tools offers different advantages depending on your needs, from basic bandwidth