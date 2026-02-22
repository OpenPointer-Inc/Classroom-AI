"use client";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#031811] pt-[4.5rem] text-white">
      <div className="flex w-full justify-center">
        <div className="mx-6 grid grid-cols-1 items-start gap-8 sm:grid-cols-2 md:mx-16 lg:max-w-[950px] lg:grid-cols-4 xl:max-w-6xl">

          {/* Logo and About */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="mb-6 lg:-mt-9 xl:-mt-4">
              <a aria-label="Classroom AI Home" href="/">
                <Image
                  alt="Classroom-AI logo"
                  loading="lazy"
                  width="8880"
                  height="4200"
                  decoding="async"
                  className="mb-2 h-20 w-auto cursor-pointer"
                  style={{ color: "transparent" }}
                  src="/LOGO white.svg"
                />
              </a>

              <p className="mb-1 mt-1 text-sm leading-relaxed text-gray-400">
                Classroom AI is a AI-powered learning platform for High School and College Students.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 py-2">
                {/* Facebook */}
                {/* <a target="_blank" aria-label="Facebook" href="https://facebook.com/panaversity/">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="h-[1.5rem] w-[1.5rem] cursor-pointer text-gray-200 transition-all duration-150 hover:text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </a> */}

                {/* Instagram */}
                {/* <a target="_blank" aria-label="Instagram" href="https://www.instagram.com/panaversity/?igsh=cmljY3A2bmcyNzl3#">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-[1.5rem] w-[1.5rem] cursor-pointer text-gray-200 transition-all duration-150 hover:text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003Z" />
                  </svg>
                </a> */}

                {/* YouTube */}
                <a target="_blank" aria-label="YouTube" href="https://www.youtube.com/@openpointer">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="h-[1.5rem] w-[1.5rem] cursor-pointer text-gray-200 transition-all duration-150 hover:text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M508.6 148.8c0-45-33.1-81.2-74-81.2C379.2 65 322.7 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.6-.1 220.2 0 255.8c-.1 35.6 1 71.2 3.4 106.9 0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8 60.8.2 120.3-1 178.6-3.8 40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107 .2-35.6-.9-71.2-3.3-106.9zM207 353.9V157.4l145 98.2-145 98.3z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a target="_blank" aria-label="LinkedIn" href="https://www.linkedin.com/company/openpointer/">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="h-[1.5rem] w-[1.5rem] cursor-pointer text-gray-200 transition-all duration-150 hover:text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:ml-20">
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#about" className="text-gray-400 hover:text-gray-300">About Us</a></li>
              <li><a href="/" className="text-gray-400 hover:text-gray-300">Flagship Program</a></li>
              <li><a href="/" className="text-gray-400 hover:text-gray-300">Courses</a></li>
              <li><a href="/terms-and-conditions" className="text-gray-400 hover:text-gray-300">Terms & Conditions</a></li>
              <li><a href="/certifications" className="text-gray-400 hover:text-gray-300">Certifications</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:ml-20">
            <h3 className="mb-4 text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="text-gray-400 hover:text-gray-300">Contact Us</a></li>
              <li><a href="/team" className="text-gray-400 hover:text-gray-300">Our Team</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/panaversity_guide.pdf" className="text-gray-400 hover:text-gray-300">How To Enroll</a></li>
              <li><a href="/#faqs" className="text-gray-400 hover:text-gray-300">FAQs</a></li>
              <li><a href="/exam-policy" className="text-gray-400 hover:text-gray-300">Exam Policy</a></li>
              <li><a href="/examination_flow.pdf" className="text-gray-400 hover:text-gray-300">Examination Flow</a></li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="col-span-2 mt-8 w-full text-sm sm:col-span-2 md:col-span-1 md:mt-0">
            <h3 className="mb-2 text-lg font-semibold text-white">Join Our Community</h3>
            <div className="space-y-4">
              <a
                target="_blank"
                aria-label="Join WhatsApp Community"
                href="https://whatsapp.com/channel/0029VbC7rmG4yltPkMCmBv0W"
                className="inline-flex items-center gap-3 rounded-lg border border-gray-600 bg-gray-800/50 px-4 py-3 text-gray-300 transition-all duration-200 ease-in-out hover:border-green-400 hover:bg-green-400/10 hover:text-green-400"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z" />
                </svg>
                <span className="font-medium lg:text-xs xl:text-sm">WhatsApp Community</span>
              </a>
              <p className="text-gray-400">
                Join our WhatsApp community for latest AI updates & discussions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-14 flex h-16 items-center justify-center bg-[#041F16] text-center text-sm text-gray-400">
        © Copyright {new Date().getFullYear()} Openpointer, Inc.
      </div>
    </footer>
  );
}
