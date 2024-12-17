import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));
const LoremIpsum = dynamic(() => import("@/components/LoremIpsum"));

export const metadata = {
  title: "About | Responsive Template",
  description: "Created by Doni",
};

export default function About() {
  return (
    <>
      <HeroSection
        title='Doni'
        subtitle="/ˈ dough-ˈ knee/"
        image="/images/webp/wf_about"
        alt="Watercolor flowers"
      />

      <div className="page-container">
        {/* Display some placeholder text */}
        <LoremIpsum />
      </div>
    </>
  );
}