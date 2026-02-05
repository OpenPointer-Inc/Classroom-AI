"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

interface SatelliteImage {
    src: string;
    alt: string;
    label?: string;
    initialX: number;
    initialY: number;
    targetX: string;
    targetY: string;
    rotate: number;
    color?: string;
}

const IMAGES: SatelliteImage[] = [
    { src: "/FBISE.svg", alt: "Federal Board of Intermediate and Secondary Education", initialX: 0, initialY: 0, targetX: "15%", targetY: "15%", rotate: -15, color: "bg-green-100" },
    { src: "/TOEFL.svg", alt: "Team Meeting", initialX: 0, initialY: 0, targetX: "85%", targetY: "10%", rotate: 10, color: "bg-pink-100" },
    { src: "/VU.svg", alt: "Virtual University of Pakistan", initialX: 0, initialY: 0, targetX: "25%", targetY: "85%", rotate: 5, color: "bg-purple-100" },
    { src: "/ILETS.svg", alt: "ILETS", initialX: 0, initialY: 0, targetX: "75%", targetY: "80%", rotate: -8, color: "bg-yellow-100" },
    { src: "/Cambridge Education System.svg", alt: "Cambridge Education System", initialX: 0, initialY: 0, targetX: "90%", targetY: "65%", rotate: 12, color: "bg-orange-100" },
    { src: "/bise LHR.svg", alt: "BISE LHR", initialX: 0, initialY: 0, targetX: "10%", targetY: "70%", rotate: -10, color: "bg-blue-100" },
];

export default function AnimatedDiv() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const titleOpacity = useTransform(smoothProgress, [0.3, 0.6], [0, 1]);
    const titleScale = useTransform(smoothProgress, [0.3, 0.6], [0.8, 1]);
    const titleY = useTransform(smoothProgress, [0.3, 0.6], [50, 0]);

    return (
        <div ref={containerRef} className="h-[200vh] relative bg-white overflow-visible">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Central Content */}
                <motion.div
                    style={{ opacity: titleOpacity, scale: titleScale, y: titleY }}
                    className="z-10 text-center max-w-2xl px-4"
                >
                    <h1 className="text-6xl font-bold text-black mb-6 tracking-tight leading-tight">
                        Collaborating with <br />
                        <span className="text-gray-900">5+ Academic Programs</span>
                    </h1>
                    {/* <p className="text-xl text-gray-600 leading-relaxed font-medium">
                        Tedy allows your business culture to shine by giving you full control over category selection and allowances. Isn't that amazing? 😲
                    </p> */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-10 px-8 py-4 cursor-pointer bg-[#1CD98E] text-white rounded-full text-lg font-semibold shadow-lg hover:bg-[#00f090] transition-colors"
                    >
                        Explore all Programs
                    </motion.button>
                </motion.div>

                {/* Scattered Images */}
                {IMAGES.map((img, index) => {
                    // Start from center (50%, 50%) and move outwards
                    const x = useTransform(smoothProgress, [0, 0.8], ["50%", img.targetX]);
                    const y = useTransform(smoothProgress, [0, 0.8], ["50%", img.targetY]);
                    const rotate = useTransform(smoothProgress, [0, 0.5], [0, img.rotate]);
                    const scale = useTransform(smoothProgress, [0, 0.3, 0.6], [0.5, 1, 1]);
                    const opacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);

                    return (
                        <motion.div
                            key={index}
                            style={{
                                left: x,
                                top: y,
                                rotate,
                                scale,
                                opacity,
                                x: "-50%",
                                y: "-50%"
                            }}
                            className="absolute z-0"
                        >
                            <div className="relative group p-2">
                                <div className={`relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105`}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover"
                                    />
                                    {img.label && (
                                        <div className={`absolute bottom-4 left-4 ${img.color || 'bg-white'} px-4 py-1.5 rounded-full text-sm font-bold shadow-md`}>
                                            {img.label}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
