"use client";

import { siteData } from "@/data/siteData";
import { ScrollReveal } from "./ScrollReveal";
import { GraduationCap, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Education() {
    const { education } = siteData;

    if (!education || education.length === 0) return null;

    return (
        <section id="education" className="flex flex-col gap-y-3">
            <ScrollReveal>
                <div className="flex items-center justify-between mb-1 w-full">
                    <h2 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Education</h2>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-zinc-500 sm:hidden animate-pulse pr-1">
                        <span>Swipe</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                </div>
            </ScrollReveal>

            <div className="flex sm:grid sm:grid-cols-2 items-stretch gap-4 mt-4 overflow-x-auto sm:overflow-visible pb-6 sm:pb-0 pt-2 sm:pt-0 px-1 sm:px-0 snap-x snap-mandatory sm:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] after:w-1 sm:after:w-0 after:shrink-0 after:content-[''] sm:after:content-none">
                {education.map((edu, i) => (
                    <ScrollReveal key={edu.id} delay={0.1 + i * 0.1} className="w-[90%] sm:w-auto shrink-0 sm:shrink-1 snap-start sm:snap-align-none flex flex-col">
                        <div className="rounded-xl bg-transparent border border-white/10 flex flex-col overflow-hidden h-full p-6 relative w-full">
                            {/* Blurred Background Logo */}
                            {edu.logoUrl && (
                                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden blur-[100px] scale-125 transform-gpu will-change-transform" style={{ WebkitBackfaceVisibility: 'hidden' }}>
                                    <Image src={edu.logoUrl} alt="" fill className="object-cover opacity-50" />
                                </div>
                            )}
                            
                            {/* Main Content */}
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    {edu.logoUrl ? (
                                        <div className="relative size-8 shrink-0 overflow-hidden rounded-full">
                                            <Image src={edu.logoUrl} alt={edu.institution} fill className="object-cover" />
                                        </div>
                                    ) : (
                                        <div className="size-8 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shadow-inner">
                                            {edu.icon ? <edu.icon className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
                                        </div>
                                    )}
                                    <h3 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 text-base leading-tight">{edu.institution}</h3>
                                </div>
                                <div className="text-sm text-zinc-400 mb-6 flex-grow">{edu.degree}</div>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                    <div className="text-xs text-zinc-500 font-mono">
                                        {edu.duration}
                                    </div>
                                    <div className="text-xs font-medium text-white/80 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                                        {edu.score}
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
