"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { siteData } from "@/data/siteData";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { AutoClawBot } from "./AutoClawBot";

export default function Projects() {
    const { projects } = siteData;
    const [activeTab, setActiveTab] = useState<"Personal" | "Client">("Personal");

    const filteredProjects = projects.filter(p => p.category === activeTab);

    return (
        <section className="flex flex-col gap-4">
            <ScrollReveal>
                <h2 className="text-2xl font-bold tracking-tight text-blue-400">
                    Projects
                </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
                <p className="text-zinc-400">
                    A collection of my work spanning from blockchain applications to full-stack projects, both personal and professional.
                </p>
            </ScrollReveal>

            {/* Tabs */}
            <ScrollReveal delay={0.2} className="flex p-1 rounded-xl bg-[#111111] border border-white/5 w-full mt-4">
                <button
                    onClick={() => setActiveTab("Personal")}
                    className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all ${activeTab === "Personal" ? "bg-[#1A1A1A] text-white shadow-sm border border-white/10" : "text-zinc-400 hover:text-white"}`}
                >
                    Personal Projects
                </button>
                <button
                    onClick={() => setActiveTab("Client")}
                    className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all ${activeTab === "Client" ? "bg-[#1A1A1A] text-white shadow-sm border border-white/10" : "text-zinc-400 hover:text-white"}`}
                >
                    Client Work
                </button>
            </ScrollReveal>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-4 mt-4">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => {
                            const cardContent = (
                                <div className="relative h-full">
                                    <motion.div
                                        className="flex flex-col h-full gap-4 p-6 rounded-xl bg-[#111111] border border-white/5 hover:border-white/[0.12] transition-colors duration-300 group relative overflow-hidden cursor-pointer z-10"
                                    >
                                        <div className={`absolute inset-0 opacity-100 md:opacity-0 group-hover:opacity-100 bg-gradient-to-tr ${project.gradient} transition-opacity duration-500`} />

                                        {/* AutoClaw Eventful Bot Animation */}
                                        {project.id === "autoclaw" && (
                                            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-xl">
                                                <div className="absolute top-[-20px] right-[-20px] animate-card-bot-complex">
                                                    <AutoClawBot className="scale-[0.8]" />
                                                    {/* Sneaky Message Bubble */}
                                                    <div className="absolute top-10 left-[-40px] bg-[#1e293b] border border-white/10 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg animate-message-bubble whitespace-nowrap">
                                                        Hi there! 👋<br />Click me!
                                                        <div className="absolute bottom-[-5px] right-4 w-2.5 h-2.5 bg-[#1e293b] border-b border-r border-white/10 rotate-45"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex justify-between items-start relative z-10">
                                            <h3
                                                className="text-xl font-semibold text-white transition-colors flex items-center gap-2 group-hover:text-white"
                                            >
                                                {project.title}
                                                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </h3>
                                            {project.status && (
                                                <span className="px-2.5 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-md">
                                                    {project.status}
                                                </span>
                                            )}
                                        </div>
                                        <p
                                            className={`text-sm text-zinc-400/90 flex-grow relative z-10 leading-relaxed ${project.id === "autoclaw" ? "max-w-[calc(100%-100px)]" : "max-w-3xl"}`}
                                        >
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4 relative z-10 w-[calc(100%-100px)]">
                                            {project.techStack.map(tech => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1.5 text-xs font-medium text-zinc-300 bg-[#1A1A1A] rounded-md"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            );

                            return (
                                <ScrollReveal
                                    key={project.id}
                                    delay={0.1 + index * 0.1}
                                >
                                    {project.id === "autoclaw" ? (
                                        <a href={project.url !== "#" ? project.url : undefined} target="_blank" rel="noopener noreferrer" className="block h-full group/card">
                                            {cardContent}
                                        </a>
                                    ) : (
                                        <Link href={`/projects/${project.id}`} className="block h-full group/card">
                                            {cardContent}
                                        </Link>
                                    )}
                                </ScrollReveal>
                            );
                        })
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="col-span-full py-12 text-center text-zinc-500"
                        >
                            No projects available
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
