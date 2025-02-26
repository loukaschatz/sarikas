export default function Rooms() {
    const rooms = [
        {
            name: "Penthouse",
            images: ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg"],
            details: {
                guests: 4,
                amenities: "air-conditioning, bed linen, cooking basics, dishes and silverware, elevator, free wi-fi, hairdryer, hangers, hot water kettle, kitchen, lockbox, microwave, oven, refrigerator, room-darkening shades, self check-in, shampoo, stove, terrace, TV, wardrobe",
                size: "51m²",
                bedType: "queen bed, sofa bed",
                category: "One Bedroom Apartments"
            }
        },
        {
            name: "Roof Top Jacuzzi",
            images: ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg"],
            details: {
                guests: 2,
                amenities: "private jacuzzi, air-conditioning, free wi-fi, minibar, terrace view",
                size: "45m²",
                bedType: "king bed",
                category: "Luxury Suites"
            }
        },
        {
            name: "Family Room",
            images: ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg"],
            details: {
                guests: 4,
                amenities: "air-conditioning, kitchen, washing machine, free wi-fi, child-friendly",
                size: "60m²",
                bedType: "queen bed, bunk bed",
                category: "Family Suites"
            }
        },
        {
            name: "Studio",
            images: ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg"],
            details: {
                guests: 2,
                amenities: "compact kitchen, free wi-fi, TV, air-conditioning",
                size: "35m²",
                bedType: "double bed",
                category: "Studio Apartments"
            }
        }
    ];

    return (
        <div className="w-screen min-h-screen bg-gray-100 text-gray-900 pt-20">
            <div className="container mx-auto py-10">
                <h2 className="text-3xl font-semibold text-center mb-6 font-playfairDisplay">Our Rooms</h2>
                <div className="space-y-10">
                    {rooms.map((room, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 font-playfairDisplay">{room.name}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                                {room.images.map((img, i) => (
                                    <img key={i} src={img} className="rounded-lg shadow-lg" alt={`${room.name} image ${i + 1}`} />
                                ))}
                            </div>
                            <div className="text-gray-700">
                                <p><strong>Guests:</strong> {room.details.guests}</p>
                                <p><strong>Amenities:</strong> {room.details.amenities}</p>
                                <p><strong>Size:</strong> {room.details.size}</p>
                                <p><strong>Bed Type:</strong> {room.details.bedType}</p>
                                <p><strong>Category:</strong> {room.details.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
