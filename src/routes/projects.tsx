import { createFileRoute } from "@tanstack/react-router";
import ContactCTA from "@/components/sections/ContactCTA";
import HeroSection from "@/components/sections/HeroSection";
import Portfolio from "@/components/sections/Portfolio";
import Stats from "@/components/sections/Stats";

export const Route = createFileRoute("/projects")({ component: Projects });

function Projects() {
	return (
		<>
			<HeroSection
				title={
					<>
						Our <em className="text-gold">Work</em>
					</>
				}
				subtitle={
					<>
						Where <span className="text-gold">details</span> make all the
						difference.
					</>
				}
				image="/images/webp/h2h_portfolio.webp"
				alt="Houz2Home completed renovation project"
			/>
			<Portfolio />
			<Stats />
			<ContactCTA />
		</>
	);
}
