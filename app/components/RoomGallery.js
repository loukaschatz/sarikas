export default function RoomGallery() {
    return (
        <div className="container mx-auto py-10 px-6 md:px-16">
            <h3 className="text-3xl font-semibold mb-6 text-center font-playfairDisplay">Our Luxury Rooms</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {Array.from({ length: 31 }).map((_, index) => (
                    <div key={index} className="w-full h-40 bg-gray-300 rounded-lg overflow-hidden shadow-md">
                        <img
                            src={`/images/rooms/image-${index + 1}.jpg`}
                            alt={`Room ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}