import { useState } from "react";
import { exampleScenarios } from "@/data/exampleScenarios";

export default function ExampleScenarioShowcase() {
	const [activeScenarioId, setActiveScenarioId] = useState(
		exampleScenarios[0].id,
	);
	const activeScenario =
		exampleScenarios.find((scenario) => scenario.id === activeScenarioId) ??
		exampleScenarios[0];

	return (
		<section className="border-b border-rule-light px-6 py-18 lg:px-8 lg:py-22">
			<div className="mx-auto max-w-6xl space-y-8">
				<div className="max-w-3xl space-y-4">
					<p className="label-text">Example flow</p>
					<h2 className="text-4xl md:text-5xl">
						What a believable brief and match actually looks like.
					</h2>
					<p className="max-w-2xl text-base text-dim md:text-lg">
						These examples show how Houz2Home translates a homeowner
						conversation into a brief a contractor can trust.
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
					<div className="space-y-4">
						{exampleScenarios.map((scenario) => {
							const isActive = scenario.id === activeScenario.id;

							return (
								<button
									className={`w-full rounded-[1.5rem] border px-5 py-5 text-left transition ${isActive ? "border-gold bg-white" : "border-rule-light bg-white/70 hover:border-gold/60"}`}
									key={scenario.id}
									onClick={() => setActiveScenarioId(scenario.id)}
									type="button"
								>
									<p className="label-text">{scenario.homeownerName}</p>
									<h3 className="mt-3 text-[2rem] leading-tight">
										{scenario.projectType}
									</h3>
									<p className="mt-2 text-sm uppercase tracking-[0.14em] text-mute">
										{scenario.locationLabel} • {scenario.qualityTier}
									</p>
									<p className="mt-3 text-base text-dim">
										{scenario.projectSummary}
									</p>
								</button>
							);
						})}
					</div>

					<div className="overflow-hidden border border-rule-light bg-white/80 shadow-[0_18px_50px_rgba(17,17,17,0.06)]">
						<img
							alt={`${activeScenario.projectType} supporting renovation view`}
							className="aspect-[4/3] w-full object-cover"
							src={activeScenario.projectImage}
						/>
						<div className="grid gap-6 p-6 lg:grid-cols-[0.95fr_1.05fr]">
							<div>
								<p className="label-text">Homeowner brief</p>
								<h3 className="mt-3 text-3xl">
									{activeScenario.homeownerName}
								</h3>
								<p className="mt-3 text-sm uppercase tracking-[0.14em] text-mute">
									{activeScenario.locationLabel}
								</p>
								<p className="mt-4 text-lg text-deep">
									{activeScenario.projectSummary}
								</p>
								<div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
									<p className="rounded-[1.2rem] border border-rule-light bg-soft/70 px-4 py-3 text-sm text-dim">
										{activeScenario.budgetPosture}
									</p>
									<p className="rounded-[1.2rem] border border-rule-light bg-soft/70 px-4 py-3 text-sm text-dim">
										{activeScenario.timing}
									</p>
									<p className="rounded-[1.2rem] border border-rule-light bg-soft/70 px-4 py-3 text-sm text-dim">
										{activeScenario.decisionStyle}
									</p>
								</div>
							</div>

							<div className="border-t border-rule-light pt-2 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
								<p className="label-text">Matched builder</p>
								<h3 className="mt-3 text-3xl">{activeScenario.builderName}</h3>
								<p className="mt-3 text-base text-dim">
									{activeScenario.builderSpecialty}
								</p>
								<p className="mt-2 text-sm uppercase tracking-[0.14em] text-mute">
									{activeScenario.builderLeadTime}
								</p>
								<p className="mt-3 text-sm text-dim">
									{activeScenario.builderStyle}
								</p>
								<ul className="mt-5 space-y-3">
									{activeScenario.matchReasons.map((reason) => (
										<li
											className="border-t border-rule-light pt-3 text-sm text-dim"
											key={reason}
										>
											{reason}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
