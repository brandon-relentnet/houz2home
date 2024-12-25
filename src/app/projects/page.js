import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"));
const LoremIpsum = dynamic(() => import("@/components/sections/LoremIpsum"));

const portfolioTitle = <>Our <span className="italic text-accent">Work</span></>;
const portfolioSubtitle = <>Where <span className="underline">details</span> make all the difference.</>;

export const metadata = {
    title: "Projects | Houz2Home",
    description: "View our portfolio of work.",
};

export default function Projects() {
    return (
        <>
            <HeroSection
                title={portfolioTitle}
                subtitle={portfolioSubtitle}
                image="/images/webp/h2h_portfolio.webp"
                alt="Watercolor flowers"
            />

            <div className="page-container">
                {/* Display some placeholder text */}
                <LoremIpsum />
            </div>
        </>
    );
}