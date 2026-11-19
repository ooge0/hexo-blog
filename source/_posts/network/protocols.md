---
title: Post Network Protocols
layout: post
permalink: /network/protocols/
---

---
title: Types of protocols for interaction on client-server architecture level.
layout: post
categories:
  - Posts
tags:
  - network_protocols
  - protocols
date: 2024-04-09 09:23:12
---
  <img src="/hexo-blog/images/network_protocols_banner_pic.jpg" style="width: 80%; max-width: 600px; border: 1px solid #ccc; padding: 5px; border-radius: 8px;" />

**Below is a list of most popular types of protocols for interaction on client-server architecture level.**
1. **Hypertext Transfer Protocol (HTTP):** The foundation of the web, HTTP defines how clients (web browsers) request and receive resources (web pages, images, etc.) from servers. It's a request-response protocol where clients send GET or POST requests and servers respond with data and status codes.
2. **File Transfer Protocol (FTP)**:  This protocol allows for the transfer of files between clients and servers. It offers functionalities like uploading, downloading, directory listing, and file management.
3. **SSH File Transfer Protocol (SFTP)**: SFTP (SSH File Transfer Protocol) is a secure file transfer protocol. It runs over the SSH protocol. It supports the full security and authentication functionality of SSH.
4. **Simple Mail Transfer Protocol (SMTP)**:  Used for sending emails, SMTP defines how email clients connect to email servers and transmit emails. It focuses on message delivery without concern for content or user interface.
5. **Post Office Protocol (POP3)** and Internet Message Access Protocol (IMAP): These protocols are used for retrieving emails from a server. POP3 downloads emails to the client, while IMAP allows users to access and manage emails on the server itself.
5. **Domain Name System (DNS)**:   This protocol doesn't directly interact between clients and servers, but it's crucial for client-server communication. DNS translates human-readable domain names (like [invalid URL removed]) into numerical IP addresses that computers can understand.
6. **Remote Procedure Call (RPC)**:  This protocol allows a client to execute a procedure on a server as if it were running locally. It provides a transparent way for clients to access functionalities offered by servers. In advance exists gRPC protocol (gRPC Remote Procedure Calls) is a cross-platform high-performance remote procedure call (RPC) framework. gRPC was initially created by Google, but is open source and is used in many organizations. 
7. **Secure Sockets Layer (SSL)/Transport Layer Security (TLS)**:  These protocols secure communication between clients and servers by encrypting data transmission. They are essential for protecting sensitive information like passwords and credit card data.
8. **Message Queueing Protocols**:  Protocols like [AMQP](https://www.rabbitmq.com/tutorials/amqp-concepts) and [RabbitMQ](https://www.rabbitmq.com/) enable asynchronous communication between clients and servers. Messages are placed in a queue and processed by the server at its own pace, decoupling clients from server availability.

*References:*
- [What is Client-Server Architecture? Explained in Detail](https://www.theknowledgeacademy.com/blog/client-server-architecture/#:~:text=Client%2DServer%20Architecture%20handles%20network,which%20processes%20and%20responds%20accordingly.)
- [Efficient Client-Server Communication: An Overview of Protocols and Techniques](https://medium.com/@pavlokolodka/efficient-client-server-communication-an-overview-of-protocols-and-techniques-f73c1c1016d)
- [High Performance Browser Networking](https://hpbn.co/)
- [An overview of HTTP(by MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [Hypertext Transfer Protocol (HTTP) / rfc2616](https://datatracker.ietf.org/doc/html/rfc2616)
- [File Transfer Protocol (FTP) / rfc114](https://datatracker.ietf.org/doc/html/rfc114)
- [SSH File Transfer Protocol (SFTP): Get SFTP client & server](https://www.ssh.com/academy/ssh/sftp-ssh-file-transfer-protocol)
- [Simple Mail Transfer Protocol (SMTP) / rfc5321](https://datatracker.ietf.org/doc/html/rfc5321)
- [Domain Name System (DNS) / rfc1035](https://datatracker.ietf.org/doc/html/rfc1035)
- [Remote Procedure Call (RPC) in Operating System](https://www.geeksforgeeks.org/remote-procedure-call-rpc-in-operating-system/)
- [Remote Procedure Call (RPC) /rfc5531](https://datatracker.ietf.org/doc/html/rfc5531)
- [Secure Sockets Layer (SSL) / rfc6101](https://datatracker.ietf.org/doc/html/rfc6101)
- [Transport Layer Security (TLS) / rfc5246](https://datatracker.ietf.org/doc/html/rfc5246)
- [RabbitMQ: An Introduction to Message Queuing, Protocols, and Policies](https://kisztof.medium.com/rabbitmq-an-introduction-to-message-queuing-protocols-and-policies-cb6073c7a3d6)

