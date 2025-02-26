export default function About() {
  return (
      <div className="w-screen min-h-screen bg-gray-100 text-gray-900">
          <div className="relative w-full h-60">
              <img src="/images/about.jpg" alt="Rooms Banner" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-white font-playfairDisplay mt-5">About Us</h2>
              </div>
          </div>
          
          <div className="container mx-auto py-10 px-6 md:px-16 space-y-16">
              {/* Section 1 */}
              <div className="flex flex-col md:flex-row items-center md:items-start">
                  <img src="/images/image1.jpg" alt="Luxury Suite" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                  <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
                      <h3 className="text-2xl font-semibold mb-4 font-playfairDisplay">Our Story</h3>
                      <p className="text-gray-700 font-rubik">
                          Welcome to Luxury Suites, where comfort meets elegance. Our mission is to provide a luxurious stay
                          with top-tier amenities and exceptional service. Whether for leisure or business, our accommodations
                          offer the perfect blend of style and functionality.
                      </p>
                  </div>
              </div>

              {/* Section 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
                  <img src="/images/image2.jpg" alt="High-end Amenities" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                  <div className="md:w-1/2 md:pr-10 mt-6 md:mt-0">
                      <h3 className="text-2xl font-semibold mb-4 font-playfairDisplay">Why Choose Us?</h3>
                      <ul className="list-disc pl-6 text-gray-700 font-rubik">
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
