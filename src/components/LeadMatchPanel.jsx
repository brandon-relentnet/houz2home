import { getScenarioById } from "@/data/exampleScenarios";

/**
 * @typedef LeadMatchPanelProps
 * @property {import("@/context/GlobalContext").Lead | null} lead
 */

/** @param {LeadMatchPanelProps} props */
export default function LeadMatchPanel({ lead }) {
	if (!lead?.scenarioId) {
		return (
			<div className="rounded-[2rem] border border-rule bg-white/82 p-6 shadow-[0_18px_50px_rgba(17,17,17,0.06)]">
				<p className="label-text">Match detail</p>
				<h3 className="mt-4 text-3xl">No curated builder profile attached.</h3>
				<p className="mt-3 text-base text-dim">
					Example match detail appears for the seeded realism scenarios. Fresh
					estimator submissions still land in the shared pipeline normally.
				</p>
			</div>
		);
	}

	const scenario = getScenarioById(lead.scenarioId);

	if (!scenario) {
		return null;
	}

	return (
		<div className="overflow-hidden rounded-[2rem] border border-rule bg-white/88 shadow-[0_24px_70px_rgba(17,17,17,0.08)]">
			<div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
				<div className="border-b border-rule-light lg:border-r lg:border-b-0">
					<img
						alt={`${scenario.projectType} supporting renovation view`}
						className="h-44 w-full object-cover lg:h-full lg:min-h-[21rem]"
						src={scenario.projectImage}
					/>
				</div>
				<div className="grid gap-6 p-6 lg:grid-cols-[0.9fr_1.1fr]">
					<div>
						<p className="label-text">Selected homeowner</p>
						<h3 className="mt-3 text-3xl">{scenario.homeownerName}</h3>
						<p className="mt-3 text-base text-dim">{scenario.projectSummary}</p>
						<p className="mt-3 text-sm text-dim">{scenario.budgetPosture}</p>
						<p className="mt-2 text-sm text-dim">{scenario.timing}</p>
						<p className="mt-2 text-sm text-dim">{scenario.decisionStyle}</p>
					</div>

					<div className="border-t border-rule-light pt-2 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
						<p className="label-text">Builder recommendation</p>
						<h3 className="mt-3 text-3xl">{scenario.builderName}</h3>
						<p className="mt-3 text-base text-dim">
							{scenario.builderSpecialty}
						</p>
						<p className="mt-2 text-sm text-dim">{scenario.builderLeadTime}</p>
						<p className="mt-2 text-sm text-dim">{scenario.builderStyle}</p>
						<ul className="mt-5 space-y-3">
							{scenario.matchReasons.map((reason) => (
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
	);
}
