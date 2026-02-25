import { Github, Linkedin, Twitter, GraduationCap, BookOpen, Award, Users, Cpu } from "lucide-react";

export const siteData = {
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
            id: "attendsmart",
            title: "AttendSmart",
            category: "Personal",
            status: "In Progress",
            description: "Proxy-proof offline biometric attendance with Face liveness detection, BLE proximity, and offline SQLite sync.",
            motivation: "Traditional digital attendance systems are plagued by proxies and network dependency. I built AttendSmart to create a foolproof, offline-first attendance solution that guarantees the physical presence of a student while functioning seamlessly without an internet connection.",
            architecture: "Engineered a robust hybrid architecture utilizing React Native and Capacitor for mobile, backed by a Node.js/MERN stack. The core innovation lies in the offline-first approach using SQLite for local storage, coupled with an intelligent synchronization service that reconciles data when connectivity is restored.",
            features: [
                "ML Kit-powered Face Liveness Detection to prevent photo spoofing.",
                "Bluetooth Low Energy (BLE) proximity checks to verify physical presence.",
                "Offline-first architecture utilizing SQLite with automated background sync.",
                "Comprehensive Role-Based Access Control (Admin, Teacher, Student)."
            ],
            images: [
                "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1000", // abstract biometric/tech mobile app view
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"  // dashboard code style
            ],
            techStack: ["React Native", "Capacitor", "MERN", "ML Kit", "BLE", "SQLite"],
            url: "https://github.com/kr1shnac/AttendSmart", // Assuming main repo name
            gradient: "from-teal-500/15 via-transparent to-transparent"
        },
        {
            id: "talksyai",
            title: "TalksyAI",
            category: "Personal",
            description: "Conversational AI Platform supporting threaded conversations, rich Markdown rendering, and syntax-highlighted code blocks.",
            motivation: "I wanted a conversational AI interface that didn't just feel like a chat window, but a proper workspace. TalksyAI was born from the need to have a seamless, developer-friendly interface that could handle complex code blocks, render markdown effortlessly, and maintain distinct conversation threads.",
            architecture: "Built as a high-performance single-page application using React and Vite, communicating with a custom Express/Node.js backend. MongoDB is utilized for persistent storage of conversation histories, while the OpenAI API powers the core intelligence engine.",
            features: [
                "Full support for threaded, context-aware conversations powered by OpenAI.",
                "Rich Markdown text rendering including complex tables and formatting.",
                "Integrated syntax highlighting for various programming languages in code blocks.",
                "Persistent chat history stored securely in MongoDB."
            ],
            images: [
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000", // ai chat interface visualization
                "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000"  // code block rendering placeholder
            ],
            techStack: ["React", "Vite", "Node.js", "Express", "MongoDB", "OpenAI API"],
            url: "https://github.com/kr1shnac/TalksyAI",
            gradient: "from-blue-500/15 via-transparent to-transparent"
        },
        {
            id: "wanderlust",
            title: "Wanderlust",
            category: "Personal",
            description: "Airbnb-Style Listings Platform with Passport.js authentication, Cloudinary uploads, and RESTful routes for listings and reviews.",
            motivation: "To master the fundamentals of full-stack web development, I challenged myself to build a comprehensive property rental platform. Wanderlust served as the proving ground for implementing complex relational data models and secure authentication flows from scratch.",
            architecture: "A classic server-rendered MVC architecture using Node.js, Express, and EJS templating. It leverages MongoDB for data storage, integrates Passport.js for robust session-based authentication, and utilizes Cloudinary for optimized image asset management.",
            features: [
                "Complete CRUD operations for property listings and user reviews.",
                "Secure user authentication and authorization utilizing Passport.js.",
                "Integrated image uploading and hosting via Cloudinary API.",
                "Interactive maps integration (Mapbox API) for property locations."
            ],
            images: [
                "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000", // beach house listing view
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000"  // modern apartment interior listing
            ],
            techStack: ["Node.js", "Express", "MongoDB", "EJS", "Passport.js", "Cloudinary"],
            url: "https://wander1ust.onrender.com",
            gradient: "from-purple-500/15 via-transparent to-transparent"
        },
        {
            id: "skfkarate",
            title: "SKF Karate",
            category: "Client",
            description: "Built the official website for the SKF Karate Association to enhance their digital presence and member engagement.",
            motivation: "The SKF Karate Association needed a modern digital storefront to attract new students and provide a central hub for existing members. I stepped in to translate their physical discipline into a compelling online experience.",
            architecture: "Developed as a statically generated site utilizing Next.js for blazing fast load times and optimal SEO. The UI was crafted with Tailwind CSS for rapid styling and Framer Motion for subtle, engaging micro-interactions.",
            features: [
                "Responsive, mobile-first design system.",
                "Engaging micro-interactions and scroll animations via Framer Motion.",
                "Optimized asset delivery for fast performance scores.",
                "Clear calls-to-action for class registration and inquiry."
            ],
            images: [
                "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=1000", // martial arts gym placeholder
                "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&q=80&w=1000"  // karate competition visual 
            ],
            techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
            url: "#",
            gradient: "from-red-500/15 via-transparent to-transparent"
        },
        {
            id: "skffeetracker",
            title: "SKF Fee Tracker",
            category: "Client",
            description: "Developed a secure fee tracking application for the SKF Karate Association to manage student payments and records efficiently.",
            motivation: "Manual fee collection and tracking was becoming a significant administrative bottleneck for the association. They required a streamlined, digital solution to minimize errors, track dues, and generate payment reports.",
            architecture: "A responsive React application focused on data density and usability. The backend utilizes Node.js to handle secure transactions and aggregate payment data, providing administrators with a clear, reliable dashboard.",
            features: [
                "Secure administrative dashboard for tracking student payments.",
                "Automated fee calculation and due date tracking.",
                "Searchable and filterable student records.",
                "Detailed reporting for financial oversight."
            ],
            images: [
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000", // finance dashboard overview
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" // analytics charts view
            ],
            techStack: ["Next.js", "React", "Node.js", "Database"],
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
