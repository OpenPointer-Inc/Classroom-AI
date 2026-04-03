import React from 'react';
import PrivacyPolicyPage from "@/components/privacypolicies";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy - Classroom AI',
    description: 'Privacy Policy of Classroom AI',
}
export default function Page() {
    return (
        <PrivacyPolicyPage />
    );
}