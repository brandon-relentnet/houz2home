import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface NavLinkItemProps {
	href: string;
	currentPath: string;
	children: ReactNode;
	menuOpen?: boolean;
}

export default function NavLinkItem({
	href,
	currentPath,
	children,
	menuOpen,
}: NavLinkItemProps) {
	return (
		<li>
			<Link
				to={href}
				aria-label={`${children} link`}
				className={`block font-bold px-4 py-2 md:p-0 active:text-accent text-xl transition-colors ${menuOpen ? "text-center" : ""} ${
					currentPath === href
						? "text-accent hover:text-accent"
						: "hover:text-subtext0"
				}`}
			>
				{children}
			</Link>
		</li>
	);
}
