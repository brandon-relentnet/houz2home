import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const leverageData = [
	{
		stage: "Month 1",
		stageShort: "M1",
		founderHeavy: 6,
		platformIntake: 6,
	},
	{
		stage: "Month 3",
		stageShort: "M3",
		founderHeavy: 8,
		platformIntake: 12,
	},
	{
		stage: "Month 6",
		stageShort: "M6",
		founderHeavy: 9,
		platformIntake: 18,
	},
	{
		stage: "Month 12",
		stageShort: "M12",
		founderHeavy: 10,
		platformIntake: 26,
	},
];

const repeatabilityData = [
	{
		category: "Repeatability",
		shortCategory: "Repeat",
		founderHeavy: 38,
		platformIntake: 82,
	},
	{
		category: "Transferability",
		shortCategory: "Transfer",
		founderHeavy: 24,
		platformIntake: 79,
	},
	{
		category: "Transition readiness",
		shortCategory: "Transition",
		founderHeavy: 18,
		platformIntake: 76,
	},
];

const handoffData = [
	{
		category: "Lead clarity",
		shortCategory: "Clarity",
		founderHeavy: 41,
		platformIntake: 84,
	},
	{
		category: "Margin discipline",
		shortCategory: "Margin",
		founderHeavy: 46,
		platformIntake: 73,
	},
	{
		category: "Handoff quality",
		shortCategory: "Handoff",
		founderHeavy: 44,
		platformIntake: 88,
	},
];

const SCORE_DOMAIN = [0, 100];
const SCORE_TICKS = [0, 25, 50, 75, 100];

/** @param {number} value */
function formatScoreTick(value) {
	return `${value} pts`;
}

/**
 * @param {number} founderHeavy
 * @param {number} platformIntake
 */
function getLeadGapCopy(founderHeavy, platformIntake) {
	return `${platformIntake - founderHeavy} more vetted opportunities per month`;
}

/**
 * @param {number} founderHeavy
 * @param {number} platformIntake
 */
function getScoreGapCopy(founderHeavy, platformIntake) {
	return `${platformIntake - founderHeavy} point advantage`;
}

const tooltipStyle = {
	backgroundColor: "#111111",
	border: "1px solid rgba(201, 163, 91, 0.22)",
	borderRadius: "20px",
	color: "#f7f0e5",
	padding: "12px 14px",
	boxShadow: "0 18px 40px rgba(0, 0, 0, 0.28)",
};

const legendStyle = {
	paddingTop: 14,
};

/**
 * @typedef PitchChartPanelProps
 * @property {string} label
 * @property {string} title
 * @property {string} summary
 * @property {string} claim
 * @property {string} summaryTitle
 * @property {import("react").ReactNode} children
 */

/** @param {PitchChartPanelProps} props */
function PitchChartPanel({
	label,
	title,
	summary,
	claim,
	summaryTitle,
	children,
}) {
	return (
		<article className="rounded-[2rem] border border-rule bg-night px-6 py-7 text-cream shadow-[0_28px_80px_rgba(0,0,0,0.24)] sm:px-8 sm:py-9">
			<div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
				<div className="space-y-5">
					<div className="space-y-3">
						<p className="label-text">{label}</p>
						<h3 className="text-3xl text-cream md:text-4xl">{title}</h3>
						<p className="max-w-xl text-base text-warm md:text-lg">{summary}</p>
					</div>

					<div className="rounded-[1.5rem] border border-rule bg-deep/80 p-5">
						<p className="label-text text-[0.72rem] text-gold-light">
							Founder claim
						</p>
						<p className="mt-3 text-base text-cream md:text-lg">{claim}</p>
					</div>
				</div>

				<div className="min-h-[22rem] rounded-[1.5rem] border border-rule bg-deep/75 p-4 sm:p-6">
					<div className="space-y-5">
						<div>
							<p className="label-text text-[0.72rem] text-gold-light">
								{summaryTitle}
							</p>
						</div>
						{children}
					</div>
				</div>
			</div>
		</article>
	);
}

/**
 * @typedef ComparisonSummaryTableProps
 * @property {string} caption
 * @property {string} valueLabel
 * @property {Array<{label: string, founderHeavy: number, platformIntake: number, gapCopy: string}>} rows
 */

