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
						About <em className="text-gold">Us</em>
					</>
				}
				subtitle={
					<>
						Crafting stories, one <span className="text-gold">detail</span> at a
						time.
					</>
				}
				image="/images/webp/h2h_about.webp"
				alt="Houz2Home team at work"
			/>
			<Team />
			<OurMission />
			<Milestones />
			<Testimonials />
			<ContactCTA />
		</>
	);
}
