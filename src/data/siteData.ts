import { Github, Linkedin, Twitter, GraduationCap, BookOpen, Award, Users, Cpu } from "lucide-react";

export const siteData = {
    personal: {
        name: "Krishna C",
        ageAndLocation: "20, Bangalore",
        role: "AI & ML Engineering Student",
        bio: "I'm a passionate developer specializing in MERN stack and AI integrations. From building full-stack platforms like Wanderlust and TalksyAI to developing offline biometric systems, I love solving complex problems and turning ideas into scalable applications.",
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
            description: "Participated in a high-intensity hackathon, collaborating on innovative tech solutions and pushing the boundaries of problem-solving under pressure.",
            icon: Cpu,
            className: "md:col-span-2", // Bento grid spanning
            link: "https://unstop.com/certificate-preview/7cf097ac-0506-4855-b241-90af14bfc983",
        },
        {
            id: "dsa",
            title: "100+ DSA Problems",
            organization: "Codeforces",
            description: "Consistent problem solver focusing on Data Structures and Algorithms. Strong foundation in Java and C++.",
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
            status: "Paused",
            description: "Proxy-proof offline biometric attendance with Face liveness detection, BLE proximity, and offline SQLite sync.",
            techStack: ["React Native", "Capacitor", "MERN", "ML Kit", "BLE"],
            url: "https://github.com/kr1shnac",
            gradient: "from-teal-500/15 via-transparent to-transparent"
        },
        {
            id: "talksyai",
            title: "TalksyAI",
            category: "Personal",
            description: "Conversational AI Platform supporting threaded conversations, rich Markdown rendering, and syntax-highlighted code blocks. Integrated OpenAI API and MongoDB.",
            techStack: ["React", "Vite", "Node.js", "Express", "MongoDB", "OpenAI API"],
            url: "https://github.com/kr1shnac/TalksyAI",
            gradient: "from-blue-500/15 via-transparent to-transparent"
        },
        {
            id: "wanderlust",
            title: "Wanderlust",
            category: "Personal",
            description: "Airbnb-Style Listings Platform with Passport.js authentication, Cloudinary uploads, and RESTful routes for listings and reviews.",
            techStack: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
            url: "https://wander1ust.onrender.com",
            gradient: "from-purple-500/15 via-transparent to-transparent"
        },
        {
            id: "skfkarate",
            title: "SKF Karate",
            category: "Client",
            description: "Built the official website for the SKF Karate Association to enhance their digital presence and member engagement.",
            techStack: ["Next.js", "Tailwind CSS", "Framer Motion"], // Placeholders, user can update
            url: "#",
            gradient: "from-red-500/15 via-transparent to-transparent"
        },
        {
            id: "skffeetracker",
            title: "SKF Fee Tracker",
            category: "Client",
            description: "Developed a secure fee tracking application for the SKF Karate Association to manage student payments and records efficiently.",
            techStack: ["Next.js", "React", "Node.js", "Database"], // Placeholders, user can update
            url: "https://skfkarate.github.io/SKF-FEETRACK/",
            gradient: "from-amber-500/15 via-transparent to-transparent"
        }
    ],
    experience: [],
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
