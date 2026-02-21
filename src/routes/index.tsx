import { createFileRoute } from "@tanstack/react-router";
import Logo from "@/components/Logo";
import BeforeAfter from "@/components/sections/BeforeAfter";
import ContactCTA from "@/components/sections/ContactCTA";
import HeroSection from "@/components/sections/HeroSection";
import OurServices from "@/components/sections/OurServices";
import Testimonials from "@/components/sections/Testimonials";
import TheDifference from "@/components/sections/TheDifference";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<>
			<HeroSection
				title={
					<>
						From House to <span className="italic text-accent">Home</span>
					</>
				}
				subtitle={
					<>
						The difference is in the <span className="underline">details.</span>
					</>
				}
				image="/images/webp/h2h_home.webp"
				alt="Houz2Home Homepage Image"
			/>
			<div className="page-container">
				<div className="flex items-center justify-center w-full relative mb-12 lg:mb-28">
					<Logo />
				</div>
				<TheDifference />
				<OurServices />
				<BeforeAfter />
				<WhyChooseUs />
			</div>
			<Testimonials />
			<div className="page-container">
				<ContactCTA />
			</div>
		</>
	);
}
