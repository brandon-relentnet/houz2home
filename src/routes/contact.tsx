import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import HeroSection from "@/components/sections/HeroSection";
import Testimonials from "@/components/sections/Testimonials";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
	return (
		<>
			<HeroSection
				title={
					<>
						Get in <span className="italic text-accent">Touch</span>
					</>
				}
				subtitle={
					<>
						Let's talk <span className="underline">details</span> and bring your
						vision to life.
					</>
				}
				image="/images/webp/h2h_contact.webp"
				alt="Houz2Home Contact Image"
			/>
			<div className="page-container">
				<ContactForm />
				<ContactInfo />
			</div>
			<Testimonials />
		</>
	);
}
