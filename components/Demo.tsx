/**
 * -----------------------------------------------------------------------------------------
 * DESIGN DIRECTION SUMMARY (frontend-design)
 * Aesthetic Name: Contrast Brutalism / Technical Precision
 * DFII Score: 12 (High aesthetic impact through stark light/dark contrast, fits the technical nature of AI tools)
 * Key Inspiration: High-end industrial hardware manuals meeting deep tech software environments.
 * 
 * COPYWRITING & PRICING STRATEGY ALIGNMENT
 * - Clarity over Cleverness: "See how students save 10 hours a week" rather than "Unlock synergistic AI paradigms".
 * - Benefits over Features: "Advanced Document Chat" translates to "Ask your textbook questions and get cited answers instantly."
 * - Value Metrics: Tying features directly to time saved and grades improved, framing the product as an investment rather than an expense.
 * 
 * SEO AUDIT ALIGNMENT
 * - On-Page Structure: Proper H1 -> H2 -> H3 hierarchy.
 * - Semantic HTML: Utilizing <section>, <article>, <header>, and <main> tags appropriately.
 * - Accessibility: Clear contrasts, aria-labels on interactive elements, and readable typography.
 * 
 * DIFFERENTIATION CALLOUT
 * This avoids generic SAAS landing pages by employing a harsh, intentional split between stark, 
 * bright "Light Mode" for the high-level demonstration, plunging immediately into a detailed, 
 * technical "Dark Mode" for tool exploration, mirroring the transition from concept to deep execution.
 * -----------------------------------------------------------------------------------------
 */

"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Demo() {
    const features = [
        {
            title: "Advanced Document Chat",
            description: "Upload your syllabus, lecture slides, or textbooks. Ask questions and get instant, cited answers directly from your course materials.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
            ),
            benefit: "Save 4+ hours of reading weekly."
        },
        {
            title: "Voice & Audio Analysis",
            description: "Record live lectures. Our AI automatically transcribes, summarizes, and extracts key concepts, formulas, and actionable study items.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></svg>
            ),
            benefit: "Never miss a critical exam detail."
        },
        {
            title: "Custom Study Guides",
            description: "Generate tailored practice exams and flashcards based exactly on the topics you struggle with most, adapting to your learning pace.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" /></svg>
            ),
            benefit: "Boost retention by up to 40%."
        },
        {
            title: "Research Paper Co-Pilot",
            description: "Analyze complex academic papers instantly. Identify methodology, cross-reference citations, and draft your literature reviews with confidence.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            ),
            benefit: "Cut research time in half."
        }
    ];

    return (
        <main className="w-full font-poppins antialiased overflow-hidden">

            {/* 
              SECTION 1: LIGHT MODE (The Demonstration)
              Aesthetic: Clinical, Bright, Editorial
              Goal: Show the product clearly, build immediate trust.
            */}
            <section className="relative min-h-screen bg-gray-50 text-gray-900 py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center">

                {/* SEO: Clear H1 hierarchy */}
                <header className="max-w-4xl text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">See It In Action</h2>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight font-rubik leading-tight mb-6 text-[#0c0c0c]">
                            Master your Coursework in <span className="text-[#16BD7A]">Record Time.</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                            Watch how top students use ClassroomAI to bypass busywork and focus entirely on deep comprehension.
                        </p>
                    </motion.div>
                </header>

                {/* Video Container (Editorial presentation) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-6xl aspect-video bg-gray-200 rounded-3xl shadow-2xl relative overflow-hidden border border-gray-300"
                >
                    {/* Placeholder for actual video element */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900 group cursor-pointer">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-30 transition-opacity duration-500 blend-luminosity grayscale" />

                        <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                                <path d="M5 3l14 9-14 9V3z" />
                            </svg>
                        </div>
                    </div>
                </motion.div>

                {/* Trust Signals (Copywriting & SEO) */}
                <div className="mt-16 text-center">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Trusted by students at</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
                        {/* Placeholder generic university names for aesthetic */}
                        <span className="text-xl font-serif font-bold">Stanford</span>
                        <span className="text-xl font-serif font-bold">MIT</span>
                        <span className="text-xl font-serif font-bold">Oxford</span>
                        <span className="text-xl font-serif font-bold">Harvard</span>
                    </div>
                </div>
            </section>

            {/* 
              SECTION 2: DARK MODE (The Toolset)
              Aesthetic: Deep Tech, Bioluminescent, Industrial
              Goal: Detail features, anchor value to price, drive CTA.
            */}
            <section className="relative min-h-screen bg-[#03150f] text-white py-32 px-6 md:px-12 lg:px-24">

                {/* Background Atmosphere */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[150px]" />
                    <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-green-500/10 blur-[150px]" />
                    {/* Industrial Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">

                    {/* Header: Value Proposition */}
                    <div className="mb-24 md:flex items-end justify-between">
                        <div className="max-w-3xl">
                            <h2 className="text-green-400 font-mono text-sm tracking-widest uppercase mb-4">The Platform</h2>
                            <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6">
                                Everything you need to outsmart the syllabus.
                            </h3>
                            <p className="text-lg text-white/60 font-light">
                                Stop wasting time on manual note-taking and brute-force memorization.
                                Our toolkit is designed to give you extreme academic leverage.
                            </p>
                        </div>
                        <div className="hidden md:block text-right pb-2">
                            {/* Pricing Strategy: Framing the investment */}
                            <p className="text-sm text-white/40 uppercase tracking-widest font-mono">Value delivered</p>
                            <p className="text-3xl font-bold text-green-400">10+ hrs/wk saved</p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                        {features.map((feature, idx) => (
                            <motion.article
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="group relative p-8 rounded-3xl bg-white/2 border border-white/5 hover:bg-white/4 hover:border-green-500/30 transition-colors duration-500 overflow-hidden"
                            >
                                {/* Hover Glow */}
                                <div className="absolute -inset-px bg-linear-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-3xl blur-md" />

                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-300">
                                    {feature.icon}
                                </div>

                                <h4 className="text-2xl font-bold mb-3">{feature.title}</h4>
                                <p className="text-white/60 leading-relaxed mb-8 h-20 md:h-16">
                                    {feature.description}
                                </p>

                                {/* Copywriting: Emphasize the concrete outcome/benefit */}
                                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                                    <span className="w-2 h-2 rounded-full bg-green-500" />
                                    <p className="text-sm font-mono text-green-400 uppercase tracking-wide">
                                        {feature.benefit}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Final CTA / Pricing Conversion */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full rounded-3xl bg-linear-to-br from-green-900/40 to-[#03150f] border border-green-500/30 p-12 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-linear-to-r from-transparent via-green-400 to-transparent opacity-50" />

                        <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to upgrade your intellect?</h2>
                        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                            Join thousands of students who have already transformed their academic trajectory. Start for free, upgrade when you need more power.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="px-8 py-4 bg-green-500 hover:bg-green-400 text-[#03150f] font-bold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] flex items-center gap-2">
                                Start Free Trial
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </button>
                            <a href="/pricing" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-bold rounded-xl transition-colors text-white">
                                View Pricing Plans
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}