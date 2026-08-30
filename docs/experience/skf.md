# SKF KARATE

**Role:** Software Architect & Developer (Intern)
**Duration:** Mar 2026 – Aug 2026
**Website:** https://www.skfkarate.org
**Source:** https://github.com/skfkarate/SKF-Karate

## Description
- **Enterprise Platform Architecture:** Solo-architected and built a comprehensive digital ecosystem serving thousands of monthly visitors, consisting of a high-performance Next.js marketing site, a PWA athlete portal, and a highly secure internal treasury application (FeeTrack).
- **Advanced Database & API Design:** Engineered a schema-first PostgreSQL backend on Supabase secured by 63 Row-Level Security (RLS) policies. Utilized atomic RPCs to eliminate race conditions across live tournament scoring and complex branch-level fee transactions.
- **Secure Internal Tooling (FeeTrack):** Developed a mission-critical financial command center that proxies all network requests to decouple sensitive data from public clients. Implemented dynamic PDF receipt generation, resilient client-side caching, and recursive iOS-style nested folder UIs.
- **Performance & Security Optimization:** Hardened platform boundaries utilizing Upstash Redis for multi-tiered rate limiting and NextAuth.js for sophisticated JWT/API key authentication. Optimized media delivery via on-the-fly HEIC-to-WebP Node.js transcoding pipelines.
- **Automated Infrastructure:** Integrated performant background queues to manage automated transactional email dispatching (Resend), dynamic e-commerce stock tracking, and native Web Push notifications for athletes.

## Tech Stack
Next.js 16, React 19, Supabase (PostgreSQL), TypeScript, Tailwind CSS, Upstash Redis, NextAuth, React-PDF
