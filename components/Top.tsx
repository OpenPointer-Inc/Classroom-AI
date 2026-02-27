"use client";
import React, { useState } from "react";
import { Poppins, Inter } from "next/font/google";
import ComingSoonModal from "./ComingSoonModal";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Top() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-16 sm:pt-24 md:pt-28 lg:pt-32">
          <div className="text-center">
            <h1 className={`${poppins.className} hidden text-md font-thin tracking-tight text-textPrimary`}>
              Classroom AI
            </h1>
            <h2 className={`${poppins.className} text-[2rem] font-bold tracking-tight text-textPrimary xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem]`}>
              Learn Anything with{" "}
              <span className="bg-linear-to-r from-[#0d8f5b] to-[#1cd98e] bg-clip-text text-transparent">
                Smart AI Tutors
              </span>{" "}
              in Live Classes
            </h2>

            <p className={`${inter.className} mt-6 text-[0.9rem] leading-8 text-textSecondary md:text-[1.1rem]`}>
              No Static Videos, No Pre-crafted Assessments, No Recorded Lectures{" "}
              <span className="gradient-border2">Everything is live and interactive.</span> Get started Now!
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                aria-label="Go to courses offered page"
                className={`${inter.className} bg-[#1CD98E] cursor-pointer group relative inline-flex items-center overflow-hidden rounded-[40px] bg-accent px-6 py-2.5 text-sm font-semibold text-textPrimary hover:bg-white hover:border-2 border-2 border-white hover:border-[#1CD98E] hover:text-black sm:px-12 sm:py-4 sm:text-[0.9rem] text-white`}
                onClick={() => setIsModalOpen(true)}
              >
                <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-transparent opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
                <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
                  <svg
                    className="hidden h-5 w-5 sm:flex"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Start Your Journey</span>
              </button>
            </div>
          </div>
        </div>

        {/* Background video */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -z-10 -mt-120 overflow-hidden xs:mt-[-34.5rem] sm:ml-[-8rem] sm:mt-[-33rem] md:ml-[-2rem] md:mt-[-32rem] lg:mt-[-34.5rem] xl:ml-[-6rem] xl:mt-[-37rem]"
        >
          <video
            src="video.mp4"
            loop
            muted
            autoPlay
            playsInline
            className="custom-control h-220 w-full object-cover opacity-[0.4] sm:h-260 md:h-300 lg:h-340 xl:h-380"
          ></video>
        </div>
      </div>
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
