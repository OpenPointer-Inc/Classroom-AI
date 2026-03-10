/**
 * -----------------------------------------------------------------------------------------
 * DESIGN DIRECTION SUMMARY
 * Aesthetic Name: Bioluminescent / Deep Tech
 * DFII Score: 13 (High aesthetic impact, fits the AI/Tech context perfectly, technically feasible via Tailwind + Framer Motion)
 * Key Inspiration: Deep sea bioluminescence mixed with high-end industrial tech hardware interfaces.
 * 
 * DESIGN SYSTEM SNAPSHOT
 * Fonts: 
 *   - Display/Headers: System sans-serif but heavily manipulated (black weight, tight tracking) for bold Brutalist-adjacent impact.
 *   - Accents: Monospaced uppercase with wide tracking for technical precision.
 * Colors: Deep void green (#03150f) with neon emerald/green (#4ade80, #059669) as glowing accents.
 * Spacing Rhythm: Generous vertical padding (py-24), grid-based component spacing. 
 * Motion Philosophy: Ethereal, slow-breathing background orbs juxtaposed with snappy spring-based micro-interactions.
 * 
 * DIFFERENTIATION CALLOUT
 * This avoids generic SAAS pricing by leaning fully into a dark, immersive "deep tech" aesthetic.
 * It eschews standard flat white cards for semi-transparent, deep-glassmorphic structures that blend
 * into the void background, using saturated emerald glows to draw focus naturally to the primary tier.
 * -----------------------------------------------------------------------------------------
 */

"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Beginner",
            description: "Essential tools for high school students",
            monthlyPrice: 0,
            annualPrice: 0,
            features: [
                "5 AI Study Sessions / mo",
                "Basic Note Summarization",
                "Standard Response Time",
                "Community Support"
            ],
            isPopular: false,
        },
        {
            name: "Scholar",
            description: "Advanced AI power for serious academics",
            monthlyPrice: 12,
            annualPrice: 9,
            features: [
                "Unlimited AI Study Sessions",
                "Advanced Document Chat",
                "Custom Study Guides",
                "Priority Response Time"
            ],
            isPopular: true,
        },
        {
            name: "Researcher",
            description: "Uncapped capabilities for university scholars",
            monthlyPrice: 29,
            annualPrice: 22,
            features: [
                "Everything in Scholar",
                "Voice & Audio Analysis",
                "Research Paper Co-Pilot",
                "24/7 Priority Support"
            ],
            isPopular: false,
        }
    ];

    return (
        <section className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24 overflow-hidden text-gray-900 selection:bg-emerald-500/20">
            {/* Soft Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-emerald-200/40 blur-[130px]"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full bg-emerald-100/30 blur-[150px]"
                />
                <motion.div
                    animate={{ y: [0, -50, 0], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[200px] rounded-full bg-emerald-100/30 blur-[100px]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-emerald-600 text-sm md:text-md font-mono mb-4 tracking-widest uppercase font-bold">Student Plans</h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6 text-gray-900">
                        Invest in your<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Cognitive Future.</span>
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mt-8 font-light">
                        Pricing that scales with your ambition. Choose the intelligence layer that perfectly matches your academic intensity.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center mt-12 gap-5">
                        <span className={`text-sm font-bold tracking-widest uppercase ${!isAnnual ? 'text-gray-900' : 'text-gray-400'} transition-colors`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative w-20 h-10 rounded-full bg-gray-200 border border-gray-300 p-1 cursor-pointer transition-colors hover:bg-gray-300 flex items-center"
                            aria-label="Toggle billing cycle"
                        >
                            <motion.div
                                className="w-8 h-8 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                                animate={{ x: isAnnual ? 40 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`text-sm font-bold tracking-widest uppercase flex items-center gap-3 ${isAnnual ? 'text-gray-900' : 'text-gray-400'} transition-colors`}>
                            Annually
                            <span className="text-xs py-1 px-3 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">Save 20%</span>
                        </span>
                    </div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-32 relative">
                    {/* Glowing structural line behind cards */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10" />

                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                            className={`relative rounded-[2rem] border transition-all duration-500 ${plan.isPopular
                                ? 'border-emerald-300 bg-white shadow-xl shadow-emerald-100 hover:shadow-2xl hover:shadow-emerald-200 z-20 md:-translate-y-4'
                                : 'border-gray-200 bg-white shadow-lg shadow-gray-100 hover:shadow-xl z-10'
                                } p-8 md:p-10 flex flex-col group`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white font-mono font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-3xl font-black tracking-tight mb-2 text-gray-900">{plan.name}</h3>
                            <p className="text-gray-500 text-sm h-10 mb-8 leading-relaxed">{plan.description}</p>

                            <div className="mb-10">
                                <div className="flex items-end gap-2">
                                    <span className="text-6xl font-black tracking-tighter text-gray-900">
                                        <span className="text-3xl font-medium text-gray-400 mr-1">$</span>
                                        {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                    </span>
                                    <span className="text-gray-400 mb-2 font-mono text-sm">/mo</span>
                                </div>
                                <div className="h-6 mt-2">
                                    {isAnnual && plan.monthlyPrice > 0 && (
                                        <motion.span
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                            className="text-xs font-mono text-emerald-600"
                                        >
                                            Billed ${plan.annualPrice * 12} yearly
                                        </motion.span>
                                    )}
                                </div>
                            </div>

                            <div className="h-px w-full bg-gradient-to-r from-gray-200 to-transparent mb-10" />

                            <ul className="space-y-5 mb-12 flex-grow">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 bg-emerald-50 p-1 rounded-full border border-emerald-200 group-hover:border-emerald-300 transition-colors">
                                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke={plan.isPopular ? "#059669" : "#6b7280"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${plan.isPopular
                                    ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                                    }`}>
                                Get Started
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${plan.isPopular ? 'text-white' : 'text-gray-400'} transform group-hover:translate-x-1 transition-transform`}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
