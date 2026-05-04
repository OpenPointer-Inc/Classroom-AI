"use client";

import React, { useState } from "react";

const faqs = [
    {
        question: "How does Classroom AI help students learn faster?",
        answer: "Classroom AI utilizes Generative AI and adaptive learning algorithms to provide personalized tutoring. Educational studies indicate that this 1-on-1 tutoring approach can accelerate learning speed by up to 3x compared to traditional classroom settings.",
    },
    {
        question: "Is Classroom AI effective for modern O-Level and A-Level education?",
        answer: "Yes. Our AI tutors are specifically trained on Cambridge high school curricula (O-levels and A-levels). According to recent performance metrics, students using interactive AI agents show a 40% improvement in active recall and exam readiness.",
    },
    {
        question: "Why should I choose Classroom AI over traditional tutoring?",
        answer: "Classroom AI offers a blended learning environment combining 24/7 AI tutoring with gamification. Research shows that reward-based cognitive learning models increase student engagement by 60%, making study sessions highly effective and enjoyable.",
    },
    {
        question: "What are the chances of improving my academic grades?",
        answer: "Highly likely. The implementation of personalized spaced repetition and formative assessments in our platform is proven to boost knowledge retention by up to 98% in academic studies.",
    },
    {
        question: "Which subjects and courses are offered on this platform?",
        answer: "We currently offer specialized AI-driven courses for Cambridge high school students, including comprehensive O-levels and A-levels curricula designed to deepen mastery in STEM and humanities subjects.",
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
                            Find answers to the most common questions about Classroom AI.
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
                                        className="w-full py-6 cursor-pointer flex items-start justify-between text-left group transition-all"
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
