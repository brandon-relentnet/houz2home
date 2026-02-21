import { createFileRoute } from "@tanstack/react-router";
import BeforeAfter from "@/components/sections/BeforeAfter";
import ContactCTA from "@/components/sections/ContactCTA";
import HeroSection from "@/components/sections/HeroSection";
import OurProcess from "@/components/sections/OurProcess";
import OurServices from "@/components/sections/OurServices";
import Partners from "@/components/sections/Partners";
import Stats from "@/components/sections/Stats";
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
						From House to <em className="text-gold">Home</em>
					</>
				}
				subtitle={
					<>
						The difference is in the <span className="text-gold">details</span>.
					</>
				}
				image="/images/webp/h2h_home.webp"
				alt="Houz2Home renovated living space"
			/>
			<TheDifference />
			<OurServices />
			<OurProcess />
			<Stats />
			<BeforeAfter />
			<WhyChooseUs />
			<Testimonials />
			<Partners />
			<ContactCTA />
		</>
	);
}
