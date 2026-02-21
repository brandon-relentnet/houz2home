import { motion } from "motion/react";

interface TeamMember {
	name: string;
	role: string;
	bio: string;
	quote: string;
}

const teamMembers: TeamMember[] = [
	{
		name: "Brent Harris",
		role: "Co-Founder & Project Manager",
		bio: "With over 15 years in construction management, Brent oversees every project from blueprint to final walkthrough. His hands-on approach and obsessive attention to timelines keep renovations running smoothly.",
		quote: "Every detail deserves attention.",
	},
	{
		name: "Trish Harris",
		role: "Co-Founder & Lead Designer",
		bio: "Trish brings a trained eye for spatial design and material selection. She translates client visions into cohesive design plans that balance aesthetics with everyday livability.",
		quote: "Innovative solutions for every space.",
	},
];

const containerVariants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
	},
};

export default function Team() {
	return (
		<section className="px-6 md:px-10 py-24 lg:py-32">
			<div className="max-w-6xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="label-text">Our Team</span>
					<h2 className="mt-4">The People Behind the Craft</h2>
					<p className="max-w-xl mx-auto">
						A small, dedicated team where everyone knows your name &mdash; and
						your project &mdash; by heart.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 gap-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-80px" }}
				>
					{teamMembers.map((member) => (
						<motion.div
							key={member.name}
							variants={itemVariants}
							className="p-10 bg-dark border border-rule group hover:border-gold/30 transition-colors duration-500"
						>
							<div className="flex items-center gap-5 mb-6">
								<div className="w-14 h-14 rounded-full bg-dim border border-rule-light flex items-center justify-center shrink-0">
									<span className="text-gold font-display text-xl">
										{member.name.charAt(0)}
									</span>
								</div>
								<div>
									<h5 className="mb-0 text-lg">{member.name}</h5>
									<p className="text-gold text-sm mb-0">{member.role}</p>
								</div>
							</div>
							<p className="text-warm text-sm leading-relaxed mb-4">
								{member.bio}
							</p>
							<p className="text-mute italic font-display text-base mb-0 border-t border-rule pt-4">
								&ldquo;{member.quote}&rdquo;
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
