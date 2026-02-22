import { motion } from "motion/react";
import type { ReactNode } from "react";

interface HeroSectionProps {
	title: ReactNode;
	subtitle: ReactNode;
	image: string;
	alt: string;
}

export default function HeroSection({
	title,
	subtitle,
	image,
	alt,
}: HeroSectionProps) {
	return (
		<section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
			{/* Ken Burns background */}
			<div className="absolute inset-0">
				<img
					src={image}
					alt={alt}
					className="w-full h-full object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]"
				/>
				<div className="absolute inset-0 bg-deep/75" />
				<div className="absolute inset-0 bg-gradient-to-b from-deep/40 via-transparent to-deep" />
			</div>

			{/* Content */}
			<div className="relative z-10 text-center px-6 max-w-4xl [text-shadow:0_2px_30px_rgba(255,255,255,0.6),0_0_60px_rgba(255,255,255,0.3)] dark:[text-shadow:0_2px_30px_rgba(0,0,0,0.8),0_0_60px_rgba(0,0,0,0.5)]">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
				>
					{title}
				</motion.h1>

				<motion.div
					className="h-px bg-gold mx-auto my-8"
					initial={{ width: 0 }}
					animate={{ width: 64 }}
					transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
				/>

				<motion.p
					className="text-lg md:text-xl text-cream font-light font-body mb-0"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.9 }}
				>
					{subtitle}
				</motion.p>
			</div>

			{/* Scroll indicator */}
			<motion.div
				className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 0.6 }}
			>
				<span className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-cream/40">
					Scroll
				</span>
				<motion.div
					className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent"
					animate={{ scaleY: [1, 0.5, 1] }}
					transition={{
						duration: 2,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
			</motion.div>
		</section>
	);
}
