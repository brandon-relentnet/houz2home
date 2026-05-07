import { motion, useReducedMotion } from "motion/react";
import BrandButton from "@/components/BrandButton";
import ExampleScenarioShowcase from "@/components/ExampleScenarioShowcase";

const statItems = [
	{
		figure: "01",
		label: "Guided intake",
		copy: "Homeowners arrive through a structured brief instead of a loose contact form.",
	},
	{
		figure: "02",
		label: "Vetted routing",
		copy: "Scope, timing, and seriousness are reviewed before the contractor handoff.",
	},
	{
		figure: "03",
		label: "Cleaner operations",
		copy: "Better lead quality reduces guesswork and lowers founder dependency.",
	},
];

const processSteps = [
	{
		number: "01",
		title: "Homeowner clarity",
		copy: "The estimator turns a vague renovation idea into a clearer brief with project type, goals, timing, and finish expectations.",
	},
	{
		number: "02",
		title: "Internal vetting",
		copy: "Houz2Home reviews the submission for scope fit, seriousness, and routing readiness before anyone gets introduced.",
	},
	{
		number: "03",
		title: "Better contractor match",
		copy: "Vetted contractors receive warmer opportunities with better framing, fewer mismatches, and a stronger starting conversation.",
	},
];

const comparisonItems = [
	{
		title: "Typical lead generation",
		points: [
			"Rewards volume before fit.",
			"Leaves scope definition to scattered follow-up calls.",
			"Keeps routing knowledge trapped with the founder.",
		],
	},
	{
		title: "The brand model",
		points: [
			"Creates a premium front door for serious renovation projects.",
			"Builds clearer homeowner scope before contractor handoff.",
			"Turns matchmaking and vetting into an operating system, not a heroic manual process.",
		],
	},
];

/** @type {[number, number, number, number]} */
const EASE = [0.22, 1, 0.36, 1];

