# AttendSmart

**Category:** Hackathon (SIH 2025) / Personal
**GitHub:** https://github.com/kr1shnac/AttendSmart

## Description
A production-grade, multi-modal attendance platform that fuses facial recognition, BLE proximity, and liveness detection into a secure verification pipeline. Built for the Smart India Hackathon 2025 (SIH25016), it ensures virtually impossible proxy attendance by relying on progressive anti-spoofing checks, real-time biometric verification, and interactive teacher dashboards.

## Why I Built It
College campuses frequently suffer from fragmented and time-consuming manual roll-calls, often plagued by the issue of proxy attendance. Traditional digital solutions rely on single points of verification, like a simple QR code or static location check, which are easily spoofed. I built this project to completely eliminate proxy attendance by introducing a multi-modal sensor fusion system. My goal was to create a spoof-proof, highly accurate platform that significantly reduces the administrative burden on teachers by automating the attendance process while preserving academic integrity.

## Key Features
- **Multi-Modal Verification Pipeline**: Combines facial recognition, liveness checks, and Bluetooth Low Energy (BLE) proximity to reliably verify student presence.
- **Advanced Anti-Spoofing Layer**: Automatically rejects timestamp replay attacks and flags suspicious consecutive identical BLE RSSI values to prevent static signal spoofing.
- **Real-Time Session Monitoring**: Powered by Socket.IO, provides teachers with a live dashboard to track check-ins, review flagged students, and trigger peer verifications dynamically.
- **Integrated Python ML Pipeline**: Uses an asynchronous Node.js bridge to execute Google MediaPipe's FaceLandmarker in a Python micro-environment for high-accuracy 128D facial descriptor extraction.
- **Role-Based Workflows**: Dedicated, distinct workflows for Students, Teachers, and Admins featuring JWT-secured access and complete attendance analytics.

## What I Built
- Architected a custom **Machine Learning bridge** that spawns an optimized Python child process from a Node.js backend to extract 128-dimensional face descriptors in real-time using MediaPipe, handling base64 streams over standard I/O for speed.
- Hardened platform security by engineering custom **Anti-Spoofing Middleware** that detects timestamp drift (replay attacks) and flags duplicate BLE RSSI signatures, locking student accounts to trusted physical environments.
- Designed a **real-time WebSocket architecture** utilizing Socket.IO to power live attendance dashboards, enabling teachers to monitor sessions instantly, manage QR/Face check-ins, and trigger peer verification workflows.
- Engineered a scalable **React frontend** utilizing advanced local storage techniques and offline capabilities to manage the verification state seamlessly during temporary network dropouts.

## Tech Stack
**Summary:** React, Node.js, Python, MongoDB, MediaPipe, Socket.IO, JWT
- **Frontend:** React, Material-UI, Socket.IO Client, IndexedDB (Offline Storage)
- **Backend & Database:** Node.js, Express, MongoDB (Atlas), Mongoose ORM
- **Security & Middleware:** JWT, Custom Anti-Spoofing Middleware (Timestamp Drift & BLE RSSI Validation)
- **Services & Integrations:** Python Face Recognition Bridge (MediaPipe FaceLandmarker), Socket.IO (WebSockets)
- **Testing & Quality:** PM2, Environment Configuration, Load Testing Setup
