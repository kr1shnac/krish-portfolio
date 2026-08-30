# SKF FeeTrack

**Category:** Internal Operations / Enterprise Client
**URL:** https://www.skfkarate.org

## Description
A specialized, mission-critical internal treasury and administration application built exclusively for academy staff. Acting as the financial command center for the organization, it enables precise, real-time tracking of monthly dues, complex master ledger operations, multi-branch analytics, and secure athlete admission workflows. Built as an isolated frontend client, it communicates exclusively through a heavily secured proxy layer to the main core platform, ensuring that highly sensitive financial and operational data is completely decoupled from the public-facing architecture.

## Why I Built It
The academy required a completely isolated, secure environment for handling sensitive financial data, generating receipts, and executing administrative workflows. Mixing public user data with deep financial ledgers in the same client application posed significant security and operational risks. I built FeeTrack to solve the challenge of manual branch administration, providing staff with a highly reliable, specialized, and lightning-fast tool to approve athletes, track revenue month-over-month, generate official PDF receipts, and manage operations securely without risking data exposure.

## Key Features
- **Advanced Financial Command Center:** A centralized, analytics-rich dashboard for tracking pending fees, master ledgers, custom dues/removals, and revenue trends across multiple geographic branches. Features automated balance calculations and historical auditing.
- **Admission & Student Pipeline Validation:** Streamlined, error-resistant workflows for approving new athletes. Features dynamic photo verification, batch assignment, billing cycle initialization, and automatic SKU/QR code generation synchronized with the core backend.
- **iOS-Style Nested Media Management:** A remarkably complex, recursive folder interface for managing practice videos and portal media. Mimics the native iOS Files app with drag-and-drop mechanics, infinite folder nesting, and smart collections (e.g., Unfiled, Drafts, Watched).
- **Dynamic Receipt & PDF Generation:** On-the-fly generation of pixel-perfect, downloadable financial receipts and custom PDF reports using `@react-pdf/renderer`.
- **Isolated Proxy Architecture:** Operates as a completely isolated client application that securely proxies all network requests, stripping unnecessary headers and injecting secure, rotating API keys before communicating with the core backend.

## What I Built
- **Architected a Secure Proxy Layer:** Designed a Next.js API proxy architecture that intercepts client requests, validates internal JSON Web Tokens (JWT) for staff sessions, injects `FEETRACK_API_KEY` headers, and delegates heavy data processing to the core backend API, preventing direct client-to-database connections.
- **Engineered Resilient Network Caching:** Developed highly resilient client-side API communication protocols. Implemented custom `fetchWithTimeout` wrappers and manual cache invalidation systems (`invalidateCache`) to prevent frontend race conditions and phantom failures during extremely heavy backend operations (like batch student admissions).
- **Complex Recursive UI Structures:** Developed a deeply nested, interactive folder system (`tree-utils.ts`) utilizing recursive React components, custom long-press hooks for touch devices, and intricate state management to allow staff to seamlessly organize training media visually.
- **Premium Admin UI/UX:** Crafted a specialized, internal-only UI leveraging modern React patterns, glassmorphism design principles, and smooth layout transitions with Framer Motion to maximize staff efficiency. Implemented strict custom Error Boundaries and fallback states.
- **Strict Branch-Level Data Isolation:** Implemented rigid frontend and backend constraints that strictly filter financial computations, student lists, and operations by geographical branch, ensuring staff only access and modify data relevant to their specific jurisdiction.

## Tech Stack
**Summary:** Next.js 16, React 19, Tailwind CSS v4, Proxy API Architecture, React PDF, Sentry, Lucide
- **Frontend:** Next.js 16 (App Router), React 19, Tailwind CSS v4, Lucide React, Framer Motion
- **Backend Architecture:** Next.js API Routes (Proxy Pattern to external backend), Edge Runtime compatibility
- **Security & Middleware:** Custom Session Management (JWT), Secure API Key Delegation, Strict CORS/Header stripping
- **Data & State Management:** Custom fetch wrappers, Optimistic UI updates, Recursive Tree Utilities
- **Services & Integrations:** Backend API Integration, Sentry (Error Tracking), `@react-pdf/renderer` (Document Generation)
- **Testing & Quality:** ESLint, Custom smoke testing suite (`smoke:production`), Next.js Bundle Analyzer
