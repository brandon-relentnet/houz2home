import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 500);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<AnimatePresence>
			{visible && (
				<motion.button
					type="button"
					onClick={scrollToTop}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.3 }}
					className="fixed bottom-8 right-8 z-50 w-11 h-11 flex items-center justify-center bg-gold text-night hover:bg-gold-light transition-colors duration-300"
					aria-label="Scroll to top"
				>
					<ChevronUpIcon className="w-5 h-5 stroke-[2.5]" />
				</motion.button>
			)}
		</AnimatePresence>
	);
}
