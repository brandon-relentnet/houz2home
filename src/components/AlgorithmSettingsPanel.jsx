import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import BrandButton from "@/components/BrandButton";
import { PROJECT_TYPES, QUALITY_TIERS } from "@/context/GlobalContext";

/**
 * @typedef PricingDraftRule
 * @property {string} basePrice
 * @property {string} perSqFtPrice
 */

/** @typedef {Record<string, PricingDraftRule>} PricingDraftByProject */
/** @typedef {Record<string, string>} MultiplierDraft */

/**
 * @param {import("@/context/GlobalContext").PricingByProject} pricingByProject
 * @returns {PricingDraftByProject}
 */
function buildPricingDraft(pricingByProject) {
	/** @type {PricingDraftByProject} */
	const draft = {};

	for (const projectType of PROJECT_TYPES) {
		const rule = pricingByProject[projectType];

		draft[projectType] = {
			basePrice: String(rule?.basePrice ?? ""),
			perSqFtPrice: String(rule?.perSqFtPrice ?? ""),
		};
	}

	return draft;
}

/**
 * @param {import("@/context/GlobalContext").QualityMultipliers} qualityMultipliers
 * @returns {MultiplierDraft}
 */
function buildMultiplierDraft(qualityMultipliers) {
	/** @type {MultiplierDraft} */
	const draft = {};

	for (const qualityTier of QUALITY_TIERS) {
		draft[qualityTier] = String(qualityMultipliers[qualityTier] ?? "");
	}

	return draft;
}

/**
 * @param {string} value
 * @returns {number | null}
 */
function parsePositiveNumber(value) {
	const parsedValue = Number(value);

	return Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : null;
}

/** @param {string} fieldKey */
function getFieldErrorId(fieldKey) {
	return `${fieldKey.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()}-error`;
}

/**
 * @typedef AlgorithmSettingsPanelProps
 * @property {import("@/context/GlobalContext").PricingByProject} pricingByProject
 * @property {import("@/context/GlobalContext").QualityMultipliers} qualityMultipliers
 * @property {(nextPricingByProject: import("@/context/GlobalContext").PricingByProject, nextQualityMultipliers: import("@/context/GlobalContext").QualityMultipliers) => void} onSave
 */

