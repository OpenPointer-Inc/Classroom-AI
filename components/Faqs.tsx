"use client";

import React, { useState } from "react";

const faqs = [
    {
        question: "How Classroom AI helps Students?",
        answer: "Classroom AI is a platform that helps students learn and grow by providing them with the tools and resources they need to succeed. It offers a range of features that can help students improve their grades, develop new skills, and achieve their goals.",
    },
    {
        question: "How valuable can Classroom AI be in the new age of Modern Education system?",
        answer: "As we move into the era of AI, We have build smart teaching Agents that help students excel in their academic career, we are providing personalized learning to students by using modern teaching methodologies and the power of AI",
    },
    {
        question: "Why should I choose this program?",
        answer: "This program offers a unique blend of theoretical knowledge and practical application. You'll work with state-of-the-art tools, learn from industry experts, and build a portfolio of real-world projects that demonstrate your ability to create advanced AI agents.",
    },
    {
        question: "What are the chances of my success in my academic career?",
        answer: "In this modern era, the modern personalized learning system is the key to success, and Classroom AI is the best platform for that. We are providing personalized learning to students by using modern teaching methodologies and the power of AI",
    },
    {
        question: "Which Subjects and courses are offered in this platfrom?",
        answer: "The platfrom offers various subjects. During onboarding process you will be asked to select subjects of your interest. Each subject is designed to deepen your expertise in a specific high-growth niche. We are currently providing Cambridge highschool courses such as O-levels/A-levels.",
    },
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Title */}
                    <div className="flex flex-col items-start text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-8 font-poppins tracking-tight leading-[1.1]">
                            FAQs
                        </h2>

                        <p className="text-[#64748B] text-lg leading-relaxed max-w-md font-poppins">
                            Find answers to the most common questions about the Certified Agentic and Robotic AI Engineer program.
                        </p>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="w-full">
                        {/* Accordion List */}
                        <div className="w-full space-y-0">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-100 last:border-0"
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full py-6 flex items-start justify-between text-left group transition-all"
                                    >
                                        <span className={`text-[18px] font-bold text-[#0F172A] pr-8 group-hover:text-[#1CD98E] transition-colors leading-[1.4] font-poppins`}>
                                            {faq.question}
                                        </span>
                                        <span className={`mt-2 transition-transform duration-300 shrink-0 ${openIndex === index ? "rotate-180" : ""}`}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className={`${openIndex === index ? "text-[#1CD98E]" : "text-gray-400"}`}
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </span>
                                    </button>

                                    <div
                                        className={`transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${openIndex === index ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-[#64748B] text-base leading-relaxed font-poppins">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Chatbot Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <button className="w-14 h-14 bg-[#1CD98E] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer group">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:rotate-12 transition-transform"
                    >
                        <path d="M12 8V4H8" />
                        <rect width="16" height="12" x="4" y="8" rx="2" />
                        <path d="M2 14h2" />
                        <path d="M20 14h2" />
                        <path d="M15 13v2" />
                        <path d="M9 13v2" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Faqs;
