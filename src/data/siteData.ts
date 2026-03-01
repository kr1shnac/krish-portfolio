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
            id: "krish-gpt",
            title: "krish-GPT",
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
            whyIBuiltIt: "I wanted a conversational AI interface that didn't just feel like a chat window, but a proper workspace. krish-GPT was born from the need to have a seamless, developer-friendly interface that could handle complex code blocks, render markdown effortlessly, and maintain distinct conversation threads.",
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
            description: "An Airbnb-style platform for discovering and sharing unique property listings. Built as a hands-on learning project, it showcases full-stack capabilities including secure authentication, cloud image uploads, and community-driven reviews.",
            keyFeatures: [
                {
                    text: "Property Exploration: Browse through a diverse catalog of unique property listings."
                },
                {
                    text: "Listing Creation & Image Uploads: Securely add properties and upload photos directly to the cloud via Cloudinary.",
                    image: "/projects/wanderlust/Create New Listing form.png",
                    caption: "Hosts can add new properties with details such as title, description, and pricing — photos are uploaded directly to Cloudinary."
                },
                {
                    text: "Community Reviews & Authorization: Guests can leave ratings and detailed reviews on properties. Robust authorization logic ensures users can only edit or delete their own listings and reviews, preventing unauthorized modifications.",
                    image: "/projects/wanderlust/Property detail page with reviews.png",
                    caption: "Each listing's detail page displays community reviews, with edit and delete controls scoped only to the review author."
                },
                {
                    text: "Secure Authentication: Persistent session-based login and signup powered by Passport.js."
                }
            ],
            whatIBuilt: [
                "Wander1ust follows the MVC pattern for a clean separation of concerns.",
                "A Node.js/Express server manages APIs, secure user sessions via Passport.js, and complex data relationships in MongoDB.",
                "A responsive EJS and Bootstrap 5 interface with Joi for strict client-side validation.",
                "Integrated Cloudinary for optimized cloud image uploading and hosting."
            ],
            techStackDetailed: [
                "Frontend: EJS, Bootstrap 5, Joi",
                "Backend: Node.js, Express.js, MongoDB (Mongoose)",
                "Tools & Integrations: Cloudinary, Passport.js, Vercel"
            ],
            techStack: ["Node.js", "Express", "MongoDB", "EJS", "Passport.js", "Cloudinary"],
            whyIBuiltIt: "Wander1ust was developed primarily as a sandbox to master real-world backend complexities. It allowed me to transition from simple apps to successfully implementing secure session-based authentication, integrating cloud media storage, and managing complex relational data in a NoSQL database.",
            images: [
                {
                    url: "/projects/wanderlust/Main listings catalog.png",
                    caption: "Main listings catalog — browse through a diverse catalog of unique property listings."
                }
            ],
            url: "https://wander1ust.onrender.com",
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
