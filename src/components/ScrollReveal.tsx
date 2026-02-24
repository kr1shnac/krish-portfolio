"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
}

export const ScrollReveal = ({
    children,
    delay = 0,
    className = "",
    direction = "up",
    duration = 0.5,
}: ScrollRevealProps) => {
    const directionOffset = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { x: 30, y: 0 },
        right: { x: -30, y: 0 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directionOffset[direction],
                filter: "blur(8px)",
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                filter: "blur(0px)",
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.25, 0, 1], // Custom Apple-like easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
