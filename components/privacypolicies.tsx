import React from 'react';
import Link from 'next/link';

// 1. Policy Content Data
const POLICY_SECTIONS = [
    {
        title: "Overview",
        content: "Classroom AI values the privacy of its users and is committed to protecting personal information collected through its website and learning platforms.",
    },
    {
        title: "Information We Collect",
        intro: "We collect the following types of information:",
        list: [
            { bold: "Personal Information:", text: "When you create an account, enroll in courses, or interact with Classroom AI's platforms, we may collect name, email, contact details, and payment info." },
            { bold: "Personalized Learning:", text: "Interaction data with AI-driven learning tools, browser type, device information, and IP addresses." },
            { bold: "Performance Tracking:", text: "Course progress, assessment results, and interactions with AI models like GPT-driven assistants." }
        ]
    },
    {
        title: "How We Use Your Information",
        intro: "We use your personal information for the following purposes:",
        list: [
            { bold: "Account Management:", text: "To manage your account and enable participation in learning activities." },
            { bold: "Personalized Learning:", text: "To deliver customized experiences using adaptive AI models." },
            { bold: "Service Improvement:", text: "To enhance functionality based on aggregated usage data." },
            { bold: "Security:", text: "To protect systems and comply with legal obligations like GDPR." }
        ]
    },
    {
        id: "consent-policy",
        title: "Consent for Data Collection",
        intro: "By registering, you consent to data processing as described. Specific points include:",
        list: [
            { bold: "Obtaining Consent:", text: "Explicit consent is sought for personalized recommendations and third-party sharing." },
            { bold: "Withdrawing Consent:", text: "You may withdraw consent anytime via hello@classroomai.site, though this may limit service features." },
            { bold: "Parental Consent:", text: "Users under 18 require guardian consent for registration." }
        ]
    }
];

export default function PrivacyPolicyPage() {
    return (
        <main className="font-poppins min-h-screen bg-white" >
            {/* Hero Header */}
            < div className="flex items-center justify-center bg-slate-900 bg-teamBg bg-cover bg-center" >
                <div className="min-h-48 w-full py-2 text-center backdrop-blur-[1px] backdrop-brightness-75 sm:min-h-52 sm:py-10 md:min-h-72 lg:min-h-104" >
                    <div className="mx-auto px-4 sm:px-6 lg:max-w-[990px] lg:px-8 xl:max-w-[1200px]" >
                        <nav className="my-4" >
                            <ol className="flex flex-wrap items-center space-x-1 text-xs font-medium text-white sm:text-sm" >
                                <li className="flex items-center" >
                                    <Link href="/" className="hover:underline" > Home </Link>
                                    < ChevronRight />
                                </li>
                                < li > Privacy Policy </li>
                            </ol>
                        </nav>

                        < div className="m-auto mt-8 max-w-[312px] px-4 xs:max-w-[400px] sm:mt-10 sm:max-w-[630px] lg:mt-20 lg:max-w-[760px]" >
                            <h1 className="text-[1.8rem] font-bold leading-tight text-white xs:text-[2rem] sm:text-[2.7rem] md:text-[3rem] lg:text-[3.6rem]" >
                                Privacy Policy
                            </h1>
                            < div className="mx-auto mb-8 mt-4 max-w-md text-sm text-white/60 xs:text-base md:text-lg" >
                                Effective as of January 1, 2025.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Policy Content */}
            <section className="mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:max-w-[950px] lg:px-0 xl:max-w-6xl" >
                <div className="space-y-12 text-zinc-800" >
                    {
                        POLICY_SECTIONS.map((section, idx) => (
                            <div key={idx} id={section.id} className="space-y-6" >
                                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl" >
                                    {section.title}
                                </h2>
                                {
                                    section.content && (
                                        <p className="text-base leading-relaxed sm:text-lg">
                                            {section.content}
                                        </p>
                                    )
                                }
                                {
                                    section.intro && (
                                        <p className="text-base font-medium text-gray-800 sm:text-lg" >
                                            {section.intro}
                                        </p>
                                    )
                                }
                                {
                                    section.list && (
                                        <ul className="list-disc space-y-4 pl-5 text-base sm:text-lg" >
                                            {
                                                section.list.map((item, i) => (
                                                    <li key={i} >
                                                        <strong>{item.bold} </strong> {item.text}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )
                                }
                            </div>
                        ))
                    }

                    {/* Third Party & Security (Simplified) */}
                    <div className="space-y-6" >
                        <h3 className="text-2xl font-semibold text-gray-900" > Data Sharing & Security </h3>
                        < p className="text-base sm:text-lg" >
                            We integrate with services like <strong>Zoom</strong> and <strong>GitHub</strong>. We use industry-standard
                            encryption (AES-256) and regular audits to keep your data safe.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="rounded-2xl bg-slate-50 p-8 border border-slate-100" >
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4" > Contact Us </h3>
                        < p className="text-base sm:text-lg mb-4" >
                            For any questions regarding this policy, please reach out to our privacy team:
                        </p>
                        < Link
                            href="mailto:hello@classroomai.site?subject=Privacy%20Policy%20Inquiry"
                            className="text-lg font-medium text-emerald-600 hover:underline"
                        >
                            hello@classroomai.site
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ChevronRight() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-1" >
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}