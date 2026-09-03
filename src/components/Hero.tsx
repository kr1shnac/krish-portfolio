"use client";

import { siteData } from "@/data/siteData";
import { ScrollReveal } from "./ScrollReveal";
import { Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

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
                        <a className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-medium text-white hover:underline transition-all mt-2" href={`mailto:${personal.email}`}>
                            <Mail className="w-4 h-4" />
                            {personal.email}
                        </a>
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
                    <div className="flex sm:hidden justify-start mt-6">
                        <motion.a 
                            href={personal.resumeUrl}
                            target="_blank"
                            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-zinc-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white hover:border-white/20 transition-all shadow-sm"
                            initial={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.1)" }}
                            whileInView={{ 
                                backgroundColor: ["rgba(255, 255, 255, 0.05)", "rgba(255, 255, 255, 0.25)", "rgba(255, 255, 255, 0.05)"],
                                borderColor: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.1)"],
                                color: ["#a1a1aa", "#ffffff", "#a1a1aa"]
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
                        >
                            <FileText className="w-3.5 h-3.5" />
                            View Resume
                        </motion.a>
                    </div>
                </div>
            </ScrollReveal>
        </section >
    );
}
