import Demo from '@/components/Demo';
import { Metadata } from 'next';
import { VideoObject, WithContext } from 'schema-dts';

export const metadata: Metadata = {
    title: "Product Demo - Classroom AI | Interactive AI Tutors",
    description: "Watch the Classroom AI product demo. See how our Generative AI and adaptive learning algorithms accelerate student learning by up to 3x, saving 10+ hours a week.",
    keywords: "Classroom AI demo, AI learning management system, generative AI education, interactive AI tutors, adaptive learning software demo",
    openGraph: {
        title: "Product Demo - Classroom AI",
        description: "Experience how Classroom AI's interactive agents transform studying into an engaging, gamified experience.",
        type: "video.other",
        url: "https://classroomai.site/demos",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
    }
};

export default function Home() {
    const jsonLd: WithContext<VideoObject> = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Classroom AI Product Demo",
        "description": "A comprehensive demonstration of Classroom AI. Watch how our adaptive learning algorithms and AI tutors help students improve retention by up to 98%.",
        "thumbnailUrl": "https://classroomai.site/og-image.png",
        "uploadDate": "2024-01-01T08:00:00+08:00",
        "contentUrl": "https://classroomai.site/video.mp4",
        "embedUrl": "https://classroomai.site/demos",
        "publisher": {
            "@type": "Organization",
            "name": "Classroom AI",
            "logo": {
                "@type": "ImageObject",
                "url": "https://classroomai.site/logo.png"
            }
        }
    };

    return (
        <main className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Demo />
        </main>
    );
}