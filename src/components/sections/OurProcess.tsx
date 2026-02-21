import {
	ChatBubbleLeftRightIcon,
	KeyIcon,
	PencilSquareIcon,
	WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import type { ComponentType, SVGProps } from "react";

interface Step {
	number: string;
	title: string;
	description: string;
	Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const steps: Step[] = [
	{
		number: "01",
		title: "Discovery & Consultation",
		description:
			"We listen to your vision, assess your space, and understand your lifestyle. Every great renovation starts with a conversation about what matters most to you.",
		Icon: ChatBubbleLeftRightIcon,
	},
	{
		number: "02",
		title: "Design & Planning",
		description:
			"Our team creates detailed plans and material selections tailored to your taste and budget. You\u2019ll see your renovation come to life before construction begins.",
		Icon: PencilSquareIcon,
	},
	{
		number: "03",
		title: "Expert Construction",
		description:
			"Licensed craftsmen execute with precision and care. Weekly progress updates, strict timelines, and meticulous quality control at every stage of the build.",
		Icon: WrenchScrewdriverIcon,
	},
	{
		number: "04",
		title: "Final Reveal",
		description:
			"We don\u2019t hand over the keys until every detail is perfect. A comprehensive walkthrough ensures your complete satisfaction \u2014 because the details matter most.",
		Icon: KeyIcon,
	},
];

const containerVariants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
	},
};

export default function OurProcess() {
	return (
		<section className="px-6 md:px-10 py-24 lg:py-32 bg-dark border-y border-rule">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.6 }}
				>
					<span className="label-text">How We Work</span>
					<h2 className="mt-4">A Proven Process</h2>
					<p className="max-w-xl mx-auto">
						From first conversation to final walkthrough, every step is designed
						to be transparent, efficient, and stress-free.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule"
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-80px" }}
				>
					{steps.map((step) => (
						<motion.div
							key={step.number}
							variants={itemVariants}
							className="relative bg-dark p-8 lg:p-10"
						>
							<span className="block font-display text-5xl text-gold/20 leading-none mb-6">
								{step.number}
							</span>
							<step.Icon className="h-7 w-7 text-gold mb-5" />
							<h5 className="mb-3">{step.title}</h5>
							<p className="text-warm text-sm mb-0 leading-relaxed">
								{step.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
