import { Link } from "react-router-dom";

/**
 * @typedef {"primary" | "secondary" | "ghost"} BrandButtonVariant
 */

/**
 * @typedef BrandButtonProps
 * @property {import("react").ReactNode} children
 * @property {string=} className
 * @property {string=} to
 * @property {"button" | "submit" | "reset"=} type
 * @property {BrandButtonVariant=} variant
 */

/**
 * @param {BrandButtonVariant} variant
 * @param {string} className
 */
function getButtonClasses(variant, className) {
	const baseClasses =
		"inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold tracking-[0.14em] uppercase transition-colors duration-200";
	/** @type {Record<BrandButtonVariant, string>} */
	const variantClasses = {
		primary:
			"border-gold bg-gold text-night hover:border-gold-light hover:bg-gold-light",
		secondary:
			"border-rule bg-transparent text-deep hover:border-gold hover:text-gold",
		ghost: "border-transparent bg-transparent text-deep hover:text-gold",
	};

	return `${baseClasses} ${variantClasses[variant] ?? variantClasses.primary} ${className}`.trim();
}

/** @param {BrandButtonProps & Record<string, unknown>} props */
export default function BrandButton({
	children,
	className = "",
	to,
	type = "button",
	variant = "primary",
	...props
}) {
	const classes = getButtonClasses(variant, className);

	if (to) {
		return (
			<Link className={classes} to={to} {...props}>
				{children}
			</Link>
		);
	}

	return (
		<button className={classes} type={type} {...props}>
			{children}
		</button>
	);
}
