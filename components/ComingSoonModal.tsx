"use client";
import { motion, AnimatePresence } from "framer-motion";

interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#03150f]/60 backdrop-blur-sm cursor-pointer"
                    />
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-[#061e16] p-8 shadow-[0_0_50px_rgba(16,185,129,0.15)] z-10"
                    >
                        {/* Background Glow */}
                        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-500/20 blur-[60px]" />
                        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-green-500/20 blur-[60px]" />

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m18 16 4-4-4-4" />
                                    <path d="m6 8-4 4 4 4" />
                                    <path d="m14.5 4-5 16" />
                                </svg>
                            </div>

                            <h3 className="mb-2 font-mono text-xs font-bold tracking-widest text-emerald-400 uppercase">
                                Development State
                            </h3>
                            <h2 className="mb-4 text-3xl font-black tracking-tight text-white">
                                Launching Soon
                            </h2>
                            <p className="mb-8 text-sm leading-relaxed text-white/60">
                                Our application environment is currently undergoing final deep-tech integrations. The next generation of learning will be live shortly.
                            </p>

                            <div className="mb-8 w-full rounded-xl border border-white/5 bg-black/20 p-4">
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Expected Live Date</span>
                                    <span className="font-mono text-sm font-bold text-emerald-300">September 1st, 2026</span>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="group relative w-full overflow-hidden rounded-full bg-white/5 px-6 py-4 font-bold tracking-wide text-white transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] border border-white/10 hover:border-emerald-500/30 cursor-pointer"
                            >
                                <span className="relative z-10 uppercase text-xs tracking-widest">Acknowledge</span>
                                <div className="absolute inset-0 -z-10 translate-y-full bg-emerald-500/10 transition-transform duration-300 group-hover:translate-y-0" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
