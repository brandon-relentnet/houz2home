import { motion } from "motion/react";

interface Milestone {
	year: string;
	title: string;
	description: string;
}

const milestones: Milestone[] = [
	{
		year: "2015",
		title: "Founded",
		description:
			"Launched as a two-person startup focusing on small-scale renovations.",
	},
	{
		year: "2018",
		title: "Major Project",
		description:
			"Completed a multi-family renovation that elevated our brand reputation.",
	},
	{
		year: "2021",
		title: "Growth & Expansion",
		description:
			"Welcomed new team members and expanded operations to multiple cities.",
	},
];

export default function Milestones() {
	return (
		<section className="px-6 md:px-10 py-24 lg:py-32 bg-dark border-y border-rule">
			<div className="max-w-4xl mx-auto">
				<motion.div
					className="mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="label-text">Our Journey</span>
					<h2 className="mt-4">How We Got Here</h2>
					<p className="max-w-xl">
						Take a walk down memory lane as we acknowledge the milestones that
						shaped us.
					</p>
				</motion.div>

				<div className="relative">
					<div className="absolute left-[27px] top-0 bottom-0 w-px bg-rule" />

					<div className="space-y-16">
						{milestones.map((milestone, i) => (
							<motion.div
								key={milestone.year}
								className="relative pl-20"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.15 }}
							>
								<div className="absolute left-[20px] top-1 w-[15px] h-[15px] border-2 border-gold bg-dark rounded-full" />

								<span className="text-gold font-display text-3xl">
									{milestone.year}
								</span>
								<h4 className="mt-2 mb-2">{milestone.title}</h4>
								<p className="text-warm mb-0">{milestone.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
