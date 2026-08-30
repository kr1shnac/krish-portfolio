# SKF Karate (Core Platform)

**Category:** Enterprise SaaS / Client Platform
**URL:** https://www.skfkarate.org

## Description
A comprehensive, full-stack enterprise digital platform engineered for a large-scale Karate academy. It serves as an all-encompassing digital ecosystem that completely replaces fragmented legacy tools. The platform features a high-performance public marketing website, an interactive athlete portal (Progress Web App), a real-time event and tournament results engine, and a secure e-commerce shop. Crucially, it also functions as the master backend API and central source of truth for the organization, exposing secure integration endpoints that power satellite administrative applications and internal financial systems. 

## Why I Built It
The academy's operations were severely bottlenecked by disjointed systems: tracking student belt progressions on paper, managing global tournament results in spreadsheets, handling physical merchandise sales manually, and organizing public communications through scattered channels. I built this platform to unify these disconnected, error-prone workflows into a single, cohesive, premium digital experience. The goal was to elevate the academy's brand identity, provide athletes with a modern, transparent progression-tracking tool, and drastically reduce the administrative friction for the staff by centralizing data into a secure, highly automated backend.

## Key Features
- **Progressive Web App (PWA) Athlete Portal:** A personalized, secure, and installable dashboard for athletes. Features include real-time belt progression tracking, historical global ranking metrics, dynamic generation of digital ID cards, and access to private training media based on belt level and branch.
- **Advanced Event & Tournament Engine:** Full lifecycle management of academy events. This includes complex tournament bracket generation, real-time public results publishing, historical grading records, and automated candidate tracking for "Black Belt 2026" examinations.
- **Integrated E-commerce & Inventory System:** A seamless shop catalog allowing members to purchase academy merchandise, uniforms, and equipment, complete with stock tracking and real-time order status updates.
- **Dynamic Media & Asset Pipeline:** Automated processing of gallery images, including on-the-fly HEIC to WebP conversion, secure signed URL generation for private assets, and optimized public image delivery.
- **Master API Integration Hub:** Acts as the secure, centralized backend service (database and API) for all satellite applications (such as the internal FeeTrack system), handling complex financial logic, cross-service authentication, and rate-limiting.

## What I Built
- **Next.js 16 App Router Architecture:** Architected a highly scalable foundation leveraging advanced React 19 features, Server Components (RSC), Parallel and Intercepting Routes, and Edge-compatible middleware. Optimized data fetching using targeted `revalidateTag` strategies and Partial Prerendering (PPR) for sub-second page loads.
- **Schema-First PostgreSQL Database:** Engineered a robust relational database architecture using Supabase. Implemented complex junction tables for many-to-many relationships (e.g., student-events, branch-timetables) and utilized PostgreSQL Row Level Security (RLS) policies and database triggers to maintain strict data integrity at the database layer.
- **Hardened Security & Rate Limiting:** Secured the platform against abuse by implementing Upstash Redis for multi-tiered rate limiting (separating IP-based global limits from user-based endpoint limits). Enforced strict data contracts using Zod validation pipelines across all API routes and server actions.
- **Complex Authentication Matrix:** Implemented a sophisticated NextAuth integration that bridges standard JWT strategies for public athletes with API-key-secured proxy authentication for internal administrative services, ensuring impenetrable boundary separation.
- **Automated Background Processing:** Integrated highly performant background queues and webhooks. Built a custom trial-class submission queue, automated transactional email dispatching via Resend (with Svix webhook verification), and engineered dynamic payload construction for native Web Push notifications directly to users' devices.
- **On-the-fly Media Processing:** Integrated Sharp and `heic-convert` in Node.js streams to automatically transcode heavy iOS photos into optimized WebP formats during upload, significantly reducing cloud storage costs and bandwidth.

## Tech Stack
**Summary:** Next.js 16, React 19, Supabase (PostgreSQL), Tailwind CSS v4, Upstash Redis, NextAuth, Zod, Framer Motion
- **Frontend:** Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, Lucide React, HTML2Canvas, React Icons
- **Backend & Database:** Node.js, Next.js API Routes (Server Actions), Supabase (PostgreSQL), pg, bcryptjs
- **Security & Middleware:** NextAuth.js, Upstash Rate Limiting, JWT, Zod validation, Custom Middleware Routing
- **Services & Integrations:** Resend (Email), Google APIs, Web Push Notifications, Sentry (Error Tracking), Sharp (Image Processing)
- **Testing & Quality:** Playwright (E2E UI Testing), Vitest (Unit Testing), ESLint, Prettier, Lighthouse CI, Turbopack
