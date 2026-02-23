import React from "react";

export default function FeatureSection() {
  return (
    <div className="relative overflow-hidden py-16 text-gray-800 lg:mt-10">
      <div className="bg-linear-to-bl from-transparent to-white mx-auto px-4 sm:px-6 lg:max-w-[990px] lg:px-8 xl:max-w-[1200px]">
        <div className="relative z-10">
          {/* Heading Section */}
          <div className="mb-10 flex flex-col items-center justify-center text-center lg:mb-0">
            <h2 className="gradient-border w-fit border-b text-sm font-semibold uppercase tracking-wide text-textPrimary sm:text-md md:text-lg">
              Career-Ready Path
            </h2>
            <h3 className="font-poppins mb-4 mt-2 text-center text-2xl font-semibold tracking-tight text-primary xs:text-3xl sm:text-4xl md:text-5xl">
              Beyond Learning:{" "}
              <span className="text-[#1A6DE0]">Accelerate Today with AI</span>
            </h3>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700 md:text-xl">
              Our unique blend of Expert Mentors, Personalized Learning Agent,
              and insightful Assessments doesn’t just teach – it transforms your
              skills and potential.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="md-pt-0 grid grid-cols-1 items-center gap-12 pt-5 lg:grid-cols-12 lg:gap-10">
            {/* Left Graphic Column */}
            <div className="relative mx-auto flex h-96 w-full justify-center lg:col-span-9 lg:h-[520px] rounded-3xl overflow-hidden">
              <div className="relative flex h-full w-full items-end justify-center">
                <video
                  className="h-full w-full object-contain object-bottom"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/Laptop_frame_showing_demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="mx-auto w-full max-w-2xl space-y-6 lg:col-span-3 lg:max-w-none">
              <div className="mx-auto mb-4 mt-8 flex justify-center space-x-2">
                <button className="h-2 w-12 rounded-full bg-gradient-to-r from-orange-400 to-amber-500"></button>
                <button className="h-2 w-12 rounded-full bg-gray-300"></button>
                <button className="h-2 w-12 rounded-full bg-gray-300"></button>
                <button className="h-2 w-12 rounded-full bg-gray-300"></button>
              </div>

              <div className="flex h-[425px] bg-white w-full flex-col rounded-2xl border border-indigo-100 bg-opacity-80 p-8 shadow-2xl backdrop-blur-sm">
                <div className="flex h-full flex-col">
                  <div className="inline-block rounded-full bg-gradient-to-r from-[#e2e5e9] to-[#bbc6f8] px-4 py-1 text-xs font-medium text-black shadow-sm mb-4">
                    STEP 1
                  </div>
                  <h2 className="font-poppins mb-4 text-xl font-bold text-textPrimary">
                    ENROLL
                  </h2>
                  <div className="flex-grow overflow-y-auto pr-2">
                    <p className="text-justify text-sm leading-relaxed text-textSecondary">
                      Begin your AI educational experience through our streamlined enrollment portal. Panaversity is designed to make your first step into AI education simple, transparent, and fully supported.
                    </p>
                  </div>
                  <div className="mt-2 border-t-2 border-gray-300 pt-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                      className="group flex w-fit items-center gap-3 rounded-lg bg-gradient-to-r from-orange-400 to-amber-500 px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:translate-x-1"
                    >
                      <span>View Guide</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
