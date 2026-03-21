import React from 'react';
import Link from 'next/link';

// --- DATA STRUCTURES ---
const MODULES = [
    {
        id: 1,
        title: "Zero to WhatsApp in 60 Minutes",
        description: "Everyone leaves with a working AI employee. Install OpenClaw, connect WhatsApp or Telegram, shape your employee's personality and role. Walk away with: OpenClaw running + messaging channel connected + employee shaped."
    },
    {
        id: 2,
        title: "Make It Do Real Work",
        description: "Stop chatting, start delegating. Produce competitors.md, weekly-goals.md, and configure your morning briefing. Understand how your employee actually works — the architecture behind the magic. Walk away with: real artifacts + morning briefing configured."
    },
    {
        id: 3,
        title: "Teach It New Tricks (Without Getting Hacked)",
        description: "Your employee is only as good as its skills — and only as safe as your boundaries. Build one domain-specific custom skill, understand the lethal trifecta of prompt injection, and frame skills as sellable business assets. Walk away with: custom skill + safety model understood."
    },
    {
        id: 4,
        title: "Run Claude Code from Your Phone",
        description: "The most powerful capability — delegate coding from WhatsApp. Set up ACP (Agent Communication Protocol), run at least one real task in a real project folder from your phone. Walk away with: ACP working + real coding task completed remotely."
    },
    {
        id: 5,
        title: "Connect Everything — Google Workspace & Secrets",
        description: "Your employee reads your email, manages your docs, handles credentials safely. Connect Google Workspace (Gmail, Calendar, Drive), verify secrets management. Walk away with: Google Workspace connected + secrets management verified."
    },
    {
        id: 6,
        title: "Your Employee Works While You Sleep",
        description: "Scheduling, automation, compound workflows — the always-on employee. Build a heartbeat with personalized checklist, set up a working cron job with announce. Frame compound workflows as business operations. Walk away with: heartbeat checklist + working cron job."
    },
    {
        id: 7,
        title: "NanoClaw — Beyond SMB",
        description: "When your business outgrows shared-process architecture. Container isolation for regulated industries. Get NanoClaw running, apply the three-stage business maturity framework, design a Layer-3 architecture for your profession. Walk away with: NanoClaw running + maturity framework + Layer-3 design."
    }
];

const OUTCOMES = [
    "Set up a fully working AI employee with OpenClaw connected to WhatsApp or Telegram",
    "Delegate real work — competitive analysis, goal-setting, morning briefings — and keep the artifacts",
    "Build domain-specific custom skills and understand the safety model that prevents prompt injection",
    "Orchestrate Claude Code from your phone to delegate coding tasks to real project folders",
    "Connect Google Workspace (Gmail, Calendar, Drive) with proper secrets management",
    "Design compound workflows with scheduling, cron jobs, and always-on automation",
    "Deploy NanoClaw with container isolation and apply the three-stage business maturity framework"
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
                                    <li className="opacity-80">Your First AI Employee</li>
                                </ol>
                            </nav>

                            <div className="grid grid-cols-1 items-center justify-center gap-y-6 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-3">
                                <div className="space-y-6 pr-0 sm:col-span-3 md:col-span-3 md:pr-4 lg:col-span-2">
                                    <div className="space-y-4">
                                        <p className="text-md inline-block rounded-full bg-emerald-500/70 px-4 py-1 font-semibold text-white backdrop-blur-3xl">
                                            AI-50
                                        </p>
                                        <h1 className="text-3xl font-bold xs:text-4xl lg:text-5xl">
                                            Your First AI Employee: OpenClaw for Business Professionals
                                        </h1>
                                        <p className="text-sm font-medium leading-relaxed text-gray-100 sm:text-base">
                                            A 7-session hands-on series covering AI employees from first install to deployment.
                                            No prerequisites — understand what you're building and why it works.
                                        </p>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <CalendarIcon />
                                        <span>Duration: 3 months</span>
                                    </div>

                                    <button className="group mt-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20">
                                        <PlayIcon className="h-4 w-4 fill-white" />
                                        <span>Watch Course Intro</span>
                                    </button>
                                </div>

                                {/* Enrollment Card */}
                                <div className="w-full sm:col-span-2 md:col-span-2 lg:col-span-1">
                                    <div className="rounded-xl border border-white/10 bg-white p-4 text-zinc-900 shadow-2xl">
                                        <p className="mb-2 flex items-center gap-1 text-xs font-semibold text-emerald-600">
                                            Available Sections: <InfoIcon />
                                        </p>
                                        <div className="rounded-lg bg-gray-100 p-1">
                                            <button className="w-full rounded-md bg-white py-1.5 text-sm font-medium shadow-sm">OCNC-W1</button>
                                        </div>

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
                                                    <div className="flex items-center gap-2"><ClockIcon /> <span>Wed 22:00 (GMT+5) | 1.0 hour</span></div>
                                                    <div className="flex items-center gap-2"><UserIcon /> <span>Zia Khan | Urdu</span></div>
                                                    <div className="flex items-center justify-between border-t pt-2 mt-2">
                                                        <span className="text-gray-500">Seats Left: <span className="font-bold text-red-600">468</span></span>
                                                        <span className="text-gray-500">Closes: <span className="font-bold text-red-600">Apr 07</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between pt-2">
                                                <span className="font-medium">Price:</span>
                                                <span className="text-2xl font-bold text-emerald-600">Free</span>
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
                        No existing course teaches OpenClaw AND NanoClaw together from an architecture perspective.
                        Our angle: understand what you're building and why it works. Every session produces a tangible walk-away artifact.
                    </p>
                </div>

                {/* Modules Grid */}
                <div className="rounded-2xl bg-slate-50 p-6 sm:p-10">
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-zinc-900">
                        <LayersIcon /> Key Learning Modules
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
    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="8" cy="8" r="7" /><path d="M8 3.5V8h4.5" /></svg>
);

const UserIcon = () => (
    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const InfoIcon = () => <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 110a42 42 0 1 1 0 84 42 42 0 0 1 0-84zm56 254h-88v-24h12v-64h-12v-24h64v100h12v24z" /></svg>;
const TrophyIcon = () => <svg className="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M6 9H4.5a1 1 0 0 1 0-5H6m12 5h1.5a1 1 0 0 0 0-5H18M6 9a6 6 0 0 0 12 0V3H6v6zM4 22h16" /></svg>;
const BookIcon = () => <svg className="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5V5A2.5 2.5 0 0 1 6.5 2.5H20v14H6.5a2.5 2.5 0 0 0-2.5 2.5z" /></svg>;