import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import AlgorithmSettingsPanel from "@/components/AlgorithmSettingsPanel";
import BrandButton from "@/components/BrandButton";
import LeadMatchPanel from "@/components/LeadMatchPanel";
import LeadPipelineTable from "@/components/LeadPipelineTable";
import SectionHeading from "@/components/SectionHeading";
import { useGlobalContext } from "@/context/GlobalContext";

const adminAreas = [
	"Triage live opportunities with the same shared state the estimator writes into.",
	"Adjust pricing logic and multiplier assumptions without leaving the internal workspace.",
	"Keep routing decisions deliberate before a vetted contractor ever sees the lead.",
];

const tabs = [
	{ id: "pipeline", label: "Lead Pipeline" },
	{ id: "settings", label: "Algorithm Settings" },
];

/** @param {string} tabId */
function getTabId(tabId) {
	return `admin-tab-${tabId}`;
}

/** @param {string} tabId */
function getPanelId(tabId) {
	return `admin-panel-${tabId}`;
}

/** @param {number} index */
function getWrappedTabIndex(index) {
	return (index + tabs.length) % tabs.length;
}

export default function AdminPage() {
	const {
		pricingByProject,
		qualityMultipliers,
		leads,
		updateLeadStatus,
		saveSettings,
	} = useGlobalContext();
	const [activeTab, setActiveTab] = useState("pipeline");
	const [selectedLeadId, setSelectedLeadId] = useState(
		/** @returns {string | null} */ () => leads[0]?.id ?? null,
	);
	const selectedLead =
		leads.find((lead) => lead.id === selectedLeadId) ?? leads[0] ?? null;

	useEffect(() => {
		if (!leads.length) {
			setSelectedLeadId(null);
			return;
		}

		if (!selectedLeadId || !leads.some((lead) => lead.id === selectedLeadId)) {
			setSelectedLeadId(leads[0].id);
		}
	}, [leads, selectedLeadId]);

	/**
	 * @param {string} id
	 * @param {"Approved" | "Flagged"} status
	 */
	function handleLeadStatusChange(id, status) {
		updateLeadStatus(id, status);
		toast.success(
			status === "Approved"
				? "Lead approved for contractor handoff."
				: "Lead flagged for additional review.",
		);
	}

	/** @param {number} nextIndex */
	function activateTabByIndex(nextIndex) {
		const nextTab = tabs[getWrappedTabIndex(nextIndex)];

		setActiveTab(nextTab.id);

		const nextTabElement = document.getElementById(getTabId(nextTab.id));
		nextTabElement?.focus();
	}

	/**
	 * @param {import("react").KeyboardEvent<HTMLButtonElement>} event
	 * @param {number} currentIndex
	 */
	function handleTabKeyDown(event, currentIndex) {
		if (event.key === "ArrowRight" || event.key === "ArrowDown") {
			event.preventDefault();
			activateTabByIndex(currentIndex + 1);
			return;
		}

		if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
			event.preventDefault();
			activateTabByIndex(currentIndex - 1);
			return;
		}

		if (event.key === "Home") {
			event.preventDefault();
			activateTabByIndex(0);
			return;
		}

		if (event.key === "End") {
			event.preventDefault();
			activateTabByIndex(tabs.length - 1);
		}
	}

	return (
		<div>
			<section className="border-b border-rule bg-deep px-6 py-18 text-cream lg:px-8 lg:py-24">
				<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
					<div className="space-y-6">
						<p className="label-text">Admin Route</p>
						<h1 className="max-w-4xl text-5xl text-cream md:text-6xl">
							Run the command center behind the homeowner-facing estimate.
						</h1>
						<p className="max-w-3xl text-lg text-warm md:text-xl">
							This workspace now sits directly on the shared lead and pricing
							context. Operators can move a lead forward, flag risk, and tune
							the algorithm inputs that shape future estimates.
						</p>
					</div>

					<div className="rounded-[2rem] border border-rule bg-night/70 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
						<p className="label-text">Ops Focus</p>
						<div className="mt-5 space-y-4">
							{adminAreas.map((area) => (
								<p
									className="border-t border-rule pt-4 text-base text-warm first:border-t-0 first:pt-0"
									key={area}
								>
									{area}
								</p>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="px-6 py-16 lg:px-8 lg:py-20">
				<div className="mx-auto max-w-6xl space-y-8">
					<div className="rounded-[2rem] border border-rule bg-white/70 p-4 shadow-[0_18px_50px_rgba(17,17,17,0.06)]">
						<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
							<div
								aria-label="Admin sections"
								className="flex flex-wrap gap-3"
								role="tablist"
							>
								{tabs.map((tab, index) => {
									const isActive = activeTab === tab.id;

									return (
										<button
											aria-controls={getPanelId(tab.id)}
											aria-selected={isActive}
											className={`rounded-full border px-5 py-3 text-sm font-semibold tracking-[0.14em] uppercase transition-colors ${
												isActive
													? "border-gold bg-gold text-cream"
													: "border-rule bg-white text-deep hover:border-gold hover:text-gold"
											}`}
											id={getTabId(tab.id)}
											key={tab.id}
											onClick={() => setActiveTab(tab.id)}
											onKeyDown={(event) => handleTabKeyDown(event, index)}
											role="tab"
											tabIndex={isActive ? 0 : -1}
											type="button"
										>
											{tab.label}
										</button>
									);
								})}
							</div>

							<div className="flex flex-col gap-3 sm:flex-row">
								<BrandButton to="/estimator">Return To Intake</BrandButton>
								<BrandButton to="/pitch" variant="secondary">
									Open The Private Narrative
								</BrandButton>
							</div>
						</div>
					</div>

					<div
						aria-labelledby={getTabId("pipeline")}
						className={
							activeTab === "pipeline" ? "space-y-6" : "hidden space-y-6"
						}
						hidden={activeTab !== "pipeline"}
						id={getPanelId("pipeline")}
						role="tabpanel"
					>
						<SectionHeading
							description="The queue below combines seeded internal leads and fresh estimator submissions. Actions update shared state immediately so the status rail stays honest."
							label="Lead Pipeline"
							title="Review, qualify, and move each opportunity with intent."
						/>
						<LeadPipelineTable
							leads={leads}
							onApprove={(id) => handleLeadStatusChange(id, "Approved")}
							onFlag={(id) => handleLeadStatusChange(id, "Flagged")}
							selectedLeadId={selectedLeadId}
							onSelectLead={setSelectedLeadId}
						/>
						<LeadMatchPanel lead={selectedLead} />
					</div>

					<div
						aria-labelledby={getTabId("settings")}
						className={
							activeTab === "settings" ? "space-y-6" : "hidden space-y-6"
						}
						hidden={activeTab !== "settings"}
						id={getPanelId("settings")}
						role="tabpanel"
					>
						<SectionHeading
							description="Tune the numbers that power the estimator without breaking the shared context contract. Invalid values are blocked before the context save runs."
							label="Algorithm Settings"
							title="Adjust the pricing model and quality assumptions."
						/>
						<AlgorithmSettingsPanel
							onSave={saveSettings}
							pricingByProject={pricingByProject}
							qualityMultipliers={qualityMultipliers}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
