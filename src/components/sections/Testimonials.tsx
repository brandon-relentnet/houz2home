import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Testimonial {
	name: string;
	project: string;
	feedback: string;
}

const testimonials: Testimonial[] = [
	{
		name: "Emily Davis",
		project: "Kitchen Remodel",
		feedback:
			"The kitchen remodel turned out absolutely stunning. Every detail, from the cabinetry to the fixtures, was thoughtfully designed and perfectly executed. I love how they managed to combine functionality with beauty. The kitchen has truly become the heart of our home.",
	},
	{
		name: "Michael Thompson",
		project: "Whole-Home Renovation",
		feedback:
			"The entire renovation process felt easy and straightforward. From the initial design consultation to the finishing touches, everything was handled with care and precision. I really appreciated the personal touch and how they listened to exactly what we wanted.",
	},
	{
		name: "Sarah Wilson",
		project: "Bathroom Transformation",
		feedback:
			"I couldn\u2019t believe how they transformed our outdated bathroom into a gorgeous, spa-like retreat. It\u2019s not just about how it looks \u2014 though it\u2019s beautiful \u2014 it\u2019s also so much more functional and practical for our needs.",
	},
	{
		name: "David Martinez",
		project: "Living Room Redesign",
		feedback:
			"The attention to detail throughout the project was impressive. Every small touch felt intentional, and it shows in the final result. I felt like I was in good hands from start to finish, and now I have a living room I\u2019m proud to host guests in.",
	},
	{
		name: "Lisa Brown",
		project: "Master Suite",
		feedback:
			"I had a vision for our master bedroom, but I wasn\u2019t sure how to make it a reality. The design was absolutely spot-on, and the finished space feels cozy, elegant, and totally \u2018us.\u2019 They really took the time to understand what we wanted.",
	},
	{
		name: "Chris Walker",
		project: "Full Renovation",
		feedback:
			"I\u2019ve had a few renovations done before, but this was by far the smoothest experience. The craftsmanship is top-notch, and it\u2019s clear there\u2019s a lot of pride and skill that goes into the work. The difference it\u2019s made to our home is incredible.",
	},
	{
		name: "Natalie Green",
		project: "Home Update",
		feedback:
			"What sets this experience apart is the thoughtfulness and care put into every step. I felt involved and heard throughout the process, and the results exceeded anything I imagined. It feels like my home, but better in every way.",
	},
	{
		name: "Jessica & Mark Reynolds",
		project: "Whole-Home Renovation",
		feedback:
			"We gutted and rebuilt nearly every room in our 1990s colonial. The team managed the entire project without a single major delay, which honestly amazed us. Walking into our finished home felt like moving into a completely new house \u2014 but with all the character we loved about the original.",
	},
	{
		name: "Tom Anderson",
		project: "Basement Finishing",
		feedback:
			"Our basement went from a damp, unused storage area to a fully finished family room with a wet bar and home theater. The waterproofing work alone was worth every penny. My kids practically live down there now, and game day has never been better.",
	},
	{
		name: "Patricia Nguyen",
		project: "Kitchen Transformation",
		feedback:
			"I cook every single day, so the kitchen had to be perfect \u2014 not just pretty, but truly functional. They nailed the workflow layout, the storage solutions are brilliant, and the custom range hood is a work of art. I\u2019ve never enjoyed cooking more.",
	},
	{
		name: "The Martinez Family",
		project: "Outdoor Living Space",
		feedback:
			"Our backyard was just grass and a cracked patio. Now we have a covered outdoor kitchen, a stone fireplace, and a pergola that\u2019s become our favorite place to spend evenings. The whole family uses the space year-round. It\u2019s like gaining an entire new room.",
	},
	{
		name: "Robert & Amanda Clark",
		project: "Historic Home Preservation",
		feedback:
			"We needed a team that understood the balance between preservation and modernization in our 1940s Craftsman. They restored the original hardwood, matched the period trim work, and seamlessly integrated modern plumbing and electrical. Our home feels timeless again.",
	},
];

export default function Testimonials() {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const navigate = (newDirection: number) => {
		setDirection(newDirection);
		setIndex(
			(i) => (i + newDirection + testimonials.length) % testimonials.length,
		);
	};

	const testimonial = testimonials[index];

	return (
		<section className="px-6 md:px-10 py-24 lg:py-32 bg-dark border-y border-rule overflow-hidden">
			<div className="max-w-4xl mx-auto">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="label-text">Testimonials</span>
					<h2 className="mt-4">Proof in Every Project</h2>
					<p className="max-w-xl mx-auto">
						Don&apos;t just take our word for it &mdash; hear what our clients
						have to say about their renovation experience.
					</p>
				</motion.div>

				<div className="relative min-h-[280px] flex items-center justify-center">
					<AnimatePresence mode="wait">
						<motion.blockquote
							key={index}
							initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
							transition={{
								duration: 0.4,
								ease: [0.22, 1, 0.36, 1] as const,
							}}
							className="text-center"
						>
							<span className="block text-gold text-5xl font-display leading-none mb-6">
								&ldquo;
							</span>
							<p className="text-lg md:text-xl text-cream/90 font-light font-display italic leading-relaxed mb-8">
								{testimonial.feedback}
							</p>
							<footer>
								<div className="h-px w-8 bg-gold mx-auto mb-4" />
								<cite className="not-italic text-sm font-semibold tracking-[0.1em] uppercase text-warm">
									{testimonial.name}
								</cite>
								<span className="block text-xs text-mute mt-1">
									{testimonial.project}
								</span>
							</footer>
						</motion.blockquote>
					</AnimatePresence>
				</div>

				<div className="flex items-center justify-center gap-6 mt-8">
					<button
						type="button"
						onClick={() => navigate(-1)}
						className="w-10 h-10 border border-rule hover:border-gold/50 flex items-center justify-center transition-colors duration-300 text-warm hover:text-cream"
						aria-label="Previous testimonial"
					>
						<svg
							className="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={1.5}
							role="img"
							aria-label="Left arrow"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>
					</button>
					<span className="text-xs text-mute tabular-nums">
						{String(index + 1).padStart(2, "0")} /{" "}
						{String(testimonials.length).padStart(2, "0")}
					</span>
					<button
						type="button"
						onClick={() => navigate(1)}
						className="w-10 h-10 border border-rule hover:border-gold/50 flex items-center justify-center transition-colors duration-300 text-warm hover:text-cream"
						aria-label="Next testimonial"
					>
						<svg
							className="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={1.5}
							role="img"
							aria-label="Right arrow"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}
