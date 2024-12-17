import dynamic from "next/dynamic";
import Logo from "@/components/Logo"; // Import the Logo component

const HeroSection = dynamic(() => import("@/components/HeroSection"));
const LoremIpsum = dynamic(() => import("@/components/LoremIpsum"));

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
                image="/images/webp/h2h_home"
                alt="Houz2Home Homepage Image"
            />

            <div className="page-container">
                {/* Welcome Message */}
                <div className="flex items-center justify-center gap-4 w-full relative">
                    <h2 className="border-r-4 border-accent pr-4">
                        Welcome to <span className="text-accent">Houz2Home</span>
                    </h2>
                    <Logo width={150} height={134} /> {/* Dynamically switches based on theme */}
                </div>

                {/* Placeholder Text */}
                <LoremIpsum />
            </div>
        </>
    );
}
