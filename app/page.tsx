import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import CalltoAction from '@/components/CalltoAction';
import FeatureSection from '@/components/FeatureSection';
import Top from '@/components/Top';
import Faqs from '@/components/Faqs';
const AnimatedDiv = dynamic(() => import('@/components/AnimatedDiv'));
const Howitworks = dynamic(() => import('@/components/Howitworks'));
import { SoftwareApplication, WithContext } from 'schema-dts';
export default function Home() {
  const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Classroom AI",
    // "image": "https://classroomai.org/og-image.png",
    "description": "Classroom AI is an AI-powered Learning Management System that helps Higher School Students learn better. We offer O-levels, A-levels, Federal board and Lahore Board Courses Taught By AI agents here. We Provide personalized learning experience to students, so that they can perform better.",
    "operatingSystem": "Windows, macOS, Linux, Web Browser",
    "applicationCategory": "EdTech, Education",
    "offers": {
      "@type": "Offer",
      "price": "31.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/OnlineOnly",
    },
    "featureList": [
      "AI-powered content Learning",
      "Interactive Classes by AI Tutors",
      "Personalized Learning Experience"
    ],
    "keywords": "AI powered Education,AI powered Learning, Classroom AI, personalized learning, AI Tutors, Openpointer",
    "creator": {
      "@type": "Organization",
      // "@id": "https://Openpointer.org/",
      "name": "Openpointer",
      // "url": "https://Openpointer.org",
      // "logo": "https://Openpointer.org/logo.png"
    },
    "sameAs": [
      "https://www.youtube.com/@openpointer",
      "https://www.linkedin.com/company/openpointer",
    ]

  };
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Top />
      <FeatureSection />
      <AnimatedDiv />
      <Howitworks />
      <Faqs />
      <CalltoAction />
      <Footer />
    </main>
  );
}
