import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'O-levels Preparation with Classroom AI || Join Now',
}
// --- DATA STRUCTURES ---
const MODULES = [
    {
        id: 1,
        title: "Mathematics: AI Taught Maths",
        description: "Master O-Level Maths with Classroom AI, your 24/7 adaptive tutor. From algebra to calculus, our AI-powered learning builds exam-ready confidence for Cambridge assessments."
    },
    {
        id: 2,
        title: "English: AI Taught English",
        description: "Ace Cambridge English with AI-driven tutoring tailored for O-Level students. Get instant feedback on essays, comprehension, and grammar — and write with clarity every time."
    },
    {
        id: 3,
        title: "Physics: AI Taught Physics",
        description: "From forces to quantum mechanics, Classroom AI makes Cambridge Physics click. Adaptive lessons and step-by-step AI guidance help O-Level students conquer even the toughest topics."
    },
    {
        id: 4,
        title: "Chemistry: AI Taught Chemistry",
        description: "Make reactions, equations, and organic chemistry finally make sense. Classroom AI personalises every Chemistry lesson for Cambridge O-Level with instant marking and smart revision."
    },
    {
        id: 5,
        title: "Computer Science: AI Taught Computer Science",
        description: "Think like a programmer with AI-powered CS tutoring aligned to Cambridge O-Level. From algorithms to cybersecurity, Classroom AI makes technical concepts practical and exciting."
    },
    {
        id: 6,
        title: "Biology: AI Taught Biology",
        description: "Bring biology to life with Classroom AI's adaptive learning platform for Cambridge O-Level. Master cells, genetics, and ecosystems with personalised lessons and smarter revision."
    },
    {
        id: 7,
        title: "Islamiyat: AI Taught Islamiyat",
        description: "Study Cambridge O-Level Islamiyat with culturally sensitive, curriculum-aligned AI tutoring. Classroom AI helps students engage deeply with Quranic studies, Hadith, and Islamic history."
    }
];

const OUTCOMES = [
    "Build exam-ready confidence for Cambridge O-Level and A-Level assessments with AI-guided practice",
    "Master core subjects — Maths, English, Physics, Chemistry, Biology, Computer Science, and Islamiyat — through structured AI learning",
    "Receive instant, detailed feedback on answers, essays, and problem sets powered by Classroom AI",
    "Track your progress with smart performance insights that identify weak areas and prioritise revision",
    "Learn at your own pace with curriculum-aligned lessons designed for the Cambridge syllabus",
    "Graduate from rote memorisation to deep understanding with Classroom AI's adaptive teaching methods"
];

