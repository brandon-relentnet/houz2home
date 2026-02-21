import { motion } from "motion/react";

export default function OurMission() {
	return (
		<section className="px-6 md:px-10 py-24 lg:py-32">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
					<motion.div
						className="lg:w-[45%]"
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{
							duration: 0.8,
							ease: [0.22, 1, 0.36, 1] as const,
						}}
					>
						<span className="label-text">Our Mission</span>
						<h2 className="mt-4">
							Redefining homes, <em>enriching</em> lives.
						</h2>
						<div className="h-px w-12 bg-gold my-6" />
						<p>
							At the core of our purpose lies a passion for recreating spaces
							into havens of comfort, beauty, and inspiration. We don&apos;t
							merely renovate structures &mdash; we shape personalized
							environments that embody the dreams and aspirations of the
							families who inhabit them.
						</p>
						<p>
							Through collaboration, innovation, and unmatched craftsmanship,
							our mission is to transform each corner of your home into a
							reflection of who you are, fostering joy and harmony in everyday
							life.
						</p>
					</motion.div>
					<motion.div
						className="lg:w-[55%]"
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{
							duration: 0.8,
							delay: 0.2,
							ease: [0.22, 1, 0.36, 1] as const,
						}}
					>
						<img
							src="/images/webp/h2h_mission.webp"
							alt="Houz2Home mission — renovated living space"
							className="w-full h-auto object-cover"
							width={2560}
							height={3413}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
