"use client";

import { ScrollReveal } from "./ScrollReveal";

import { siteData } from "@/data/siteData";
import Image from "next/image";

export default function Achievements() {
    const { achievements } = siteData;

    return (
        <section id="hackathons">
            <div className="space-y-8 w-full">
                <ScrollReveal>
                    <div className="flex flex-col items-center justify-center space-y-3 text-center">
                        <div className="space-y-2">
                            <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-300 backdrop-blur-sm">
                                Hackathons
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 pb-1 mt-4">
                                I like building things
                            </h2>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-[600px] mx-auto mt-3">
                                Events and competitions I've participated in along the way.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full mt-2">
                    {achievements.map((hack, i) => (
                        <ScrollReveal key={hack.id} delay={0.1 + (i * 0.1)}>
                            <div className="rounded-xl bg-transparent border border-white/10 flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 ease-out h-full hover:border-white/20 relative group p-4 sm:p-5">
                                {hack.logoUrl && (
                                    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden blur-[30px] scale-150 transform-gpu" style={{ WebkitBackfaceVisibility: 'hidden' }}>
                                        <Image src={hack.logoUrl} alt="" fill className="object-cover" />
                                    </div>
                                )}
                                
                                <div className="flex items-center gap-3.5 relative z-10 pointer-events-none h-full">
                                    {hack.logoUrl ? (
                                        <div className="relative size-8 sm:size-9 rounded-full overflow-hidden shrink-0">
                                            <Image src={hack.logoUrl} alt={hack.title} fill className="object-cover" />
                                        </div>
                                    ) : (
                                        <div className="size-8 sm:size-9 rounded-full border border-white/10 flex items-center justify-center bg-white/5 shrink-0 shadow-inner">
                                            <span className="text-white font-bold text-xs sm:text-sm">{hack.initial}</span>
                                        </div>
                                    )}
                                    
                                    <div className="flex flex-col min-w-0">
                                        <h3 className="font-semibold tracking-tight text-sm sm:text-base bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 truncate">
                                            {hack.title}
                                        </h3>
                                        <div className="flex items-center gap-1.5 mt-0.5 text-[11px] sm:text-xs text-zinc-400">
                                            <span className="truncate">{hack.date}</span>
                                            <span>·</span>
                                            <span className="truncate">{hack.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
