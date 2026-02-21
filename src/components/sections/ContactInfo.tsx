import {
	ClockIcon,
	EnvelopeIcon,
	MapPinIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";

export default function ContactInfo() {
	return (
		<motion.section
			className="px-6 md:px-10 py-24 lg:py-32"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			<div className="max-w-3xl mx-auto">
				<span className="label-text">Direct Contact</span>
				<h2 className="mt-4">Not Feeling the Form?</h2>
				<p className="mb-10">
					Prefer direct communication? No problem &mdash; use the info below to
					get in touch however you like.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					<div className="flex items-start gap-4">
						<PhoneIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
						<div>
							<span className="label-text block mb-1">Phone</span>
							<a
								href="tel:+17707143389"
								className="text-cream hover:text-gold transition-colors"
							>
								(770) 714-3389
							</a>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<EnvelopeIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
						<div>
							<span className="label-text block mb-1">Email</span>
							<a
								href="mailto:bharris@houz2home.com"
								className="text-cream hover:text-gold transition-colors"
							>
								bharris@houz2home.com
							</a>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<MapPinIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
						<div>
							<span className="label-text block mb-1">Address</span>
							<span className="text-warm">Alpharetta, GA 30005</span>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<ClockIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
						<div>
							<span className="label-text block mb-1">Hours</span>
							<span className="text-warm">Mon-Fri, 9am-5pm EST</span>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
