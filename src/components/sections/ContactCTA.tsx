import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export default function ContactCTA() {
	return (
		<section className="px-6 md:px-10 py-24 lg:py-32 border-t border-gold/20">
			<motion.div
				className="max-w-4xl mx-auto text-center"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<span className="label-text">Start Your Project</span>
				<h2 className="mt-4">
					Let&apos;s Build Something <em className="text-gold">Beautiful</em>
				</h2>
				<p className="max-w-lg mx-auto">
					Every great renovation starts with a conversation. Tell us your
					vision, and we&apos;ll bring it to life &mdash; on time, on budget,
					and with the attention to detail you deserve.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
					<Link
						to="/contact"
						className="px-8 py-3.5 bg-gold text-night text-sm font-semibold tracking-[0.1em] uppercase hover:bg-gold-light transition-colors duration-300"
					>
						Get a Free Quote
					</Link>
					<a
						href="tel:+17707143389"
						className="px-8 py-3.5 border border-rule text-cream text-sm font-semibold tracking-[0.1em] uppercase hover:border-gold/50 hover:text-gold transition-colors duration-300"
					>
						(770) 714-3389
					</a>
				</div>
			</motion.div>
		</section>
	);
}
