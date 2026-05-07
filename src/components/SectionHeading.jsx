/**
 * @typedef SectionHeadingProps
 * @property {string} label
 * @property {string} title
 * @property {string=} description
 * @property {string=} className
 * @property {import("react").ReactNode=} children
 */

/** @param {SectionHeadingProps} props */
export default function SectionHeading({
	label,
	title,
	description,
	className = "",
	children,
}) {
	return (
		<div
			className={`flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between ${className}`.trim()}
		>
			<div className="max-w-3xl space-y-3">
				<p className="label-text">{label}</p>
				<h2 className="text-4xl md:text-5xl">{title}</h2>
				{description ? (
					<p className="max-w-2xl text-base text-dim md:text-lg">
						{description}
					</p>
				) : null}
			</div>

			{children ? <div className="shrink-0">{children}</div> : null}
		</div>
	);
}
