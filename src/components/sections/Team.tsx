import { motion } from "motion/react";

interface TeamMember {
	name: string;
	role: string;
	quote: string;
}

const teamMembers: TeamMember[] = [
	{
		name: "Brent Harris",
		role: "Co-Founder & Project Manager",
		quote: "Every detail deserves attention.",
	},
	{
		name: "Trish Harris",
		role: "Co-Founder & Lead Designer",
		quote: "Innovative solutions for every space.",
	},
];

export default function Team() {
	return (
		<section className="px-6 md:px-10 py-24 lg:py-32">
			<div className="max-w-5xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="label-text">Our Team</span>
					<h2 className="mt-4">Meet the Team</h2>
					<p className="max-w-xl mx-auto">
						The people behind the craftsmanship.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{teamMembers.map((member, i) => (
						<motion.div
							key={member.name}
							className="p-10 bg-dark border border-rule text-center group hover:border-gold/30 transition-colors duration-500"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.15 }}
						>
							<div className="w-16 h-16 mx-auto mb-6 rounded-full bg-dim border border-rule-light flex items-center justify-center">
								<span className="text-gold font-display text-2xl">
									{member.name.charAt(0)}
								</span>
							</div>
							<h4 className="mb-1">{member.name}</h4>
							<p className="text-gold text-sm mb-4">{member.role}</p>
							<p className="text-warm italic font-display text-lg mb-0">
								&ldquo;{member.quote}&rdquo;
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
