import {
    WrenchIcon,
    SparklesIcon,
    BuildingStorefrontIcon,
    HomeModernIcon,
    PaintBrushIcon,
    PlusCircleIcon
} from '@heroicons/react/24/outline';

const services = [
    {
        title: 'Kitchen Remodeling',
        description: 'Upgrade cabinetry, countertops, and appliances for a modern, functional kitchen.',
        Icon: WrenchIcon,
    },
    {
        title: 'Bathroom Renovations',
        description: 'Enhance your bathroom’s comfort and style with updated fixtures and finishes.',
        Icon: SparklesIcon,
    },
    {
        title: 'Basement Finishing',
        description: 'Transform your basement into a livable, welcoming space for work or leisure.',
        Icon: BuildingStorefrontIcon,
    },
    {
        title: 'Flooring Installation',
        description: 'Add warmth and character to your home with high-quality hardwood or tile floors.',
        Icon: HomeModernIcon,
    },
    {
        title: 'Exterior Improvements',
        description: 'Boost curb appeal with new siding, roofing, windows, or a fresh coat of paint.',
        Icon: PaintBrushIcon,
    },
    {
        title: 'Room Additions',
        description: 'Expand your living space with strategically planned additions or extensions.',
        Icon: PlusCircleIcon,
    },
];

const ServicesGrid = () => {
    return (
        <section className="py-12 px-4 md:px-8 lg:px-16mb-12 lg:mb-28">
            <div className="max-w-7xl mx-auto">
                <h2 className='text-center'>Our Expertise, Your Dream Home</h2>
                <p className="text-center max-w-xl mx-auto mb-8">
                    Explore our wide range of services designed to bring your renovation vision to life.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-surface0 rounded-lg overflow-hidden shadow border-2 border-transparent hover:shadow-lg hover:border-accent transition duration-300 p-6 flex flex-col items-center text-center"
                        >
                            <service.Icon className="h-12 w-12 text-accent mb-4" />
                            <h5>{service.title}</h5>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
