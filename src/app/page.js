import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"));
const TheDifference = dynamic(() => import("@/components/sections/TheDifference"));
const OurServices = dynamic(() => import("@/components/sections/OurServices"));
const BeforeAfter = dynamic(() => import("@/components/sections/BeforeAfter"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const ContactCTA = dynamic(() => import("@/components/sections/ContactCTA"));
const Logo = dynamic(() => import("@/components/Logo"));

const homeTitle = <>From House to <span className="italic text-accent">Home</span></>;
const homeSubtitle = <>The difference is in the <span className="underline">details.</span></>;

export const metadata = {
    title: "Home | Houz2Home",
    description: "Turn your house into a home with Houz2Home.",
};

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
                <div className="flex items-center justify-center w-full relative mb-12 lg:mb-28">
                    <Logo /> {/* Dynamically switches based on theme */}
                </div>

                {/* The Difference Section */}
                <TheDifference />

                {/* Our Services Section */}
                <OurServices />

                {/* Before & After Section */}
                <BeforeAfter />

                {/* Why Choose Us Section */}
                <WhyChooseUs />
            </div>

            {/* Testimonials Section */}
            <Testimonials />

            <div className="page-container">
                {/* Contact CTA Section */}
                <ContactCTA />
            </div>
        </>
    );
}
