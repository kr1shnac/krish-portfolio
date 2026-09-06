import { Github, Linkedin, Twitter, GraduationCap, BookOpen, Award, Users, Cpu, LucideIcon } from "lucide-react";

export interface CompactProject {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    websiteUrl?: string;
    sourceUrl?: string;
    wipBadge?: { label: string; status: string };
}

export interface InProgressProject {
    id: string;
    title: string;
    subtitle: string;
    status: "in-progress" | "research";
    description: string;
    highlights: string[];
    techStack: string[];
    sourceUrl?: string;
}

export interface ExperienceItem {
    id: string;
    company: string;
    websiteUrl?: string;
    sourceUrl?: string;
    role: string;
    duration: string;
    logoInitial: string;
    description: string[];
    logoUrl?: string;
    techStack?: string[];
}

export interface HackathonItem {
    id: string;
    date: string;
    title: string;
    location: string;
    initial: string;
    description: string;
    logoUrl?: string;
}

export interface BeyondItem {
    id: string;
    title: string;
    org: string;
    orgUrl?: string;
    logoUrl?: string;
    logoInitial: string;
    emoji: string;
    highlights: string[];
    icon: "swords" | "mountain";
}

export interface SiteData {
    personal: {
        name: string;
        ageAndLocation: string;
        role: string;
        bio: string;
        email: string;
        photoUrl: string;
        resumeUrl: string;
    };
    socials: { name: string; url: string; icon: LucideIcon }[];
    skills: { category: string; items: string[] }[];
    education: {
        id: string;
        degree: string;
        institution: string;
        duration: string;
        score: string;
        icon: LucideIcon;
        logoUrl?: string;
    }[];
    achievements: HackathonItem[];
    beyondKeyboard: BeyondItem[];
    compactProjects: CompactProject[];
    inProgressProjects: InProgressProject[];
    experience: ExperienceItem[];
}

