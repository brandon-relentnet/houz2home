import { Link } from "@tanstack/react-router";
import Logo from "@/components/Logo";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-rule">
			<div className="max-w-[90rem] mx-auto px-6 md:px-10 py-16">
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
					<div className="flex items-center gap-4">
						<Logo className="w-14 h-14 text-cream" />
						<div>
							<span className="block text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-cream">
								Houz2Home
							</span>
							<span className="block text-sm text-warm mt-0.5">
								The difference is in the details.
							</span>
						</div>
					</div>

					<nav className="flex gap-8">
						<Link
							to="/"
							className="text-sm text-warm hover:text-cream transition-colors"
						>
							Home
						</Link>
						<Link
							to="/about"
							className="text-sm text-warm hover:text-cream transition-colors"
						>
							About
						</Link>
						<Link
							to="/projects"
							className="text-sm text-warm hover:text-cream transition-colors"
						>
							Projects
						</Link>
						<Link
							to="/contact"
							className="text-sm text-warm hover:text-cream transition-colors"
						>
							Contact
						</Link>
					</nav>
				</div>

				<div className="mt-12 pt-8 border-t border-rule flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-xs text-mute mb-0">
						&copy; {currentYear} Houz2Home Renovations, LLC. All rights
						reserved.
					</p>
					<p className="text-xs text-mute mb-0">Alpharetta, GA</p>
				</div>
			</div>
		</footer>
	);
}
