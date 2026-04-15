import React from 'react';
import Image from 'next/image';

const dummyFounder = {
    name: "Faseeh Ahmad",
    role: "Founder & CEO",
    description: "Pioneering the intersection of artificial intelligence and pedagogy.\nFormer AI researcher at DeepMind and Stanford engineering alumni.\nCommitted to ethical, personalized AI deployment in classrooms worldwide.",
    linkedin: "https://www.linkedin.com/in/faseehahmd/",
    image: "/Faseeh Ahmad.jpeg"
};

const dummyTeam = [
    {
        name: "Ali Rehan",
        role: "Head of Cloud Engineering",
        description: "Ali is a High level Cloud Expert Architecting robust systems that scale globally.\nOver 1 years of experience in distributed computing.\nPassionate about open-source and clean code.",
        linkedin: "https://www.linkedin.com/in/ali-rehan-arshad-82676437a/",
        image: "/Ali Rehan.jpeg"
    },
    {
        name: "Hasnain Amjad",
        role: "Chief Marketing Officer",
        description: "Hasnain is a very Forwardthinking Marketing and Sales Expert.\nAdvocate for neurodivergent learning paths.",
        linkedin: "https://www.linkedin.com/in/hasnainamjd/",
        image: "/Hasnain Amjad.jpeg"
    },
    // {
    //     name: "James Ashford",
    //     role: "Director of Product",
    //     description: "Bridging the gap between user needs and technical capabilities.\nPreviously led zero-to-one products at top EdTech startups.\nFocuses on intuitive design and user empathy.",
    //     linkedin: "#",
    //     image: ""
    // },
    // {
    //     name: "Aisha Patel",
    //     role: "Lead AI Ethicist",
    //     description: "Guiding the responsible development of our AI models.\nPublishes extensively on bias mitigation in machine learning.\nEnsures our algorithms remain fair and transparent.",
    //     linkedin: "#",
    //     image: ""
    // }
];

const LinkedInIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="transition-transform group-hover:scale-110"
    >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export default function Team() {
    return (
        <section className="bg-white text-[#050316] w-full min-h-screen py-24 px-6 md:px-12 font-sans selection:bg-[#1CD98E] selection:text-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <header className="mb-16 md:mb-24 space-y-4 border-b border-[#050316] pb-8">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase">Team</h2>
                    <p className="text-lg md:text-xl max-w-2xl text-gray-600 font-light">
                        The minds engineering the next generation of intelligent classrooms.
                    </p>
                </header>

                {/* Founder Section */}
                <div className="mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-[#050316] transition-colors hover:bg-gray-50/50 group">
                        {/* Visual Anchor / Placeholder */}
                        <div className="lg:col-span-4 aspect-square md:aspect-auto md:h-full min-h-[300px] bg-[#050316] flex flex-col justify-between p-8 border-b lg:border-b-0 lg:border-r border-[#050316] relative overflow-hidden">
                            {dummyFounder.image ? (
                                <Image src={dummyFounder.image} alt={dummyFounder.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            ) : (
                                <>
                                    <div className="w-4 h-4 bg-[#1CD98E] rounded-full opacity-50 z-10 relative"></div>
                                    <span className="text-white text-[12rem] leading-none font-bold font-serif opacity-20 -ml-4 -mb-8 pointer-events-none z-10 relative">
                                        {dummyFounder.name.charAt(0)}
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-8 flex flex-col justify-between h-full p-8 md:p-12 lg:min-h-[400px]">
                            <div>
                                <p className="text-[#1CD98E] font-bold tracking-widest uppercase text-sm mb-4">{dummyFounder.role}</p>
                                <h3 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-8 leading-none">
                                    {dummyFounder.name}
                                </h3>
                                <div className="space-y-4 text-lg md:text-xl text-gray-700 font-light max-w-3xl leading-relaxed whitespace-pre-line">
                                    {dummyFounder.description}
                                </div>
                            </div>
                            <div className="mt-12">
                                <a
                                    href={dummyFounder.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn inline-flex items-center gap-3 bg-transparent text-[#050316] border border-[#050316] px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#1CD98E] hover:border-[#1CD98E] hover:text-white transition-all w-full sm:w-auto justify-center"
                                >
                                    <LinkedInIcon />
                                    View LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {dummyTeam.map((member, idx) => (
                        <div key={idx} className="flex flex-col border-t-2 border-[#050316] pt-6 group">
                            {member.image && (
                                <div className="w-full aspect-square relative mb-6 bg-gray-100 overflow-hidden border border-[#050316]">
                                    <Image src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                            )}
                            <p className="text-[#1CD98E] font-bold tracking-wider uppercase text-xs mb-3">
                                {member.role}
                            </p>
                            <h4 className="cursor-pointer text-2xl md:text-3xl font-black tracking-tight mb-6 group-hover:underline decoration-[#1CD98E] decoration-4 underline-offset-4 leading-tight">
                                {member.name}
                            </h4>
                            <div className="text-sm text-gray-600 font-light flex-grow space-y-2 mb-8 whitespace-pre-line leading-relaxed">
                                {member.description}
                            </div>
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex w-fit items-center gap-2 text-[#050316] font-semibold text-sm hover:text-[#1CD98E] transition-colors pb-1 border-b border-[#050316] hover:border-[#1CD98E]"
                            >
                                <LinkedInIcon />
                                <span>Connect</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}