import TermsAndConditions from "@/components/termsandconditions";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions - Classroom AI',
  description: 'Terms and Conditions of Classroom AI',
}
export default function Page() {
  return <TermsAndConditions />;
}
