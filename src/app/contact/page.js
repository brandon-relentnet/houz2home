import dynamic from "next/dynamic";
import Testimonials from "@/components/sections/Testimonials";
import ContactInfo from "@/components/sections/ContactInfo";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"));
const ContactForm = dynamic(() => import("@/components/sections/ContactForm"));

const contactTitle = <>Get in <span className="italic text-accent">Touch</span></>;
const contactSubtitle = <>Let&apos;s talk <span className="underline">details</span> and bring your vision to life.</>;

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
                alt="Houz2Home Contact Image"
            />

            <div className="page-container">
                <ContactForm />

                <ContactInfo />
            </div>
            <Testimonials />
        </>
    );
}