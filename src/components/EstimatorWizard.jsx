import { useState } from "react";
import { toast } from "react-hot-toast";
import BrandButton from "@/components/BrandButton";
import {
	PROJECT_TYPES,
	QUALITY_TIERS,
	useGlobalContext,
} from "@/context/GlobalContext";

/**
 * @typedef WizardFormValues
 * @property {string} projectType
 * @property {string} sqFt
 * @property {string} qualityTier
 * @property {string} homeownerName
 * @property {string} email
 * @property {string} phone
 */

/** @typedef {Record<string, boolean>} TouchedFields */

const currencyFormatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0,
});

const stepLabels = [
	"Choose project",
	"Set size and finish",
	"Confirm contact details",
];

/** @type {WizardFormValues} */
const INITIAL_FORM_VALUES = {
	projectType: "",
	sqFt: "",
	qualityTier: "",
	homeownerName: "",
	email: "",
	phone: "",
};

/** @param {number} value */
function formatCurrency(value) {
	return currencyFormatter.format(value);
}

/**
 * @param {number | undefined} value
 * @returns {string}
 */
function formatMultiplier(value) {
	return typeof value === "number" ? `x${value.toFixed(2)}` : "Unavailable";
}

/** @param {string} value */
function getPhoneDigits(value) {
	return value.replace(/\D/g, "");
}

/** @param {string} value */
function getEmailError(value) {
	if (!value.trim()) {
		return "Email is required.";
	}

	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
		? ""
		: "Enter a valid email address.";
}

/** @param {WizardFormValues} formValues */
function getValidationErrors(formValues) {
	const parsedSqFt = Number(formValues.sqFt);

	return {
		projectType: formValues.projectType ? "" : "Choose a project type.",
		sqFt: !formValues.sqFt.trim()
			? "Enter the planned square footage."
			: !Number.isFinite(parsedSqFt) || parsedSqFt <= 0
				? "Square footage must be greater than 0."
				: "",
		qualityTier: formValues.qualityTier ? "" : "Choose a finish tier.",
		homeownerName: formValues.homeownerName.trim()
			? ""
			: "Homeowner name is required.",
		email: getEmailError(formValues.email),
		phone:
			getPhoneDigits(formValues.phone).length >= 10
				? ""
				: "Enter a phone number with at least 10 digits.",
	};
}