export const siteData: SiteData = {
    personal: {
        name: "Krishna C",
        ageAndLocation: "20, Bangalore",
        role: "AI & ML Engineering Student",
        bio: "I'm an AI & ML Engineering student who learns by building things from scratch — a terminal coding agent, a distributed exchange backend, a persistent memory layer for AI agents — hand-coded and framework-light, because understanding a system fully is the point. That same hands-on instinct is what a national karate federation hired me to bring to their production platform, which I architected and shipped solo — live today, serving thousands of visitors a month. My goal is technology that doesn't just work on paper, but holds up in production.",
        email: "krishnacgowda10@gmail.com",
        photoUrl: "/myprofile.PNG",
        resumeUrl: "/Krishna Resume.pdf",
    },
    socials: [
        { name: "GitHub", url: "https://github.com/kr1shnac", icon: Github },
        { name: "LinkedIn", url: "https://linkedin.com/in/kr1shnac", icon: Linkedin },
        { name: "X", url: "https://x.com/kr1shnac", icon: Twitter },
    ],
    skills: [
        { category: "Languages", items: ["TypeScript", "Python", "JavaScript", "Java", "SQL"] },
        { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Express.js", "Bun", "Supabase", "REST APIs"] },
        { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Prisma"] },
        { category: "AI & Agents", items: ["LLM Integration", "Agentic Workflows", "Memory Systems", "Tool Calling", "OpenRouter"] },
        { category: "Tools", items: ["Git", "GitHub", "Zod", "Cloudinary", "Vercel"] },
        { category: "Concepts", items: ["System Design", "Authentication (JWT, bcrypt)", "Real-Time Systems"] }
    ],
    education: [
        {
            id: "ewit",
            degree: "B.E. in Artificial Intelligence & Machine Learning",
            institution: "East West Institute of Technology (EWIT), Bangalore",
            duration: "Aug 2023 – Present",
            score: "CGPA: 8.0",
            icon: GraduationCap,
            logoUrl: "https://vtu.internyet.in/assets/vtu-logo-BuXz06tK.png"
        },
        {
            id: "hmv",
            degree: "Class XII (KSEEB)",
            institution: "Nagarjuna EduCare @ HMV PU College, Bangalore",
            duration: "Jul 2021 – May 2023",
            score: "89.0%",
            icon: BookOpen,
            logoUrl: "https://image-upload.getmycollege.com/new-uploads/college/logo/hmv-pu-college-logo-717.jpg"
        }
    ],
    achievements: [
        {
            id: "sih",
            date: "2025",
            title: "Smart India Hackathon (SIH)",
            location: "India",
            initial: "S",
            description: "Represented 6-member team in designing IoT-based Sewage Problem Alert system, securing top finalist position among 30,000+ participating teams. Developed a comprehensive solution for real-time sewage monitoring and alerting.",
            logoUrl: "/SIH.webp"
        },
        {
            id: "lazarus",
            date: "Oct 2023",
            title: "Lazarus Mission Hackathon",
            location: "IEEE NITK Surathkal",
            initial: "L",
            description: "Competed in an intense, high-stakes development environment against numerous teams, rapidly prototyping and deploying innovative tech solutions under strict time constraints. Focused on robust system architecture and seamless integration.",
            logoUrl: "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5d1c910300138_NIT-SURATHKAL-LOGO.png?d=120x120"
        }
    ],
    beyondKeyboard: [
        {
            id: "karate",
            title: "National-Level Karate Champion & Coach",
            org: "SKF Karate",
            orgUrl: "https://www.skfkarate.org",
            logoUrl: "/SKF.webp",
            logoInitial: "S",
            emoji: "🥋",
            icon: "swords",
            highlights: [
                "National-level karate champion representing SKF across tournaments",
                "Coaching students from white belt through dan-level black belt ranks",
                "Training discipline, focus, and resilience — skills that shape how I build software"
            ]
        },
        {
            id: "rocksport",
            title: "Adventure Guide & Freelancer",
            org: "Rocksport",
            orgUrl: "https://rocksport.in",
            logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvOzHrHDPEeOYUwH3SqvuLhpm46gQ1M5Z2hdTs23AWA&s",
            logoInitial: "R",
            emoji: "⛰️",
            icon: "mountain",
            highlights: [
                "Guiding trekking, rappelling, and outdoor adventure expeditions",
                "Managing group safety, logistics, and real-time decision making",
                "Building leadership and teamwork skills in high-stakes environments"
            ]
        }
    ],
    compactProjects: [
        {
            id: "retain",
            title: "Retain",
            description: "Designing a persistent memory package for AI agents: a hand-coded TF-IDF retrieval engine over SQLite with Ebbinghaus-curve confidence decay, built as a lightweight local alternative to embedding-based RAG. Currently in the design phase — implementation starting soon.",
            techStack: ["Python", "SQLite", "TF-IDF", "Memory Systems", "Algorithms", "PyPI"],
            sourceUrl: "https://github.com/kr1shnac/Retain",
            wipBadge: { label: "Package", status: "In Design" },
        },
        {
            id: "cex",
            title: "Centralized Exchange",
            description: "Distributed exchange (CEX) backend architected around real-time order matching. Uses Redis message queues to decouple the Express API from a separate matching-engine process, coordinated via correlation-ID request tracking — price-time priority matching, partial fills, and settlement are the current build focus.",
            techStack: ["TypeScript", "Express.js", "Redis", "Prisma", "PostgreSQL", "System Design"],
            sourceUrl: "https://github.com/kr1shnac/Centralized_Exchange",
            wipBadge: { label: "Engine", status: "In Progress" },
        },
        {
            id: "terminal-agent",
            title: "Terminal Agent",
            description: "Autonomous terminal-based coding assistant built entirely from scratch. Features a custom think→act→observe loop with integrated system tools and direct LLM integration without external AI frameworks.",
            techStack: ["Python", "OpenRouter API", "Agentic Loop", "Tool Calling", "CLI"],
            sourceUrl: "https://github.com/kr1shnac/my-first-terminal-agent",
        },
        {
            id: "merchandise",
            title: "Merchandise App",
            description: "Full-stack digital marketplace and peer-to-peer payment platform. Features atomic database transactions for safe money transfers, automatic wallet creation, and robust transaction history with JWT authentication.",
            techStack: ["React 19", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            sourceUrl: "https://github.com/kr1shnac/Merchandise_App",
        },
        {
            id: "wanderlust",
            title: "Wanderlust",
            description: "Full-stack property listing platform featuring secure session authentication and a robust community review system. Built with comprehensive REST APIs, dual-layer validation, and scalable media management via Cloudinary.",
            techStack: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Cloudinary", "Bootstrap"],
            websiteUrl: "https://wander1ust.vercel.app",
            sourceUrl: "https://github.com/kr1shnac/Wanderlust",
        }
    ],
    inProgressProjects: [
        {
            id: "modular-routing",
            title: "Modular Routing",
            subtitle: "Cost-Aware LLM Model Selection",
            status: "in-progress",
            description: "A complexity-aware routing layer for LLM requests that will direct simple queries to cheap, fast models and complex queries to more capable ones, moving beyond simple cost-based routing — targeting the inference-cost problem behind incidents like Uber's 2025 rollback of internal AI tooling access. Actively building: query-complexity classification and cross-model cost tracking are the current focus, with usage-scoping (work vs. personal) planned next.",
            highlights: ["Query-Complexity Classification", "Cross-Model Cost Tracking", "Work vs. Personal Usage Scoping"],
            techStack: ["Python", "OpenRouter API", "Heuristics"],
        }
    ],
    experience: [
        {
            id: "skf",
            company: "SKF KARATE",
            websiteUrl: "https://www.skfkarate.org",
            sourceUrl: "https://github.com/skfkarate/SKF-Karate",
            role: "Software Architect & Developer (Intern)",
            duration: "Mar 2026 – Aug 2026",
            logoInitial: "S",
            description: [
                "Architected and solo-built a production platform for a national karate federation over a 6-month engagement, translating requirements gathered directly from students, coaches, and administrators into a system now serving thousands of monthly visitors.",
                "Designed a security-first data layer on Supabase/PostgreSQL with 63 Row-Level Security policies and atomic RPCs, eliminating race conditions in live tournament scoring and fee transactions.",
                "Shipped an installable PWA athlete portal with push notifications and an integrated fee-management module with automated receipts and offline-capable transaction logging."
            ],
            logoUrl: "/SKF.webp",
            techStack: ["Next.js", "Supabase", "TypeScript"]
        }
    ]
};
