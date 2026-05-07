import { useState } from "react";
import { exampleScenarios } from "@/data/exampleScenarios";

export default function ExampleBriefRail() {
	const [activeScenarioId, setActiveScenarioId] = useState(
		exampleScenarios[0].id,
	);
	const activeScenario =
		exampleScenarios.find((scenario) => scenario.id === activeScenarioId) ??
		exampleScenarios[0];

	return (
		<aside className="rounded-[2rem] border border-rule bg-deep p-6 text-cream shadow-[0_24px_70px_rgba(17,17,17,0.18)]">
			<div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
				<div className="space-y-5">
					<div>
						<p className="label-text">Example brief</p>
						<h3 className="mt-3 text-3xl text-cream">
							What a strong handoff looks like.
						</h3>
						<p className="mt-3 text-base text-warm">
							These examples are instructional only. They show the level of
							clarity Houz2Home is trying to capture before routing a lead.
						</p>
					</div>

					<div className="flex flex-wrap gap-2">
						{exampleScenarios.map((scenario) => (
							<button
								className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${scenario.id === activeScenario.id ? "border-gold bg-gold text-cream" : "border-rule text-warm"}`}
								key={scenario.id}
								onClick={() => setActiveScenarioId(scenario.id)}
								type="button"
							>
								{scenario.homeownerName.split(" ")[0]}
							</button>
						))}
					</div>
				</div>

				<div className="grid gap-5 sm:grid-cols-[0.92fr_1.08fr]">
					<img
						alt={`${activeScenario.projectType} supporting renovation view`}
						className="h-48 w-full rounded-[1.5rem] object-cover"
						src={activeScenario.projectImage}
					/>

					<div className="space-y-3">
						<h4 className="text-2xl text-cream">
							{activeScenario.homeownerName}
						</h4>
						<p className="text-sm text-warm">
							{activeScenario.projectType} • {activeScenario.sqFt} sq ft •{" "}
							{activeScenario.qualityTier}
						</p>
						<p className="text-sm leading-7 text-warm">
							{activeScenario.projectSummary}
						</p>
						<p className="text-sm text-warm">
							Builder match: {activeScenario.builderName}
						</p>
					</div>
				</div>
			</div>
		</aside>
	);
}
