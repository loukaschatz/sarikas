"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
];

export default function Banner() {
    const [index, setIndex] = useState(0);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [changeCheckIn, setChangeCheckIn] = useState(false)
    const [changeCheckOut, setChangeCheckOut] = useState(false)
    const [roomType, setRoomType] = useState("");
    const [guests, setGuests] = useState(0);

    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Update guests count when room type changes
    useEffect(() => {
        if (roomType === "family") {
            setGuests(4);
        } else if (roomType) {
            setGuests(2);
        } else {
            setGuests(0);
        }
    }, [roomType]);

    const handleSearch = () => {
        if (checkIn && checkOut && roomType) {
            router.push(`/reserve-room?checkIn=${checkIn}&checkOut=${checkOut}&roomType=${roomType}&guests=${guests}`);
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
    <div className="relative w-screen h-screen overflow-hidden">
        {images.map((src, i) => (
            <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
            >
            <Image src={src} alt={`Slide ${i}`} layout="fill" objectFit="cover" />
            </motion.div>
        ))}

        {/* Title */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold shadow-md bg-black bg-opacity-50 px-6 py-2 rounded-lg font-playfairDisplay">
            Welcome to Your Dream Stay
        </div>

        {/* Booking Search Box */}
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 bg-white p-8 shadow-lg flex space-x-4">
            <input
                type={changeCheckIn ? "date" : "text"}
                className="p-2 border rounded w-40 outline-none"
                placeholder="Check-in"
                value={checkIn}
                min={new Date().toISOString().split("T")[0]} // Αποτρέπει παρελθοντικές ημερομηνίες
                onFocus={() => setChangeCheckIn(true)}
                onChange={(e) => setCheckIn(e.target.value)}
            />
            <input
                type={changeCheckOut ? "date" : "text"}
                className="p-2 border rounded w-40 outline-none"
                placeholder="Check-out"
                value={checkOut}
                min={checkIn ? new Date(new Date(checkIn).setDate(new Date(checkIn).getDate() + 2)).toISOString().split("T")[0] : ""}
                onFocus={() => setChangeCheckOut(true)}
                onChange={(e) => setCheckOut(e.target.value)}
                disabled={!checkIn} // Απενεργοποιημένο αν δεν έχει επιλεγεί Check-in
            />
            {/* Room Type Select Dropdown */}
            <select 
                className="p-2 border rounded w-48 outline-none bg-white text-gray-400"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
            >
                <option value="" disabled hidden>Room Type</option>
                <option value="penthouse">Penthouse</option>
                <option value="rooftop-jacuzzi">Roof Top Jacuzzi</option>
                <option value="family">Family</option>
                <option value="studio">Studio</option>
            </select>
            {/* Guests (Auto-filled & Read-Only) */}
            <input 
                type="number" 
                className="p-4 border w-28 rounded outline-none bg-white text-gray-400 cursor-not-allowed"
                value={guests === 0 ? "" : guests}
                placeholder="Guests"
                readOnly 
            />
            <button 
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 transition duration-200"
                onClick={handleSearch}
            >
                Search Availability
            </button>
        </div>
    </div>
    )
}