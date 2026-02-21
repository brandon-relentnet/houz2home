import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const testimonials = [
	{
		name: "Emily Davis",
		feedback:
			"\u201CThe kitchen remodel turned out absolutely stunning. Every detail, from the cabinetry to the fixtures, was thoughtfully designed and perfectly executed. I love how they managed to combine functionality with beauty. The kitchen has truly become the heart of our home.\u201D",
	},
	{
		name: "Michael Thompson",
		feedback:
			"\u201CThe entire renovation process felt easy and straightforward. From the initial design consultation to the finishing touches, everything was handled with care and precision. I really appreciated the personal touch and how they listened to exactly what we wanted.\u201D",
	},
	{
		name: "Sarah Wilson",
		feedback:
			"\u201CI couldn\u2019t believe how they transformed our outdated bathroom into a gorgeous, spa-like retreat. It\u2019s not just about how it looks\u2014though it\u2019s beautiful\u2014it\u2019s also so much more functional and practical for our needs. I can\u2019t stop showing it off!\u201D",
	},
	{
		name: "David Martinez",
		feedback:
			"\u201CThe attention to detail throughout the project was impressive. Every small touch felt intentional, and it shows in the final result. I felt like I was in good hands from start to finish, and now I have a living room I\u2019m proud to host guests in.\u201D",
	},
	{
		name: "Lisa Brown",
		feedback:
			"\u201CI had a vision for our master bedroom, but I wasn\u2019t sure how to make it a reality. The design was absolutely spot-on, and the finished space feels cozy, elegant, and totally \u2018us.\u2019 They really took the time to understand what we wanted and made it happen.\u201D",
	},
	{
		name: "Chris Walker",
		feedback:
			"\u201CI\u2019ve had a few renovations done before, but this was by far the smoothest experience. The craftsmanship is top-notch, and it\u2019s clear there\u2019s a lot of pride and skill that goes into the work. The difference it\u2019s made to our home is incredible.\u201D",
	},
	{
		name: "Natalie Green",
		feedback:
			"\u201CWhat sets this experience apart is the thoughtfulness and care put into every step. I felt involved and heard throughout the process, and the results exceeded anything I imagined. It feels like my home, but better in every way.\u201D",
	},
];

export default function Testimonials() {
	const [index, setIndex] = useState(0);

	const prev = () =>
		setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
	const next = () => setIndex((i) => (i + 1) % testimonials.length);

	const testimonial = testimonials[index];

	return (
		<>
			<h2 className="text-center">Proof in Every Project</h2>
			<p className="text-center max-w-xl mx-auto mb-8">
				Don&apos;t just take our word for it &#8208; Hear what our Clients have
				to say.
			</p>
			<section className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center">
				<div className="absolute inset-0 bg-mantle pointer-events-none shadow-inner" />
				<div className="relative w-full h-full flex items-center justify-center px-4 md:px-8">
					<div
						className="flex flex-col items-center justify-center text-center transition-opacity duration-300"
						style={{ maxWidth: "750px" }}
					>
						<ChatBubbleOvalLeftEllipsisIcon className="h-12 w-12 text-accent mb-6" />
						<p className="text-xl md:text-2xl font-light italic mb-4 px-16">
							{testimonial.feedback}
						</p>
						<span className="font-semibold">{testimonial.name}</span>
					</div>
				</div>
				<button
					type="button"
					className="absolute top-1/2 -translate-y-1/2 left-8 cursor-pointer z-10"
					onClick={prev}
					aria-label="Previous testimonial"
				>
					<span className="text-3xl font-bold hover:opacity-80 transition-opacity">
						&#10094;
					</span>
				</button>
				<button
					type="button"
					className="absolute top-1/2 -translate-y-1/2 right-8 cursor-pointer z-10"
					onClick={next}
					aria-label="Next testimonial"
				>
					<span className="text-3xl font-bold hover:opacity-80 transition-opacity">
						&#10095;
					</span>
				</button>
			</section>
		</>
	);
}
