import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import FAQ from "@/components/sections/FAQ";
import HeroSection from "@/components/sections/HeroSection";
import Testimonials from "@/components/sections/Testimonials";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
	return (
		<>
			<HeroSection
				title={
					<>
						Get in <em className="text-gold">Touch</em>
					</>
				}
				subtitle={
					<>
						Let&apos;s talk <span className="text-gold">details</span> and bring
						your vision to life.
					</>
				}
				image="/images/webp/h2h_contact.webp"
				alt="Houz2Home consultation meeting"
			/>
			<ContactForm />
			<ContactInfo />
			<FAQ />
			<Testimonials />
		</>
	);
}
