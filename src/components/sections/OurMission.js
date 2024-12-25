import Image from "next/image";

export default function Mission() {
    return (
        <section className="flex flex-col lg:flex-row items-stretch justify-center gap-10 lg:gap-6mb-12 py-12 px-4 md:px-8 lg:px-16mb-12 lg:mb-28">
            {/* Text Column */}
            <div className="lg:w-1/2 flex flex-col justify-center text-left">
                <h3 className="mb-4 ml-2">
                Redefining homes, <span className="italic">enriching</span> lives.
                </h3>
                <p className="section-container">
                At the core of our purpose lies a passion for recreating spaces into havens of comfort, beauty, and inspiration. We don’t merely renovate structures — we shape personalized environments that embody the dreams and aspirations of the families who inhabit them. Through collaboration, innovation, and unmatched craftsmanship, our mission is to transform each corner of your home into a reflection of who you are, fostering joy and harmony in everyday life.                </p>
            </div>

            {/* Image Column */}
            <div className="lg:w-1/2 flex justify-center items-center">
                <Image
                    src="/images/webp/h2h_mission.webp"
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
        </section>
    );
}
