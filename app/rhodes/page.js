export default function Rhodes() {
    return (
        <div className="w-screen min-h-screen bg-gray-100 text-gray-900">
            <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96">
                <img src="/images/rhodes-banner.webp" alt="Rhodes Island" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfairDisplay">Discover Rhodes</h2>
                </div>
            </div>

            <div className="container mx-auto py-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 space-y-16">
                {/* Section 1 */}
                <div className="flex flex-col md:flex-row items-center">
                    <img src="/images/rhodes-old-town.jpg" alt="Rhodes Old Town" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                    <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 font-playfairDisplay">The Medieval Old Town</h3>
                        <p className="text-base sm:text-lg text-gray-700">
                            The Old Town of Rhodes, a UNESCO World Heritage Site, is one of the best-preserved medieval towns in Europe.
                            Wander through its cobbled streets, explore the Palace of the Grand Master, and experience the unique blend
                            of history and modern life.
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center">
                    <img src="/images/rhodes-beach.jpg" alt="Rhodes Beaches" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                    <div className="md:w-1/2 md:pr-10 mt-6 md:mt-0">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 font-playfairDisplay">Stunning Beaches</h3>
                        <p className="text-base sm:text-lg text-gray-700">
                            Rhodes boasts some of the most beautiful beaches in Greece. From the crystal-clear waters of Anthony Quinn Bay
                            to the golden sands of Tsambika Beach, there’s a perfect spot for everyone, whether you seek adventure or relaxation.
                        </p>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col md:flex-row items-center">
                    <img src="/images/rhodes-lindos.jpg" alt="Lindos Acropolis" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                    <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 font-playfairDisplay">Lindos and the Acropolis</h3>
                        <p className="text-base sm:text-lg text-gray-700">
                            Lindos is one of the island’s most picturesque villages, with whitewashed houses, charming streets, and the impressive
                            Acropolis offering breathtaking views over the Aegean Sea.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}