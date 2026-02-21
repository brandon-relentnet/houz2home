import { createFileRoute } from "@tanstack/react-router";
import ContactCTA from "@/components/sections/ContactCTA";
import HeroSection from "@/components/sections/HeroSection";
import Milestones from "@/components/sections/Milestones";
import OurMission from "@/components/sections/OurMission";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";

export const Route = createFileRoute("/about")({ component: About });

function About() {
	return (
		<>
			<HeroSection
				title={
					<>
						About <span className="italic text-accent">Us</span>
					</>
				}
				subtitle={
					<>
						Crafting stories, one <span className="underline">detail</span> at a
						time.
					</>
				}
				image="/images/webp/h2h_about.webp"
				alt="Houz2Home About Us Image"
			/>
			<div className="page-container">
				<Team />
				<OurMission />
				<Milestones />
			</div>
			<Testimonials />
			<div className="page-container">
				<ContactCTA />
			</div>
		</>
	);
}
