"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";


export default function Howitworks() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Expand color div from small to full screen
    const width = useTransform(smoothProgress, [0.3, 0.6], ["20px", "100%"]);
    const height = useTransform(smoothProgress, [0.3, 0.6], ["8px", "100%"]);
    const borderRadius = useTransform(smoothProgress, [0.3, 0.6], ["24px", "0px"]);
    const y = useTransform(smoothProgress, [0, 0.3], ["100px", "0px"]);

    // Text transitions
    const initialTextOpacity = useTransform(smoothProgress, [0.3, 0.4], [1, 0]);
    const welcomeTextOpacity = useTransform(smoothProgress, [0.5, 0.6], [0, 1]);
    const welcomeTextScale = useTransform(smoothProgress, [0.5, 0.7], [0.8, 1]);

    return (
        <section ref={sectionRef} className="h-[200vh] relative bg-white">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{
                        width,
                        height,
                        borderRadius,
                        y,
                    }}
                    className="bg-[#03150f] flex flex-col items-center justify-center overflow-hidden relative"
                >
                    {/* Initial Text */}
                    <motion.div
                        style={{ opacity: initialTextOpacity }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <h2 className="text-white text-2xl font-bold">How it works?</h2>
                    </motion.div>

                    {/* Final Content */}
                    <motion.div
                        style={{ opacity: welcomeTextOpacity, scale: welcomeTextScale }}
                        className="flex flex-col items-center justify-center text-center px-4"
                    >
                        <h1 className="text-white text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
                            welcome<br />little one!
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl font-bold uppercase tracking-[0.3em]">
                            BABY TAYLOR FINN
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
