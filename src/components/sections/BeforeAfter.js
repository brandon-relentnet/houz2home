import Image from 'next/image';

const BeforeAfter = () => {
    return (
        <section className="py-12 px-4 md:px-8 lg:px-16 mb-28">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center">Before & After</h2>
                <p className="text-center max-w-xl mx-auto mb-8">
                    See the transformative difference, turning outdated or underutilized spaces into inviting and functional areas you will love.
                </p>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    {/* Before Image */}
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/images/webp/h2h_before.webp"
                                alt="Before Renovation"
                                width={600}
                                height={400}
                                className="object-cover w-full h-auto"
                            />
                            <div className="absolute bottom-0 left-0 bg-overlay0 bg-opacity-60 text-text px-3 py-1 rounded-tr-lg pointer-events-none">
                                Before
                            </div>
                        </div>
                    </div>

                    {/* After Image */}
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/images/webp/h2h_after.webp"
                                alt="After Renovation"
                                width={600}
                                height={400}
                                className="object-cover w-full h-auto"
                            />
                            <div className="absolute bottom-0 left-0 bg-overlay0 bg-opacity-60 text-text px-3 py-1 rounded-tr-lg pointer-events-none">
                                After
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
