import Footer from '@/components/Footer';
import CalltoAction from '@/components/CalltoAction';
import Navigation from '@/components/Navigation';
import FeatureSection from '@/components/FeatureSection';
import Top from '@/components/Top';
import Faqs from '@/components/Faqs';
import AnimatedDiv from '@/components/AnimatedDiv';
import Howitworks from '@/components/Howitworks';
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