/** @param {AlgorithmSettingsPanelProps} props */
export default function AlgorithmSettingsPanel({
	pricingByProject,
	qualityMultipliers,
	onSave,
}) {
	const [pricingDraft, setPricingDraft] = useState(() =>
		buildPricingDraft(pricingByProject),
	);
	const [multiplierDraft, setMultiplierDraft] = useState(() =>
		buildMultiplierDraft(qualityMultipliers),
	);
	const [fieldErrors, setFieldErrors] = useState(
		/** @type {Record<string, string>} */ ({}),
	);

	useEffect(() => {
		setPricingDraft(buildPricingDraft(pricingByProject));
	}, [pricingByProject]);

	useEffect(() => {
		setMultiplierDraft(buildMultiplierDraft(qualityMultipliers));
	}, [qualityMultipliers]);

	function resetDrafts() {
		setPricingDraft(buildPricingDraft(pricingByProject));
		setMultiplierDraft(buildMultiplierDraft(qualityMultipliers));
		setFieldErrors({});
	}

	/**
	 * @param {string} projectType
	 * @param {keyof PricingDraftRule} field
	 * @param {string} value
	 */
	function updatePricingDraft(projectType, field, value) {
		setPricingDraft((currentDraft) => ({
			...currentDraft,
			[projectType]: {
				...currentDraft[projectType],
				[field]: value,
			},
		}));
		setFieldErrors((currentErrors) => {
			const nextErrors = { ...currentErrors };
			delete nextErrors[`${projectType}:${field}`];
			return nextErrors;
		});
	}

	/**
	 * @param {string} qualityTier
	 * @param {string} value
	 */
	function updateMultiplierDraft(qualityTier, value) {
		setMultiplierDraft((currentDraft) => ({
			...currentDraft,
			[qualityTier]: value,
		}));
		setFieldErrors((currentErrors) => {
			const nextErrors = { ...currentErrors };
			delete nextErrors[qualityTier];
			return nextErrors;
		});
	}

	/** @param {import("react").FormEvent<HTMLFormElement>} event */
	function handleSubmit(event) {
		event.preventDefault();

		/** @type {Record<string, string>} */
		const nextFieldErrors = {};
		/** @type {import("@/context/GlobalContext").PricingByProject} */
		const nextPricingByProject = {};
		/** @type {import("@/context/GlobalContext").QualityMultipliers} */
		const nextQualityMultipliers = {};

		for (const projectType of PROJECT_TYPES) {
			const draftRule = pricingDraft[projectType];
			const basePrice = parsePositiveNumber(draftRule?.basePrice ?? "");
			const perSqFtPrice = parsePositiveNumber(draftRule?.perSqFtPrice ?? "");

			if (basePrice === null) {
				nextFieldErrors[`${projectType}:basePrice`] =
					"Base price must be greater than 0.";
			}

			if (perSqFtPrice === null) {
				nextFieldErrors[`${projectType}:perSqFtPrice`] =
					"Per-square-foot price must be greater than 0.";
			}

			nextPricingByProject[projectType] = {
				basePrice: basePrice ?? 0,
				perSqFtPrice: perSqFtPrice ?? 0,
			};
		}

		for (const qualityTier of QUALITY_TIERS) {
			const multiplier = parsePositiveNumber(
				multiplierDraft[qualityTier] ?? "",
			);

			if (multiplier === null) {
				nextFieldErrors[qualityTier] = "Multiplier must be greater than 0.";
			}

			nextQualityMultipliers[qualityTier] = multiplier ?? 0;
		}

		if (Object.keys(nextFieldErrors).length > 0) {
			setFieldErrors(nextFieldErrors);
			toast.error(
				"Enter positive numbers for every pricing and quality field.",
			);
			return;
		}

		setFieldErrors({});
		onSave(nextPricingByProject, nextQualityMultipliers);
		toast.success("Algorithm settings saved to shared state.");
	}

	return (
		<form
			className="space-y-8 rounded-[2rem] border border-rule bg-deep p-6 text-cream shadow-[0_24px_70px_rgba(17,17,17,0.16)] sm:p-8"
			onSubmit={handleSubmit}
		>
			<div className="flex flex-col gap-3 border-b border-rule pb-6 lg:flex-row lg:items-end lg:justify-between">
				<div className="space-y-2">
					<p className="label-text">Shared Pricing Contract</p>
					<h3 className="text-3xl text-cream">Tune the estimator inputs.</h3>
					<p className="max-w-3xl text-sm text-warm">
						Saving here updates the same pricing and multiplier values the
						estimator reads immediately.
					</p>
				</div>
				<div className="flex flex-col gap-3 sm:flex-row">
					<BrandButton
						className="px-4 py-2 text-xs text-cream"
						onClick={resetDrafts}
						type="button"
						variant="ghost"
					>
						Reset Draft
					</BrandButton>
					<BrandButton className="px-4 py-2 text-xs text-cream" type="submit">
						Save Settings
					</BrandButton>
				</div>
			</div>

			<div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
				<div>
					<h4 className="text-2xl text-cream">Pricing by project</h4>
					<p className="mt-2 text-sm text-warm">
						Adjust the base project fee and marginal square-foot pricing used
						for each project type.
					</p>
				</div>

				<div className="grid gap-4 lg:grid-cols-2">
					{PROJECT_TYPES.map((projectType) => {
						const draftRule = pricingDraft[projectType];
						const basePriceFieldKey = `${projectType}:basePrice`;
						const perSqFtFieldKey = `${projectType}:perSqFtPrice`;
						const basePriceError = fieldErrors[basePriceFieldKey];
						const perSqFtError = fieldErrors[perSqFtFieldKey];

						return (
							<div
								className="rounded-[1.5rem] border border-white/10 bg-night/55 p-5"
								key={projectType}
							>
								<div className="space-y-1">
									<p className="text-lg font-semibold text-cream">
										{projectType}
									</p>
									<p className="text-sm text-warm">
										Estimator pricing inputs for this renovation path.
									</p>
								</div>

								<div className="mt-4 grid gap-4 sm:grid-cols-2">
									<div className="space-y-2">
										<label
											className="text-xs font-semibold tracking-[0.18em] uppercase text-warm"
											htmlFor={`${projectType}-base-price`}
										>
											Base price
										</label>
										<input
											aria-describedby={
												basePriceError
													? getFieldErrorId(basePriceFieldKey)
													: undefined
											}
											aria-invalid={basePriceError ? true : undefined}
											className="w-full rounded-2xl border border-rule bg-white/96 px-4 py-3 text-deep outline-none transition-colors focus:border-gold"
											id={`${projectType}-base-price`}
											inputMode="decimal"
											onChange={(event) =>
												updatePricingDraft(
													projectType,
													"basePrice",
													event.target.value,
												)
											}
											step="1"
											type="number"
											value={draftRule?.basePrice ?? ""}
										/>
										{basePriceError ? (
											<p
												className="text-sm text-[#ffb9a3]"
												id={getFieldErrorId(basePriceFieldKey)}
											>
												{basePriceError}
											</p>
										) : null}
									</div>

									<div className="space-y-2">
										<label
											className="text-xs font-semibold tracking-[0.18em] uppercase text-warm"
											htmlFor={`${projectType}-per-sqft-price`}
										>
											Per sq ft
										</label>
										<input
											aria-describedby={
												perSqFtError
													? getFieldErrorId(perSqFtFieldKey)
													: undefined
											}
											aria-invalid={perSqFtError ? true : undefined}
											className="w-full rounded-2xl border border-rule bg-white/96 px-4 py-3 text-deep outline-none transition-colors focus:border-gold"
											id={`${projectType}-per-sqft-price`}
											inputMode="decimal"
											onChange={(event) =>
												updatePricingDraft(
													projectType,
													"perSqFtPrice",
													event.target.value,
												)
											}
											step="1"
											type="number"
											value={draftRule?.perSqFtPrice ?? ""}
										/>
										{perSqFtError ? (
											<p
												className="text-sm text-[#ffb9a3]"
												id={getFieldErrorId(perSqFtFieldKey)}
											>
												{perSqFtError}
											</p>
										) : null}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
				<div>
					<h4 className="text-2xl text-cream">Quality multipliers</h4>
					<p className="mt-2 text-sm text-warm">
						These values scale the estimate immediately after the project-level
						pricing formula runs.
					</p>
				</div>

				<div className="grid gap-4 md:grid-cols-3">
					{QUALITY_TIERS.map((qualityTier) => {
						const multiplierError = fieldErrors[qualityTier];

						return (
							<div
								className="rounded-[1.5rem] border border-white/10 bg-night/55 p-5"
								key={qualityTier}
							>
								<label
									className="text-xs font-semibold tracking-[0.18em] uppercase text-warm"
									htmlFor={`${qualityTier}-multiplier`}
								>
									{qualityTier}
								</label>
								<input
									aria-describedby={
										multiplierError ? getFieldErrorId(qualityTier) : undefined
									}
									aria-invalid={multiplierError ? true : undefined}
									className="mt-3 w-full rounded-2xl border border-rule bg-white/96 px-4 py-3 text-deep outline-none transition-colors focus:border-gold"
									id={`${qualityTier}-multiplier`}
									inputMode="decimal"
									onChange={(event) =>
										updateMultiplierDraft(qualityTier, event.target.value)
									}
									step="0.01"
									type="number"
									value={multiplierDraft[qualityTier] ?? ""}
								/>
								{multiplierError ? (
									<p
										className="mt-2 text-sm text-[#ffb9a3]"
										id={getFieldErrorId(qualityTier)}
									>
										{multiplierError}
									</p>
								) : null}
							</div>
						);
					})}
				</div>
			</div>
		</form>
	);
}
