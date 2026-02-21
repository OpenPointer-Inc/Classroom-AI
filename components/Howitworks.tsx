"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

export default function Howitworks() {
    const sectionRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

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
    const width = useTransform(smoothProgress, [0.2, 0.5], ["20px", "100%"]);
    const height = useTransform(smoothProgress, [0.2, 0.5], ["8px", "100%"]);
    const borderRadius = useTransform(smoothProgress, [0.2, 0.5], ["24px", "0px"]);
    const y = useTransform(smoothProgress, [0, 0.2], ["100px", "0px"]);

    // Initial Text ("How it works?")
    const initialTextOpacity = useTransform(smoothProgress, [0.2, 0.25], [1, 0]);

    // Canvas opacity fades in as it expands
    const canvasOpacity = useTransform(smoothProgress, [0.25, 0.4], [0, 1]);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const frameCount = 60;
            const promises = [];

            for (let i = 1; i <= frameCount; i++) {
                // Filenames found in folder: ezgif-frame-001.jpg, ezgif-frame-002.jpg, ...
                const formattedIndex = i.toString().padStart(3, '0');
                const src = `/Deer video frames/ezgif-frame-${formattedIndex}.jpg`;
                const img = new window.Image();
                img.src = src;
                const promise = new Promise<HTMLImageElement | null>((resolve) => {
                    img.onload = () => resolve(img);
                    img.onerror = () => {
                        console.warn(`Failed to load image: ${src}`);
                        resolve(null);
                    }
                });
                promises.push(promise);
            }

            const results = await Promise.all(promises);
            const validImages = results.filter((img): img is HTMLImageElement => img !== null);

            if (validImages.length > 0) {
                setImages(validImages);
                setIsLoaded(true);
            }
        };

        loadImages();
    }, []);

    // Render Canvas Frame
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        const canvas = canvasRef.current;
        if (!canvas || !isLoaded || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const startScroll = 0.3;
        const endScroll = 0.9;

        let progress = (latest - startScroll) / (endScroll - startScroll);
        progress = Math.max(0, Math.min(1, progress));

        const frameIndex = Math.floor(progress * (images.length - 1));
        const img = images[frameIndex];

        if (img) {
            canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
            canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            const w = img.width * scale;
            const h = img.height * scale;
            const x = (canvas.width - w) / 2;
            const y = (canvas.height - h) / 2;

            ctx.drawImage(img, x, y, w, h);
        }
    });

    const animStart = 0.3;
    const animEnd = 0.9;
    const animDuration = animEnd - animStart;

    const getOpacity = (startPct: number, endPct: number) => {
        const start = animStart + (startPct * animDuration);
        const end = animStart + (endPct * animDuration);
        const fadeIn = 0.05 * animDuration;

        return useTransform(
            smoothProgress,
            [start - fadeIn, start, end, end + fadeIn],
            [0, 1, 1, 0]
        );
    };

    const text1Opacity = getOpacity(0.0, 0.2);
    const text2Opacity = getOpacity(0.3, 0.5);
    const text3Opacity = getOpacity(0.6, 0.8);
    const text4Opacity = getOpacity(0.9, 1.0);


    return (
        <section ref={sectionRef} className="h-[400vh] relative bg-white">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{
                        width,
                        height,
                        borderRadius,
                        y,
                    }}
                    className="bg-[#03150f] flex flex-col items-center justify-center overflow-hidden relative shadow-2xl"
                >
                    <motion.div
                        style={{ opacity: initialTextOpacity }}
                        className="absolute inset-x-0 flex items-center justify-center pointer-events-none z-20"
                    >
                        <h2 className="text-white text-3xl md:text-xl font-bold tracking-tight">How it works?</h2>
                    </motion.div>

                    <motion.div
                        style={{ opacity: canvasOpacity }}
                        className="absolute inset-0 w-full h-full z-10"
                    >
                        <canvas
                            ref={canvasRef}
                            className="w-full h-full object-contain block"
                        />
                        {!isLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                <div className="w-10 h-10 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                            </div>
                        )}
                    </motion.div>

                    <motion.div style={{ opacity: text1Opacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                        <div className="text-center">
                            <h2 className="text-green-400 text-lg font-mono mb-2 tracking-widest uppercase">Classroom AI</h2>
                            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter leading-none">
                                BOOKS<br />TALKS.
                            </h1>
                        </div>
                    </motion.div>

                    <motion.div style={{ opacity: text2Opacity }} className="absolute inset-0 flex items-center justify-start px-8 md:px-32 pointer-events-none z-30">
                        <div className="max-w-xl">
                            <h3 className="text-white/60 text-xl md:text-2xl font-medium mb-2">01.</h3>
                            <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                                Everything<br />Customizable.
                            </h2>
                            <p className="text-white/80 mt-4 text-lg">
                                Experience the seamless motion of nature.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div style={{ opacity: text3Opacity }} className="absolute inset-0 flex items-center justify-end px-8 md:px-32 pointer-events-none z-30">
                        <div className="text-right max-w-xl">
                            <h3 className="text-white/60 text-xl md:text-2xl font-medium mb-2">02.</h3>
                            <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                                Everything<br />Personalized.
                            </h2>
                            <p className="text-white/80 mt-4 text-lg">
                                Strong, durable, and built for the wild.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div style={{ opacity: text4Opacity }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30">
                        <h1 className="text-white text-6xl md:text-8xl font-black mb-8 tracking-tighter text-center">
                            Make it yours.
                        </h1>
                        <button className="pointer-events-auto px-10 py-4 bg-white text-black text-xl font-bold rounded-full hover:scale-105 transition-transform duration-300">
                            Get started
                        </button>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
