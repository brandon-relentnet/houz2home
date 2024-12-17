import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"));
const LoremIpsum = dynamic(() => import("@/components/sections/LoremIpsum"));
const TheDifference = dynamic(() => import("@/components/sections/TheDifference"));
const Logo = dynamic(() => import("@/components/Logo"));

export const metadata = {
    title: "Home | Houz2Home",
    description: "Turn your house into a home with Houz2Home.",
};

const homeTitle = <>From House to <span className="italic text-accent">Home</span></>;
const homeSubtitle = <>The difference is in the <span className="underline">details.</span></>;

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <HeroSection
                title={homeTitle}
                subtitle={homeSubtitle}
                image="/images/webp/h2h_home.webp"
                alt="Houz2Home Homepage Image"
            />

            <div className="page-container">
                {/* Welcome Message */}
                <div className="flex items-center justify-center w-full relative mb-28">
                    <Logo width={150} height={134} /> {/* Dynamically switches based on theme */}
                </div>

                {/* The Difference Section */}
                <TheDifference />

                {/* Placeholder Text */}
                <LoremIpsum />
            </div>
        </>
    );
}
