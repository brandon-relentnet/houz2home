import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface FAQItem {
	question: string;
	answer: string;
}

const faqs: FAQItem[] = [
	{
		question: "How long does a typical renovation take?",
		answer:
			"Timelines vary by project scope. A bathroom renovation typically takes 3\u20135 weeks, a kitchen remodel 6\u201310 weeks, and whole-home renovations can range from 3\u20136 months. We provide a detailed timeline during the planning phase and keep you updated weekly throughout the process.",
	},
	{
		question: "What is your service area?",
		answer:
			"We proudly serve the greater Metro Atlanta area, including Alpharetta, Roswell, Milton, Johns Creek, Cumming, Sandy Springs, Dunwoody, Marietta, and surrounding communities within a 40-mile radius of our Alpharetta headquarters.",
	},
	{
		question: "Do you handle permits and inspections?",
		answer:
			"Absolutely. We manage the entire permitting process on your behalf, from initial applications to final inspections. Our team is well-versed in local building codes and regulations across all the municipalities we serve.",
	},
	{
		question: "Can I live in my home during renovation?",
		answer:
			"In most cases, yes. We work carefully to minimize disruption and maintain livable conditions. For larger projects, we\u2019ll discuss temporary arrangements during the planning phase and create a phased schedule to keep key areas accessible.",
	},
	{
		question: "How do you handle unexpected issues?",
		answer:
			"Surprises are a reality of renovation work, especially in older homes. When we encounter unexpected conditions \u2014 such as outdated wiring or hidden water damage \u2014 we document everything, present options with transparent pricing, and never proceed without your explicit approval.",
	},
	{
		question: "What is your payment structure?",
		answer:
			"We use a milestone-based payment schedule tied to project phases. A typical structure includes an initial deposit, progress payments at key milestones, and a final payment upon satisfactory completion. Exact terms are outlined in your project contract.",
	},
	{
		question: "Do you offer design services?",
		answer:
			"Yes. Our in-house design team handles everything from space planning and material selection to color consultation and fixture sourcing. Design services are included in our full-service renovation packages or available as standalone consultations.",
	},
	{
		question: "What warranties do you provide?",
		answer:
			"All Houz2Home projects come with a comprehensive 2-year craftsmanship warranty covering labor and installation. Manufacturer warranties on materials and fixtures are passed through to you. We also offer extended warranty packages for added peace of mind.",
	},
	{
		question: "How do I get started?",
		answer:
			"The simplest way is to reach out via our contact page or call us directly at (770) 714-3389. We\u2019ll schedule a free in-home consultation where we assess your space, discuss your vision, and provide a preliminary estimate \u2014 all with no obligation.",
	},
	{
		question: "Do you work with HOAs?",
		answer:
			"We regularly work within HOA guidelines and can coordinate directly with your association on architectural review applications, color approvals, and exterior modification requests. We handle the paperwork so you don\u2019t have to.",
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="px-6 md:px-10 py-24 lg:py-32">
			<div className="max-w-3xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="label-text">Common Questions</span>
					<h2 className="mt-4">Frequently Asked</h2>
					<p className="max-w-xl mx-auto">
						Everything you need to know before starting your renovation journey
						with us.
					</p>
				</motion.div>

				<motion.div
					className="divide-y divide-rule border-y border-rule"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					{faqs.map((faq, i) => (
						<div key={faq.question}>
							<button
								type="button"
								onClick={() => toggle(i)}
								className="w-full flex items-center justify-between gap-4 py-6 text-left group"
							>
								<span className="font-display text-lg md:text-xl text-cream group-hover:text-gold transition-colors duration-300">
									{faq.question}
								</span>
								<motion.span
									animate={{ rotate: openIndex === i ? 180 : 0 }}
									transition={{ duration: 0.3 }}
									className="shrink-0"
								>
									<ChevronDownIcon className="w-5 h-5 text-mute group-hover:text-gold transition-colors duration-300" />
								</motion.span>
							</button>
							<AnimatePresence initial={false}>
								{openIndex === i && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{
											duration: 0.3,
											ease: [0.22, 1, 0.36, 1] as const,
										}}
										className="overflow-hidden"
									>
										<p className="pb-6 text-warm text-base leading-relaxed mb-0">
											{faq.answer}
										</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
