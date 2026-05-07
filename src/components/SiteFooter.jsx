import { Link } from "react-router-dom";

const footerLinks = [
	{ label: "Home", to: "/" },
	{ label: "Estimator", to: "/estimator" },
	{ label: "Admin", to: "/admin" },
];

export default function SiteFooter() {
	return (
		<footer className="border-t border-rule-light bg-white/70">
			<div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
				<div className="space-y-5">
					<img
						alt="Houz2Home"
						className="h-12 w-auto"
						src="/images/logo/h2h_logo_lm.webp"
					/>
					<p className="max-w-2xl text-base text-dim">
						Houz2Home gives homeowners a premium intake path and gives operators
						a cleaner way to vet, price, and route renovation opportunities
						before contractor outreach begins.
					</p>
				</div>

				<div className="space-y-4 lg:justify-self-end">
					<p className="label-text">Routes</p>
					<div className="flex flex-col gap-3 text-sm font-medium text-deep">
						{footerLinks.map((item) => (
							<Link
								className="transition-colors hover:text-gold"
								key={item.to}
								to={item.to}
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
