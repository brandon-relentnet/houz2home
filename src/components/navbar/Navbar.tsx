import { useEffect, useState } from "react";
import HamburgerButton from "./HamburgerButton";
import NavLinks from "./NavLinks";
import Socials from "./Socials";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const toggleMenu = () => setMenuOpen((prev) => !prev);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed w-full top-0 z-50 border-b transition-all duration-500 ${
				scrolled
					? "bg-deep/95 backdrop-blur-md border-rule"
					: "bg-transparent border-transparent"
			}`}
		>
			<div className="flex items-center justify-between h-20 px-6 md:px-10 max-w-[90rem] mx-auto">
				<Socials />
				<div className="flex items-center">
					<HamburgerButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
					<NavLinks menuOpen={menuOpen} />
				</div>
			</div>
		</nav>
	);
}
