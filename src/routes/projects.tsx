import { createFileRoute } from "@tanstack/react-router";
import ContactCTA from "@/components/sections/ContactCTA";
import HeroSection from "@/components/sections/HeroSection";
import Portfolio from "@/components/sections/Portfolio";

export const Route = createFileRoute("/projects")({ component: Projects });

function Projects() {
	return (
		<>
			<HeroSection
				title={
					<>
						Our <span className="italic text-accent">Work</span>
					</>
				}
				subtitle={
					<>
						Where <span className="underline">details</span> make all the
						difference.
					</>
				}
				image="/images/webp/h2h_portfolio.webp"
				alt="Houz2Home Portfolio Image"
			/>
			<div className="page-container">
				<Portfolio />
				<ContactCTA />
			</div>
		</>
	);
}
