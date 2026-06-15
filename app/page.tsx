import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import CalltoAction from '@/components/CalltoAction';
import FeatureSection from '@/components/FeatureSection';
import Top from '@/components/Top';
import Faqs from '@/components/Faqs';
const AnimatedDiv = dynamic(() => import('@/components/AnimatedDiv'));
const Howitworks = dynamic(() => import('@/components/Howitworks'));
import { SoftwareApplication, FAQPage, WithContext } from 'schema-dts';
export default function Home() {
  const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Classroom AI: O-levels Preparation App",
    // "image": "https://classroomai.org/og-image.png",
    "description": "Classroom AI is an advanced AI-powered Learning App for O-levels students. Our platform offers personalized learning experiences and gamified content to help students excel in their O-levels exams.",
    "operatingSystem": "Windows, macOS, Linux, Web Browser",
    "applicationCategory": "EdTech, Education",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "12.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/OnlineOnly",
    },
    "countriesSupported": [
      "Pakistan",
      "Spain"
    ],
    "featureList": [
      "AI-powered content Learning",
      "Interactive Classes by AI Tutors",
      "Personalized Learning Experience"
    ],
    "keywords": "classroom ai, O-levels, olevels, Cambridge, Classroom AI, olevels learning app, personalized learning, Openpointer, Cambridge O-levels online",
    "creator": {
      "@type": "Organization",
      "@id": "https://classroomai.site",
      "name": "Classroom AI",
      "url": "https://classroomai.site",
      // "logo": "https://Openpointer.org/logo.png"
    },
    "sameAs": [
      "https://www.youtube.com/@openpointer",
      "https://www.linkedin.com/company/classroom-ai",
    ]

  };
  const faqJsonLd: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Classroom AI help students learn faster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Classroom AI utilizes Generative AI and adaptive learning algorithms to provide personalized tutoring. Educational studies indicate that this 1-on-1 tutoring approach can accelerate learning speed by up to 3x compared to traditional classroom settings."
        }
      },
      {
        "@type": "Question",
        "name": "Is Classroom AI effective for modern O-Level and A-Level education?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our AI tutors are specifically trained on Cambridge high school curricula (O-levels and A-levels). According to recent performance metrics, students using interactive AI agents show a 40% improvement in active recall and exam readiness."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I choose Classroom AI over traditional tutoring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Classroom AI offers a blended learning environment combining 24/7 AI tutoring with gamification. Research shows that reward-based cognitive learning models increase student engagement by 60%, making study sessions highly effective and enjoyable."
        }
      },
      {
        "@type": "Question",
        "name": "What are the chances of improving my academic grades?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Highly likely. The implementation of personalized spaced repetition and formative assessments in our platform is proven to boost knowledge retention by up to 98% in academic studies."
        }
      },
      {
        "@type": "Question",
        "name": "Which subjects and courses are offered on this platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We currently offer specialized AI-driven courses for Cambridge high school students, including comprehensive O-levels and A-levels curricula designed to deepen mastery in STEM and humanities subjects."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Top />
      <FeatureSection />
      <AnimatedDiv />
      <div className="hidden md:block">
        <Howitworks />
      </div>
      <Faqs />
      <CalltoAction />
    </main>
  );
}
