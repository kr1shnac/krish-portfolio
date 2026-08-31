"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Globe, Swords, Mountain, ArrowRight } from "lucide-react";

import { siteData } from "@/data/siteData";
import Image from "next/image";

const IconMap = {
    swords: Swords,
    mountain: Mountain,
};

export default function BeyondKeyboard() {
    const { beyondKeyboard } = siteData;

    return (
        <section id="beyond" className="flex flex-col gap-y-3">
            <ScrollReveal>
                <div className="flex items-center justify-between mb-1 w-full">
                    <h2 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Beyond the Keyboard</h2>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-zinc-500 sm:hidden animate-pulse pr-1">
                        <span>Swipe</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                </div>
                <p className="text-sm text-zinc-500 mt-1">Discipline and teamwork in the real world.</p>
            </ScrollReveal>

            <div className="flex sm:grid sm:grid-cols-2 items-stretch gap-4 mt-4 overflow-x-auto sm:overflow-visible pb-6 sm:pb-0 pt-2 sm:pt-0 px-1 sm:px-0 snap-x snap-mandatory sm:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] after:w-1 sm:after:w-0 after:shrink-0 after:content-[''] sm:after:content-none">
                {beyondKeyboard.map((item, i) => {
                    const Icon = IconMap[item.icon];
                    return (
                        <ScrollReveal key={item.id} delay={0.1 + i * 0.15} className="w-[90%] sm:w-auto shrink-0 sm:shrink-1 snap-start sm:snap-align-none flex flex-col">
                            <div className="rounded-xl border border-white/10 overflow-hidden relative h-full flex flex-col w-full">
                                {/* Ambient logo blur */}
                                {item.logoUrl && (
                                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden blur-[100px] scale-125 transform-gpu will-change-transform" style={{ WebkitBackfaceVisibility: 'hidden' }}>
                                        <Image src={item.logoUrl} alt="" fill className="object-cover opacity-50" />
                                    </div>
                                )}

                                {/* Top accent bar */}
                                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                <div className="p-6 flex flex-col h-full relative z-10">
                                    {/* Header: emoji + icon */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="flex items-center gap-3">
                                            {item.logoUrl ? (
                                                <div className="relative size-8 rounded-full overflow-hidden shrink-0">
                                                    <Image src={item.logoUrl} alt={item.org} fill className="object-cover" />
                                                </div>
                                            ) : (
                                                <div className="size-8 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                                                    <span className="text-sm">{item.emoji}</span>
                                                </div>
                                            )}
                                            <div>
                                                <p className="text-sm font-semibold text-white">{item.org}</p>
                                            </div>
                                        </div>
                                        <Icon className="w-4 h-4 text-zinc-600" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-semibold text-base bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-3 leading-snug">{item.title}</h3>

                                    {/* Highlights */}
                                    <ul className="text-sm text-zinc-400 leading-relaxed list-none space-y-2.5 mb-5 flex-1">
                                        {item.highlights.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-zinc-600 mt-1.5 shrink-0">
                                                    <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3" /></svg>
                                                </span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Footer button */}
                                    {item.orgUrl && (
                                        <div className="pt-4 border-t border-white/5 mt-auto">
                                            <a target="_blank" href={item.orgUrl} rel="noreferrer" className="inline-flex items-center gap-1.5 text-[11px] font-medium text-zinc-400 hover:text-white transition-colors duration-200">
                                                <Globe className="w-3 h-3" />
                                                {item.org}
                                                <span className="text-zinc-600">↗</span>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    );
                })}
            </div>
        </section>
    );
}
