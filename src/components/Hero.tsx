"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export default function Hero() {
    const { personal } = siteData;

    return (
        <section className="pt-12 pb-8 flex flex-col gap-6 relative min-h-[70vh] justify-center">
            <ScrollReveal direction="up" duration={0.8} delay={0.1}>
                <motion.div
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Image
                        src={personal.photoUrl || "/placeholder.png"}
                        alt={personal.name}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
                    Hi, I&apos;m {personal.name.split(" ")[0]}
                </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
                <p className="text-zinc-400 text-lg md:text-xl font-medium mb-6">
                    {personal.ageAndLocation} <span className="mx-2 text-zinc-600">|</span> {personal.role}
                </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
                <p className="text-zinc-300 leading-relaxed max-w-2xl text-base md:text-lg">
                    {personal.bio}
                </p>
            </ScrollReveal>
        </section>
    );
}
