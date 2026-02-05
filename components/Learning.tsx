import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Learning() {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col items-center justify-between gap-y-0 xl:flex-row mx-auto px-4 sm:px-6 lg:max-w-[990px] lg:px-8 xl:max-w-[1200px] py-12 xl:py-16">
        <div className="px-4 text-left sm:px-2 md:pr-10 xl:w-[612px] mb-6 xl:mb-0">
          <h2 className="text-black sm:text-md gradient-border w-fit border-b text-sm font-semibold uppercase tracking-wide text-textPrimary md:text-lg">
            Program Overview
          </h2>
          <h3 className="text-black font-poppins mt-6 text-2xl xs:text-3xl sm:text-4xl xl:text-4xl/[3.5rem] font-bold leading-tight text-textPrimary">
          Making Learning fun with Classroom AI
          </h3>
          <p className="sm:text-md/[2] font-rubik mt-6 text-base/loose text-[#031811]/70">
          Empower learners and educators through intelligent, personalized AI tutors.
          Classroom AI transforms traditional education by combining Agentic AI, adaptive learning models, and real-time performance insights to create a smarter, more engaging way to learn anything, anytime.
          </p>
          <p className="sm:text-md/[2] font-rubik mb-4 mt-4 text-[1rem]/[2] text-[#031811]/70">
          With seamless integration across subjects, institutions, and learning styles — Classroom AI makes every student’s journey truly personalized, measurable, and limitless.
          </p>
          <Link
            aria-label="Go to Programs"
            className="group relative mt-4 inline-flex items-center justify-start overflow-hidden rounded-full px-6 py-3 font-bold md:px-4 lg:px-5 lg:py-3"
            href="/flagship-program"
          >
            <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-[#2869C4] opacity-[3%]"></span>
            <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-[#2869C4] opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
            <span className="font-poppins relative w-full text-left text-[0.9rem] font-medium text-black transition-colors duration-200 ease-in-out group-hover:text-white lg:text-[0.9rem]">
              Learn More
            </span>
            <span className="absolute inset-0 rounded-full border-2 border-[#2869C4]"></span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:w-1/2">
          <div className="custom-shadow rounded-3xl border border-[#000000]/5 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 flex items-center justify-center rounded-full" style={{backgroundColor: '#FA7F27', width: '48px', height: '48px'}}>
              <Image alt="Core Curriculum Icon" width={24} height={24} src="/clock.webp" />
            </div>
            <h3 className="font-poppins mb-2 text-lg font-semibold text-gray-800">Core Curriculum</h3>
            <p className="text-sm text-gray-600">Learn Python, Cloud Engineering, and Agentic AI with expert AI Tutors.</p>
          </div>
          
          <div className="custom-shadow rounded-3xl border border-[#000000]/5 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 flex items-center justify-center rounded-full" style={{backgroundColor: '#F786BE', width: '48px', height: '48px'}}>
              <Image alt="Next-Gen Tech Icon" width={26} height={26} src="/bulb.webp" />
            </div>
            <h3 className="font-poppins mb-2 text-lg font-semibold text-gray-800">Next-Gen Tech</h3>
            <p className="text-sm text-gray-600">Stay ahead with hands-on experience using the latest AI tools and platforms.</p>
          </div>
          
          <div className="custom-shadow rounded-3xl border border-[#000000]/5 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 flex items-center justify-center rounded-full" style={{backgroundColor: '#4B62E6', width: '48px', height: '48px'}}>
              <Image alt="Real-World Projects Icon" width={24} height={24} src="/chart.webp" />
            </div>
            <h3 className="font-poppins mb-2 text-lg font-semibold text-gray-800">Real-World Projects</h3>
            <p className="text-sm text-gray-600">Work on projects that mirror real-world tech challenges to build practical skills.</p>
          </div>
          
          <div className="custom-shadow rounded-3xl border border-[#000000]/5 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 flex items-center justify-center rounded-full" style={{backgroundColor: '#FFC04C', width: '48px', height: '48px'}}>
              <Image alt="Flexible Learning Icon" width={24} height={24} src="/brain.webp" />
            </div>
            <h3 className="font-poppins mb-2 text-lg font-semibold text-gray-800">Flexible Learning</h3>
            <p className="text-sm text-gray-600">Learn at your own pace with 24/7 access to our Expert AI Mentors</p>
          </div>
        </div>
      </div>
    </section>
  );
}