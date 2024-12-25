import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"));
const LoremIpsum = dynamic(() => import("@/components/sections/LoremIpsum"));

const contactTitle = <>Get in <span className="italic text-accent">Touch</span></>;
const contactSubtitle = <>Let's talk <span className="underline">details</span> and bring your vision to life.</>;

export const metadata = {
    title: "Contact | Houz2Home",
    description: "Get in touch with Houz2Home.",
};

export default function Contact() {
    return (
        <>
            <HeroSection
                title={contactTitle}
                subtitle={contactSubtitle}
                image="/images/webp/h2h_contact.webp"
                alt="Watercolor flowers"
            />

            <div className="page-container">
                {/* Display some placeholder text */}
                <LoremIpsum />
            </div>
        </>
    );
}