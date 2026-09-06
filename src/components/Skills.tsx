"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { siteData } from "@/data/siteData";
import { ArrowUpDown } from "lucide-react";

// High-signal skills for the default view
const featuredSkills = [
    "Python", "Agentic Workflows", "LLM Integration", "Memory Systems", "TypeScript",
    "System Design", "Node.js", "Express.js", "Bun", "PostgreSQL",
    "Prisma", "Redis", "SQLite", "Supabase", "MongoDB",
    "JWT", "Zod", "REST APIs", "React", "Next.js", "Tailwind CSS",
];

export default function Skills() {
    const { skills } = siteData;
    const [grouped, setGrouped] = useState(false);

    return (
        <section id="skills" className="flex flex-col gap-y-3">
            <ScrollReveal>
                <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Skills</h2>
                    <button
                        onClick={() => setGrouped(!grouped)}
                        className={`text-zinc-500 hover:text-white transition-colors p-1 rounded ${grouped ? 'text-white' : ''}`}
                        title={grouped ? "Show all" : "Sort by category"}
                    >
                        <ArrowUpDown className="w-3.5 h-3.5" />
                    </button>
                </div>
            </ScrollReveal>

            {grouped ? (
                <div className="space-y-4">
                    {skills.map((group, groupIndex) => (
                        <ScrollReveal key={group.category} delay={0.05 + groupIndex * 0.05}>
                            <div className="space-y-2">
                                <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">{group.category}</span>
                                <div className="flex flex-wrap gap-1.5">
                                    {group.items.map((skill) => (
                                        <div
                                            key={skill}
                                            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none border-transparent bg-white text-black shadow hover:bg-black hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 cursor-default"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            ) : (
                <div className="flex flex-wrap gap-1.5">
                    {featuredSkills.map((skill, index) => (
                        <ScrollReveal key={skill} delay={0.05 + index * 0.02}>
                            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none border-transparent bg-white text-black shadow hover:bg-black hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 cursor-default">
                                {skill}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            )}
        </section>
    );
}
