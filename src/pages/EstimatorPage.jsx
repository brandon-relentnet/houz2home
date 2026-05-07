import BrandButton from "@/components/BrandButton";
import EstimatorWizard from "@/components/EstimatorWizard";
import ExampleBriefRail from "@/components/ExampleBriefRail";

const flowHighlights = [
	{
		title: "Three guided steps",
		description:
			"The intake now moves in sequence: project type, scope math, then homeowner details for review.",
	},
	{
		title: "Shared pricing logic",
		description:
			"Each estimate reads from the same in-memory pricing contract the admin tools will use later in the MVP.",
	},
	{
		title: "Immediate pipeline write",
		description:
			"Submission appends a normalized lead directly into shared state so operations can act on it without a reload.",
	},
];

export default function EstimatorPage() {
	return (
		<div>
			<section className="border-b border-rule-light bg-white/55 px-6 py-18 lg:px-8 lg:py-24">
				<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
					<div className="space-y-6">
						<p className="label-text">Estimator Route</p>
						<h1 className="max-w-4xl text-5xl md:text-6xl">
							Guide the homeowner, price the project, and route a cleaner lead.
						</h1>
						<p className="max-w-3xl text-lg text-dim md:text-xl">
							This intake flow now acts like an operational front desk. It turns
							a few critical decisions into a shared estimate and a normalized
							lead entry before the admin review begins.
						</p>
					</div>

					<div className="rounded-[2rem] border border-rule bg-deep p-8 text-cream shadow-[0_24px_70px_rgba(17,17,17,0.18)]">
						<p className="label-text">Operational read</p>
						<h2 className="mt-4 text-4xl text-cream">
							A calm homeowner experience should still produce decisive data.
						</h2>
						<p className="mt-4 text-base text-warm">
							The wizard is intentionally paced so every step improves
							downstream triage: valid square footage, declared finish
							expectations, and a contact record the team can act on
							immediately.
						</p>
						<div className="mt-6">
							<BrandButton className="text-cream hover:text-cream" to="/admin">
								See The Admin View
							</BrandButton>
						</div>
					</div>
				</div>
			</section>

			<section className="px-6 py-16 lg:px-8 lg:py-20">
				<div className="mx-auto max-w-6xl space-y-10">
					<div className="grid gap-4 md:grid-cols-3">
						{flowHighlights.map((highlight) => (
							<article
								className="rounded-[1.5rem] border border-rule-light bg-white/82 p-5"
								key={highlight.title}
							>
								<h2 className="text-[2rem] leading-tight">{highlight.title}</h2>
								<p className="mt-3 text-sm text-dim">{highlight.description}</p>
							</article>
						))}
					</div>

					<div className="space-y-4">
						<p className="label-text">Intake flow</p>
						<h2 className="text-4xl md:text-5xl">
							Move from a homeowner conversation to a shared pipeline record.
						</h2>
						<p className="max-w-3xl text-base text-dim md:text-lg">
							Each step is gated so the estimate stays defensible and the lead
							entering the pipeline already carries the fields later tasks will
							use.
						</p>
					</div>

					<div className="space-y-6">
						<EstimatorWizard />
						<ExampleBriefRail />
					</div>
				</div>
			</section>
		</div>
	);
}
