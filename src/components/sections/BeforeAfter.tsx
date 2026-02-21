import { motion } from "motion/react";

export default function BeforeAfter() {
	return (
		<section className="px-6 md:px-10 py-24 lg:py-32">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="label-text">Transformations</span>
					<h2 className="mt-4">Before &amp; After</h2>
					<p className="max-w-xl mx-auto">
						See the transformative difference &mdash; turning outdated spaces
						into inviting, functional areas you will love.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<motion.div
						className="relative overflow-hidden group"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<img
							src="/images/webp/h2h_before.webp"
							alt="Space before renovation"
							className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
							width={600}
							height={400}
						/>
						<div className="absolute bottom-0 left-0 px-4 py-2 bg-night/80 backdrop-blur-sm">
							<span className="text-xs font-semibold tracking-[0.15em] uppercase text-cream/70">
								Before
							</span>
						</div>
					</motion.div>

					<motion.div
						className="relative overflow-hidden group"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.15 }}
					>
						<img
							src="/images/webp/h2h_after.webp"
							alt="Space after renovation"
							className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
							width={600}
							height={400}
						/>
						<div className="absolute bottom-0 left-0 px-4 py-2 bg-night/80 backdrop-blur-sm">
							<span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">
								After
							</span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