export default function HomePage() {
	const shouldReduceMotion = useReducedMotion();
	const sectionReveal = shouldReduceMotion
		? {
				initial: false,
				whileInView: undefined,
				transition: undefined,
			}
		: {
				initial: { opacity: 0, y: 28 },
				whileInView: { opacity: 1, y: 0 },
				transition: { duration: 0.6, ease: EASE },
			};
	const sectionViewport = shouldReduceMotion
		? undefined
		: { once: true, amount: 0.25 };
	const heroContentAnimation = shouldReduceMotion
		? {
				initial: false,
				animate: undefined,
				transition: undefined,
			}
		: {
				initial: { opacity: 0, y: 36 },
				animate: { opacity: 1, y: 0 },
				transition: { duration: 0.75, ease: EASE },
			};
	const heroPanelAnimation = shouldReduceMotion
		? {
				initial: false,
				animate: undefined,
				transition: undefined,
			}
		: {
				initial: { opacity: 0, x: 30 },
				animate: { opacity: 1, x: 0 },
				transition: {
					duration: 0.8,
					delay: 0.12,
					ease: EASE,
				},
			};

	return (
		<div className="bg-soft">
			<section className="overflow-hidden border-b border-rule-light px-6 py-18 lg:px-8 lg:py-24">
				<div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
					<motion.div {...heroContentAnimation} className="space-y-8">
						<div className="space-y-5">
							<p className="label-text">Balanced Pivot</p>
							<h1 className="max-w-4xl text-5xl md:text-7xl lg:text-[5.4rem]">
								The trusted front door for serious renovation projects.
							</h1>
							<p className="max-w-2xl text-lg text-dim md:text-xl">
								Houz2Home gives homeowners a more guided first step and gives
								contractors a better-qualified introduction. The result is
								clearer scope, stronger routing, and an operating model that
								scales past founder memory.
							</p>
						</div>

						<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
							<BrandButton to="/estimator">Start The Estimator</BrandButton>
							<BrandButton to="/admin" variant="secondary">
								View The Admin Flow
							</BrandButton>
						</div>

						<p className="max-w-2xl border-l border-gold pl-5 text-sm uppercase tracking-[0.18em] text-mute">
							Not a prettier homepage. A better intake, vetting, and matchmaking
							engine for premium residential work.
						</p>
					</motion.div>

					<motion.div
						{...heroPanelAnimation}
						className="border border-rule-light bg-white/70 p-7 sm:p-9"
					>
						<div className="flex items-start justify-between gap-4 border-b border-rule-light pb-5">
							<div>
								<p className="label-text">Project brief</p>
								<h2 className="mt-3 text-3xl md:text-4xl">
									A sharper handoff starts here.
								</h2>
							</div>
							<p className="text-right text-sm uppercase tracking-[0.18em] text-mute">
								Premium intake
								<br />
								Premium match
							</p>
						</div>

						<div className="space-y-6 py-6">
							<div className="grid gap-2 sm:grid-cols-[0.9fr_1.1fr] sm:gap-6">
								<p className="label-text text-[0.7rem] text-mute">
									Homeowner need
								</p>
								<p className="text-base text-dim">
									Kitchen and ground-floor renovation with realistic budget,
									defined timeline, and clear decision-maker alignment.
								</p>
							</div>
							<div className="grid gap-2 border-t border-rule-light pt-6 sm:grid-cols-[0.9fr_1.1fr] sm:gap-6">
								<p className="label-text text-[0.7rem] text-mute">
									Before routing
								</p>
								<p className="text-base text-dim">
									Houz2Home checks scope fit, seriousness, location, and handoff
									readiness so the contractor receives context instead of
									guesswork.
								</p>
							</div>
						</div>

						<p className="border-t border-rule-light pt-5 text-sm text-mute">
							The platform becomes the front desk, the brief, and the first
							layer of qualification before founder intervention is needed.
						</p>
					</motion.div>
				</div>
			</section>

			<motion.section
				{...sectionReveal}
				viewport={sectionViewport}
				className="border-b border-rule-light bg-deep px-6 py-10 text-cream lg:px-8"
			>
				<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 md:gap-6">
					{statItems.map((item) => (
						<div
							key={item.label}
							className="border-t border-rule pt-5 md:border-l md:border-t-0 md:pl-6 md:first:border-l-0 md:first:pl-0"
						>
							<p className="font-display text-5xl text-gold-light md:text-6xl">
								{item.figure}
							</p>
							<h2 className="mt-4 text-2xl text-cream">{item.label}</h2>
							<p className="mt-3 max-w-sm text-sm text-warm">{item.copy}</p>
						</div>
					))}
				</div>
			</motion.section>

			<ExampleScenarioShowcase />

			<motion.section
				{...sectionReveal}
				viewport={sectionViewport}
				className="border-b border-rule-light px-6 py-18 lg:px-8 lg:py-22"
			>
				<div className="mx-auto max-w-6xl space-y-10">
					<div className="max-w-3xl space-y-4">
						<p className="label-text">Process strip</p>
						<h2 className="text-4xl md:text-5xl">
							A cleaner sequence from homeowner intent to contractor match.
						</h2>
						<p className="max-w-2xl text-base text-dim md:text-lg">
							The MVP is designed to create better inputs before the handoff
							ever happens. That makes the downstream conversations faster,
							warmer, and easier to trust.
						</p>
					</div>

					<div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
						{processSteps.map((step) => (
							<article
								key={step.number}
								className="flex flex-col gap-5 border-t border-rule-light pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
							>
								<p className="font-display text-4xl text-gold">{step.number}</p>
								<div className="space-y-3">
									<h3 className="text-3xl">{step.title}</h3>
									<p className="text-base text-dim">{step.copy}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</motion.section>

			<motion.section
				{...sectionReveal}
				viewport={sectionViewport}
				className="border-b border-rule-light bg-[linear-gradient(180deg,rgba(184,138,59,0.08),rgba(244,239,231,0.96))] px-6 py-18 lg:px-8 lg:py-22"
			>
				<div className="mx-auto max-w-6xl space-y-10">
					<div className="max-w-4xl space-y-4">
						<p className="label-text">Manifesto</p>
						<h2 className="text-4xl md:text-5xl lg:text-6xl">
							<span className="brand-wordmark">Houz2Home</span> is building a
							better operating model, not just a better first impression.
						</h2>
						<p className="max-w-3xl text-base text-dim md:text-lg">
							The value is not cosmetic. Guided intake produces clearer scope.
							Clearer scope improves vetting. Better vetting improves routing.
							That shift turns renovation matchmaking into a repeatable system
							the business can trust and scale.
						</p>
					</div>

					<div className="grid gap-px overflow-hidden border border-rule-light bg-rule-light lg:grid-cols-2">
						{comparisonItems.map((item, index) => (
							<div
								key={item.title}
								className={
									index === 0
										? "bg-soft p-7 sm:p-9"
										: "bg-deep p-7 sm:p-9 text-cream"
								}
							>
								<p
									className={
										index === 0 ? "label-text" : "label-text text-gold-light"
									}
								>
									{index === 0 ? "Old model" : "Balanced pivot"}
								</p>
								<h3
									className={
										index === 0 ? "mt-4 text-3xl" : "mt-4 text-3xl text-cream"
									}
								>
									{index === 1 ? (
										<>
											The <span className="brand-wordmark">Houz2Home</span>{" "}
											model
										</>
									) : (
										item.title
									)}
								</h3>
								<div className="mt-6 space-y-4">
									{item.points.map((point) => (
										<p
											key={point}
											className={
												index === 0
													? "border-t border-rule-light pt-4 text-base text-dim"
													: "border-t border-rule pt-4 text-base text-warm"
											}
										>
											{point}
										</p>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</motion.section>

			<motion.section
				{...sectionReveal}
				viewport={sectionViewport}
				className="px-6 py-18 lg:px-8 lg:py-24"
			>
				<div className="mx-auto max-w-5xl border border-rule bg-white/75 p-8 text-center sm:p-12 lg:p-16">
					<p className="label-text">Final CTA</p>
					<h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl">
						Start with the intake that makes every next step better.
					</h2>
					<p className="mx-auto mt-5 max-w-3xl text-base text-dim md:text-lg">
						If <span className="brand-wordmark">Houz2Home</span> is going to
						become the trusted front door for premium renovation work, the first
						interaction has to do real operational work. The estimator is where
						that system begins.
					</p>
					<div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
						<BrandButton to="/estimator">Start The Estimator</BrandButton>
						<BrandButton to="/admin" variant="secondary">
							Open The Admin View
						</BrandButton>
					</div>
				</div>
			</motion.section>
		</div>
	);
}
