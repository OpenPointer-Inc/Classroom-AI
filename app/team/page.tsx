import Team from "@/components/Team";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Team - Classroom AI',
    description: 'This page presents legendary Team Members behind Classroom AI',
}
export default function Page() {
    return <Team />;
}
