import { motion } from "motion/react";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

interface FormData {
	name: string;
	email: string;
	subject: string;
	phone: string;
	message: string;
}

const inputClasses =
	"w-full bg-dark border border-rule px-4 py-3 text-cream placeholder:text-mute focus:outline-none focus:border-gold/50 transition-colors duration-300";

export default function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		phone: "",
		message: "",
	});
	const [statusMessage, setStatusMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const { name, email, message } = formData;

		if (!name || !email || !message) {
			setStatusMessage("Please fill in all required fields.");
			return;
		}

		try {
			setLoading(true);
			setStatusMessage("");

			// TODO: Replace with your backend API endpoint
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setStatusMessage("Thank you! Your message has been sent.");
				setFormData({
					name: "",
					email: "",
					subject: "",
					phone: "",
					message: "",
				});
			} else {
				const data = await response.json();
				setStatusMessage(
					data.message || "Something went wrong. Please try again.",
				);
			}
		} catch (error) {
			console.error("Error submitting contact form:", error);
			setStatusMessage("Error sending message. Please try again.");
		} finally {
			setLoading(false);
		}
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
					<span className="label-text">Get in Touch</span>
					<h2 className="mt-4">Send Us a Message</h2>
					<p className="max-w-xl mx-auto">
						Start the journey of transforming your house into a <em>home</em>.
					</p>
				</motion.div>

				<motion.form
					onSubmit={handleSubmit}
					className="grid grid-cols-1 sm:grid-cols-2 gap-5"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div>
						<label htmlFor="name" className="label-text mb-2 block">
							Name <span className="text-gold">*</span>
						</label>
						<input
							id="name"
							name="name"
							type="text"
							value={formData.name}
							onChange={handleChange}
							placeholder="Your name"
							className={inputClasses}
						/>
					</div>
					<div>
						<label htmlFor="email" className="label-text mb-2 block">
							Email <span className="text-gold">*</span>
						</label>
						<input
							id="email"
							name="email"
							type="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="you@example.com"
							className={inputClasses}
						/>
					</div>
					<div className="sm:col-span-2">
						<label htmlFor="subject" className="label-text mb-2 block">
							Subject
						</label>
						<input
							id="subject"
							name="subject"
							type="text"
							value={formData.subject}
							onChange={handleChange}
							placeholder="How can we help?"
							className={inputClasses}
						/>
					</div>
					<div className="sm:col-span-2">
						<label htmlFor="phone" className="label-text mb-2 block">
							Phone
						</label>
						<input
							id="phone"
							name="phone"
							type="tel"
							value={formData.phone}
							onChange={handleChange}
							placeholder="(XXX) XXX-XXXX"
							className={inputClasses}
						/>
					</div>
					<div className="sm:col-span-2">
						<label htmlFor="message" className="label-text mb-2 block">
							Message <span className="text-gold">*</span>
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows={6}
							placeholder="Tell us about your project..."
							className={inputClasses}
						/>
					</div>

					{statusMessage && (
						<div className="sm:col-span-2">
							<p className="text-sm text-center text-gold bg-gold/5 border border-gold/20 px-4 py-3 mb-0">
								{statusMessage}
							</p>
						</div>
					)}

					<div className="sm:col-span-2 flex justify-end">
						<button
							type="submit"
							disabled={loading}
							className="px-8 py-3.5 bg-gold text-night text-sm font-semibold tracking-[0.1em] uppercase hover:bg-gold-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{loading ? "Sending..." : "Send Message"}
						</button>
					</div>
				</motion.form>
			</div>
		</section>
	);
}
