const ContactCTA = () => {
    return (
        <section className="py-12 px-4 md:px-8 lg:px-16mb-12 lg:mb-28 text-center">
            <div className="max-w-lg mx-auto">
                <h2 className="mb-4">Ready to Get Started?</h2>
                <p className="mb-8">
                    Let us know what you have in mind, and we will help you make it a reality. Get a free quote or schedule a consultation today.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-accent text-base font-semibold px-6 py-3 rounded-lg hover:opacity-60 transition-opacity duration-300"
                >
                    Contact Us
                </a>
            </div>
        </section>
    );
};

export default ContactCTA;
