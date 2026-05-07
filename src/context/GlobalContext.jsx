import { createContext, useContext, useState } from "react";
import { getScenarioById } from "@/data/exampleScenarios";

export const PROJECT_TYPES = [
	"Kitchen Remodel",
	"Bathroom Remodel",
	"Full Home Renovation",
	"ADU / Addition",
];

export const QUALITY_TIERS = ["Standard", "Premium", "Luxury"];

export const LEAD_STATUSES = ["New", "Approved", "Flagged"];

/**
 * @typedef PricingRule
 * @property {number} basePrice
 * @property {number} perSqFtPrice
 */

/** @typedef {Record<string, PricingRule>} PricingByProject */
/** @typedef {Record<string, number>} QualityMultipliers */

/**
 * @typedef Lead
 * @property {string} id
 * @property {string | null} scenarioId
 * @property {string} projectType
 * @property {number} sqFt
 * @property {string} qualityTier
 * @property {number} estimate
 * @property {string} homeownerName
 * @property {string} email
 * @property {string} phone
 * @property {number} rating
 * @property {string} status
 * @property {string} createdAt
 */

/**
 * @typedef LeadFormValues
 * @property {string} projectType
 * @property {number} sqFt
 * @property {string} qualityTier
 * @property {string} homeownerName
 * @property {string} email
 * @property {string} phone
 */

/**
 * @typedef GlobalContextValue
 * @property {PricingByProject} pricingByProject
 * @property {QualityMultipliers} qualityMultipliers
 * @property {Lead[]} leads
 * @property {(projectType: string, sqFt: number, qualityTier: string) => number | null} calculateEstimate
 * @property {(formValues: LeadFormValues) => Lead} submitLead
 * @property {(id: string, status: string) => void} updateLeadStatus
 * @property {(nextPricingByProject: PricingByProject, nextQualityMultipliers: QualityMultipliers) => void} saveSettings
 */

/**
 * @typedef ScenarioLeadSeed
 * @property {string} scenarioId
 * @property {string} status
 * @property {string} createdAt
 */

/** @type {PricingByProject} */
const INITIAL_PRICING_BY_PROJECT = {
	"Kitchen Remodel": { basePrice: 18000, perSqFtPrice: 325 },
	"Bathroom Remodel": { basePrice: 12500, perSqFtPrice: 285 },
	"Full Home Renovation": { basePrice: 42000, perSqFtPrice: 215 },
	"ADU / Addition": { basePrice: 56000, perSqFtPrice: 245 },
};

/** @type {QualityMultipliers} */
const INITIAL_QUALITY_MULTIPLIERS = {
	Standard: 1,
	Premium: 1.18,
	Luxury: 1.38,
};

/** @type {ScenarioLeadSeed[]} */
const SCENARIO_LEAD_SEEDS = [
	{
		scenarioId: "avery-chen",
		status: "New",
		createdAt: "2026-05-02T16:45:00.000Z",
	},
	{
		scenarioId: "marisol-vega",
		status: "Approved",
		createdAt: "2026-05-01T11:20:00.000Z",
	},
	{
		scenarioId: "jonah-patel",
		status: "Flagged",
		createdAt: "2026-04-29T09:05:00.000Z",
	},
];

const GlobalContext =
	/** @type {import("react").Context<GlobalContextValue | null>} */ (
		createContext(null)
	);

/**
 * @param {PricingByProject} source
 * @returns {PricingByProject}
 */
function clonePricingByProject(source) {
	/** @type {PricingByProject} */
	const nextPricingByProject = {};

	for (const projectType of PROJECT_TYPES) {
		const fallbackRule = INITIAL_PRICING_BY_PROJECT[projectType];
		const incomingRule = source[projectType];

		nextPricingByProject[projectType] = {
			basePrice:
				typeof incomingRule?.basePrice === "number"
					? incomingRule.basePrice
					: fallbackRule.basePrice,
			perSqFtPrice:
				typeof incomingRule?.perSqFtPrice === "number"
					? incomingRule.perSqFtPrice
					: fallbackRule.perSqFtPrice,
		};
	}

	return nextPricingByProject;
}

/**
 * @param {QualityMultipliers} source
 * @returns {QualityMultipliers}
 */
function cloneQualityMultipliers(source) {
	/** @type {QualityMultipliers} */
	const nextQualityMultipliers = {};

	for (const qualityTier of QUALITY_TIERS) {
		const incomingMultiplier = source[qualityTier];

		nextQualityMultipliers[qualityTier] =
			typeof incomingMultiplier === "number"
				? incomingMultiplier
				: INITIAL_QUALITY_MULTIPLIERS[qualityTier];
	}

	return nextQualityMultipliers;
}

/**
 * @param {PricingByProject} pricingByProject
 * @param {QualityMultipliers} qualityMultipliers
 * @param {string} projectType
 * @param {number} sqFt
 * @param {string} qualityTier
 * @returns {number | null}
 */
function calculateEstimateFromSettings(
	pricingByProject,
	qualityMultipliers,
	projectType,
	sqFt,
	qualityTier,
) {
	const pricingRule = pricingByProject[projectType];
	const qualityMultiplier = qualityMultipliers[qualityTier];

	if (
		!pricingRule ||
		typeof qualityMultiplier !== "number" ||
		!Number.isFinite(sqFt) ||
		sqFt <= 0
	) {
		return null;
	}

	return Math.round(
		(pricingRule.basePrice + pricingRule.perSqFtPrice * sqFt) *
			qualityMultiplier,
	);
}

