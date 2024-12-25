import ContactCTA from "@/components/sections/ContactCTA";
import dynamic from "next/dynamic";
import Portfolio from "@/components/sections/Portfolio";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"));

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
                alt="Houz2Home Portfolio Image"
            />

            <div className="page-container">
                {/* Portfolio Section */}
                <Portfolio />

                {/* Call to Action */}
                <ContactCTA />
            </div>
        </>
    );
}