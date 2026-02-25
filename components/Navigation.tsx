/**
 * -----------------------------------------------------------------------------------------
 * DESIGN DIRECTION SUMMARY
 * Aesthetic Name: Bioluminescent / Deep Tech Early Access
 * DFII Score: 12 (High aesthetic impact, technically feasible via Tailwind + Framer Motion)
 * Key Inspiration: Terminal interfaces mixed with organic deep-sea bioluminescence.
 * 
 * DESIGN SYSTEM SNAPSHOT
 * Fonts: Uses mono for technical precision, sans for readability.
 * Colors: Deep void green modal (#061e16), glowing emerald accents (#10b981).
 * Motion: Sleek scaling entrance (springy) with a backdrop blur fade.
 *
 * DIFFERENTIATION CALLOUT
 * This avoids the generic "Coming Soon" popup by leaning into a "Development State" terminal 
 * aesthetic. It uses a dark, immersive glassmorphic structure layered with neon emerald glows 
 * rather than a standard white alert box.
 * -----------------------------------------------------------------------------------------
 */

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import ComingSoonModal from "./ComingSoonModal";

export default function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sticky top-0 z-40 w-full bg-white/50 py-1 backdrop-blur-lg sm:py-4"
      >
        <div className="mx-auto flex h-16 items-center justify-between px-2 sm:px-4 md:px-6 lg:max-w-[950px] lg:px-0 xl:max-w-6xl">
          {/* Logo */}
          <Link className="flex items-center gap-2" aria-label="Home" href="/">
            <Image
              src="/LOGO.svg"
              alt="Panaversity Logo"
              width={150}
              height={75}
              className="w-[120px] sm:w-[140px] md:w-[140px] lg:w-[150px] h-auto"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <nav className="mt-6 hidden items-center gap-10 text-sm lg:text-base font-medium lg:flex">
            <Link
              aria-label="Home"
              className="text-black hover:text-[#00D188] transition-colors"
              href="/"
            >
              Home
            </Link>
            <Link
              aria-label="Demos"
              className="text-black hover:text-[#00D188] transition-colors"
              href="/demos"
            >
              Demos
            </Link>
            <Link
              aria-label="Pricing"
              className="text-black hover:text-[#00D188] transition-colors"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              target="_blank"
              aria-label="StudentBot"
              className="flex items-center gap-2"
              href="https://ai.panaversity.org"
            >
              <div className="flex items-center gap-2 bg-linear-to-r from-[#0d8f5b] to-[#00D188] bg-clip-text text-transparent">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-lg text-[#12A86D]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5 2C13.5 2.44425 13.3069 2.84339 13 3.11805V5H18C19.6569 5 21 6.34315 21 8V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V8C3 6.34315 4.34315 5 6 5H11V3.11805C10.6931 2.84339 10.5 2.44425 10.5 2C10.5 1.17157 11.1716 0.5 12 0.5C12.8284 0.5 13.5 1.17157 13.5 2ZM6 7C5.44772 7 5 7.44772 5 8V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V8C19 7.44772 18.5523 7 18 7H13H11H6ZM2 10H0V16H2V10ZM22 10H24V16H22V10ZM9 14.5C9.82843 14.5 10.5 13.8284 10.5 13C10.5 12.1716 9.82843 11.5 9 11.5C8.17157 11.5 7.5 12.1716 7.5 13C7.5 13.8284 8.17157 14.5 9 14.5ZM15 14.5C15.8284 14.5 16.5 13.8284 16.5 13C16.5 12.1716 15.8284 11.5 15 11.5C14.1716 11.5 13.5 12.1716 13.5 13C13.5 13.8284 14.1716 14.5 15 14.5Z"></path>
                </svg>
                <span className="font-semibold text-[#12A86D]">StudentBot</span>
              </div>
            </Link>
          </nav>

          {/* Right Side: Get Started Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="mt-4 hidden lg:flex w-[105.9px] xl:w-[123.2px]">
              <button
                aria-label="Open Coming Soon Dialog"
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-3 py-2 font-bold md:px-4 lg:px-5 lg:py-3 cursor-pointer"
              >
                <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-[#1CD98E] opacity-[3%]"></span>
                <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-[#1CD98E] opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
                <span className="font-poppins relative w-full text-left text-[0.8rem] font-semibold text-black transition-colors duration-200 ease-in-out group-hover:text-white lg:text-[0.9rem]">
                  Get Started
                </span>
                <span className="absolute inset-0 rounded-full border-2 border-[#1CD98E]"></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 lg:hidden"
              aria-label="Open Menu"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              onClick={() => setIsSideMenuOpen(true)}
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isSideMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSideMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-0 z-50 flex h-full w-[280px] flex-col bg-[#e6e6e6] p-6 shadow-xl sm:w-[320px] lg:hidden"
            >
              <button
                onClick={() => setIsSideMenuOpen(false)}
                className="absolute right-4 top-4 text-gray-600 hover:text-black cursor-pointer"
                aria-label="Close Menu"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="mb-10 mt-2">
                <Image src="/LOGO.svg" alt="Panaversity Logo" width={140} height={70} className="w-[120px] sm:w-[140px] h-auto" priority />
              </div>

              <div className="flex flex-1 flex-col overflow-y-auto pb-20">
                <nav className="flex flex-col gap-6 font-bold text-lg">
                  <Link href="/" className="text-black hover:text-[#00D188] transition-colors" onClick={() => setIsSideMenuOpen(false)}>
                    Home
                  </Link>
                  <Link href="/demos" className="text-black hover:text-[#00D188] transition-colors" onClick={() => setIsSideMenuOpen(false)}>
                    Demos
                  </Link>
                  <Link href="/pricing" className="text-black hover:text-[#00D188] transition-colors" onClick={() => setIsSideMenuOpen(false)}>
                    Pricing
                  </Link>
                  <Link
                    target="_blank"
                    className="flex items-center gap-2"
                    href="https://ai.panaversity.org"
                    onClick={() => setIsSideMenuOpen(false)}
                  >
                    <div className="flex items-center gap-2 bg-linear-to-r from-[#0d8f5b] to-[#00D188] bg-clip-text text-transparent">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="text-xl text-[#12A86D]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.5 2C13.5 2.44425 13.3069 2.84339 13 3.11805V5H18C19.6569 5 21 6.34315 21 8V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V8C3 6.34315 4.34315 5 6 5H11V3.11805C10.6931 2.84339 10.5 2.44425 10.5 2C10.5 1.17157 11.1716 0.5 12 0.5C12.8284 0.5 13.5 1.17157 13.5 2ZM6 7C5.44772 7 5 7.44772 5 8V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V8C19 7.44772 18.5523 7 18 7H13H11H6ZM2 10H0V16H2V10ZM22 10H24V16H22V10ZM9 14.5C9.82843 14.5 10.5 13.8284 10.5 13C10.5 12.1716 9.82843 11.5 9 11.5C8.17157 11.5 7.5 12.1716 7.5 13C7.5 13.8284 8.17157 14.5 9 14.5ZM15 14.5C15.8284 14.5 16.5 13.8284 16.5 13C16.5 12.1716 15.8284 11.5 15 11.5C14.1716 11.5 13.5 12.1716 13.5 13C13.5 13.8284 14.1716 14.5 15 14.5Z"></path>
                      </svg>
                      <span className="font-semibold text-[#12A86D]">StudentBot</span>
                    </div>
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
