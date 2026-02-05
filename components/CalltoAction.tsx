import React from "react";

export default function CalltoAction() {
  return (
    <div className="bg-white text-center">
      <div className="mb-10 py-14 md:py-24 px-4 sm:px-6 lg:px-[0rem] mx-auto lg:max-w-[950px] xl:max-w-6xl">
        <div className="flex max-w-6xl flex-col items-center justify-center gap-1 rounded-3xl bg-custom-bg1 bg-cover bg-center p-10 text-center md:max-w-[72em] md:p-[3rem] lg:p-[5rem]">
          <h2 className="font-poppins mb-4 text-[1.4rem] font-bold text-white md:text-[2.6rem]">
            Ready to Master AI with Expert-Led Courses?
          </h2>
          <p className="font-inter mb-6 text-[0.9rem] text-background/90 md:text-[1rem]">
            Sign up today and begin your journey to becoming an AI expert. With
            live sessions, hands-on projects, and guidance from industry
            leaders, you'll unlock the full potential of AI and transform your
            career. Whether you're a beginner or an experienced professional,
            our comprehensive curriculum will take you to the next level.
          </p>
          <a
            aria-label="Go to programs page"
            href="/flagship-program/courses"
            className="font-inter group relative inline-flex items-center overflow-hidden rounded-[40px] bg-background px-8 py-2 text-[1rem] font-semibold text-textPrimary hover:bg-accent hover:text-textPrimary md:px-14 md:py-4"
          >
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-transparent opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
              <svg
                className="hidden h-5 w-5 md:flex"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
            <span className="relative">Get Started</span>
          </a>
        </div>
      </div>
    </div>
  );
}
