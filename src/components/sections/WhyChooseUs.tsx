import {
	CheckCircleIcon,
	LightBulbIcon,
	ShieldCheckIcon,
	StarIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import type { ComponentType, SVGProps } from "react";

interface Feature {
	title: string;
	description: string;
	Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const features: Feature[] = [
	{
		title: "Quality Craftsmanship",
		description:
			"Our experienced professionals use the highest quality materials and techniques.",
		Icon: ShieldCheckIcon,
	},
	{
		title: "Innovative Designs",
		description:
			"We stay on top of trends to offer fresh, modern designs tailored to your taste.",
		Icon: LightBulbIcon,
	},
	{
		title: "Transparent Pricing",
		description:
			"No hidden fees. We provide clear, upfront pricing and honest recommendations.",
		Icon: CheckCircleIcon,
	},
	{
		title: "Customer Satisfaction",
		description:
			"We are committed to your happiness, ensuring the job is done right the first time.",
		Icon: StarIcon,
	},
];

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
	},
};

export default function WhyChooseUs() {
	return (
		<section className="px-6 md:px-10 py-24 lg:py-32 bg-dark">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="label-text">Why Us</span>
					<h2 className="mt-4">Why Homeowners Trust Us</h2>
					<p className="max-w-xl mx-auto">
						Unmatched craftsmanship, personalized service, and proven results.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-rule"
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-80px" }}
				>
					{features.map((feature) => (
						<motion.div
							key={feature.title}
							variants={itemVariants}
							className="bg-dark p-8 text-center"
						>
							<feature.Icon className="h-8 w-8 text-gold mx-auto mb-5" />
							<h5 className="mb-3">{feature.title}</h5>
							<p className="text-warm text-sm mb-0 leading-relaxed">
								{feature.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
