export default function About() {
    return (
      <div className="w-screen min-h-screen bg-gray-100 text-gray-900">
        {/* Banner */}
        <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96">
          <img
            src="/images/about.jpg"
            alt="Rooms Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-playfairDisplay">
              About Us
            </h2>
          </div>
        </div>
  
        {/* Content Sections */}
        <div className="container mx-auto py-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 space-y-16">
          {/* Section 1 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10">
            <img
              src="/images/image1.jpg"
              alt="Luxury Suite"
              className="w-full lg:w-1/2 aspect-video object-cover rounded-lg shadow-lg"
            />
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-playfairDisplay">
                Our Story
              </h3>
              <p className="text-gray-700 font-rubik text-lg leading-relaxed">
                Welcome to Luxury Suites, where comfort meets elegance. Our mission is to provide a luxurious stay
                with top-tier amenities and exceptional service. Whether for leisure or business, our accommodations
                offer the perfect blend of style and functionality.
              </p>
            </div>
          </div>
  
          {/* Section 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10">
            <img
              src="/images/image2.jpg"
              alt="High-end Amenities"
              className="w-full lg:w-1/2 aspect-video object-cover rounded-lg shadow-lg"
            />
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-playfairDisplay">
                Why Choose Us?
              </h3>
              <ul className="list-disc pl-6 text-gray-700 font-rubik text-lg leading-relaxed">
                <li>Prime locations with breathtaking views</li>
                <li>High-end amenities for a comfortable stay</li>
                <li>Spacious and well-designed rooms</li>
                <li>Personalized customer service</li>
                <li>Easy and seamless booking process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  