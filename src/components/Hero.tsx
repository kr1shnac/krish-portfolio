"use client";

import { siteData } from "@/data/siteData";
import { ScrollReveal } from "./ScrollReveal";
import { Mail, FileText } from "lucide-react";

export default function Hero() {
    const { personal } = siteData;

    return (
        <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-8">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5">
                    <ScrollReveal delay={0.1}>
                        <h1 className="inline-block text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
                            Hi, I&apos;m {personal.name.split(" ")[0]}
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <span className="inline-block max-w-[600px] md:text-xl text-zinc-400">
                            {personal.role}.
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
                            <a 
                                className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-black px-4 py-2 rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                                href={personal.resumeUrl} 
                                target="_blank"
                            >
                                <FileText className="w-4 h-4" />
                                View Resume
                            </a>
                            <a 
                                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-all" 
                                href={`mailto:${personal.email}`}
                            >
                                <Mail className="w-4 h-4" />
                                Email Me
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <ScrollReveal delay={0.5}>
                <div className="mt-12">
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">About</h2>
                    </div>
                    <div className="prose max-w-full text-pretty font-sans text-sm text-zinc-400 dark:prose-invert">
                        <p>{personal.bio}</p>
                    </div>
                </div>
            </ScrollReveal>
        </section >
    );
}
