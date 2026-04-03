
import Contact from '@/components/Contact';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Classroom AI',
  description: 'This page is for contacting us. If you have any questions or concerns, contact us.',
}
export default function Home() {
  return (
    <main className="min-h-screen">
      <Contact />
    </main>
  );
}