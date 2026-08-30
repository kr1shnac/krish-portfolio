# Centralized Exchange (CEX)

**Category:** Personal / Open Source
**URL:** https://github.com/kr1shnac/Centralized_Exchange

## Description
Centralized Exchange (CEX) is a high-performance, full-stack crypto and equity trading platform designed with a production-grade distributed architecture. Modeled after industry-leading platforms like Binance and Zerodha, it features a robust backend API and an independent, low-latency matching engine. The platform empowers users to securely manage authentication, place limit and market orders, view asset balances, and track their trading history.

The core capability of the application resides in its proprietary price-time priority order book matching engine, which operates entirely in-memory to ensure microsecond latency. By leveraging a distributed queue-based communication layer, the platform decouples HTTP request handling from execution logic, effectively mirroring the scalability and fault-tolerance patterns used in real-world financial systems.

## Why I Built It
I built this project to deeply understand the complex mechanics of financial trading systems and to solve the engineering challenge of building a scalable, low-latency matching engine. I wanted to move beyond standard CRUD applications and tackle the intricacies of distributed systems—specifically, managing in-memory state, ensuring data consistency across multiple processes, and implementing a complex algorithm like price-time priority matching with partial fills and secure trade settlement.

## Key Features
- **Price-Time Priority Matching Engine**: A high-performance, in-memory execution layer that accurately matches buy and sell limit orders based on best price and FIFO priority, handling partial fills seamlessly.
- **Distributed Queue Architecture**: Decoupled backend and engine services that communicate asynchronously via Redis message queues, utilizing correlation-ID request-response matching.
- **Robust Authentication & Security**: Stateless JWT-based authentication system with secure password hashing (bcrypt) and strict request validation (Zod) on all endpoints.
- **Relational Trade Settlement**: A meticulously normalized PostgreSQL schema mapping the complete lifecycle of users, assets, orders, and granular execution fill records for rigorous audit trails.
- **Pre-execution Balance Management**: A balance reservation system that locks required funds during order placement, preventing overdraws and ensuring financial integrity before matching.

## What I Built
- Architected a distributed backend infrastructure where a scalable Express API and an execution trading engine operate as separate processes, enabling independent scaling.
- Engineered a proprietary, in-memory limit order book capable of handling complex matching rules, order book depth calculation, partial fills, and balance settlement.
- Implemented a resilient request-response messaging protocol over Redis, dynamically generating backend-specific response queues and correlation IDs to guarantee synchronous-feeling HTTP responses from asynchronous execution.
- Designed and managed a highly normalized PostgreSQL database using Prisma 7 ORM, ensuring strict relational integrity across user accounts, instruments, and individual trade fills.
- Enforced end-to-end type safety across process boundaries using TypeScript and Zod, establishing rigorous typing between the API layer and the matching engine.

## Tech Stack
**Summary:** TypeScript, Bun, Express 5, Redis, PostgreSQL, Prisma 7, Zod, JWT
- **Frontend:** (In Development)
- **Backend & Database:** Bun (Runtime), Express 5, PostgreSQL, Prisma 7 (ORM), Custom In-Memory Data Structures (Order Book State)
- **Security & Middleware:** JWT (Authentication), bcrypt (Password Hashing), Zod (Schema Validation)
- **Services & Integrations:** Redis (Message Broker / PubSub Queues)
- **Testing & Quality:** TypeScript (Strict Typing), Bun Test (Testing framework planned)
