import { motion } from "motion/react";

export default function TheDifference() {
	return (
		<section className="px-6 md:px-10 py-24 lg:py-32">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
					<motion.div
						className="lg:w-[55%]"
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					>
						<img
							src="/images/webp/h2h_difference.webp"
							alt="Houz2Home precision craftsmanship detail"
							className="w-full h-auto object-cover"
							width={2560}
							height={3413}
						/>
					</motion.div>
					<motion.div
						className="lg:w-[45%]"
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{
							duration: 0.8,
							delay: 0.2,
							ease: [0.22, 1, 0.36, 1],
						}}
					>
						<span className="label-text">Our Philosophy</span>
						<h2 className="mt-4">
							Perfection is <em>not</em> an understatement.
						</h2>
						<div className="h-px w-12 bg-gold my-6" />
						<p>
							Houz2Home Renovations believes{" "}
							<span className="text-gold">
								the difference is in the details
							</span>
							. Whether creating new living spaces, renovating bathrooms, or
							designing the perfect custom kitchen, our clients take comfort in
							knowing every project is intelligently designed and crafted with
							an uncompromising commitment to exceptional service and
							value-driven results.
						</p>
						<p>
							We take pride in our meticulous adherence to precision
							craftsmanship for every project we create. Our job is to explore
							innovative styles and ensure inspired designs every time you
							invite us into your home. The little details make the biggest
							difference when it comes to quality, service, and comfort.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
