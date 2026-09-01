"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Globe, Github, ChevronDown, ChevronUp } from "lucide-react";

import { siteData, ExperienceItem } from "@/data/siteData";
import Image from "next/image";

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasMultiple = exp.description.length > 1;

    return (
        <div className="rounded-xl bg-transparent border border-white/10 flex flex-col overflow-hidden relative w-full p-6 group hover:border-white/20 transition-all duration-300 ease-out">

            <div className="relative z-10 flex flex-col h-full">
                {/* Header Section */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-3.5">
                        {exp.logoUrl ? (
                            <div className="relative size-9 sm:size-10 rounded-full overflow-hidden shrink-0">
                                <Image src={exp.logoUrl} alt={exp.company} fill className="object-cover" />
                            </div>
                        ) : (
                            <div className="size-9 sm:size-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white font-bold text-sm shadow-inner shrink-0">
                                {exp.logoInitial}
                            </div>
                        )}
                        
                        <div className="flex flex-col min-w-0">
                            <h3 className="font-semibold tracking-tight text-sm sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 leading-tight">
                                {exp.role}
                            </h3>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                                <span className="text-xs sm:text-sm font-medium text-zinc-400">
                                    {exp.company}
                                </span>
                                <span className="text-[10px] text-zinc-500 font-mono sm:hidden bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                                    {exp.duration}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Duration - top right for desktop */}
                    <div className="hidden sm:flex shrink-0 mt-1.5">
                        <span className="text-xs text-zinc-500 font-mono">
                            {exp.duration}
                        </span>
                    </div>
                </div>



                {/* Description content */}
                <div className="mt-4 sm:mt-5 text-xs sm:text-sm text-zinc-400 leading-relaxed flex-grow">
                    <ul className="list-disc list-outside ml-4">
                        {/* Always show the first bullet */}
                        <li className="pl-1 marker:text-zinc-600">{exp.description[0]}</li>
                    </ul>
                        
                    {/* Expandable subsequent bullets */}
                    {hasMultiple && (
                        <div 
                            className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                        >
                            <div className="overflow-hidden">
                                <ul className="list-disc list-outside ml-4 mt-2 space-y-2">
                                    {exp.description.slice(1).map((point, idx) => (
                                        <li key={idx + 1} className="pl-1 marker:text-zinc-600">{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                    
                    {hasMultiple && (
                        <button 
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-white transition-colors group"
                        >
                            {isExpanded ? (
                                <>Show less <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" /></>
                            ) : (
                                <>Read more <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" /></>
                            )}
                        </button>
                    )}
                </div>

                {/* Tech Stack */}
                {exp.techStack && exp.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-4">
                        {exp.techStack.map((tech, idx) => (
                            <div key={idx} className="inline-flex items-center rounded-md border border-transparent font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white/5 text-zinc-300 hover:bg-white/10 px-2 py-0.5 text-[10px]">
                                {tech}
                            </div>
                        ))}
                    </div>
                )}

                {/* Links - pushed to bottom */}
                {(exp.websiteUrl || exp.sourceUrl) && (
                    <div className="flex flex-row flex-wrap items-start gap-2 mt-5">
                        {exp.websiteUrl && (
                            <a target="_blank" href={exp.websiteUrl} rel="noreferrer" className="z-20">
                                <div className="items-center rounded-md border border-transparent font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white text-black shadow hover:bg-white/80 flex gap-1.5 px-2 py-1 text-[10px]">
                                    <Globe className="w-3 h-3" />
                                    Website
                                </div>
                            </a>
                        )}
                        {exp.sourceUrl && (
                            <a target="_blank" href={exp.sourceUrl} rel="noreferrer" className="z-20">
                                <div className="items-center rounded-md border border-transparent font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white text-black shadow hover:bg-white/80 flex gap-1.5 px-2 py-1 text-[10px]">
                                    <Github className="w-3 h-3" />
                                    Source
                                </div>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <section id="work" className="flex flex-col gap-y-3">
            <ScrollReveal>
                <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Work Experience</h2>
                </div>
            </ScrollReveal>

            <div className="flex flex-col gap-5 sm:gap-6 mt-4 sm:mt-5">
                {siteData.experience.map((exp, i) => (
                    <ScrollReveal key={exp.id} delay={0.1 + i * 0.1}>
                        <ExperienceCard exp={exp} />
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
