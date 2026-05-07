import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import BrandButton from "@/components/BrandButton";

const navigationItems = [
	{ label: "Home", to: "/" },
	{ label: "Estimator", to: "/estimator" },
	{ label: "Admin", to: "/admin" },
];

/** @param {import("react-router-dom").NavLinkRenderProps} props */
function getNavLinkClassName({ isActive }) {
	return `text-sm font-medium transition-colors ${isActive ? "text-gold-light" : "text-cream hover:text-gold-light"}`;
}

export default function SiteHeader() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { pathname } = useLocation();
	const previousPathnameRef = useRef(pathname);

	useEffect(() => {
		if (previousPathnameRef.current !== pathname) {
			setMenuOpen(false);
			previousPathnameRef.current = pathname;
		}
	}, [pathname]);

	return (
		<header className="sticky top-0 z-40 border-b border-rule bg-deep/95 backdrop-blur">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
				<Link
					aria-label="Houz2Home home"
					className="shrink-0"
					to="/"
					onClick={() => setMenuOpen(false)}
				>
					<img
						alt=""
						className="h-10 w-auto"
						src="/images/logo/h2h_logo_dm.webp"
					/>
				</Link>

				<nav className="hidden items-center gap-8 lg:flex">
					{navigationItems.map((item) => (
						<NavLink className={getNavLinkClassName} key={item.to} to={item.to}>
							{item.label}
						</NavLink>
					))}
				</nav>

				<div className="hidden items-center gap-3 lg:flex">
					<BrandButton className="text-cream hover:text-cream" to="/estimator">
						Start Intake
					</BrandButton>
				</div>

				<button
					aria-expanded={menuOpen}
					aria-label={
						menuOpen ? "Close navigation menu" : "Open navigation menu"
					}
					className="inline-flex items-center justify-center rounded-full border border-rule p-3 text-cream transition-colors hover:border-gold hover:text-gold-light lg:hidden"
					onClick={() => setMenuOpen((open) => !open)}
					type="button"
				>
					{menuOpen ? (
						<X className="size-5" size={20} />
					) : (
						<Menu className="size-5" size={20} />
					)}
				</button>
			</div>

			{menuOpen ? (
				<div className="border-t border-rule bg-deep lg:hidden">
					<nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5">
						{navigationItems.map((item) => (
							<NavLink
								className={getNavLinkClassName}
								key={item.to}
								onClick={() => setMenuOpen(false)}
								to={item.to}
							>
								{item.label}
							</NavLink>
						))}
						<BrandButton
							className="mt-2 w-full text-center text-cream hover:text-cream"
							onClick={() => setMenuOpen(false)}
							to="/estimator"
						>
							Start Intake
						</BrandButton>
					</nav>
				</div>
			) : null}
		</header>
	);
}
