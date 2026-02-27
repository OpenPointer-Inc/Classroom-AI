import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import CalltoAction from '@/components/CalltoAction';
import FeatureSection from '@/components/FeatureSection';
import Top from '@/components/Top';
import Faqs from '@/components/Faqs';
const AnimatedDiv = dynamic(() => import('@/components/AnimatedDiv'));
const Howitworks = dynamic(() => import('@/components/Howitworks'));
export default function Home() {
  return (
    <main className="min-h-screen">
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
