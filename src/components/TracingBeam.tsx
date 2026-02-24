"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

export const TracingBeam = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [svgHeight, setSvgHeight] = useState(0);

    const updateHeight = useCallback(() => {
        if (contentRef.current) {
            setSvgHeight(contentRef.current.offsetHeight);
        }
    }, []);

    useEffect(() => {
        updateHeight();

        const observer = new ResizeObserver(updateHeight);
        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => observer.disconnect();
    }, [updateHeight]);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y1 = useSpring(
        useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
        {
            stiffness: 500,
            damping: 90,
        }
    );

    const y2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
        {
            stiffness: 500,
            damping: 90,
        }
    );

    return (
        <motion.div
            ref={ref}
            className="relative w-full max-w-4xl mx-auto h-full"
        >
            <div className="absolute right-2 sm:right-4 md:right-auto md:-left-16 top-3">
                <motion.div
                    transition={{
                        duration: 0.2,
                        delay: 0.5,
                    }}
                    animate={{
                        boxShadow:
                            scrollYProgress.get() > 0
                                ? "none"
                                : "rgba(0, 207, 146, 0.35) 0px 3px 12px",
                    }}
                    className="ml-[27px] h-4 w-4 rounded-full border border-neutral-300 shadow-sm flex items-center justify-center"
                >
                    <motion.div
                        transition={{
                            duration: 0.2,
                            delay: 0.5,
                        }}
                        animate={{
                            backgroundColor: "#00cf92",
                            borderColor: "#00cf92",
                        }}
                        className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
                    />
                </motion.div>
                <svg
                    viewBox={`0 0 20 ${svgHeight}`}
                    width="20"
                    height={svgHeight}
                    className="ml-4 block"
                    aria-hidden="true"
                >
                    <motion.path
                        d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                        fill="none"
                        stroke="#9091A0"
                        strokeOpacity="0.16"
                        transition={{
                            duration: 10,
                        }}
                    />
                    <motion.path
                        d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="1.25"
                        transition={{
                            duration: 10,
                        }}
                    />
                    <defs>
                        <motion.linearGradient
                            id="gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            x2="0"
                            y1={y1}
                            y2={y2}
                        >
                            <stop stopColor="#18CCFC" stopOpacity="0" />
                            <stop stopColor="#18CCFC" />
                            <stop offset="0.325" stopColor="#6344F5" />
                            <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
                        </motion.linearGradient>
                    </defs>
                </svg>
            </div>
            <div ref={contentRef} className="pr-14 sm:pr-16 md:pr-0">
                {children}
            </div>
        </motion.div>
    );
};
