# Merchandise

**Category:** Personal Project
**URL:** https://github.com/kr1shnac/Merchandise_App

## Description
Merchandise is a full-stack digital marketplace and peer-to-peer payment platform. It allows users to create accounts, hold automatic wallet balances, discover other users, and seamlessly transact with each other in real time. The application is built from scratch with transaction safety, robust authentication, and clean API design at its core.

The platform guarantees secure, atomic money transfers wrapped in database transaction sessions, maintaining a comprehensive, immutable transaction history for every account to mimic the architecture of production-grade financial systems.

## Why I Built It
I built this project to gain a deep, hands-on understanding of how modern financial platforms handle money transfers securely without risking data corruption or race conditions. I wanted to move beyond simple CRUD applications and implement robust database transactions that guarantee absolute consistency across multiple writes. Additionally, it served as an excellent opportunity to architect a clean REST API and implement secure JWT-based authentication flows entirely from scratch.

## Key Features
- **Peer-to-Peer Transfers**: Send money instantly to any registered user on the platform with strict balance and account validation checks.
- **Transaction Safety**: All transfers run inside atomic MongoDB sessions, ensuring that if any step (debit or credit) fails, the entire transaction is rolled back with no money lost or duplicated.
- **Automatic Wallet Creation**: Every new user is automatically issued a wallet containing a starting balance upon registration.
- **User Search**: Easily discover and find any user on the platform by their first or last name using case-insensitive queries.
- **Account History**: A complete, immutable transaction history of every debit and credit is recorded and easily retrievable for each account.

## What I Built
- Architected a highly consistent, schema-first peer-to-peer transfer mechanism using atomic MongoDB transaction sessions to ensure absolute database integrity during complex financial operations.
- Hardened platform security with bcrypt password hashing, custom JWT authentication middleware, and robust request validation using Zod to reject malformed data before database execution.
- Designed a scalable, modular REST API using Node.js and Express.js 5, featuring clean separation of concerns via route aggregators and declarative Mongoose data modeling.
- Developed a fast, modern, and responsive single-page frontend using React 19, TypeScript, and Tailwind CSS 4, bundled with Vite 8 for optimal performance.

## Tech Stack
**Summary:** React 19, TypeScript, Tailwind CSS 4, Node.js, Express.js 5, MongoDB, Mongoose, Zod, JWT, Vite 8
- **Frontend:** React 19, TypeScript, Tailwind CSS 4, React Router, Vite 8
- **Backend & Database:** Node.js, Express.js 5, MongoDB, Mongoose ODM, MongoDB Transaction Sessions
- **Security & Middleware:** JWT (jsonwebtoken), bcrypt, Zod, custom CORS configuration
- **Services & Integrations:** Vercel (Frontend Hosting), Render (Backend API Hosting)
- **Testing & Quality:** oxlint for fast code linting, TypeScript for end-to-end type safety
