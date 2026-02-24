"use client";

import { siteData } from "@/data/siteData";
import { LucideIcon } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface EducationItem {
    id: string;
    degree: string;
    institution: string;
    duration: string;
    score: string;
    icon?: LucideIcon;
}

export default function Education() {
    const { education } = siteData;

    if (!education || education.length === 0) return null;

    return (
        <section className="flex flex-col gap-4 mt-4">
            <ScrollReveal>
                <h2 className="text-2xl font-bold tracking-tight text-blue-400">
                    Education
                </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
                <p className="text-zinc-400">
                    My academic journey in AI, Machine Learning, and Computer Science.
                </p>
            </ScrollReveal>

            <div className="flex flex-col gap-6">
                {education.map((edu: EducationItem, index: number) => (
                    <ScrollReveal
                        key={edu.id}
                        delay={0.1 + index * 0.1}
                        className="flex flex-col gap-4 p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-300 group hover:-translate-y-1"
                    >
                        <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
                            <div className="flex gap-4">
                                <div className="mt-1 p-2 rounded-xl bg-white/5 border border-white/10 h-10 w-10 flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                                    {edu.icon && <edu.icon className="w-5 h-5" />}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-zinc-400 mt-1">{edu.institution}</p>
                                    <div className="flex gap-3 text-sm text-zinc-500 mt-2">
                                        <span>{edu.duration}</span>
                                        <span>·</span>
                                        <span className="text-blue-400/80 font-medium">{edu.score}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
