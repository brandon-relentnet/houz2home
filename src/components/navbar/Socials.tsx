import { Link } from "@tanstack/react-router";
import Logo from "@/components/Logo";

export default function Socials() {
	return (
		<Link to="/" className="flex items-center gap-3 group">
			<Logo className="w-12 h-12 text-cream transition-colors duration-300 group-hover:text-gold" />
			<span className="hidden sm:block text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-cream/70 transition-colors duration-300 group-hover:text-cream">
				Houz2Home
			</span>
		</Link>
	);
}
