import BrandButton from "@/components/BrandButton";

const currencyFormatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0,
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
});

/** @param {number} value */
function formatCurrency(value) {
	return currencyFormatter.format(value);
}

/** @param {string} value */
function formatCreatedAt(value) {
	const parsedDate = new Date(value);

	return Number.isNaN(parsedDate.getTime())
		? "Unknown"
		: dateFormatter.format(parsedDate);
}

/** @param {string} status */
function getStatusClasses(status) {
	if (status === "Approved") {
		return "border border-[#1f5b42]/25 bg-[#e7f4ed] text-[#1f5b42]";
	}

	if (status === "Flagged") {
		return "border border-[#8d3f24]/20 bg-[#fff0e7] text-[#8d3f24]";
	}

	return "border border-gold/30 bg-gold/12 text-[#8b6429]";
}

/**
 * @typedef LeadPipelineTableProps
 * @property {import("@/context/GlobalContext").Lead[]} leads
 * @property {(id: string) => void} onApprove
 * @property {(id: string) => void} onFlag
 * @property {string | null} selectedLeadId
 * @property {(id: string) => void} onSelectLead
 */

/** @param {LeadPipelineTableProps} props */
export default function LeadPipelineTable({
	leads,
	onApprove,
	onFlag,
	selectedLeadId,
	onSelectLead,
}) {
	const statusCounts = {
		New: leads.filter((lead) => lead.status === "New").length,
		Approved: leads.filter((lead) => lead.status === "Approved").length,
		Flagged: leads.filter((lead) => lead.status === "Flagged").length,
	};

	if (!leads.length) {
		return (
			<div className="rounded-[2rem] border border-dashed border-rule bg-white/78 px-6 py-14 text-center shadow-[0_18px_50px_rgba(20,20,20,0.06)]">
				<p className="label-text">Pipeline Empty</p>
				<h3 className="mt-4 text-3xl">No leads are waiting for review.</h3>
				<p className="mx-auto mt-3 max-w-2xl text-base text-dim">
					New estimator submissions will appear here as soon as the intake flow
					creates them.
				</p>
			</div>
		);
	}

	return (
		<div className="space-y-5">
			<div className="grid gap-4 md:grid-cols-3">
				{Object.entries(statusCounts).map(([status, count]) => (
					<div
						className="rounded-[1.5rem] border border-rule bg-white/82 px-5 py-5 shadow-[0_12px_35px_rgba(17,17,17,0.05)]"
						key={status}
					>
						<p className="text-xs font-semibold tracking-[0.18em] uppercase text-dim">
							{status}
						</p>
						<p className="mt-3 text-4xl">{count}</p>
					</div>
				))}
			</div>

			<div className="overflow-hidden rounded-[2rem] border border-rule bg-white/88 shadow-[0_24px_70px_rgba(17,17,17,0.08)]">
				<div className="border-b border-rule bg-deep px-6 py-5 text-cream">
					<p className="label-text">Live Queue</p>
					<div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
						<div>
							<h3 className="text-3xl text-cream">Lead pipeline</h3>
							<p className="mt-2 max-w-2xl text-sm text-warm">
								Every row reflects the shared lead state used by intake and
								operations.
							</p>
						</div>
						<p className="text-sm text-warm">{leads.length} active records</p>
					</div>
				</div>

				<div className="overflow-x-auto">
					<table className="min-w-[980px] divide-y divide-rule-light">
						<thead className="bg-soft/80">
							<tr className="text-left text-xs font-semibold tracking-[0.18em] uppercase text-dim">
								<th className="px-6 py-4">Project</th>
								<th className="px-6 py-4">Owner</th>
								<th className="px-6 py-4">Estimate</th>
								<th className="px-6 py-4">Status</th>
								<th className="px-6 py-4">Actions</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-rule-light bg-white/92 align-top">
							{leads.map((lead) => {
								const isApproved = lead.status === "Approved";
								const isFlagged = lead.status === "Flagged";

								return (
									<tr
										className={`cursor-pointer hover:bg-soft/55 ${selectedLeadId === lead.id ? "bg-soft/70" : ""}`}
										key={lead.id}
										onClick={() => onSelectLead(lead.id)}
									>
										<td className="px-6 py-5">
											<div className="space-y-2">
												<p className="text-lg font-semibold text-deep">
													{lead.projectType}
												</p>
												<p className="text-sm text-dim">
													{lead.qualityTier} finish, {lead.sqFt} sq ft
												</p>
												<p className="text-sm text-dim">
													Submitted {formatCreatedAt(lead.createdAt)}
												</p>
											</div>
										</td>
										<td className="px-6 py-5">
											<div className="space-y-2 text-sm text-deep">
												<p className="font-semibold">{lead.homeownerName}</p>
												<p>{lead.email}</p>
												<p>{lead.phone}</p>
											</div>
										</td>
										<td className="px-6 py-5">
											<div className="space-y-2">
												<p className="text-lg font-semibold text-deep">
													{formatCurrency(lead.estimate)}
												</p>
												<p className="text-sm text-dim">
													Lead rating: {lead.rating}
												</p>
											</div>
										</td>
										<td className="px-6 py-5">
											<div className="space-y-3">
												<span
													className={`inline-flex rounded-full px-3 py-2 text-xs font-semibold tracking-[0.14em] uppercase ${getStatusClasses(lead.status)}`}
												>
													{lead.status}
												</span>
												<p className="text-sm text-dim">
													{isApproved
														? "Ready for contractor handoff."
														: isFlagged
															? "Needs closer internal review."
															: "Awaiting an operator decision."}
												</p>
											</div>
										</td>
										<td className="px-6 py-5">
											<div className="flex flex-col gap-3 sm:flex-row">
												<BrandButton
													className="px-4 py-2 text-xs text-cream disabled:cursor-not-allowed disabled:border-rule disabled:bg-soft disabled:text-dim"
													disabled={isApproved}
													onClick={(
														/** @type {import("react").MouseEvent<HTMLButtonElement>} */ event,
													) => {
														event.stopPropagation();
														onApprove(lead.id);
													}}
												>
													Approve
												</BrandButton>
												<BrandButton
													className="px-4 py-2 text-xs text-deep disabled:cursor-not-allowed disabled:border-rule disabled:text-dim"
													disabled={isFlagged}
													onClick={(
														/** @type {import("react").MouseEvent<HTMLButtonElement>} */ event,
													) => {
														event.stopPropagation();
														onFlag(lead.id);
													}}
													variant="secondary"
												>
													Flag
												</BrandButton>
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
