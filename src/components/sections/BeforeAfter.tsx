import { motion } from "motion/react";
import { useCallback, useRef, useState } from "react";

export default function BeforeAfter() {
	const [position, setPosition] = useState(50);
	const containerRef = useRef<HTMLDivElement>(null);
	const isDragging = useRef(false);

	const updatePosition = useCallback((clientX: number) => {
		const container = containerRef.current;
		if (!container) return;
		const rect = container.getBoundingClientRect();
		const x = clientX - rect.left;
		const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
		setPosition(pct);
	}, []);

	const handlePointerDown = useCallback(
		(e: React.PointerEvent) => {
			isDragging.current = true;
			(e.target as HTMLElement).setPointerCapture(e.pointerId);
			updatePosition(e.clientX);
		},
		[updatePosition],
	);

	const handlePointerMove = useCallback(
		(e: React.PointerEvent) => {
			if (!isDragging.current) return;
			updatePosition(e.clientX);
		},
		[updatePosition],
	);

	const handlePointerUp = useCallback(() => {
		isDragging.current = false;
	}, []);

	const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
		if (e.key === "ArrowLeft") {
			setPosition((p) => Math.max(0, p - 2));
		} else if (e.key === "ArrowRight") {
			setPosition((p) => Math.min(100, p + 2));
		}
	}, []);

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
						Drag the slider to reveal the transformation &mdash; turning
						outdated spaces into inviting areas you&apos;ll love.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div
						ref={containerRef}
						className="relative aspect-[16/10] max-w-4xl mx-auto overflow-hidden select-none touch-none"
						onPointerDown={handlePointerDown}
						onPointerMove={handlePointerMove}
						onPointerUp={handlePointerUp}
						onKeyDown={handleKeyDown}
						role="slider"
						aria-valuenow={Math.round(position)}
						aria-valuemin={0}
						aria-valuemax={100}
						aria-label="Before and after comparison slider"
						tabIndex={0}
						style={{ cursor: "ew-resize" }}
					>
						{/* After image (full, behind) */}
						<img
							src="/images/webp/h2h_after.webp"
							alt="Space after renovation"
							className="absolute inset-0 w-full h-full object-cover"
							draggable={false}
						/>

						{/* Before image (clipped from right) */}
						<div
							className="absolute inset-0"
							style={{
								clipPath: `inset(0 ${100 - position}% 0 0)`,
							}}
						>
							<img
								src="/images/webp/h2h_before.webp"
								alt="Space before renovation"
								className="w-full h-full object-cover"
								draggable={false}
							/>
						</div>

						{/* Slider handle */}
						<div
							className="absolute top-0 bottom-0 w-0.5 bg-gold/90 z-10 pointer-events-none"
							style={{ left: `${position}%` }}
						>
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gold flex items-center justify-center rounded-full shadow-lg shadow-night/50">
								<svg
									className="w-5 h-5 text-night"
									viewBox="0 0 20 20"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									role="img"
									aria-label="Drag handle"
								>
									<path d="M7 5l-3 5 3 5" />
									<path d="M13 5l3 5-3 5" />
								</svg>
							</div>
						</div>

						{/* Labels */}
						<div className="absolute bottom-4 left-4 px-3 py-1.5 bg-night/80 backdrop-blur-sm pointer-events-none">
							<span className="text-xs font-semibold tracking-[0.15em] uppercase text-cream/70">
								Before
							</span>
						</div>
						<div className="absolute bottom-4 right-4 px-3 py-1.5 bg-night/80 backdrop-blur-sm pointer-events-none">
							<span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">
								After
							</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
