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
			"Brent and Trish Harris launched Houz2Home as a two-person operation focused on small-scale residential renovations in Alpharetta.",
	},
	{
		year: "2016",
		title: "First Major Kitchen",
		description:
			"Completed our first full kitchen renovation \u2014 a project that defined our commitment to combining function with beauty.",
	},
	{
		year: "2017",
		title: "Full-Service Expansion",
		description:
			"Expanded our offerings to include bathroom renovations, flooring, and custom cabinetry. Brought on our first dedicated project coordinator.",
	},
	{
		year: "2018",
		title: "Multi-Family Landmark",
		description:
			"Completed a multi-family renovation project that elevated our brand reputation and proved we could handle complex, large-scale work.",
	},
	{
		year: "2019",
		title: "\u201CBest of Houzz\u201D Award",
		description:
			"Recognized for outstanding design and client service on the Houzz platform \u2014 our first major industry award.",
	},
	{
		year: "2020",
		title: "Adapting & Innovating",
		description:
			"Pioneered virtual consultations and contactless project management during the pandemic, keeping projects on track while prioritizing safety.",
	},
	{
		year: "2022",
		title: "200th Project Milestone",
		description:
			"Crossed 200 completed projects across Metro Atlanta, spanning kitchens, bathrooms, basements, closets, and whole-home renovations.",
	},
	{
		year: "2025",
		title: "Celebrating 10 Years",
		description:
			"A decade of craftsmanship. Expanded our team, opened new service areas, and continued our commitment to the details that make a house a home.",
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
						A decade of growth, from a two-person startup to one of Metro
						Atlanta&apos;s most trusted renovation teams.
					</p>
				</motion.div>

				<div className="relative">
					<div className="absolute left-[27px] top-0 bottom-0 w-px bg-rule" />

					<div className="space-y-14">
						{milestones.map((milestone, i) => (
							<motion.div
								key={milestone.year}
								className="relative pl-20"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
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
