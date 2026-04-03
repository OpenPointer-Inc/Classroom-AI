import TermsAndConditions from "@/components/termsandconditions";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions - Classroom AI',
  description: 'This page serves the Terms and Conditions of Classroom AI',
}
export default function Page() {
  return <TermsAndConditions />;
}
