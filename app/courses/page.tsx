import Image from 'next/image';
import React from "react";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Courses - Classroom AI',
  description: 'Courses offered by Classroom AI',
}
// 1. Extracted Data for maintainability
const COURSES = [
  {
    code: "O-101",
    title: "O-levels || Cambridge International Education System",
    description: "Comprehensive preparation for O-levels exams with expert guidance of AI Agents.",
    image: "https://i.postimg.cc/cLkH17WH/Untitled-design-(3).png",
    href: "/courses/O-levels",
    isOpen: true,
  },
  {
    code: "A-101",
    title: "A-levels || Cambridge International Education System",
    description: "Comprehensive preparation for A-levels exams with expert guidance of AI Agents.",
    image: "https://i.postimg.cc/cLkH17WH/Untitled-design-(3).png",
    href: "/courses/A-levels",
    isOpen: true,
  },
  {
    code: "FBISE-101",
    title: "Federal Board of Intermediate and Secondary Education",
    description: "Comprehensive preparation for FBISE exams with expert guidance of AI Agents.",
    image: "https://i.postimg.cc/HLmSxM9r/Untitled-design-(6).jpg",
    href: "/courses",
    isOpen: false,
  },
  {
    code: "EN-101",
    title: "Entry Test preparation for Engineering and Medical Universities",
    description: "AI Assisted preparation for MDCAT || NUST || NET || ECAT || NTS exams",
    image: "https://i.postimg.cc/76HwgfwR/Entry-Tests.jpg",
    href: "/courses",
    isOpen: false,
  },
  {
    code: "AI-220",
    title: "Punjab Board of Intermediate and Secondary Education",
    description: "",
    image: "https://i.postimg.cc/R0GTZDFB/Untitled-design-(7).jpg",
    href: "/courses",
    isOpen: false,
  },
  {
    code: "VU-101",
    title: "Virtual University of Pakistan",
    description: "Study for VU exams with expert guidance of AI Agents.",
    image: "https://i.postimg.cc/vHLhKTsc/Untitled-design-(8).jpg",
    href: "/courses",
    isOpen: false,
  }
];

export default function CoursesPage() {
  return (
    <section className="light overflow-x-hidden bg-white text-zinc-900">
      {/* Hero Section */}
      <div className="mb-32 w-full bg-slate-900 bg-teamBg bg-cover bg-center">
        <div className="min-h-48 w-full py-2 text-center backdrop-blur-[1px] backdrop-brightness-75 sm:min-h-52 sm:py-10 md:min-h-72 lg:min-h-[26rem]">
          <div className="mx-auto px-4 sm:px-6 lg:max-w-[990px] lg:px-8 xl:max-w-[1200px]">
            {/* Breadcrumbs */}
            <nav className="my-4">
              <ol className="flex flex-wrap items-center space-x-1 text-xs font-medium text-white sm:text-sm">
                <li className="flex items-center">
                  <a href="/" className="hover:underline">Home</a>
                  <ChevronRight />
                </li>
                <li className="flex items-center">
                  <a href="/flagship-program" className="hover:underline">Flagship Program</a>
                  <ChevronRight />
                </li>
                <li>Courses</li>
              </ol>
            </nav>

            <div className="m-auto mt-8 max-w-[360px] px-2 xs:max-w-[400px] sm:mt-10 sm:max-w-[630px] lg:mt-20 lg:max-w-[760px]">
              <h1 className="font-poppins text-[1.8rem] font-bold leading-tight text-white xs:text-[2rem] sm:text-[2.7rem] md:text-[3rem] lg:text-[3.6rem]">
                AI Assisted Learning
              </h1>
              <p className="mx-auto mb-8 mt-4 max-w-[28rem] text-sm text-white/70 xs:text-base md:text-lg">
                Learn at your own pace with our AI-powered personalized learning platform.
              </p>

              {/* Promo Card */}
              <div className="mx-auto my-5 max-w-[520px] px-3">
                <a
                  // href="https://agentfactory.panaversity.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br from-emerald-50 to-teal-50 p-5 shadow-xl transition-all hover:scale-[1.02]"
                >
                  <div className="flex flex-col items-center justify-between sm:flex-row">
                    <div className="mb-4 text-center sm:mb-0 sm:text-left">
                      <div className="text-base font-bold text-gray-800 md:text-xl">
                        Start your <span className="text-emerald-600">AI-Native Journey</span>
                      </div>
                      <div className="text-sm text-gray-600">Read AI Native Get started Guide</div>
                    </div>
                    <div className="flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-white shadow-lg">
                      <span className="text-xs font-semibold">Read for free</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="mx-auto mt-8 px-4 sm:px-6 lg:max-w-[990px] lg:px-8 xl:max-w-[1200px]">
        <h2 className="font-poppins mb-10 mt-10 w-fit border-b border-black text-md font-medium uppercase tracking-wide sm:text-lg">
          AI Development & Infrastructure Track
        </h2>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-[75px] xl:grid-cols-3">
          {COURSES.map((course) => (
            <a key={course.code} href={course.href} className="group">
              <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-56 w-full">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h6 className="text-xs font-medium text-gray-700">
                        Code: <span className="font-bold underline decoration-emerald-500">{course.code}</span>
                      </h6>
                      <span className={`rounded-xl px-2 py-1 text-[10px] text-white ${course.isOpen ? 'bg-green-500' : 'bg-gray-700'}`}>
                        {course.isOpen ? 'Registration Open' : 'Comming Soon !'}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-poppins mb-2 text-lg font-bold line-clamp-2">{course.title}</h4>
                      <p className="text-sm text-gray-600 line-clamp-3">{course.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple Icon Component
function ChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-1">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}