/**
 * @param {number} estimate
 * @param {string} projectType
 * @param {string} qualityTier
 * @returns {number}
 */
function buildLeadRating(estimate, projectType, qualityTier) {
	const qualityBonus =
		qualityTier === "Luxury" ? 8 : qualityTier === "Premium" ? 4 : 0;
	const projectBonus =
		projectType === "Full Home Renovation" || projectType === "ADU / Addition"
			? 6
			: 2;
	const estimateBonus = estimate >= 200000 ? 7 : estimate >= 100000 ? 4 : 1;

	return Math.min(98, 78 + qualityBonus + projectBonus + estimateBonus);
}

/**
 * @param {ScenarioLeadSeed} seed
 * @returns {Lead}
 */
function createScenarioLead(seed) {
	const scenario = getScenarioById(seed.scenarioId);

	if (!scenario) {
		throw new Error(`Invalid scenario seed: ${seed.scenarioId}`);
	}

	const estimate = calculateEstimateFromSettings(
		INITIAL_PRICING_BY_PROJECT,
		INITIAL_QUALITY_MULTIPLIERS,
		scenario.projectType,
		scenario.sqFt,
		scenario.qualityTier,
	);

	if (estimate === null) {
		throw new Error(`Invalid scenario estimate seed: ${seed.scenarioId}`);
	}

	return {
		id: `lead-${scenario.id}`,
		scenarioId: scenario.id,
		projectType: scenario.projectType,
		sqFt: scenario.sqFt,
		qualityTier: scenario.qualityTier,
		estimate,
		homeownerName: scenario.homeownerName,
		email: `${scenario.id}@houz2home.co`,
		phone:
			scenario.id === "avery-chen"
				? "(415) 555-0142"
				: scenario.id === "marisol-vega"
					? "(650) 555-0106"
					: "(408) 555-0198",
		rating: buildLeadRating(
			estimate,
			scenario.projectType,
			scenario.qualityTier,
		),
		status: seed.status,
		createdAt: seed.createdAt,
	};
}

const INITIAL_LEADS = SCENARIO_LEAD_SEEDS.map(createScenarioLead);

/** @param {{ children: import("react").ReactNode }} props */
export function GlobalProvider({ children }) {
	const [pricingByProject, setPricingByProject] = useState(
		clonePricingByProject(INITIAL_PRICING_BY_PROJECT),
	);
	const [qualityMultipliers, setQualityMultipliers] = useState(
		cloneQualityMultipliers(INITIAL_QUALITY_MULTIPLIERS),
	);
	const [leads, setLeads] = useState(INITIAL_LEADS);

	/**
	 * @param {string} projectType
	 * @param {number} sqFt
	 * @param {string} qualityTier
	 * @returns {number | null}
	 */
	function calculateEstimate(projectType, sqFt, qualityTier) {
		return calculateEstimateFromSettings(
			pricingByProject,
			qualityMultipliers,
			projectType,
			sqFt,
			qualityTier,
		);
	}

	/**
	 * @param {LeadFormValues} formValues
	 * @returns {Lead}
	 */
	function submitLead(formValues) {
		const estimate = calculateEstimate(
			formValues.projectType,
			formValues.sqFt,
			formValues.qualityTier,
		);

		if (estimate === null) {
			throw new Error("Lead submission requires a valid square footage value.");
		}

		const nextLead = {
			id: crypto.randomUUID(),
			scenarioId: null,
			projectType: formValues.projectType,
			sqFt: formValues.sqFt,
			qualityTier: formValues.qualityTier,
			estimate,
			homeownerName: formValues.homeownerName.trim(),
			email: formValues.email.trim().toLowerCase(),
			phone: formValues.phone.trim(),
			rating: buildLeadRating(
				estimate,
				formValues.projectType,
				formValues.qualityTier,
			),
			status: "New",
			createdAt: new Date().toISOString(),
		};

		setLeads((currentLeads) => [nextLead, ...currentLeads]);

		return nextLead;
	}

	/**
	 * @param {string} id
	 * @param {string} status
	 */
	function updateLeadStatus(id, status) {
		if (!LEAD_STATUSES.includes(status)) {
			return;
		}

		setLeads((currentLeads) =>
			currentLeads.map((lead) => (lead.id === id ? { ...lead, status } : lead)),
		);
	}

	/**
	 * @param {PricingByProject} nextPricingByProject
	 * @param {QualityMultipliers} nextQualityMultipliers
	 */
	function saveSettings(nextPricingByProject, nextQualityMultipliers) {
		setPricingByProject(clonePricingByProject(nextPricingByProject));
		setQualityMultipliers(cloneQualityMultipliers(nextQualityMultipliers));
	}

	return (
		<GlobalContext.Provider
			value={{
				pricingByProject,
				qualityMultipliers,
				leads,
				calculateEstimate,
				submitLead,
				updateLeadStatus,
				saveSettings,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}

/** @returns {GlobalContextValue} */
export function useGlobalContext() {
	const context = useContext(GlobalContext);

	if (!context) {
		throw new Error("useGlobalContext must be used within GlobalProvider");
	}

	return context;
}
