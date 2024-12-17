import dynamic from "next/dynamic";
import PricingTable from "./PricingTable";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"));
const LoremIpsum = dynamic(() => import("@/components/sections/LoremIpsum"));

export const metadata = {
    title: "Projects | Responsive Template",
    description: "Created by Doni",
};

export default function Projects() {
    return (
        <>
            <HeroSection
                title="Projects"
                subtitle="Check &apos;em out."
                image="/images/webp/wf_projects"
                alt="Watercolor flowers"
            />

            <div className="page-container">
                <PricingTable />

                {/* Display some placeholder text */}
                <LoremIpsum />
            </div>
        </>
    );
}