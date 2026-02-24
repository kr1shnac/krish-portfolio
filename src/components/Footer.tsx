"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Footer() {
    const { personal, socials } = siteData;
    return (
        <footer className="mt-12 pt-8 pb-12 border-t border-white/10 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-2 items-center md:items-start"
                >
                    <p className="text-white font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Open to opportunities
                    </p>
                    <p className="text-zinc-500 text-sm max-w-sm text-center md:text-left">
                        Always ready to discuss exciting projects or professional opportunities.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                >
                    {socials.map((social) => (
                        <Link key={social.name} href={social.url} target="_blank" className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                            <social.icon size={18} />
                        </Link>
                    ))}
                    <Link href={`mailto:${personal.email}`} className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                        <Mail size={18} />
                    </Link>
                </motion.div>
            </div>

        </footer>
    );
}
