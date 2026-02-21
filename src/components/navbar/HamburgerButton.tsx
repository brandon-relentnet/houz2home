import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface HamburgerButtonProps {
	menuOpen: boolean;
	toggleMenu: () => void;
}

export default function HamburgerButton({
	menuOpen,
	toggleMenu,
}: HamburgerButtonProps) {
	return (
		<button
			type="button"
			className="md:hidden p-2 text-cream/70 hover:text-gold transition-colors duration-300"
			onClick={toggleMenu}
			aria-label={menuOpen ? "Close menu" : "Open menu"}
		>
			{menuOpen ? (
				<XMarkIcon className="h-6 w-6" />
			) : (
				<Bars3Icon className="h-6 w-6" />
			)}
		</button>
	);
}
