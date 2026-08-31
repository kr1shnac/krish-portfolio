"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ChevronDown, ArrowRight, FlaskConical, Brain, Route } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { siteData, InProgressProject } from "@/data/siteData";

/* ═══════════════════════════════════════════════════════════════
   STATUS BADGE — pulsing live indicators
   ═══════════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════════
   IN-PROGRESS CARD — expandable with glow effects
   ═══════════════════════════════════════════════════════════════ */

const ICON_MAP: Record<string, React.ReactNode> = {
    "retain": <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
    "modular-routing": <Route className="w-5 h-5 sm:w-6 sm:h-6" />,
};

const GRADIENT_MAP: Record<string, { card: string; icon: string; glow: string }> = {
    "retain": {
        card: "from-amber-500/[0.06] via-transparent to-orange-500/[0.04]",
        icon: "from-amber-500/50 to-orange-500/50",
        glow: "from-amber-500/15 to-orange-500/15",
    },
    "modular-routing": {
        card: "from-violet-500/[0.06] via-transparent to-purple-500/[0.04]",
        icon: "from-violet-500/50 to-purple-500/50",
        glow: "from-violet-500/15 to-purple-500/15",
    },
};

function InProgressCard({ project, index }: { project: InProgressProject; index: number }) {
    const [expanded, setExpanded] = useState(false);
    const gradients = GRADIENT_MAP[project.id] || GRADIENT_MAP["retain"];
    const icon = ICON_MAP[project.id] || <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6" />;

    return (
        <ScrollReveal delay={0.15 + index * 0.12}>
            <motion.div
                layout
                className="relative group cursor-pointer"
                onClick={() => setExpanded(!expanded)}
            >
                <div className="relative rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-sm overflow-hidden transition-colors hover:bg-white/[0.02]">
                    {/* Subtle gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients.card} pointer-events-none`} />

                    <div className="relative p-4 sm:p-5">
                        {/* Header row */}
                        <div className="flex items-start justify-between mb-3 gap-3">
                            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${gradients.icon} flex items-center justify-center text-white shadow-lg shrink-0 mt-0.5 sm:mt-0`}>
                                    {icon}
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">{project.title}</h3>
                                    </div>
                                    <p className="text-xs sm:text-sm text-zinc-500 mt-0.5 sm:mt-1 leading-snug">{project.subtitle}</p>
                                </div>
                            </div>
                            <motion.div
                                animate={{ rotate: expanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-zinc-600 mt-1 sm:mt-2 shrink-0 p-1 sm:p-1.5 bg-white/5 rounded-full"
                            >
                                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                            </motion.div>
                        </div>

                        {/* Description */}
                        <div className="mt-4 sm:mt-5 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl font-medium">{project.description}</div>

                        {/* Expanded content */}
                        <AnimatePresence initial={false}>
                            {expanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 mt-4 border-t border-white/5 space-y-4 sm:space-y-5">
                                        {/* Highlights */}
                                        <div>
                                            <h4 className="text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">Technical Highlights</h4>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {project.highlights.map(h => (
                                                    <span key={h} className="px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] sm:text-xs text-zinc-300 font-medium">
                                                        {h}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tech stack */}
                                        <div>
                                            <h4 className="text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">Stack</h4>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {project.techStack.map(t => (
                                                    <span key={t} className="px-2 py-1 rounded-md bg-white/5 text-[10px] sm:text-xs text-zinc-400 font-medium">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* GitHub link */}
                                        {project.sourceUrl && (
                                            <a
                                                href={project.sourceUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors font-medium mt-1"
                                            >
                                                <Github className="w-4 h-4" />
                                                View on GitHub
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </ScrollReveal>
    );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN SECTION COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function CurrentlyBuilding() {
    const { inProgressProjects } = siteData;

    if (!inProgressProjects || inProgressProjects.length === 0) return null;

    return (
        <section id="currently-building" className="flex flex-col gap-y-3 sm:gap-y-4">
            <ScrollReveal>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        Currently Building
                    </h2>
                    <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-50" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">Active</span>
                    </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 mb-2 sm:mb-3 leading-relaxed">
                    Research-heavy layers I&apos;m actively engineering — the parts that don&apos;t already exist well in open source.
                </p>
            </ScrollReveal>

            <div className="flex flex-col gap-4 sm:gap-5 mt-4 sm:mt-5">
                {inProgressProjects.map((project, i) => (
                    <InProgressCard key={project.id} project={project} index={i} />
                ))}
            </div>
        </section>
    );
}
