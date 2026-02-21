import {
	ChevronLeftIcon,
	ChevronRightIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

interface LightboxPhoto {
	src: string;
	alt: string;
}

interface LightboxProps {
	photos: LightboxPhoto[];
	currentIndex: number;
	onClose: () => void;
	onPrev: () => void;
	onNext: () => void;
}

export default function Lightbox({
	photos,
	currentIndex,
	onClose,
	onPrev,
	onNext,
}: LightboxProps) {
	const photo = photos[currentIndex];
	const [direction, setDirection] = useState(0);

	const goPrev = useCallback(() => {
		setDirection(-1);
		onPrev();
	}, [onPrev]);

	const goNext = useCallback(() => {
		setDirection(1);
		onNext();
	}, [onNext]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") goPrev();
			if (e.key === "ArrowRight") goNext();
		};

		document.addEventListener("keydown", handleKeyDown);
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [onClose, goPrev, goNext]);

	return (
		<motion.div
			className="fixed inset-0 z-[9998] flex items-center justify-center bg-night/95 backdrop-blur-sm"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.25 }}
			onClick={onClose}
		>
			{/* Close */}
			<button
				type="button"
				onClick={onClose}
				className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center text-warm hover:text-cream transition-colors duration-300"
				aria-label="Close lightbox"
			>
				<XMarkIcon className="w-6 h-6" />
			</button>

			{/* Prev */}
			<button
				type="button"
				onClick={(e) => {
					e.stopPropagation();
					goPrev();
				}}
				className="absolute left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center border border-rule hover:border-gold/50 text-warm hover:text-cream transition-colors duration-300 bg-night/60 backdrop-blur-sm"
				aria-label="Previous image"
			>
				<ChevronLeftIcon className="w-5 h-5" />
			</button>

			{/* Image */}
			<AnimatePresence mode="wait" initial={false}>
				<motion.img
					key={currentIndex}
					src={photo.src}
					alt={photo.alt}
					className="max-h-[85vh] max-w-[90vw] object-contain select-none"
					initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
					transition={{
						duration: 0.25,
						ease: [0.22, 1, 0.36, 1] as const,
					}}
					onClick={(e) => e.stopPropagation()}
					draggable={false}
				/>
			</AnimatePresence>

			{/* Next */}
			<button
				type="button"
				onClick={(e) => {
					e.stopPropagation();
					goNext();
				}}
				className="absolute right-4 md:right-8 z-10 w-12 h-12 flex items-center justify-center border border-rule hover:border-gold/50 text-warm hover:text-cream transition-colors duration-300 bg-night/60 backdrop-blur-sm"
				aria-label="Next image"
			>
				<ChevronRightIcon className="w-5 h-5" />
			</button>

			{/* Counter */}
			<div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-mute tabular-nums tracking-wider">
				{String(currentIndex + 1).padStart(2, "0")} /{" "}
				{String(photos.length).padStart(2, "0")}
			</div>
		</motion.div>
	);
}
