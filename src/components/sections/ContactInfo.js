import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function ContactInfo() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 mb-12 lg:mb-28 bg-accent/5 rounded-lg">
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-2">Not Feeling the Form?</h2>
        <p className="mb-8">
          Prefer direct communication? No problem—use the info below to get in touch
          however you like.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-subtext1">
          {/* Phone */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <PhoneIcon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <strong>Phone</strong>
              <p>
                <a
                  href="tel:+1234567890"
                  className="hover:underline focus:underline"
                >
                  (770) 714-3389
                </a>
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <EnvelopeIcon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <strong>Email</strong>
              <p>
                <a
                  href="mailto:bcharris713@gmail.com"
                  className="hover:underline focus:underline"
                >
                  bharris@houz2home.com
                </a>
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <MapPinIcon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <strong>Address</strong>
              <p>Alpharetta GA, 30005</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <ClockIcon className="w-6 h-6 text-accent" />
            </div>
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
