"use client";

import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { useState } from "react";
import { X } from "lucide-react";

export default function Hero() {
    const { personal, socials } = siteData;
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <section className="pt-12 pb-8 flex flex-col gap-6 relative min-h-[70vh] justify-center">
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <motion.button
                            className="absolute top-6 right-6 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors z-50 backdrop-blur-lg border border-white/10"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            <X size={24} />
                        </motion.button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-xs md:max-w-sm lg:max-w-md aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/30"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={personal.photoUrl || "/placeholder.png"}
                                alt={personal.name}
                                fill
                                quality={100}
                                priority
                                sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ScrollReveal direction="up" duration={0.8} delay={0.1}>
                <div className="flex items-start justify-between w-full">
                    <motion.div
                        className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        <Image
                            src={personal.photoUrl || "/placeholder.png"}
                            alt={personal.name}
                            fill
                            quality={100}
                            priority
                            sizes="(max-width: 768px) 128px, 160px"
                            className="object-cover"
                        />
                    </motion.div>

                    <div className="hidden md:flex gap-6 items-center pt-4 pr-2">
                        {socials.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a key={social.name} href={social.url} target="_blank" className="text-zinc-500 hover:text-white transition-colors" rel="noreferrer">
                                    <Icon size={24} strokeWidth={1.5} />
                                    <span className="sr-only">{social.name}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
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
