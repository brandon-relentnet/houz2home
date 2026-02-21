import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface NavLinkItemProps {
	href: string;
	currentPath: string;
	children: ReactNode;
}

export default function NavLinkItem({
	href,
	currentPath,
	children,
}: NavLinkItemProps) {
	const isActive = currentPath === href;

	return (
		<li>
			<Link
				to={href}
				className={`block px-5 py-3 md:py-2 text-[0.8rem] font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${
					isActive ? "text-gold" : "text-cream/70 hover:text-cream"
				}`}
			>
				{children}
			</Link>
		</li>
	);
}