/** @param {ComparisonSummaryTableProps} props */
function ComparisonSummaryTable({ caption, valueLabel, rows }) {
	return (
		<div className="rounded-[1.25rem] border border-rule bg-night/35 p-4">
			<p className="text-sm font-semibold tracking-[0.12em] uppercase text-warm">
				{caption}
			</p>
			<div className="mt-4 overflow-x-auto">
				<table className="min-w-full border-collapse text-left text-sm text-warm">
					<caption className="sr-only">{caption}</caption>
					<thead>
						<tr className="border-b border-rule text-xs uppercase tracking-[0.14em] text-mute">
							<th className="pb-3 pr-4 font-medium" scope="col">
								Category
							</th>
							<th className="pb-3 pr-4 font-medium" scope="col">
								Founder-heavy
							</th>
							<th className="pb-3 pr-4 font-medium" scope="col">
								Platform intake
							</th>
							<th className="pb-3 font-medium" scope="col">
								Difference
							</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((row) => (
							<tr
								className="border-b border-rule/70 last:border-b-0"
								key={row.label}
							>
								<th className="py-3 pr-4 font-medium text-cream" scope="row">
									{row.label}
								</th>
								<td className="py-3 pr-4">
									{row.founderHeavy} {valueLabel}
								</td>
								<td className="py-3 pr-4">
									{row.platformIntake} {valueLabel}
								</td>
								<td className="py-3">{row.gapCopy}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default function PitchCharts() {
	return (
		<div className="space-y-10">
			<PitchChartPanel
				claim="When intake logic is documented inside the product, operator capacity grows faster than founder attention has to."
				label="Operational leverage"
				summary="Founder-led execution can improve quality, but its throughput tends to climb slowly because each new project still pulls on founder judgment. Houz2Home's intake path turns qualification and routing into visible operating rules, which creates room for more vetted opportunities without linearly adding founder time."
				summaryTitle="Chart and summary"
				title="A platform-style intake model compounds faster than manual delivery alone."
			>
				<div
					className="h-[20rem] w-full"
					role="img"
					aria-label="Line chart comparing founder-heavy execution against platform-style intake across months 1, 3, 6, and 12 in qualified opportunities per month."
				>
					<ResponsiveContainer height="100%" width="100%">
						<LineChart
							data={leverageData}
							margin={{ top: 8, right: 12, left: -10, bottom: 8 }}
							title="Operational leverage comparison"
						>
							<CartesianGrid
								stroke="rgba(237, 224, 208, 0.12)"
								vertical={false}
							/>
							<XAxis
								axisLine={false}
								dataKey="stageShort"
								tick={{ fill: "rgba(247, 240, 229, 0.76)", fontSize: 12 }}
								tickLine={false}
							/>
							<YAxis
								axisLine={false}
								domain={[0, 30]}
								tick={{ fill: "rgba(247, 240, 229, 0.76)", fontSize: 12 }}
								tickFormatter={(value) => `${value} leads`}
								tickLine={false}
								width={56}
							/>
							<Tooltip
								contentStyle={tooltipStyle}
								cursor={{ stroke: "rgba(201, 163, 91, 0.4)", strokeWidth: 1 }}
								labelStyle={{ color: "#f7f0e5" }}
								formatter={(value) => [
									`${value} qualified opportunities`,
									undefined,
								]}
								labelFormatter={(label) => {
									const matchedItem = leverageData.find(
										(item) => item.stageShort === label,
									);

									return matchedItem?.stage ?? label;
								}}
							/>
							<Legend wrapperStyle={legendStyle} />
							<Line
								activeDot={{ fill: "#c9a35b", r: 5, stroke: "#111111" }}
								dataKey="founderHeavy"
								dot={{ fill: "#f2d4a0", r: 3, strokeWidth: 0 }}
								name="Founder-heavy execution"
								stroke="#f2d4a0"
								strokeWidth={3}
								type="linear"
							/>
							<Line
								activeDot={{ fill: "#c9a35b", r: 5, stroke: "#111111" }}
								dataKey="platformIntake"
								dot={{ fill: "#c9a35b", r: 3, strokeWidth: 0 }}
								name="Platform-style intake"
								stroke="#c9a35b"
								strokeWidth={3}
								type="linear"
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>

				<ComparisonSummaryTable
					caption="Operational leverage comparison by stage"
					rows={leverageData.map((item) => ({
						label: item.stage,
						founderHeavy: item.founderHeavy,
						platformIntake: item.platformIntake,
						gapCopy: getLeadGapCopy(item.founderHeavy, item.platformIntake),
					}))}
					valueLabel="leads"
				/>
			</PitchChartPanel>

			<PitchChartPanel
				claim="The more intake, pricing, and routing become teachable systems, the easier the business is to hand to a future operator without losing judgment quality."
				label="Transferable model"
				summary="A founder-led service business often works because the founder knows how to catch nuance. Houz2Home becomes more durable when that nuance is converted into documented qualification steps, decision thresholds, and cleaner briefs that another operator can run with confidence."
				summaryTitle="Scored comparison"
				title="Documented intake increases repeatability, transferability, and transition readiness."
			>
				<div
					className="h-[20rem] w-full"
					role="img"
					aria-label="Horizontal bar chart scoring founder-heavy execution versus platform-style intake from 0 to 100 points across repeatability, transferability, and transition readiness."
				>
					<ResponsiveContainer height="100%" width="100%">
						<BarChart
							data={repeatabilityData}
							layout="vertical"
							margin={{ top: 8, right: 12, left: 28, bottom: 8 }}
							title="Repeatability and transferability score comparison"
						>
							<CartesianGrid
								stroke="rgba(237, 224, 208, 0.12)"
								strokeDasharray="3 3"
								horizontal={false}
							/>
							<XAxis
								axisLine={false}
								allowDataOverflow
								domain={SCORE_DOMAIN}
								tick={{ fill: "rgba(247, 240, 229, 0.76)", fontSize: 12 }}
								tickFormatter={formatScoreTick}
								ticks={SCORE_TICKS}
								tickLine={false}
								type="number"
							/>
							<YAxis
								axisLine={false}
								dataKey="shortCategory"
								tick={{ fill: "rgba(247, 240, 229, 0.76)", fontSize: 12 }}
								tickLine={false}
								type="category"
								width={88}
							/>
							<Tooltip
								contentStyle={tooltipStyle}
								labelStyle={{ color: "#f7f0e5" }}
								formatter={(value) => [`${value} points`, undefined]}
								labelFormatter={(label) => {
									const matchedItem = repeatabilityData.find(
										(item) => item.shortCategory === label,
									);

									return matchedItem?.category ?? label;
								}}
							/>
							<Legend wrapperStyle={legendStyle} />
							<Bar
								barSize={18}
								dataKey="founderHeavy"
								fill="#f2d4a0"
								name="Founder-heavy execution"
								radius={[0, 999, 999, 0]}
							/>
							<Bar
								barSize={18}
								dataKey="platformIntake"
								fill="#c9a35b"
								name="Platform-style intake"
								radius={[0, 999, 999, 0]}
							/>
						</BarChart>
					</ResponsiveContainer>
				</div>

				<ComparisonSummaryTable
					caption="Repeatability, transferability, and transition readiness scores"
					rows={repeatabilityData.map((item) => ({
						label: item.category,
						founderHeavy: item.founderHeavy,
						platformIntake: item.platformIntake,
						gapCopy: getScoreGapCopy(item.founderHeavy, item.platformIntake),
					}))}
					valueLabel="pts"
				/>
			</PitchChartPanel>

			<PitchChartPanel
				claim="Better handoff quality protects margins because contractors receive more context up front and the platform absorbs more of the early-stage ambiguity."
				label="Margin quality"
				summary="Margin does not improve only by charging more. It improves when the intake layer reduces mismatch, clarifies homeowner intent, and standardizes what gets handed forward. That makes each introduction more credible and reduces costly rework in the earliest conversations."
				summaryTitle="Scored comparison"
				title="Cleaner briefs and cleaner handoffs create stronger margin quality."
			>
				<div
					className="h-[20rem] w-full"
					role="img"
					aria-label="Vertical bar chart scoring founder-heavy execution versus platform-style intake from 0 to 100 points across lead clarity, margin discipline, and handoff quality."
				>
					<ResponsiveContainer height="100%" width="100%">
						<BarChart
							data={handoffData}
							margin={{ top: 8, right: 12, left: 0, bottom: 32 }}
							title="Margin quality and handoff score comparison"
						>
							<CartesianGrid
								stroke="rgba(237, 224, 208, 0.12)"
								vertical={false}
							/>
							<XAxis
								axisLine={false}
								dataKey="shortCategory"
								tick={{ fill: "rgba(247, 240, 229, 0.76)", fontSize: 12 }}
								tickMargin={10}
								tickLine={false}
								interval={0}
							/>
							<YAxis
								axisLine={false}
								allowDataOverflow
								domain={SCORE_DOMAIN}
								tick={{ fill: "rgba(247, 240, 229, 0.76)", fontSize: 12 }}
								tickFormatter={formatScoreTick}
								ticks={SCORE_TICKS}
								tickLine={false}
								width={56}
							/>
							<Tooltip
								contentStyle={tooltipStyle}
								labelStyle={{ color: "#f7f0e5" }}
								formatter={(value) => [`${value} points`, undefined]}
								labelFormatter={(label) => {
									const matchedItem = handoffData.find(
										(item) => item.shortCategory === label,
									);

									return matchedItem?.category ?? label;
								}}
							/>
							<Legend wrapperStyle={legendStyle} />
							<Bar
								barSize={24}
								dataKey="founderHeavy"
								fill="#f2d4a0"
								name="Founder-heavy execution"
								radius={[999, 999, 0, 0]}
							/>
							<Bar
								barSize={24}
								dataKey="platformIntake"
								fill="#c9a35b"
								name="Platform-style intake"
								radius={[999, 999, 0, 0]}
							/>
						</BarChart>
					</ResponsiveContainer>
				</div>

				<ComparisonSummaryTable
					caption="Lead clarity, margin discipline, and handoff quality scores"
					rows={handoffData.map((item) => ({
						label: item.category,
						founderHeavy: item.founderHeavy,
						platformIntake: item.platformIntake,
						gapCopy: getScoreGapCopy(item.founderHeavy, item.platformIntake),
					}))}
					valueLabel="pts"
				/>
			</PitchChartPanel>
		</div>
	);
}
