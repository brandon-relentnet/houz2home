import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import NavLinks from "./NavLinks";
import Socials from "./Socials";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen((prev) => !prev);

	return (
		<nav className="flex fixed w-full top-0 h-20 px-8 bg-mantle shadow items-center justify-between z-50">
			<div className="flex items-center space-x-4 flex-1">
				<Socials />
			</div>
			<div className="flex justify-center flex-2 space-x-6">
				<HamburgerButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
				<NavLinks menuOpen={menuOpen} />
			</div>
			<div className="flex justify-end items-center flex-1" />
		</nav>
	);
}
