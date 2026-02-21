import {
	BuildingStorefrontIcon,
	HomeModernIcon,
	PaintBrushIcon,
	PlusCircleIcon,
	SparklesIcon,
	WrenchIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import type { ComponentType, SVGProps } from "react";

interface Service {
	title: string;
	description: string;
	Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const services: Service[] = [
	{
		title: "Kitchen Remodeling",
		description:
			"Upgrade cabinetry, countertops, and appliances for a modern, functional kitchen.",
		Icon: WrenchIcon,
	},
	{
		title: "Bathroom Renovations",
		description:
			"Enhance your bathroom\u2019s comfort and style with updated fixtures and finishes.",
		Icon: SparklesIcon,
	},
	{
		title: "Basement Finishing",
		description:
			"Transform your basement into a livable, welcoming space for work or leisure.",
		Icon: BuildingStorefrontIcon,
	},
	{
		title: "Flooring Installation",
		description:
			"Add warmth and character with high-quality hardwood or tile floors.",
		Icon: HomeModernIcon,
	},
	{
		title: "Exterior Improvements",
		description:
			"Boost curb appeal with new siding, roofing, windows, or a fresh coat of paint.",
		Icon: PaintBrushIcon,
	},
	{
		title: "Room Additions",
		description:
			"Expand your living space with strategically planned additions or extensions.",
		Icon: PlusCircleIcon,
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
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
	},
};

export default function OurServices() {
	return (
		<section className="px-6 md:px-10 py-24 lg:py-32">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.6 }}
				>
					<span className="label-text">What We Do</span>
					<h2 className="mt-4">Our Expertise, Your Dream Home</h2>
					<p className="max-w-xl mx-auto">
						Explore our range of services designed to bring your renovation
						vision to life.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-80px" }}
				>
					{services.map((service) => (
						<motion.div
							key={service.title}
							variants={itemVariants}
							className="group p-8 bg-dark border border-rule hover:border-gold/30 transition-colors duration-500"
						>
							<service.Icon className="h-8 w-8 text-gold mb-6" />
							<h5 className="mb-3">{service.title}</h5>
							<p className="text-warm text-sm mb-0 leading-relaxed">
								{service.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
