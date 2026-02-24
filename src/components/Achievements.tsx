"use client";

import { siteData } from "@/data/siteData";
import { LucideIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

interface AchievementItem {
    id: string;
    title: string;
    organization: string;
    description: string;
    icon?: LucideIcon;
    className?: string;
    link?: string;
}

export default function Achievements() {
    const { achievements } = siteData;

    if (!achievements || achievements.length === 0) return null;

    return (
        <section className="flex flex-col gap-4 mt-4">
            <div>
                <ScrollReveal>
                    <h2 className="text-2xl font-bold tracking-tight text-blue-400">
                        Achievements & Problem Solving
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p className="text-zinc-400 mt-2">
                        Milestones in algorithms, data structures, and competitive coding.
                    </p>
                </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                {achievements.map((item: AchievementItem, index: number) => (
                    <ScrollReveal
                        key={item.id}
                        delay={0.1 + index * 0.1}
                        className={`flex flex-col justify-between p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-300 group hover:-translate-y-1 ${item.className || ""}`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                                {item.icon && <item.icon className="w-6 h-6" />}
                            </div>
                            {item.link && (
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    className="flex items-center gap-2 p-2 px-3 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 border border-blue-500/20 transition-all text-sm font-medium"
                                >
                                    <span>Certificate</span>
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            )}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {item.title}
                            </h3>
                            <div className="text-sm font-medium text-blue-400/80 mb-3">
                                {item.organization}
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
