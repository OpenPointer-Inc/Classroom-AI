import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Rubik } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400","800","900", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Classroom AI",
  description: "Classroom AI | Revolutionizing Education with Intelligent Teaching Assistants",
  openGraph: {
    title: "Classroom AI – Start Learning with Smarter AI",
    description: "Classroom AI: Transforming Learning Through AI-Powered Classrooms",
    siteName: "Classroom AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Classroom AI – Start Learning with Smarter AI",
    description: "Learning made easy by AI tutors.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${rubik.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
      <Navigation />
        {children}
      </body>
    </html>
  );
}
