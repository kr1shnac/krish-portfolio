import { Github, Linkedin, Twitter, GraduationCap, BookOpen, Award, Users, Cpu, LucideIcon } from "lucide-react";

export interface KeyFeature {
    text: string;
    image?: string;
    caption?: string;
}

export interface Project {
    id: string;
    title: string;
    category: "Personal" | "Client";
    description: string;
    keyFeatures: (string | KeyFeature)[];
    whatIBuilt: string[];
    techStackDetailed: string[];
    techStack: string[];
    whyIBuiltIt: string;
    images: { url: string; caption: string; }[];
    url: string;
    github?: string;
    gradient: string;
    status?: string;
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
    }[];
    achievements: {
        id: string;
        title: string;
        organization: string;
        description: string;
        icon: LucideIcon;
        className?: string;
        link?: string;
    }[];
    extracurriculars: {
        id: string;
        role: string;
        organization: string;
        description: string;
        image: string;
    }[];
    projects: Project[];
    experience: any[];
    blogs: {
        id: string;
        title: string;
        description: string;
        date: string;
        url: string;
    }[];
}

export const siteData: SiteData = {
    personal: {
        name: "Krishna C",
        ageAndLocation: "20, Bangalore",
        role: "AI & ML Engineering Student",
        bio: "I'm an AI & ML Engineering student profoundly interested in bridging the gap between cutting-edge AI and practical, robust engineering. Whether I'm building proxy-proof biometric systems like AttendSmart or scalable conversational AI platforms like TalksyAI, I focus on solving deeply technical challenges that require a blend of intelligent algorithms and full-stack MERN expertise. My goal is to build technology that doesn't just work on paper, but solves real-world problems reliably at scale.",
        email: "krishnacgowda10@gmail.com",
        photoUrl: "/myprofile.PNG",
        resumeUrl: "/Krishna Resume.pdf",
    },
    socials: [
        { name: "GitHub", url: "https://github.com/kr1shnac", icon: Github },
        { name: "LinkedIn", url: "https://linkedin.com/in/kr1shnac", icon: Linkedin },
        { name: "X", url: "https://x.com/krishnacgowda10", icon: Twitter },
    ],
    skills: [
        { category: "Programming", items: ["Java (DSA & OOP)", "JavaScript (ES6+)"] },
        { category: "Frontend", items: ["HTML", "CSS", "React.js", "Tailwind CSS", "Bootstrap", "Material UI"] },
        { category: "Backend & APIs", items: ["Node.js", "Express.js", "RESTful APIs"] },
        { category: "Databases", items: ["MongoDB", "MySQL", "Mongoose"] },
        { category: "Tools", items: ["Git", "GitHub", "Terminal"] }
    ],
    education: [
        {
            id: "ewit",
            degree: "B.E. in Artificial Intelligence & Machine Learning",
            institution: "East West Institute of Technology (EWIT), Bangalore",
            duration: "Aug '23 – Present",
            score: "CGPA: 8.0",
            icon: GraduationCap
        },
        {
            id: "hmv",
            degree: "Class XII (KSEEB)",
            institution: "Nagarjuna EduCare @ HMV PU College, Bangalore",
            duration: "2023",
            score: "89.0%",
            icon: BookOpen
        }
    ],
    achievements: [
        {
            id: "hackathon",
            title: "Lazarus Mission Hackathon",
            organization: "IEEE NITK Surathkal",
            description: "Competed in an intense, high-stakes development environment against numerous teams, rapidly prototyping and deploying innovative tech solutions under strict time constraints. Focused on robust system architecture and seamless integration.",
            icon: Cpu,
            className: "md:col-span-2", // Bento grid spanning
            link: "https://unstop.com/certificate-preview/7cf097ac-0506-4855-b241-90af14bfc983",
        },
        {
            id: "dsa",
            title: "100+ DSA Problems Solved",
            organization: "Codeforces",
            description: "Developed a strong algorithmic mindset through consistent competitive programming, heavily utilizing Java and C++ to optimize complex data structures and solve critical logic puzzles.",
            icon: BookOpen,
            className: "md:col-span-1",
        }
    ],
    extracurriculars: [
        {
            id: "karate",
            role: "National-Level Karate Champion & Coach",
            organization: "SKF Karate",
            description: "Instructor to 100+ students, Claimed Gold & Bronze Medals in National Levels. Competing at the highest national levels.",
            image: "/Karate.jpeg",
        },
        {
            id: "rocksport",
            role: "Adventure Guide & Freelancer",
            organization: "Rocksport",
            description: "Organized outdoor activities, guided groups through challenging terrains, and built teamwork & leadership skills in high-energy environments.",
            image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=1000", // Rock climbing placeholder
        }
    ],
    projects: [
        {
            id: "autoclaw",
            title: "AutoClaw",
            category: "Personal",
            description: "The AI that actually does things. A friendly and relentlessly efficient bot. It finds, evaluates, and applies to jobs entirely on its own.",
            keyFeatures: [
                "Autonomous Job Applications: Finds, evaluates, and applies to jobs entirely on its own.",
                "Natural Chat Interface: Just talk to it like a friend to initiate complex workflows.",
                "Decision-Making engine: Autonomous decision-making and execution.",
                "Relentless Agent: Your relentless Personal Agent—COMING SOON."
            ],
            whatIBuilt: [
                "Designed and developed the entire automated agentic workflow designed for relentlessly efficient execution.",
                "Integrated natural language parsing for intelligent job application and evaluation.",
                "Developed the initial front-end chat interface allowing easy task delegation."
            ],
            techStackDetailed: [
                "Frontend: React, Next.js",
                "AI Integration: Agentic Framework",
                "Deployment: Vercel"
            ],
            techStack: ["React", "Next.js", "AI", "Agentic Framework"],
            whyIBuiltIt: "Just chat with it like a friend, and watch it execute. COMING SOON Your Personal Agent.",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
                    caption: "AutoClaw's intelligent dashboard managing active job applications."
                },
                {
                    url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000",
                    caption: "Natural language interface for autonomous task delegation."
                }
            ],
            url: "https://autoclaw-ai.vercel.app/",
            github: "https://github.com/kr1shnac/AutoClaw",
            gradient: "from-[#ec4899]/15 via-[#8b5cf6]/15 to-transparent",
        },
        {
            id: "hellflame-gpt",
            title: "HellFlame-GPT",
            category: "Personal",
            description: "The GPT which can roast you forever. Conversational AI Platform supporting threaded conversations, rich Markdown rendering, and syntax-highlighted code blocks.",
            keyFeatures: [
                "Conversational Personality: The GPT which can roast you forever.",
                "Threaded Conversations: Full support for context-aware conversations powered by OpenAI.",
                "Advanced Markdown processing: Rich Markdown text rendering including complex tables and formatting.",
                "Code block native formatting: Integrated syntax highlighting for various programming languages.",
                "History Sync: Persistent chat history stored securely in MongoDB."
            ],
            whatIBuilt: [
                "Built as a high-performance single-page application using React and Vite, communicating with a custom Express/Node.js backend.",
                "Integrated MongoDB for persistent storage of conversation histories.",
                "Implemented the OpenAI API to power the core intelligence engine."
            ],
            techStackDetailed: [
                "Frontend: React, Vite",
                "Backend: Node.js, Express",
                "Database: MongoDB",
                "AI API: OpenAI API"
            ],
            techStack: ["React", "Vite", "Node.js", "Express", "MongoDB", "OpenAI API"],
            whyIBuiltIt: "I wanted a conversational AI interface that didn't just feel like a chat window, but a proper workspace. HellFlame-GPT was born from the need to have a seamless, developer-friendly interface that could handle complex code blocks, render markdown effortlessly, and maintain distinct conversation threads.",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
                    caption: "Chat interface maintaining distinct conversation threads and context."
                },
                {
                    url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000",
                    caption: "Complex code blocks rendered cleanly with syntax highlighting."
                }
            ],
            url: "#",
            github: "https://github.com/kr1shnac/krish-GPT",
            gradient: "from-blue-500/15 via-transparent to-transparent"
        },
        {
            id: "attendsmart",
            title: "AttendSmart",
            category: "Personal",
            description: "Proxy-proof offline biometric attendance with Face liveness detection, BLE proximity, and offline SQLite sync.",
            keyFeatures: [
                "Liveness Checking: ML Kit-powered Face Liveness Detection to prevent photo spoofing.",
                "BLE Proximity Validation: Bluetooth Low Energy proximity checks to verify physical presence.",
                "Robust Background Syncing: Offline-first architecture utilizing SQLite with automated background sync.",
                "Complete RBAC Security: Comprehensive Role-Based Access Control (Admin, Teacher, Student)."
            ],
            whatIBuilt: [
                "Engineered a robust hybrid architecture utilizing React Native and Capacitor for mobile.",
                "Developed the backend using a Node.js/MERN stack.",
                "Created the core offline-first approach using SQLite for local storage.",
                "Integrated an intelligent synchronization service that reconciles data when connectivity is restored."
            ],
            techStackDetailed: [
                "Mobile App: React Native, Capacitor",
                "Backend: MERN Stack (Node.js, Express, MongoDB)",
                "ML Integration: Google ML Kit",
                "Local Storage: SQLite"
            ],
            techStack: ["React Native", "Capacitor", "MERN", "ML Kit", "BLE", "SQLite"],
            whyIBuiltIt: "Traditional digital attendance systems are plagued by proxies and network dependency. I built AttendSmart to create a foolproof, offline-first attendance solution that guarantees the physical presence of a student while functioning seamlessly without an internet connection.",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1000",
                    caption: "Student dashboard verifying presence over BLE and ML Kit liveness checks."
                },
                {
                    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
                    caption: "Teacher administration pane for offline batch attendance synchronization."
                }
            ],
            url: "#",
            github: "https://github.com/kr1shnac/AttendSmart",
            gradient: "from-teal-500/15 via-transparent to-transparent"
        },
        {
            id: "wanderlust",
            title: "Wander1ust",
            category: "Personal",
            description: "A full-stack Airbnb-inspired platform with authentication, cloud storage, reviews, and dynamic search — built end-to-end with Node.js and MVC architecture.",
            keyFeatures: [
                {
                    text: "Dynamic Property Discovery: Browse a diverse catalog of listings with a regex-powered search engine that queries across titles, locations, and countries for instant, relevant results."
                },
                {
                    text: "Listing Creation & Cloud Image Uploads: Hosts can create detailed property listings and upload high-resolution photos directly to Cloudinary, with dynamic image transformations for optimized thumbnail previews.",
                    image: "/projects/wanderlust/Create New Listing form.png",
                    caption: "\"Create New Listing\" form with image upload"
                },
                {
                    text: "Community Reviews & Ratings: Guests can leave detailed reviews and ratings on any property. Cascading deletion hooks automatically clean up associated reviews when a listing is removed, maintaining referential integrity.",
                    image: "/projects/wanderlust/Property detail page with reviews.png",
                    caption: "Property detail page with reviews section"
                },
                {
                    text: "Secure Authentication & Session Management: Persistent login/signup powered by Passport.js with sessions stored securely in MongoDB via connect-mongo, ensuring reliable user state across requests."
                },
                {
                    text: "Multi-Level Authorization: Robust ownership & authorship verification middleware ensures users can only modify their own listings and reviews, preventing any unauthorized data manipulation."
                }
            ],
            whatIBuilt: [
                "Follows the MVC (Model-View-Controller) pattern for a clean separation of concerns.",
                "Models: Mongoose schemas with relational references (User ↔ Listing ↔ Review) and post-delete hooks for cascading cleanup.",
                "Controllers: Modular route handlers for listings, reviews, and user authentication — each in its own file.",
                "Views: Server-rendered EJS templates with ejs-mate layouts and Bootstrap 5 for a responsive, polished UI.",
                "Middleware: Custom layers for authentication checks, ownership verification, redirect URL persistence, and Joi schema validation.",
                "Cloud Integration: Multer + Cloudinary pipeline for seamless image upload and storage."
            ],
            techStackDetailed: [
                "Backend: Node.js, Express.js (v5), Mongoose ODM",
                "Database: MongoDB Atlas",
                "Authentication: Passport.js, express-session, connect-mongo",
                "Cloud Storage: Cloudinary, multer-storage-cloudinary",
                "Frontend: EJS, ejs-mate, Bootstrap 5",
                "Validation: Joi (client + server)",
                "Deployment: Vercel"
            ],
            techStack: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Cloudinary", "EJS", "Bootstrap 5"],
            whyIBuiltIt: "Wander1ust was developed as a hands-on project to master real-world backend complexities. It pushed me beyond simple CRUD apps into implementing secure session-based authentication, integrating cloud media storage pipelines, managing complex relational data in a NoSQL database, and designing multi-layered authorization logic — skills that directly translate to production-grade development.",
            images: [
                {
                    url: "/projects/wanderlust/Main listings catalog.png",
                    caption: "Main listings page with search bar"
                }
            ],
            url: "https://wander1ust.vercel.app",
            github: "https://github.com/kr1shnac/Wander1ust",
            gradient: "from-purple-500/15 via-transparent to-transparent"
        },
        {
            id: "skfkarate",
            title: "SKF Karate",
            category: "Client",
            description: "Built the official website for the SKF Karate Association to enhance their digital presence and member engagement.",
            keyFeatures: [
                "Built for performance targeting: Responsive, mobile-first design system.",
                "Beautiful Scroll Reveal patterns: Engaging micro-interactions and scroll animations via Framer Motion.",
                "Image & Asset optimizations: Custom delivery pipeline for fast performance scores.",
                "Digital Conversion workflows: Clear calls-to-action for class registration and inquiry."
            ],
            whatIBuilt: [
                "Developed as a statically generated site utilizing Next.js for blazing fast load times and optimal SEO.",
                "Crafted the UI with Tailwind CSS for rapid styling.",
                "Implemented Framer Motion for subtle, engaging micro-interactions."
            ],
            techStackDetailed: [
                "Frontend Platform: Next.js",
                "Styling: Tailwind CSS",
                "Animations: Framer Motion"
            ],
            techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
            whyIBuiltIt: "The SKF Karate Association needed a modern digital storefront to attract new students and provide a central hub for existing members. I stepped in to translate their physical discipline into a compelling online experience.",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=1000",
                    caption: "Dynamic landing page drawing new users to view schedules and class tiers."
                },
                {
                    url: "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&q=80&w=1000",
                    caption: "Optimized mobile view tailored for on-the-go parent registrations."
                }
            ],
            url: "#",
            gradient: "from-red-500/15 via-transparent to-transparent"
        },
        {
            id: "skffeetracker",
            title: "SKF Fee Tracker",
            category: "Client",
            description: "Developed a secure fee tracking application for the SKF Karate Association to manage student payments and records efficiently.",
            keyFeatures: [
                "Dashboard Management UI: Secure administrative dashboard for tracking student payments.",
                "Custom Automated invoicing: Automated fee calculation and due date tracking.",
                "Student List Filter engine: Searchable and filterable student records.",
                "Report Generation logic: Detailed reporting for financial oversight."
            ],
            whatIBuilt: [
                "Created a responsive React application focused on data density and usability.",
                "Developed the backend using Node.js to handle secure transactions and aggregate payment data.",
                "Customized administrative dashboards to provide clear, reliable oversight."
            ],
            techStackDetailed: [
                "Frontend Application: React, Next.js",
                "Backend Engine: Node.js",
                "Database: Secure relational SQL DB"
            ],
            techStack: ["Next.js", "React", "Node.js", "Database"],
            whyIBuiltIt: "Manual fee collection and tracking was becoming a significant administrative bottleneck for the association. They required a streamlined, digital solution to minimize errors, track dues, and generate payment reports.",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
                    caption: "Admin dashboard showcasing outstanding dues and filtered payment records."
                },
                {
                    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
                    caption: "Automated student invoicing and secure transaction tracking interface."
                }
            ],
            url: "https://skfkarate.github.io/SKF-FEETRACK/",
            gradient: "from-amber-500/15 via-transparent to-transparent"
        }
    ],
    experience: [], // Still waiting on specific details from user, but schema is ready to accept complex objects
    blogs: [
        {
            id: "ai-web-apps",
            title: "Exploring AI Integrations in Modern Web Apps",
            description: "A deep dive into how I integrated OpenAI's API into TalksyAI to create a seamless conversational experience.",
            date: "Coming Soon",
            url: "#"
        },
        {
            id: "mern-best-practices",
            title: "MERN Stack Best Practices I Learned Building Wanderlust",
            description: "Lessons on authentication, file uploads, and RESTful API design from building a full-stack Airbnb clone.",
            date: "Coming Soon",
            url: "#"
        }
    ]
};
