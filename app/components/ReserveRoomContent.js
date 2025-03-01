"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function ReserveRoomContent() {
    const searchParams = useSearchParams();
    const checkIn = searchParams.get("checkIn");
    const checkOut = searchParams.get("checkOut");
    const roomType = searchParams.get("roomType");
    const guests = searchParams.get("guests");

    return (
        <div className="w-screen min-h-screen bg-gray-100 p-4 md:p-8 flex flex-col md:flex-row pt-32">
            {/* Left Column - Room Details */}
            <div className="w-full md:w-2/3 bg-white shadow-lg p-6 rounded-lg mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 capitalize font-playfairDisplay">{roomType} Room</h2>
                <div className="w-full h-48 md:h-64 relative mb-4">
                    <Image src={`/images/${roomType}.jpg`} alt={roomType} layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <p className="text-gray-700 font-rubik">
                    Enjoy a luxurious stay in our {roomType} room. Equipped with modern amenities and elegant decor, 
                    it ensures a comfortable and relaxing experience.
                </p>
                <h3 className="text-lg md:text-xl font-semibold mt-4">Amenities:</h3>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Air Conditioning</li>
                    <li>Free Wi-Fi</li>
                    <li>Smart TV</li>
                    <li>Private Bathroom</li>
                    <li>Mini Bar</li>
                    <li>Room Service</li>
                </ul>
            </div>

            {/* Right Column - Booking Form */}
            <div className="w-full md:w-1/3 md:ml-6 bg-white shadow-lg p-6 rounded-lg">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 font-playfairDisplay">Booking Details</h2>
                <p><strong>Check-in:</strong> {checkIn}</p>
                <p><strong>Check-out:</strong> {checkOut}</p>
                <p><strong>Guests:</strong> {guests}</p>

                <h3 className="text-lg md:text-xl font-semibold mt-4 font-playfairDisplay">Your Information</h3>
                <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mt-2" />
                <input type="email" placeholder="Email" className="w-full p-2 border rounded mt-2" />

                <button className="bg-blue-500 text-white p-2 w-full rounded mt-4 hover:bg-blue-400 transition duration-200">
                    Proceed to Payment
                </button>
            </div>
        </div>
    )
}