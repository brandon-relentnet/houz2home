import { CheckCircleIcon, LightBulbIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline';

const features = [
    {
        title: 'Quality Craftsmanship',
        description: 'Our experienced professionals use the highest quality materials and techniques.',
        Icon: ShieldCheckIcon,
    },
    {
        title: 'Innovative Designs',
        description: 'We stay on top of trends to offer fresh, modern designs tailored to your taste.',
        Icon: LightBulbIcon,
    },
    {
        title: 'Transparent Pricing',
        description: 'No hidden fees. We provide clear, upfront pricing and honest recommendations.',
        Icon: CheckCircleIcon,
    },
    {
        title: 'Customer Satisfaction',
        description: 'We are committed to your happiness, ensuring the job is done right the first time.',
        Icon: StarIcon,
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-12 px-4 md:px-8 mb-28">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center mb-8">Why Choose Us?</h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-surface0 rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition duration-300"
                        >
                            <feature.Icon className="h-12 w-12 text-accent mx-auto mb-4" />
                            <h5 className="font-semibold mb-2">{feature.title}</h5>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
