import dynamic from "next/dynamic";
import OurMission from "@/components/sections/OurMission";
import Milestones from "@/components/sections/Milestones";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"));
const LoremIpsum = dynamic(() => import("@/components/sections/LoremIpsum"));

const aboutTitle = <>About <span className="italic text-accent">Us</span></>;
const aboutSubtitle = <>Crafting stories, one <span className="underline">detail</span> at a time.</>;

export const metadata = {
  title: "About | Houz2Home",
  description: "Learn more about Houz2Home.",
};

export default function About() {
  return (
    <>
      <HeroSection
        title={aboutTitle}
        subtitle={aboutSubtitle}
        image="/images/webp/h2h_about.webp"
        alt="Houz2Home About Us Image"
      />

      <div className="page-container">
        <Team />

        <OurMission />

        <Milestones />
      </div>

      <div>
        <Testimonials />
      </div>

      <div className="page-container">
        <ContactCTA />
      </div>
    </>
  );
}