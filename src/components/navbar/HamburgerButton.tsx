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
			className="block text-4xl md:hidden p-2 text-text hover:text-subtext0 transition"
			onClick={toggleMenu}
			aria-label={menuOpen ? "Close Menu" : "Open Menu"}
		>
			{menuOpen ? (
				<XMarkIcon className="h-8 w-8" />
			) : (
				<Bars3Icon className="h-8 w-8" />
			)}
		</button>
	);
}
