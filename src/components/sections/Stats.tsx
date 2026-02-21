import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface Stat {
	value: number;
	suffix: string;
	label: string;
}

const stats: Stat[] = [
	{ value: 10, suffix: "+", label: "Years of Experience" },
	{ value: 250, suffix: "+", label: "Projects Completed" },
	{ value: 98, suffix: "%", label: "Client Satisfaction" },
	{ value: 30, suffix: "+", label: "Industry Awards" },
];

function AnimatedNumber({
	value,
	suffix,
	inView,
}: {
	value: number;
	suffix: string;
	inView: boolean;
}) {
	const [count, setCount] = useState(0);
	const hasAnimated = useRef(false);

	useEffect(() => {
		if (!inView || hasAnimated.current) return;
		hasAnimated.current = true;

		const duration = 2000;
		const startTime = performance.now();

		const tick = (now: number) => {
			const elapsed = now - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const eased = 1 - (1 - progress) ** 3;
			setCount(Math.round(eased * value));

			if (progress < 1) {
				requestAnimationFrame(tick);
			}
		};

		requestAnimationFrame(tick);
	}, [inView, value]);

	return (
		<span className="tabular-nums">
			{count}
			{suffix}
		</span>
	);
}

export default function Stats() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section className="px-6 md:px-10 py-20 lg:py-24 bg-night border-y border-rule">
			<div className="max-w-6xl mx-auto" ref={ref}>
				<motion.div
					className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-rule"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					{stats.map((stat) => (
						<div key={stat.label} className="bg-night p-8 lg:p-12 text-center">
							<span className="block font-display text-4xl md:text-5xl lg:text-6xl text-gold leading-none mb-3">
								<AnimatedNumber
									value={stat.value}
									suffix={stat.suffix}
									inView={inView}
								/>
							</span>
							<span className="text-xs font-semibold tracking-[0.15em] uppercase text-warm">
								{stat.label}
							</span>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
