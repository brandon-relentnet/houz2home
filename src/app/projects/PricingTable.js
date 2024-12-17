export default function PricingTable() {
    return (
        <>
            <h2 className="mb-16 text-center">Pricing Table</h2>
            <div className="flex justify-center items-center pb-64">
                <div className="flex w-full items-center">
                    {/* Column 1 */}
                    <div className="flex flex-col flex-grow shadow gap-16 rounded-l-md bg-surface0 p-4">
                        <div className="flex flex-col gap-4">
                            <div className="w-8 h-6 bg-surface1"></div>
                            <div className="h-4 bg-surface2"></div>
                        </div>

                        <div className="h-6 bg-mauve rounded"></div>

                        <div className="flex flex-col border-t-4 border-surface1 pt-4 mb-8 gap-4">
                            <div className="w-6 h-6 bg-mauve rounded"></div>
                            <div className="w-6 h-6 bg-overlay0 rounded"></div>
                            <div className="w-6 h-6 bg-overlay0 rounded"></div>
                            <div className="w-6 h-6 bg-overlay0 rounded"></div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-16 p-4 shadow-xl border-4 flex-grow border-pink rounded-xl bg-surface0">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between place-items-center">
                                <div className="w-8 h-6 bg-surface1"></div>
                                <div className="w-[40%] bg-overlay2 h-1.5 rounded-full"></div>
                            </div>
                            <div className="h-4 bg-surface2"></div>
                            <div className="h-4 bg-surface2"></div>
                        </div>

                        <div className="h-6 bg-pink rounded"></div>

                        <div className="flex flex-col border-t-4 border-surface1 pt-4 mb-16 gap-4">
                            <div className="w-6 h-6 bg-pink rounded"></div>
                            <div className="w-6 h-6 bg-pink rounded"></div>
                            <div className="w-6 h-6 bg-overlay0 rounded"></div>
                            <div className="w-6 h-6 bg-overlay0 rounded"></div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-16 p-4 flex-grow bg-surface0">
                        <div className="flex flex-col gap-4">
                            <div className="w-8 h-6 bg-surface1"></div>
                            <div className="h-4 bg-surface2"></div>
                        </div>

                        <div className="h-6 bg-blue rounded"></div>

                        <div className="flex flex-col border-t-4 border-surface1 pt-4 mb-8 gap-4">
                            <div className="w-6 h-6 bg-blue rounded"></div>
                            <div className="w-6 h-6 bg-blue rounded"></div>
                            <div className="w-6 h-6 bg-blue rounded"></div>
                            <div className="w-6 h-6 bg-overlay0 rounded"></div>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="flex rounded-r-md flex-col gap-16 p-4 flex-grow bg-surface0">
                        <div className="flex flex-col gap-4">
                            <div className="w-8 h-6 bg-surface1"></div>
                            <div className="h-4 bg-surface2"></div>
                        </div>

                        <div className="h-6 bg-green rounded"></div>

                        <div className="flex flex-col border-t-4 border-surface1 pt-4 mb-8 gap-4">
                            <div className="w-6 h-6 bg-green rounded"></div>
                            <div className="w-6 h-6 bg-green rounded"></div>
                            <div className="w-6 h-6 bg-green rounded"></div>
                            <div className="w-6 h-6 bg-green rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}