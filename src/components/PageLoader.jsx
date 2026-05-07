export default function PageLoader() {
	return (
		<section
			aria-live="polite"
			aria-busy="true"
			className="flex min-h-[60vh] items-center justify-center px-6 py-20"
		>
			<div className="max-w-md space-y-5 text-center">
				<p className="label-text">Houz2Home</p>
				<h1 className="text-4xl md:text-5xl">
					Loading the guided intake experience.
				</h1>
				<p className="text-base text-dim md:text-lg">
					Preparing the next step for homeowners, vetted contractor review, and
					the operating view behind each qualified opportunity.
				</p>
				<span className="sr-only">Loading the current route.</span>
				<div className="mx-auto h-1.5 w-28 overflow-hidden rounded-full bg-white/80">
					<div className="h-full w-1/2 animate-pulse rounded-full bg-gold" />
				</div>
			</div>
		</section>
	);
}
