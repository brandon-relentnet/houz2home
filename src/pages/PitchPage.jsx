import BrandButton from "@/components/BrandButton";
import PitchCharts from "@/components/PitchCharts";
import SectionHeading from "@/components/SectionHeading";

const strategicSignals = [
	"Document the first conversation so qualification standards live in the workflow, not only in the founder's head.",
	"Use the estimator and admin review steps to turn pricing logic, scope fit, and contractor matching into a repeatable operating system.",
	"Create a more transferable company by making handoff quality auditable, coachable, and less dependent on heroic founder memory.",
];

const skimNotes = [
	"The strongest founder argument is not 'more leads.' It is 'better-documented judgment at the front of the funnel.'",
	"Every chart below points back to one strategic asset: a premium intake layer that stores operational knowledge before contractor outreach begins.",
	"If Houz2Home can make qualification, pricing discipline, and routing more explicit, the business becomes easier to scale and easier to transition.",
];

export default function PitchPage() {
	return (
		<div className="bg-night text-cream">
			<section className="border-b border-rule px-6 py-18 lg:px-8 lg:py-24">
				<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
					<div className="space-y-7">
						<div className="space-y-5">
							<p className="label-text">Hidden Strategic Route</p>
							<h1 className="max-w-4xl text-5xl text-cream md:text-6xl lg:text-[5rem]">
								The real asset is not lead flow alone. It is documented
								judgment.
							</h1>
							<p className="max-w-3xl text-lg text-warm md:text-xl">
								<span className="brand-wordmark">Houz2Home</span> becomes more
								valuable when the founder's intake instinct turns into a visible
								system: structured homeowner briefs, explicit routing rules, and
								cleaner handoffs before a contractor ever gets looped in.
							</p>
						</div>

						<div className="rounded-[1.75rem] border border-rule bg-deep/70 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
							<p className="label-text text-[0.72rem] text-gold-light">
								Strategic read
							</p>
							<div className="mt-5 space-y-4">
								{skimNotes.map((note) => (
									<p
										className="border-t border-rule pt-4 text-base text-warm first:border-t-0 first:pt-0"
										key={note}
									>
										{note}
									</p>
								))}
							</div>
						</div>
					</div>

					<div className="rounded-[2rem] border border-rule bg-deep/80 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.26)]">
						<p className="label-text">Why this matters</p>
						<div className="mt-6 space-y-5">
							{strategicSignals.map((point) => (
								<p
									className="border-t border-rule pt-5 text-base text-warm first:border-t-0 first:pt-0 md:text-lg"
									key={point}
								>
									{point}
								</p>
							))}
						</div>

						<p className="mt-8 border-t border-rule pt-5 text-sm uppercase tracking-[0.18em] text-mute">
							This page stays off the main navigation because it is for founder
							strategy, not for homeowners or contractors.
						</p>
					</div>
				</div>
			</section>

			<section className="border-b border-rule bg-deep px-6 py-18 lg:px-8 lg:py-20">
				<div className="mx-auto max-w-6xl space-y-10">
					<SectionHeading
						description="Skim the visuals and the conclusion should still hold: the more Houz2Home captures qualification logic inside the intake workflow, the less the business depends on founder memory to produce premium handoffs."
						label="Founder Narrative"
						title="Three signals, one strategic point: make the operating model visible."
					/>

					<PitchCharts />
				</div>
			</section>

			<section className="px-6 py-18 lg:px-8 lg:py-24">
				<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
					<div className="space-y-5">
						<p className="label-text">Transition Thesis</p>
						<h2 className="max-w-3xl text-4xl text-cream md:text-5xl">
							A stronger business is one that can hand off its front-end
							judgment.
						</h2>
						<p className="max-w-3xl text-base text-warm md:text-lg">
							In founder-heavy execution, quality often lives inside ad hoc
							calls, memory, and project-by-project instincts. In the
							<span className="brand-wordmark"> Houz2Home</span> model, that
							same quality gets pushed upstream into the estimator, the admin
							review layer, and the contractor handoff brief. That shift does
							not remove judgment. It makes judgment teachable.
						</p>
						<p className="max-w-3xl text-base text-warm md:text-lg">
							That is why the intake experience matters strategically. It is the
							place where pricing discipline, scope clarity, and routing
							standards can be documented early enough to improve margins today
							and make the business more transferable tomorrow.
						</p>

						<div className="grid gap-4 border-t border-rule pt-6 sm:grid-cols-3">
							<div>
								<p className="label-text">Outcome 01</p>
								<p className="mt-3 text-base text-warm">
									Cleaner qualification standards before contractor outreach.
								</p>
							</div>
							<div>
								<p className="label-text">Outcome 02</p>
								<p className="mt-3 text-base text-warm">
									Less founder dependence in the earliest pricing and routing
									work.
								</p>
							</div>
							<div>
								<p className="label-text">Outcome 03</p>
								<p className="mt-3 text-base text-warm">
									A more transferable operating model with clearer decision
									rules.
								</p>
							</div>
						</div>
					</div>

					<div className="rounded-[2rem] border border-rule bg-deep/72 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.24)] lg:sticky lg:top-24">
						<p className="label-text">Takeaway</p>
						<p className="mt-5 text-2xl text-cream md:text-3xl">
							Premium intake is not just a UX layer. It is how
							<span className="brand-wordmark"> Houz2Home</span> turns founder
							pattern recognition into a more scalable and more transition-ready
							operating asset.
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<BrandButton to="/admin">Return To Admin</BrandButton>
							<BrandButton
								className="!border-rule !text-cream hover:!border-gold-light hover:!text-gold-light"
								to="/"
								variant="secondary"
							>
								Back To Houz2Home
							</BrandButton>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
