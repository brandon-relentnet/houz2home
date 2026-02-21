import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export default function ContactCTA() {
	return (
		<section className="px-6 md:px-10 py-24 lg:py-32">
			<motion.div
				className="max-w-2xl mx-auto text-center"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<span className="label-text">Start Your Project</span>
				<h2 className="mt-4">Ready to Get Started?</h2>
				<p className="max-w-lg mx-auto">
					Let us know what you have in mind, and we&apos;ll help you make it a
					reality. Get a free quote or schedule a consultation today.
				</p>
				<Link
					to="/contact"
					className="inline-block mt-4 px-8 py-3.5 bg-gold text-night text-sm font-semibold tracking-[0.1em] uppercase hover:bg-gold-light transition-colors duration-300"
				>
					Contact Us
				</Link>
			</motion.div>
		</section>
	);
}
