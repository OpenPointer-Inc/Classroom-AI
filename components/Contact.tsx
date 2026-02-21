"use client"
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all duration-300";

    return (
        <section className="relative min-h-screen bg-[#03150f] overflow-hidden py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center">
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-green-500/20 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.1, 0.25, 0.1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-emerald-600/20 blur-[150px]"
                />
            </div>

            <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-green-400 text-lg font-mono mb-4 tracking-widest uppercase">Get in touch</h2>
                    <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6">
                        Let's build<br />something<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">extraordinary.</span>
                    </h1>
                    <p className="text-white/70 text-lg max-w-md mb-12">
                        Have a question or want to work together? We'd love to hear from you. Drop us a message and we'll reply as soon as possible.
                    </p>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Email", value: "hello@classroomai.site", icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                )
                            },
                            {
                                title: "Phone", value: "+1 (555) 000-0000", icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                )
                            },
                            {
                                title: "Location", value: "E-11, Islamabad, Pakistan", icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                )
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-green-400">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-sm text-white/50">{item.title}</p>
                                    <p className="font-medium">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Form Elements */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
                >
                    {/* Glass sheen */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                    <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70 ml-1">First Name</label>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="text"
                                    placeholder="John"
                                    className={inputClasses}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70 ml-1">Last Name</label>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="text"
                                    placeholder="Doe"
                                    className={inputClasses}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70 ml-1">Email</label>
                            <motion.input
                                whileFocus={{ scale: 1.01 }}
                                type="email"
                                placeholder="john@example.com"
                                className={inputClasses}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70 ml-1">Message</label>
                            <motion.textarea
                                whileFocus={{ scale: 1.01 }}
                                rows={4}
                                placeholder="How can we help you?"
                                className={`${inputClasses} resize-none`}
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 mt-4 bg-green-500 hover:bg-green-400 text-[#03150f] font-bold rounded-xl transition-colors duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] cursor-pointer"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
