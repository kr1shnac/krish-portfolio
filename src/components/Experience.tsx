"use client";

import Link from 'next/link';
import { siteData } from "@/data/siteData";
import { LucideIcon } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface LinkItem {
    name: string;
    url: string;
    icon: LucideIcon;
}

interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    duration: string;
    description: string;
    techStack: string[];
    icon: LucideIcon;
    links?: LinkItem[];
}

export default function Experience() {
    const { experience } = siteData;

    if (!experience || experience.length === 0) {
        return null;
    }

    return (
        <section className="flex flex-col gap-8">
            <ScrollReveal>
                <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
                    Experience
                </h2>
            </ScrollReveal>

            <div className="flex flex-col gap-6">
                {experience.map((exp: ExperienceItem, index: number) => (
                    <ScrollReveal
                        key={exp.id}
                        delay={0.1 + index * 0.1}
                        className="flex flex-col gap-4 p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors"
                    >
                        <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
                            <div className="flex gap-4">
                                <div className="mt-1 p-2 rounded-xl bg-white/5 border border-white/10 h-10 w-10 flex items-center justify-center shrink-0">
                                    <exp.icon className="w-5 h-5 text-zinc-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {exp.role} <span className="text-zinc-500 font-normal">· {exp.company}</span>
                                    </h3>
                                    <p className="text-sm text-zinc-500 mt-1">{exp.duration}</p>
                                </div>
                            </div>

                            {exp.links && (
                                <div className="flex flex-wrap gap-2 ml-14 sm:ml-0">
                                    {exp.links.map((link: LinkItem) => (
                                        <Link
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
                                        >
                                            <link.icon className="w-3.5 h-3.5" />
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <p className="text-zinc-400 text-sm ml-14 sm:ml-14">
                            {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-2 ml-14 sm:ml-14">
                            {exp.techStack.map((tech: string) => (
                                <span
                                    key={tech}
                                    className="px-2.5 py-1 text-xs font-medium text-zinc-400 bg-white/5 border border-white/5 rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