// --- COMPONENT ---
export default function CourseDetailPage() {
    return (
        <main className="overflow-x-hidden font-poppins ">
            {/* Hero Section */}
            <section className="bg-teamBg bg-cover bg-center text-white">
                <div className="backdrop-blur-[1px] backdrop-brightness-75">
                    <div className="mx-auto px-4 sm:px-6 lg:max-w-[990px] lg:px-8 xl:max-w-[1200px]">
                        <div className="py-4 md:py-10">
                            {/* Breadcrumbs */}
                            <nav className="my-4">
                                <ol className="flex flex-wrap items-center space-x-1 text-xs font-medium text-white sm:text-sm">
                                    <li className="flex items-center">
                                        <Link href="/" className="hover:underline">Home</Link>
                                        <ChevronRight />
                                    </li>
                                    <li className="flex items-center">
                                        <Link href="/flagship-program" className="hover:underline">Flagship Program</Link>
                                        <ChevronRight />
                                    </li>
                                    <li className="flex items-center">
                                        <Link href="/flagship-program/courses" className="hover:underline">Courses</Link>
                                        <ChevronRight />
                                    </li>
                                    <li className="opacity-80">O-levels</li>
                                </ol>
                            </nav>

                            <div className="grid grid-cols-1 items-center justify-center gap-y-6 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-3">
                                <div className="space-y-6 pr-0 sm:col-span-3 md:col-span-3 md:pr-4 lg:col-span-2">
                                    <div className="space-y-4">
                                        <p className="text-md inline-block rounded-full bg-emerald-500/70 px-4 py-1 font-semibold text-white backdrop-blur-3xl">
                                            Cambridge International Education
                                        </p>
                                        <h1 className="text-3xl mt-2 font-bold xs:text-4xl lg:text-5xl">
                                            AI Taught O-levels: Ace your Studies with AI Today.
                                        </h1>
                                        <p className="text-sm font-medium leading-relaxed text-gray-100 sm:text-base">
                                            Your A-levels Journey is Personalized and Gamified, so treat it as a Game.
                                            Becareful because now, it's very Addictive.
                                        </p>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <CalendarIcon />
                                        <span>Duration: 12 months</span>
                                    </div>

                                    <button className="group mt-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20">
                                        <PlayIcon className="h-4 w-4 fill-white" />
                                        <span>Watch Course Intro</span>
                                    </button>
                                </div>

                                {/* Enrollment Card */}
                                <div className="w-full sm:col-span-2 md:col-span-2 lg:col-span-1">
                                    <div className="rounded-xl border border-white/10 bg-white p-4 text-zinc-900 shadow-2xl">

                                        <div className="mt-4 space-y-3">
                                            <p className="text-sm font-semibold text-emerald-600">Section Classes Schedule:</p>
                                            <div className="rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
                                                <div className="flex justify-between bg-gray-200 px-2 py-1">
                                                    {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                                                        <span key={day} className={`px-2 py-1 text-xs ${day === 'We' ? 'bg-emerald-500 text-white rounded font-bold' : 'text-gray-400'}`}>
                                                            {day}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="p-3 space-y-2 text-xs">
                                                    <div className="flex items-center gap-2"><ClockIcon /> <span>Anytime 24/7 (GMT+5) | 1.0 hour</span></div>
                                                    <div className="flex items-center gap-2"><UserIcon /> <span>AI Tutor | Urdu | English | Arabic | Spainish | and more Comming Soon</span></div>
                                                    <div className="flex items-center justify-between border-t pt-2 mt-2">
                                                        <span className="text-gray-500">Seats Left: <span className="font-bold text-red-600">468</span></span>
                                                        <span className="text-gray-500">Closes: <span className="font-bold text-red-600">Apr 07</span></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="flex w-full items-center justify-center rounded-md bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700">
                                                Enroll Now <ChevronRight className="ml-2 h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="mx-auto px-4 py-12 lg:max-w-[1200px]">
                <div className="mb-12 space-y-4">
                    <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Details</h2>
                    <p className="text-lg leading-relaxed text-zinc-700">
                        No existing course teaches O-levels Courses with AI. AI is empowering Education and makes learning fun and addictive
                        Our angle: understand what you're building and why it works. Every session produces a tangible walk-away artifact.
                    </p>
                </div>

                {/* Modules Grid */}
                <div className="rounded-2xl bg-slate-50 p-6 sm:p-10">
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-zinc-900">
                        <LayersIcon /> Subjects We Offer
                    </h2>
                    <div className="grid gap-6">
                        {MODULES.map((mod) => (
                            <div key={mod.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-hover hover:shadow-md">
                                <div className="p-5">
                                    <span className="mb-2 inline-block rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-bold text-emerald-700">
                                        Module {mod.id}
                                    </span>
                                    <h3 className="mb-2 text-xl font-bold text-zinc-900">{mod.title}</h3>
                                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{mod.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Outcomes & Prerequisites */}
                <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="rounded-2xl bg-emerald-50 p-8 border border-emerald-100">
                        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-zinc-900">
                            <TrophyIcon /> Course Outcomes
                        </h2>
                        <ul className="space-y-4">
                            {OUTCOMES.map((outcome, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 rounded-full bg-emerald-500 p-1">
                                        <CheckIcon className="h-3 w-3 text-white" />
                                    </div>
                                    <p className="text-sm text-zinc-700 sm:text-base">{outcome}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-8 border border-slate-200">
                        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-zinc-900">
                            <BookIcon /> Prerequisites
                        </h2>
                        <p className="text-lg text-zinc-600">There are no pre-requisites for this course.</p>
                    </div>
                </div>
            </section>

            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6 z-50 group">
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition-transform hover:scale-110">
                    <PlayIcon className="h-6 w-6 fill-white" />
                </button>
                <span className="absolute bottom-16 right-0 scale-0 rounded bg-zinc-900 px-3 py-1 text-xs text-white transition-all group-hover:scale-100">
                    Watch Preview
                </span>
            </div>
        </main>
    );
}

// --- ICON COMPONENTS (CLEANED UP SVGS) ---
const ChevronRight = ({ className }: { className?: string }) => (
    <svg className={className || "h-4 w-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
    </svg>
);

const CalendarIcon = () => (
    <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M8 2v4m8-2v4M3 10h18" />
    </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
    <svg className={className || "h-4 w-4"} viewBox="0 0 24 24" fill="currentColor">
        <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
);

const LayersIcon = () => (
    <svg className="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83zM2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
    </svg>
);

const ClockIcon = () => (
    <svg className="h-6 w-6 mt-2 -mr-1.5 text-[#8A8A8A] stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="8" cy="8" r="7" /><path d="M8 3.5V8h4.5" /></svg>
);

const UserIcon = () => (
    <svg className="h-6 w-6 text-[#8A8A8A] stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const InfoIcon = () => <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 110a42 42 0 1 1 0 84 42 42 0 0 1 0-84zm56 254h-88v-24h12v-64h-12v-24h64v100h12v24z" /></svg>;
const TrophyIcon = () => <svg className="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M6 9H4.5a1 1 0 0 1 0-5H6m12 5h1.5a1 1 0 0 0 0-5H18M6 9a6 6 0 0 0 12 0V3H6v6zM4 22h16" /></svg>;
const BookIcon = () => <svg className="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5V5A2.5 2.5 0 0 1 6.5 2.5H20v14H6.5a2.5 2.5 0 0 0-2.5 2.5z" /></svg>;