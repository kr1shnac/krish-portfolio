"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Globe, Github, Package, Cpu } from "lucide-react";

import { siteData } from "@/data/siteData";

export default function Projects() {
    const { compactProjects } = siteData;
    return (
        <section id="projects" className="mt-8 sm:mt-0">
            <div className="space-y-6 w-full">
                <ScrollReveal>
                    <div className="flex flex-col items-center justify-center space-y-3 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-white text-black px-3 py-1 text-sm font-medium">My Projects</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 pb-1">Check out my latest work</h2>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-[600px] mx-auto mt-2">
                                I've worked on a variety of projects, from AI agents to workflow automation platforms. Here are a few of my favorites.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 w-full">
                    {compactProjects.map((project, i) => (
                        <ScrollReveal key={project.id} delay={0.1 + (i * 0.1)}>
                            <div className="rounded-xl bg-transparent border border-white/10 flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 ease-out h-full hover:border-white/20 relative group">
                                {project.websiteUrl ? (
                                    <a className="block cursor-pointer absolute inset-0 z-0" href={project.websiteUrl} target="_blank" rel="noreferrer"></a>
                                ) : (
                                    <a className="block cursor-pointer absolute inset-0 z-0" href={project.sourceUrl} target="_blank" rel="noreferrer"></a>
                                )}
                                <div className="flex flex-col px-4 pt-3 sm:pt-4 relative z-10 pointer-events-none">
                                    <div className="space-y-1">
                                        <h3 className="font-semibold tracking-tight mt-1 text-sm sm:text-base bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">{project.title}</h3>
                                        <div className="prose max-w-full text-pretty font-sans text-[11px] sm:text-xs text-zinc-400">
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-pretty font-sans text-sm text-zinc-400 mt-auto flex flex-col px-4 relative z-10 pointer-events-none">
                                    <div className="mt-4 flex flex-wrap gap-1">
                                        {project.techStack.map(tech => (
                                            <div key={tech} className="inline-flex items-center rounded-md border border-transparent font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white/5 text-zinc-300 hover:bg-white/10 px-1 py-0 text-[10px]">
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center p-4 relative z-20">
                                    <div className="flex flex-row flex-wrap items-start gap-2.5 sm:gap-3">
                                        {project.websiteUrl && (
                                            <a target="_blank" href={project.websiteUrl} rel="noreferrer" className="z-20">
                                                <div className="items-center rounded-md border border-transparent font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white text-black shadow hover:bg-white/80 flex gap-1.5 px-2 py-1 text-[10px]">
                                                    <Globe className="w-3 h-3" />
                                                    Website
                                                </div>
                                            </a>
                                        )}
                                        {project.sourceUrl && (
                                            <a target="_blank" href={project.sourceUrl} rel="noreferrer" className="z-20">
                                                <div className="items-center rounded-md border border-transparent font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white text-black shadow hover:bg-white/80 flex gap-1.5 px-2 py-1 text-[10px]">
                                                    <Github className="w-3 h-3" />
                                                    Source
                                                </div>
                                            </a>
                                        )}
                                        {project.wipBadge && (
                                            <div className="z-20">
                                                <div className="items-center rounded-md border border-amber-500/20 font-semibold bg-amber-500/10 text-amber-400/80 flex gap-1.5 px-2 py-1 text-[10px] cursor-not-allowed">
                                                    {project.wipBadge.label === "Package" ? <Package className="w-3 h-3" /> : <Cpu className="w-3 h-3" />}
                                                    {project.wipBadge.label} · {project.wipBadge.status}
                                                </div>
                                            </div>
                                        )}
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
