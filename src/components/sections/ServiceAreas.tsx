import { MapPinIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";

const areas = [
	"Alpharetta",
	"Roswell",
	"Milton",
	"Johns Creek",
	"Cumming",
	"Duluth",
	"Suwanee",
	"Sandy Springs",
	"Dunwoody",
	"Marietta",
	"Kennesaw",
	"Woodstock",
	"Canton",
	"Brookhaven",
	"Buckhead",
];

const containerVariants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: 10 },
	show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function ServiceAreas() {
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
					<span className="label-text">Where We Work</span>
					<h2 className="mt-4">Serving Metro Atlanta</h2>
					<p className="max-w-xl mx-auto">
						Proudly serving homeowners across the greater Atlanta area and
						surrounding communities.
					</p>
				</motion.div>

				<motion.div
					className="flex flex-wrap justify-center gap-3"
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-80px" }}
				>
					{areas.map((area) => (
						<motion.div
							key={area}
							variants={itemVariants}
							className="flex items-center gap-2 px-5 py-3 border border-rule hover:border-gold/40 transition-colors duration-300 group"
						>
							<MapPinIcon className="w-3.5 h-3.5 text-mute group-hover:text-gold transition-colors duration-300" />
							<span className="text-sm text-warm group-hover:text-cream transition-colors duration-300">
								{area}
							</span>
						</motion.div>
					))}
				</motion.div>

				<motion.p
					className="text-center text-mute text-sm mt-10 mb-0"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					Don&apos;t see your area? Contact us &mdash; we may still be able to
					serve you.
				</motion.p>
			</div>
		</section>
	);
}
