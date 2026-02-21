import {
	ClockIcon,
	EnvelopeIcon,
	MapPinIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";

export default function ContactInfo() {
	return (
		<section className="py-12 px-4 md:px-8 lg:px-16 mb-12 lg:mb-28 bg-accent/5 rounded-lg">
			<div className="max-w-3xl mx-auto">
				<h2 className="mb-2">Not Feeling the Form?</h2>
				<p className="mb-8">
					Prefer direct communication? No problem&mdash;use the info below to
					get in touch however you like.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-subtext1">
					<div className="flex items-start space-x-3">
						<PhoneIcon className="w-6 h-6 text-accent shrink-0" />
						<div>
							<strong>Phone</strong>
							<p>
								<a
									href="tel:+17707143389"
									className="hover:underline focus:underline"
								>
									(770) 714-3389
								</a>
							</p>
						</div>
					</div>
					<div className="flex items-start space-x-3">
						<EnvelopeIcon className="w-6 h-6 text-accent shrink-0" />
						<div>
							<strong>Email</strong>
							<p>
								<a
									href="mailto:bharris@houz2home.com"
									className="hover:underline focus:underline"
								>
									bharris@houz2home.com
								</a>
							</p>
						</div>
					</div>
					<div className="flex items-start space-x-3">
						<MapPinIcon className="w-6 h-6 text-accent shrink-0" />
						<div>
							<strong>Address</strong>
							<p>Alpharetta GA, 30005</p>
						</div>
					</div>
					<div className="flex items-start space-x-3">
						<ClockIcon className="w-6 h-6 text-accent shrink-0" />
						<div>
							<strong>Hours</strong>
							<p>Mon-Fri, 9am-5pm (EST)</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
