import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [dark, setDark] = useState(() =>
		document.documentElement.classList.contains("dark"),
	);

	useEffect(() => {
		const root = document.documentElement;
		if (dark) {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
		localStorage.setItem("theme", dark ? "dark" : "light");
	}, [dark]);

	return (
		<motion.button
			type="button"
			onClick={() => setDark((d) => !d)}
			className="fixed bottom-8 left-8 z-50 w-10 h-10 flex items-center justify-center border border-rule hover:border-gold/50 bg-deep/90 backdrop-blur-sm text-warm hover:text-cream transition-colors duration-300"
			aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4, delay: 1.5 }}
		>
			<AnimatePresence mode="wait" initial={false}>
				{dark ? (
					<motion.span
						key="sun"
						initial={{ opacity: 0, rotate: -90, scale: 0 }}
						animate={{ opacity: 1, rotate: 0, scale: 1 }}
						exit={{ opacity: 0, rotate: 90, scale: 0 }}
						transition={{ duration: 0.15 }}
						className="flex items-center justify-center"
					>
						<SunIcon className="w-[1.125rem] h-[1.125rem]" />
					</motion.span>
				) : (
					<motion.span
						key="moon"
						initial={{ opacity: 0, rotate: 90, scale: 0 }}
						animate={{ opacity: 1, rotate: 0, scale: 1 }}
						exit={{ opacity: 0, rotate: -90, scale: 0 }}
						transition={{ duration: 0.15 }}
						className="flex items-center justify-center"
					>
						<MoonIcon className="w-[1.125rem] h-[1.125rem]" />
					</motion.span>
				)}
			</AnimatePresence>
		</motion.button>
	);
}