export default function EstimatorWizard() {
	const {
		pricingByProject,
		qualityMultipliers,
		calculateEstimate,
		submitLead,
	} = useGlobalContext();
	const [currentStep, setCurrentStep] = useState(1);
	const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
	const [touchedFields, setTouchedFields] = useState(
		/** @type {TouchedFields} */ ({}),
	);
	const [submitMessage, setSubmitMessage] = useState("");

	const validationErrors = getValidationErrors(formValues);
	const parsedSqFt = Number(formValues.sqFt);
	const pricingRule = pricingByProject[formValues.projectType];
	const qualityMultiplier = qualityMultipliers[formValues.qualityTier];
	const hasValidSqFt = !validationErrors.sqFt;
	const hasEstimateInputs =
		Boolean(formValues.projectType) && Boolean(formValues.qualityTier);
	const hasSettingsGap =
		hasEstimateInputs &&
		(!pricingRule || typeof qualityMultiplier !== "number");
	const estimatePreviewUnavailableMessage = !formValues.projectType
		? "Choose a project type to load pricing."
		: !formValues.qualityTier
			? "Choose a quality tier to load the multiplier."
			: !hasValidSqFt
				? "Enter a valid square footage above 0 to preview the estimate."
				: hasSettingsGap
					? "Shared pricing settings are incomplete for this selection."
					: "";
	const estimate =
		formValues.projectType && formValues.qualityTier
			? calculateEstimate(
					formValues.projectType,
					parsedSqFt,
					formValues.qualityTier,
				)
			: null;
	const projectTypeErrorId = "project-type-error";
	const sqFtErrorId = "sqft-error";
	const sqFtHelpId = "sqft-help";
	const qualityTierErrorId = "quality-tier-error";
	const homeownerNameErrorId = "homeowner-name-error";
	const emailErrorId = "email-error";
	const phoneErrorId = "phone-error";
	const subtotal =
		pricingRule && hasValidSqFt
			? pricingRule.basePrice + pricingRule.perSqFtPrice * parsedSqFt
			: null;
	const formulaDisplayReady =
		!estimatePreviewUnavailableMessage &&
		Boolean(pricingRule) &&
		typeof qualityMultiplier === "number" &&
		subtotal !== null &&
		estimate !== null;

	/**
	 * @param {keyof WizardFormValues} name
	 * @param {string} value
	 */
	function updateField(name, value) {
		setFormValues((currentValues) => ({
			...currentValues,
			[name]: value,
		}));
		setSubmitMessage("");
	}

	/** @param {(keyof WizardFormValues)[]} fieldNames */
	function markFieldsTouched(fieldNames) {
		setTouchedFields((currentTouchedFields) => {
			const nextTouchedFields = { ...currentTouchedFields };

			for (const fieldName of fieldNames) {
				nextTouchedFields[fieldName] = true;
			}

			return nextTouchedFields;
		});
	}

	function canAdvanceToStepTwo() {
		return !validationErrors.projectType;
	}

	function canAdvanceToStepThree() {
		return (
			!validationErrors.sqFt &&
			!validationErrors.qualityTier &&
			estimate !== null
		);
	}

	function resetWizard() {
		setCurrentStep(1);
		setFormValues(INITIAL_FORM_VALUES);
		setTouchedFields({});
		setSubmitMessage("");
	}

	function handleNext() {
		if (currentStep === 1) {
			markFieldsTouched(["projectType"]);

			if (!canAdvanceToStepTwo()) {
				return;
			}

			setCurrentStep(2);
			return;
		}

		if (currentStep === 2) {
			markFieldsTouched(["sqFt", "qualityTier"]);

			if (!canAdvanceToStepThree()) {
				return;
			}

			setCurrentStep(3);
		}
	}

	/** @param {import("react").FormEvent<HTMLFormElement>} event */
	function handleSubmit(event) {
		event.preventDefault();
		markFieldsTouched([
			"homeownerName",
			"email",
			"phone",
			"sqFt",
			"qualityTier",
		]);

		if (
			validationErrors.homeownerName ||
			validationErrors.email ||
			validationErrors.phone ||
			!canAdvanceToStepThree()
		) {
			setSubmitMessage("Review the highlighted fields before submitting.");
			return;
		}

		if (estimate === null) {
			setSubmitMessage("A valid estimate is required before submission.");
			return;
		}

		submitLead({
			projectType: formValues.projectType,
			sqFt: parsedSqFt,
			qualityTier: formValues.qualityTier,
			homeownerName: formValues.homeownerName,
			email: formValues.email,
			phone: formValues.phone,
		});

		toast.success("Lead added to the review pipeline.");
		resetWizard();
	}

	return (
		<div className="grid gap-6 xl:grid-cols-[1.18fr_0.82fr] xl:items-start">
			<form
				className="rounded-[2rem] border border-rule-light bg-white/88 p-6 shadow-[0_20px_60px_rgba(28,26,23,0.08)] sm:p-8"
				onSubmit={handleSubmit}
			>
				<div className="flex flex-col gap-5 border-b border-rule-light pb-6">
					<div className="flex items-center justify-between gap-3">
						<div>
							<p className="label-text">Guided intake</p>
							<h2 className="mt-3 text-4xl">Build the homeowner brief.</h2>
						</div>
						<p className="rounded-full border border-rule-light px-4 py-2 text-sm font-medium text-dim">
							Step {currentStep} of 3
						</p>
					</div>

					<div className="grid gap-3 md:grid-cols-3">
						{stepLabels.map((label, index) => {
							const stepNumber = index + 1;
							const isActive = currentStep === stepNumber;
							const isComplete = currentStep > stepNumber;

							return (
								<div
									className={`rounded-[1.5rem] border px-4 py-4 ${
										isActive
											? "border-gold bg-gold/8"
											: isComplete
												? "border-rule-light bg-soft/80"
												: "border-rule-light bg-white"
									}`}
									key={label}
								>
									<p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">
										0{stepNumber}
									</p>
									<p className="mt-2 text-sm font-medium text-deep">{label}</p>
								</div>
							);
						})}
					</div>
				</div>

				<div className="mt-6 space-y-6">
					{currentStep === 1 ? (
						<div className="space-y-5">
							<div className="space-y-2">
								<h3 className="text-3xl">Step 1: choose the project type.</h3>
								<p className="text-base text-dim">
									Start with the renovation path so the intake can frame scope,
									pricing logic, and contractor fit.
								</p>
							</div>

							<fieldset
								aria-describedby={
									touchedFields.projectType && validationErrors.projectType
										? projectTypeErrorId
										: undefined
								}
								aria-invalid={
									touchedFields.projectType && validationErrors.projectType
										? true
										: undefined
								}
								className="grid gap-4 sm:grid-cols-2"
							>
								<legend className="sr-only">Project type</legend>
								{PROJECT_TYPES.map((projectType) => {
									const isSelected = formValues.projectType === projectType;
									const projectPricing = pricingByProject[projectType];

									return (
										<button
											aria-describedby={
												projectPricing
													? undefined
													: `${projectType}-pricing-missing`
											}
											aria-invalid={
												touchedFields.projectType &&
												validationErrors.projectType
													? true
													: undefined
											}
											aria-pressed={isSelected}
											className={`rounded-[1.5rem] border px-5 py-5 text-left transition-colors ${
												isSelected
													? "border-gold bg-gold/10"
													: "border-rule-light bg-soft/60 hover:border-gold/60 hover:bg-white"
											}`}
											key={projectType}
											onClick={() => {
												updateField("projectType", projectType);
												markFieldsTouched(["projectType"]);
											}}
											type="button"
										>
											<p className="text-lg font-semibold text-deep">
												{projectType}
											</p>
											{projectPricing ? (
												<p className="mt-2 text-sm text-dim">
													Base {formatCurrency(projectPricing.basePrice)} plus{" "}
													{formatCurrency(projectPricing.perSqFtPrice)} per sq
													ft.
												</p>
											) : (
												<p
													className="mt-2 text-sm text-[#9f3a2f]"
													id={`${projectType}-pricing-missing`}
												>
													Pricing settings unavailable.
												</p>
											)}
										</button>
									);
								})}
							</fieldset>

							{touchedFields.projectType && validationErrors.projectType ? (
								<p
									className="text-sm font-medium text-[#9f3a2f]"
									id={projectTypeErrorId}
								>
									{validationErrors.projectType}
								</p>
							) : null}
						</div>
					) : null}

					{currentStep === 2 ? (
						<div className="space-y-6">
							<div className="space-y-2">
								<h3 className="text-3xl">Step 2: define size and finish.</h3>
								<p className="text-base text-dim">
									Enter the working square footage and choose the finish tier.
									The estimate updates live from the shared settings below.
								</p>
							</div>

							<div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
								<div className="space-y-2">
									<label
										className="text-sm font-semibold text-deep"
										htmlFor="sqFt"
									>
										Square footage
									</label>
									<input
										aria-describedby={
											touchedFields.sqFt && validationErrors.sqFt
												? sqFtErrorId
												: sqFtHelpId
										}
										aria-invalid={
											touchedFields.sqFt && validationErrors.sqFt
												? true
												: undefined
										}
										className="w-full rounded-[1.25rem] border border-rule-light bg-soft px-4 py-3 text-base text-deep outline-none transition-colors focus:border-gold"
										id="sqFt"
										min="1"
										onBlur={() => markFieldsTouched(["sqFt"])}
										onChange={(event) =>
											updateField("sqFt", event.target.value)
										}
										placeholder="Ex: 240"
										type="number"
										value={formValues.sqFt}
									/>
									{touchedFields.sqFt && validationErrors.sqFt ? (
										<p
											className="text-sm font-medium text-[#9f3a2f]"
											id={sqFtErrorId}
										>
											{validationErrors.sqFt}
										</p>
									) : (
										<p className="text-sm text-dim" id={sqFtHelpId}>
											Use the conditioned renovation area only.
										</p>
									)}
								</div>

								<div className="space-y-3">
									<p className="text-sm font-semibold text-deep">
										Quality tier
									</p>
									<fieldset
										aria-describedby={
											touchedFields.qualityTier && validationErrors.qualityTier
												? qualityTierErrorId
												: undefined
										}
										aria-invalid={
											touchedFields.qualityTier && validationErrors.qualityTier
												? true
												: undefined
										}
										className="grid gap-3 sm:grid-cols-3"
									>
										<legend className="sr-only">Quality tier</legend>
										{QUALITY_TIERS.map((qualityTier) => {
											const isSelected = formValues.qualityTier === qualityTier;
											const multiplier = qualityMultipliers[qualityTier];

											return (
												<button
													aria-describedby={
														typeof multiplier === "number"
															? undefined
															: `${qualityTier}-multiplier-missing`
													}
													aria-invalid={
														touchedFields.qualityTier &&
														validationErrors.qualityTier
															? true
															: undefined
													}
													aria-pressed={isSelected}
													className={`rounded-[1.25rem] border px-4 py-4 text-left transition-colors ${
														isSelected
															? "border-gold bg-gold/10"
															: "border-rule-light bg-soft/60 hover:border-gold/60 hover:bg-white"
													}`}
													key={qualityTier}
													onClick={() => {
														updateField("qualityTier", qualityTier);
														markFieldsTouched(["qualityTier"]);
													}}
													type="button"
												>
													<p className="font-semibold text-deep">
														{qualityTier}
													</p>
													{typeof multiplier === "number" ? (
														<p className="mt-2 text-sm text-dim">
															{formatMultiplier(multiplier)} multiplier
														</p>
													) : (
														<p
															className="mt-2 text-sm text-[#9f3a2f]"
															id={`${qualityTier}-multiplier-missing`}
														>
															Multiplier unavailable.
														</p>
													)}
												</button>
											);
										})}
									</fieldset>
									{touchedFields.qualityTier && validationErrors.qualityTier ? (
										<p
											className="text-sm font-medium text-[#9f3a2f]"
											id={qualityTierErrorId}
										>
											{validationErrors.qualityTier}
										</p>
									) : null}
								</div>
							</div>
						</div>
					) : null}

					{currentStep === 3 ? (
						<div className="space-y-6">
							<div className="space-y-2">
								<h3 className="text-3xl">Step 3: capture homeowner details.</h3>
								<p className="text-base text-dim">
									Confirm the estimate, then add the contact details needed for
									the review pipeline.
								</p>
							</div>

							<div className="grid gap-5 md:grid-cols-2">
								<div className="space-y-2 md:col-span-2">
									<label
										className="text-sm font-semibold text-deep"
										htmlFor="homeownerName"
									>
										Homeowner name
									</label>
									<input
										aria-describedby={
											touchedFields.homeownerName &&
											validationErrors.homeownerName
												? homeownerNameErrorId
												: undefined
										}
										aria-invalid={
											touchedFields.homeownerName &&
											validationErrors.homeownerName
												? true
												: undefined
										}
										className="w-full rounded-[1.25rem] border border-rule-light bg-soft px-4 py-3 text-base text-deep outline-none transition-colors focus:border-gold"
										id="homeownerName"
										onBlur={() => markFieldsTouched(["homeownerName"])}
										onChange={(event) =>
											updateField("homeownerName", event.target.value)
										}
										placeholder="Jordan Alvarez"
										type="text"
										value={formValues.homeownerName}
									/>
									{touchedFields.homeownerName &&
									validationErrors.homeownerName ? (
										<p
											className="text-sm font-medium text-[#9f3a2f]"
											id={homeownerNameErrorId}
										>
											{validationErrors.homeownerName}
										</p>
									) : null}
								</div>

								<div className="space-y-2">
									<label
										className="text-sm font-semibold text-deep"
										htmlFor="email"
									>
										Email
									</label>
									<input
										aria-describedby={
											touchedFields.email && validationErrors.email
												? emailErrorId
												: undefined
										}
										aria-invalid={
											touchedFields.email && validationErrors.email
												? true
												: undefined
										}
										className="w-full rounded-[1.25rem] border border-rule-light bg-soft px-4 py-3 text-base text-deep outline-none transition-colors focus:border-gold"
										id="email"
										onBlur={() => markFieldsTouched(["email"])}
										onChange={(event) =>
											updateField("email", event.target.value)
										}
										placeholder="jordan@northbayhome.com"
										type="email"
										value={formValues.email}
									/>
									{touchedFields.email && validationErrors.email ? (
										<p
											className="text-sm font-medium text-[#9f3a2f]"
											id={emailErrorId}
										>
											{validationErrors.email}
										</p>
									) : null}
								</div>

								<div className="space-y-2">
									<label
										className="text-sm font-semibold text-deep"
										htmlFor="phone"
									>
										Phone
									</label>
									<input
										aria-describedby={
											touchedFields.phone && validationErrors.phone
												? phoneErrorId
												: undefined
										}
										aria-invalid={
											touchedFields.phone && validationErrors.phone
												? true
												: undefined
										}
										className="w-full rounded-[1.25rem] border border-rule-light bg-soft px-4 py-3 text-base text-deep outline-none transition-colors focus:border-gold"
										id="phone"
										onBlur={() => markFieldsTouched(["phone"])}
										onChange={(event) =>
											updateField("phone", event.target.value)
										}
										placeholder="(707) 555-0133"
										type="tel"
										value={formValues.phone}
									/>
									{touchedFields.phone && validationErrors.phone ? (
										<p
											className="text-sm font-medium text-[#9f3a2f]"
											id={phoneErrorId}
										>
											{validationErrors.phone}
										</p>
									) : null}
								</div>
							</div>

							<div className="rounded-[1.5rem] border border-rule-light bg-soft/80 p-5">
								<p className="label-text">Ready for review</p>
								<p className="mt-3 text-base text-dim">
									Submitting this brief appends the lead to the shared pipeline
									with a timestamp, estimate, rating, and a{" "}
									<span className="font-semibold text-deep">New</span> status.
								</p>
							</div>

							{submitMessage ? (
								<p className="text-sm font-medium text-[#9f3a2f]">
									{submitMessage}
								</p>
							) : null}
						</div>
					) : null}
				</div>

				<div className="mt-8 flex flex-col gap-3 border-t border-rule-light pt-6 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex gap-3">
						{currentStep > 1 ? (
							<BrandButton
								className="border-rule-light text-deep hover:text-gold"
								onClick={() => setCurrentStep((step) => step - 1)}
								variant="secondary"
							>
								Back
							</BrandButton>
						) : null}
						<BrandButton
							className="border-rule-light text-deep hover:text-gold"
							onClick={resetWizard}
							variant="ghost"
						>
							Reset
						</BrandButton>
					</div>

					{currentStep < 3 ? (
						<BrandButton
							className="text-cream hover:text-cream"
							onClick={handleNext}
						>
							Continue
						</BrandButton>
					) : (
						<BrandButton className="text-cream hover:text-cream" type="submit">
							Submit lead
						</BrandButton>
					)}
				</div>
			</form>

			<aside className="rounded-[2rem] border border-rule bg-deep p-6 text-cream shadow-[0_24px_70px_rgba(17,17,17,0.18)] sm:p-8 xl:sticky xl:top-24">
				<p className="label-text">Live estimate</p>
				<h3 className="mt-4 text-3xl text-cream sm:text-4xl">
					{estimate === null
						? "Awaiting scope details"
						: formatCurrency(estimate)}
				</h3>
				<p className="mt-3 text-base text-warm">
					The estimate uses the shared pricing contract so future admin edits
					will flow straight into this intake.
				</p>

				<div className="mt-6 rounded-[1.5rem] border border-rule bg-white/5 p-5">
					<p className="text-sm font-semibold tracking-[0.16em] uppercase text-gold-light">
						Visible formula
					</p>
					{!formulaDisplayReady ? (
						<p className="mt-3 text-sm leading-7 text-warm">
							{estimatePreviewUnavailableMessage}
						</p>
					) : (
						<>
							<p className="mt-3 text-sm leading-7 text-warm">
								(basePrice + perSqFtPrice * sqFt) * qualityMultiplier
							</p>
							<p className="mt-3 text-base text-cream">
								{formatCurrency(pricingRule.basePrice)} +{" "}
								{formatCurrency(pricingRule.perSqFtPrice)} *{" "}
								{formValues.sqFt.trim()} = {formatCurrency(subtotal)}
							</p>
							<p className="mt-2 text-base text-cream">
								Subtotal * multiplier ({formatMultiplier(qualityMultiplier)}) ={" "}
								{formatCurrency(estimate)}
							</p>
						</>
					)}
				</div>

				<div className="mt-4 space-y-4 rounded-[1.5rem] border border-rule bg-white/5 p-5">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-light">
							Current selection
						</p>
						<dl className="mt-4 space-y-3 text-sm text-warm">
							<div className="flex items-center justify-between gap-4">
								<dt>Project type</dt>
								<dd className="text-right text-cream">
									{formValues.projectType || "Not selected"}
								</dd>
							</div>
							<div className="flex items-center justify-between gap-4">
								<dt>Square footage</dt>
								<dd className="text-right text-cream">
									{formValues.sqFt.trim() || "Not entered"}
								</dd>
							</div>
							<div className="flex items-center justify-between gap-4">
								<dt>Quality tier</dt>
								<dd className="text-right text-cream">
									{formValues.qualityTier || "Not selected"}
								</dd>
							</div>
						</dl>
					</div>

					<div className="border-t border-rule pt-4">
						<p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-light">
							Routing note
						</p>
						<p className="mt-3 text-sm leading-7 text-warm">
							Only valid square footage values can move forward. That keeps
							pricing math, lead quality, and later admin workflows aligned.
						</p>
					</div>
				</div>
			</aside>
		</div>
	);
}
