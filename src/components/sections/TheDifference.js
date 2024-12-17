import Image from "next/image";

export default function TheDifference() {
    return (
        <section className="flex flex-col lg:flex-row items-stretch justify-center gap-10 lg:gap-6mb-12 lg:mb-28">
            {/* Image Column */}
            <div className="lg:w-1/2 flex justify-center items-center">
                <Image
                    src="/images/webp/h2h_difference.webp"
                    alt="Houz2Home Difference Image"
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    className="rounded-lg shadow-lg"
                    width={2560}
                    height={3413}
                    priority={true}
                />
            </div>

            {/* Text Column */}
            <div className="lg:w-1/2 flex flex-col justify-center text-left">
                <h3 className="mb-4 ml-2">
                    Perfection is <span className="italic">not</span> an understatement.
                </h3>
                <p className="section-container">
                    Houz2Home Renovations, LLC believes{" "}
                    <span className="text-accent">the difference is in the details</span>. Whether we are creating new
                    living spaces, renovating bathrooms, or designing the perfect custom kitchen, our clients take comfort in knowing every project is intelligently designed and crafted. 
                    Through every service performed by Houz2Home we strive to provide an uncompromising commitment to delivering exceptional service and value-driven results. 
                    Houz2Home takes pride in our meticulous adherence to precision craftsmanship for every project we create. 
                    Our job is to explore innovative styles and ensure inspired designs every time you invite us into your home. 
                    The little details make the biggest difference when it comes to quality, service, and comfort for our clients.
                </p>
            </div>
        </section>
    );
}
