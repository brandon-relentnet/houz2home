import { useRouterState } from "@tanstack/react-router";
import NavLinkItem from "./NavLinkItem";

interface NavLinksProps {
	menuOpen: boolean;
}

export default function NavLinks({ menuOpen }: NavLinksProps) {
	const location = useRouterState({ select: (s) => s.location });
	const currentPath = location.pathname;

	return (
		<ul
			className={`absolute top-full right-0 w-full md:w-auto md:relative md:flex md:gap-1 md:items-center
			bg-deep/98 backdrop-blur-md md:bg-transparent md:backdrop-blur-none
			border-b border-rule md:border-0 !ml-0
			transition-all duration-300 overflow-hidden
			${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
			md:max-h-none md:opacity-100 md:overflow-visible`}
		>
			<NavLinkItem href="/" currentPath={currentPath}>
				Home
			</NavLinkItem>
			<NavLinkItem href="/about" currentPath={currentPath}>
				About
			</NavLinkItem>
			<NavLinkItem href="/projects" currentPath={currentPath}>
				Projects
			</NavLinkItem>
			<NavLinkItem href="/contact" currentPath={currentPath}>
				Contact
			</NavLinkItem>
		</ul>
	);
}
