import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));
const LoremIpsum = dynamic(() => import("@/components/LoremIpsum"));

export const metadata = {
    title: "Contact | Responsive Template",
    description: "Created by Doni",
};

export default function Contact() {
    return (
        <>
            <HeroSection
                title="Contact"
                subtitle="Reach out to Doni."
                image="/images/webp/wf_contact"
                alt="Watercolor flowers"
            />

            <div className="page-container">
                {/* Display some placeholder text */}
                <LoremIpsum />
            </div>
        </>
    );
}