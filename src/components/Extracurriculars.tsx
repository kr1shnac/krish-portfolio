"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";
import { ScrollReveal } from "./ScrollReveal";

interface ExtracurricularItem {
    id: string;
    role: string;
    organization: string;
    description: string;
    image: string;
}

export default function Extracurriculars() {
    const { extracurriculars } = siteData;
    const [selectedId, setSelectedId] = useState<string | null>(null);

    if (!extracurriculars || extracurriculars.length === 0) return null;

    const selectedItem = extracurriculars.find((e: ExtracurricularItem) => e.id === selectedId);

    return (
        <section className="flex flex-col gap-4 mt-4">
            <div>
                <ScrollReveal>
                    <h2 className="text-2xl font-bold tracking-tight text-blue-400">
                        Beyond the Keyboard
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p className="text-zinc-400 mt-2">
                        Discipline and teamwork in the real world.
                    </p>
                </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {extracurriculars.map((item: ExtracurricularItem, index: number) => (
                    <ScrollReveal key={item.id} delay={0.1 + index * 0.1}>
                        <motion.div
                            layoutId={`card-container-${item.id}`}
                            onClick={() => setSelectedId(item.id)}
                            className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1"
                        >
                            <motion.img
                                layoutId={`image-${item.id}`}
                                src={item.image}
                                alt={item.role}
                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <motion.div
                                layoutId={`text-container-${item.id}`}
                                className="absolute bottom-0 left-0 p-6"
                            >
                                <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                                <p className="text-blue-400/90 text-sm font-medium">{item.organization}</p>
                            </motion.div>
                        </motion.div>
                    </ScrollReveal>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && selectedItem && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        />
                        <motion.div
                            layoutId={`card-container-${selectedItem.id}`}
                            className="relative w-full max-w-4xl bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 hidden sm:flex flex-col md:flex-row"
                        >
                            <motion.img
                                layoutId={`image-${selectedItem.id}`}
                                src={selectedItem.image}
                                alt={selectedItem.role}
                                className="w-full md:w-1/2 h-64 md:h-[500px] object-cover"
                            />
                            <div className="p-8 md:p-12 flex flex-col justify-center flex-1 max-h-[50vh] md:max-h-full overflow-y-auto">
                                <motion.div layoutId={`text-container-${selectedItem.id}`}>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedItem.role}</h3>
                                    <p className="text-blue-400 text-base md:text-lg font-medium mb-4 md:mb-6">{selectedItem.organization}</p>
                                </motion.div>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-zinc-300 text-sm md:text-lg leading-relaxed"
                                >
                                    {selectedItem.description}
                                </motion.p>
                                <motion.button
                                    onClick={() => setSelectedId(null)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-6 md:mt-8 px-6 py-2 md:py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium w-fit transition-colors text-sm md:text-base"
                                >
                                    Close
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Mobile view - completely separate layout structure */}
                        <motion.div
                            layoutId={`card-container-${selectedItem.id}-mobile`}
                            className="relative w-full max-w-md max-h-[90vh] bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex sm:hidden flex-col"
                        >
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.role}
                                className="w-full h-48 sm:h-64 object-cover shrink-0"
                            />
                            <div className="p-6 flex flex-col flex-1 overflow-y-auto">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{selectedItem.role}</h3>
                                    <p className="text-blue-400 text-sm font-medium mb-4">{selectedItem.organization}</p>
                                </div>
                                <p className="text-zinc-300 text-sm leading-relaxed">
                                    {selectedItem.description}
                                </p>
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="mt-6 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium w-full transition-colors text-sm"
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
