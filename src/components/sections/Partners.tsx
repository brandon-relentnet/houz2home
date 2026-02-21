import { motion } from "motion/react";

const partners = [
	"Kohler",
	"Sherwin-Williams",
	"Delta",
	"Cambria",
	"Moen",
	"Benjamin Moore",
	"Armstrong",
	"Sub-Zero & Wolf",
	"Thermador",
	"Restoration Hardware",
];

const containerVariants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 0.4 } },
};

export default function Partners() {
	return (
		<section className="px-6 md:px-10 py-20 lg:py-24 bg-dark border-y border-rule">
			<div className="max-w-5xl mx-auto">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="label-text">Our Partners</span>
					<h3 className="mt-4">Brands We Trust</h3>
				</motion.div>

				<motion.div
					className="flex flex-wrap justify-center gap-x-12 gap-y-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-80px" }}
				>
					{partners.map((partner) => (
						<motion.span
							key={partner}
							variants={itemVariants}
							className="font-display text-xl md:text-2xl text-mute hover:text-gold transition-colors duration-500 cursor-default"
						>
							{partner}
						</motion.span>
					))}
				</motion.div>
			</div>
		</section>
	);
}
