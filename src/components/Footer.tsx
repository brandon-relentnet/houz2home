import { Link } from "@tanstack/react-router";
import Logo from "@/components/Logo";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-rule">
			<div className="max-w-[90rem] mx-auto px-6 md:px-10 py-16">
				{/* Top row: brand + nav + social */}
				<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
					{/* Brand */}
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

					{/* Nav */}
					<nav className="flex flex-wrap gap-x-8 gap-y-3">
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

					{/* Social */}
					<div className="flex items-center gap-5">
						<a
							href="https://www.instagram.com/houz2home"
							target="_blank"
							rel="noopener noreferrer"
							className="text-mute hover:text-gold transition-colors duration-300"
							aria-label="Follow us on Instagram"
						>
							<svg
								className="w-5 h-5"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								role="img"
								aria-label="Instagram icon"
							>
								<rect x="2" y="2" width="20" height="20" rx="5" />
								<circle cx="12" cy="12" r="5" />
								<circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
							</svg>
						</a>
						<a
							href="https://www.facebook.com/houz2home"
							target="_blank"
							rel="noopener noreferrer"
							className="text-mute hover:text-gold transition-colors duration-300"
							aria-label="Follow us on Facebook"
						>
							<svg
								className="w-5 h-5"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								role="img"
								aria-label="Facebook icon"
							>
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
							</svg>
						</a>
						<a
							href="https://www.houzz.com/pro/houz2home"
							target="_blank"
							rel="noopener noreferrer"
							className="text-mute hover:text-gold transition-colors duration-300"
							aria-label="View our profile on Houzz"
						>
							<svg
								className="w-5 h-5"
								viewBox="0 0 24 24"
								fill="currentColor"
								role="img"
								aria-label="Houzz icon"
							>
								<path d="M12 2L5 6v6l7 4 7-4V6l-7-4zM5 14v4l7 4 7-4v-4l-7 4-7-4z" />
							</svg>
						</a>
					</div>
				</div>

				{/* Contact details row */}
				<div className="mt-10 pt-8 border-t border-rule flex flex-col sm:flex-row flex-wrap gap-x-10 gap-y-3">
					<a
						href="tel:+17707143389"
						className="text-sm text-warm hover:text-gold transition-colors"
					>
						(770) 714-3389
					</a>
					<a
						href="mailto:bharris@houz2home.com"
						className="text-sm text-warm hover:text-gold transition-colors"
					>
						bharris@houz2home.com
					</a>
					<span className="text-sm text-mute">
						Mon&ndash;Fri, 9am&ndash;5pm EST
					</span>
				</div>

				{/* Bottom row: copyright + location */}
				<div className="mt-6 pt-6 border-t border-rule flex flex-col sm:flex-row items-center justify-between gap-4">
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
