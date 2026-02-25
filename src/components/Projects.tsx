"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteData } from "@/data/siteData";
import { ArrowUpRight, Github, ExternalLink, Activity, Database, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ProjectItem {
    id: string;
    title: string;
    category: string;
    status?: string;
    description: string;
    motivation?: string;
    architecture?: string;
    features?: string[];
    techStack: string[];
    url: string;
    gradient: string;
}

export default function Projects() {
    const { projects } = siteData;
    const [activeTab, setActiveTab] = useState<"Personal" | "Client">("Personal");
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const filteredProjects = projects.filter(p => p.category === activeTab);
    const selectedProject = projects.find((p: ProjectItem) => p.id === selectedId);

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
                        filteredProjects.map((project, index) => (
                            <ScrollReveal
                                key={project.id}
                                delay={0.1 + index * 0.1}
                            >
                                <motion.div
                                    layoutId={`project-container-${project.id}`}
                                    onClick={() => setSelectedId(project.id)}
                                    className="flex flex-col h-full gap-4 p-6 rounded-xl bg-[#111111] border border-white/5 hover:border-white/[0.12] transition-colors duration-300 group relative overflow-hidden cursor-pointer"
                                >
                                    <div className={`absolute inset-0 opacity-100 md:opacity-0 group-hover:opacity-100 bg-gradient-to-tr ${project.gradient} transition-opacity duration-500`} />
                                    <div className="flex justify-between items-start relative z-10">
                                        <motion.h3
                                            layoutId={`project-title-${project.id}`}
                                            className="text-xl font-semibold text-white transition-colors flex items-center gap-2 group-hover:text-white"
                                        >
                                            {project.title}
                                            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </motion.h3>
                                        {project.status && (
                                            <span className="px-2.5 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-md">
                                                {project.status}
                                            </span>
                                        )}
                                    </div>
                                    <motion.p
                                        layoutId={`project-desc-${project.id}`}
                                        className="text-sm text-zinc-400/90 flex-grow relative z-10 leading-relaxed max-w-3xl"
                                    >
                                        {project.description}
                                    </motion.p>
                                    <div className="flex flex-wrap gap-2 mt-4 relative z-10">
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
                            </ScrollReveal>
                        ))
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

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedId && selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        />
                        <motion.div
                            layoutId={`project-container-${selectedProject.id}`}
                            className="relative w-full max-w-4xl max-h-[90vh] bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${selectedProject.gradient} opacity-20`} />

                            {/* Modal Header */}
                            <div className="flex justify-between items-start p-6 md:p-8 relative z-10 border-b border-white/5">
                                <div>
                                    <motion.h3
                                        layoutId={`project-title-${selectedProject.id}`}
                                        className="text-2xl md:text-3xl font-bold text-white mb-2"
                                    >
                                        {selectedProject.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`project-desc-${selectedProject.id}`}
                                        className="text-zinc-400 text-sm md:text-base max-w-2xl"
                                    >
                                        {selectedProject.description}
                                    </motion.p>
                                </div>
                                {selectedProject.url !== "#" && (
                                    <Link
                                        href={selectedProject.url}
                                        target="_blank"
                                        className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-colors text-sm shrink-0"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Visit Project
                                    </Link>
                                )}
                            </div>

                            {/* Modal Content - Scrollable */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8 relative z-10 space-y-8">
                                {/* Tech Stack */}
                                <div>
                                    <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map(tech => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 border border-white/5 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Rich Content Sections */}
                                {selectedProject.motivation && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="space-y-3"
                                    >
                                        <div className="flex items-center gap-2 text-blue-400">
                                            <Activity className="w-5 h-5" />
                                            <h4 className="text-lg font-semibold">Motivation & Core Problem</h4>
                                        </div>
                                        <p className="text-zinc-300 leading-relaxed text-sm md:text-base bg-white/5 p-4 rounded-xl border border-white/5">
                                            {selectedProject.motivation}
                                        </p>
                                    </motion.div>
                                )}

                                {selectedProject.architecture && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="space-y-3"
                                    >
                                        <div className="flex items-center gap-2 text-blue-400">
                                            <Database className="w-5 h-5" />
                                            <h4 className="text-lg font-semibold">Architecture & Implementation</h4>
                                        </div>
                                        <p className="text-zinc-300 leading-relaxed text-sm md:text-base border-l-2 border-white/10 pl-4 py-2">
                                            {selectedProject.architecture}
                                        </p>
                                    </motion.div>
                                )}

                                {selectedProject.features && selectedProject.features.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="space-y-3"
                                    >
                                        <div className="flex items-center gap-2 text-blue-400">
                                            <Sparkles className="w-5 h-5" />
                                            <h4 className="text-lg font-semibold">Key Features</h4>
                                        </div>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {selectedProject.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-zinc-300 text-sm md:text-base bg-white/5 p-3 rounded-lg border border-white/5">
                                                    <span className="text-blue-500 mt-0.5">•</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="p-4 md:p-6 border-t border-white/5 flex justify-end gap-3 bg-[#111111] relative z-10">
                                {selectedProject.url !== "#" && (
                                    <Link
                                        href={selectedProject.url}
                                        target="_blank"
                                        className="sm:hidden flex items-center justify-center gap-2 flex-1 py-2.5 bg-white/10 text-white rounded-xl font-medium transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Visit Project
                                    </Link>
                                )}
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="px-6 py-2.5 font-medium text-sm text-zinc-400 hover:text-white bg-transparent hover:bg-white/5 rounded-xl transition-colors sm:flex-none flex-1"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
