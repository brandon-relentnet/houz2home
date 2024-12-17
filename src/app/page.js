import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));
const LoremIpsum = dynamic(() => import('@/components/LoremIpsum'));

export const metadata = {
    title: "Home | Responsive Template",
    description: "Created by Doni",
};

export default function Home() {
    return (
        <>
            <HeroSection
                title="Welcome"
                subtitle="to Doni&apos;s portfolio."
                image="/images/webp/h2h_home"
                alt="Houz2Home Homepage Image"
            />

            <div className="page-container">
                {/* Display some placeholder text */}
                <LoremIpsum />
            </div>
        </>
    );
}
