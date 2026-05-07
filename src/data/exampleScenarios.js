/**
 * @typedef ExampleScenario
 * @property {string} id
 * @property {string} homeownerName
 * @property {string} locationLabel
 * @property {"Kitchen Remodel" | "Bathroom Remodel" | "ADU / Addition"} projectType
 * @property {number} sqFt
 * @property {"Standard" | "Premium" | "Luxury"} qualityTier
 * @property {string} budgetPosture
 * @property {string} timing
 * @property {string} decisionStyle
 * @property {string} projectImage
 * @property {string} projectSummary
 * @property {string} builderName
 * @property {string} builderSpecialty
 * @property {string} builderLeadTime
 * @property {string} builderStyle
 * @property {string[]} matchReasons
 */

/** @type {ExampleScenario[]} */
export const exampleScenarios = [
	{
		id: "avery-chen",
		homeownerName: "Avery Chen",
		locationLabel: "Milton, GA",
		projectType: "Kitchen Remodel",
		sqFt: 240,
		qualityTier: "Premium",
		budgetPosture: "Realistic and quality-conscious",
		timing: "3-4 month window",
		decisionStyle: "Organized and fast-moving",
		projectImage: "/portfolio/00000IMG_00000_BURST20180523112340239_COVER.jpg",
		projectSummary:
			"Kitchen and ground-floor refresh with a realistic budget, a defined timeline, and clear decision-maker alignment.",
		builderName: "Northline Kitchen Studio",
		builderSpecialty:
			"Kitchens, millwork-heavy interiors, and clean sequencing",
		builderLeadTime: "6 weeks to start",
		builderStyle: "Structured communication with finish-driven execution",
		matchReasons: [
			"Strong kitchen specialization fits the scope.",
			"Budget posture aligns with premium mid-range execution.",
			"Client wants organized communication and predictable sequencing.",
		],
	},
	{
		id: "marisol-vega",
		homeownerName: "Marisol Vega",
		locationLabel: "Buckhead, GA",
		projectType: "Bathroom Remodel",
		sqFt: 110,
		qualityTier: "Luxury",
		budgetPosture: "Premium finish and detail-focused",
		timing: "Flexible for the right outcome",
		decisionStyle: "Design-led with high expectations",
		projectImage: "/portfolio/IMG_20190609_223338_022.jpg",
		projectSummary:
			"Primary bath transformation with elevated finish expectations, design sensitivity, and low appetite for sloppy handoff.",
		builderName: "Slate & Brass Bath Co.",
		builderSpecialty: "Premium bathrooms and spa-like finish work",
		builderLeadTime: "4 weeks to start",
		builderStyle: "High-touch coordination with detail-first execution",
		matchReasons: [
			"Luxury bath specialization matches the requested finish level.",
			"Builder works well with design-forward decision-makers.",
			"Shorter lead time fits a premium client expecting proactive coordination.",
		],
	},
	{
		id: "jonah-patel",
		homeownerName: "Jonah Patel",
		locationLabel: "Roswell, GA",
		projectType: "ADU / Addition",
		sqFt: 720,
		qualityTier: "Standard",
		budgetPosture: "Larger scope with phased thinking",
		timing: "Serious, but wants clarity first",
		decisionStyle: "Practical and ROI-aware",
		projectImage: "/portfolio/IMG_4828-scaled.jpg",
		projectSummary:
			"ADU or addition planning for family flexibility, with a bigger scope, phased decision-making, and a need for clear scope control.",
		builderName: "Fieldstone Additions",
		builderSpecialty: "Additions, ADUs, and complex planning-heavy scopes",
		builderLeadTime: "8 weeks to start",
		builderStyle: "Planning-led with permitting and phased delivery discipline",
		matchReasons: [
			"Builder is strongest on scope planning and larger additions.",
			"Phased-thinking client matches a planning-heavy contractor motion.",
			"Project scale benefits from clearer preconstruction vetting.",
		],
	},
];

/** @param {string} scenarioId */
export function getScenarioById(scenarioId) {
	return (
		exampleScenarios.find((scenario) => scenario.id === scenarioId) ?? null
	);
}
