"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteData } from "@/data/siteData";
import { ScrollReveal } from "./ScrollReveal";

interface BlogItem {
    id: string;
    title: string;
    description: string;
    date: string;
    url: string;
}

export default function Blogs() {
    const { blogs } = siteData;

    if (!blogs || blogs.length === 0) {
        return null; // Hide the section entirely if there are no blogs
    }

    return (
        <section className="flex flex-col gap-4">
            <ScrollReveal>
                <h2 className="text-2xl font-bold tracking-tight text-blue-400">
                    Writing
                </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
                <p className="text-zinc-400">
                    Thoughts and insights on software engineering, web development, and blockchain.
                </p>
            </ScrollReveal>

            <div className="flex flex-col gap-4 mt-4">
                {blogs.map((blog: BlogItem, index: number) => (
                    <ScrollReveal
                        key={blog.id}
                        delay={0.1 + index * 0.1}
                    >
                        <Link
                            href={blog.url}
                            target="_blank"
                            className="flex flex-col gap-3 p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/[0.12] transition-all duration-300 group relative overflow-hidden hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 opacity-100 md:opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-blue-500/15 via-transparent to-transparent transition-opacity duration-500" />
                            <div className="flex justify-between items-start gap-4 relative z-10">
                                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-8">
                                    {blog.title}
                                </h3>
                                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 absolute right-6 top-6" />
                            </div>
                            <p className="text-sm text-zinc-400 leading-relaxed pr-8 relative z-10">
                                {blog.description}
                            </p>
                            <p className="text-xs text-zinc-500 font-medium mt-1 relative z-10">
                                {blog.date}
                            </p>
                        </Link>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
