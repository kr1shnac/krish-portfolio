"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

interface SkillGroup {
    category: string;
    items: string[];
}

export default function Skills() {
    const { skills } = siteData;

    if (!skills || skills.length === 0) return null;

    return (
        <section className="flex flex-col gap-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold tracking-tight text-white mb-2"
            >
                Skills
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skillGroup: SkillGroup, index: number) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col gap-3 p-5 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors"
                    >
                        <h3 className="text-white font-medium">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item: string) => (
                                <span
                                    key={item}
                                    className="px-2.5 py-1 text-xs font-medium text-zinc-400 bg-white/5 border border-white/5 rounded-md"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
