"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { loadStripe } from "@stripe/stripe-js";
import { db } from "@/firebase"; // Φρόντισε να έχεις κάνει σωστά το Firebase setup

export default function ReserveRoomContent() {
    const searchParams = useSearchParams();
    const checkIn = searchParams.get("checkIn");
    const checkOut = searchParams.get("checkOut");
    const roomType = searchParams.get("roomType");
    const guests = searchParams.get("guests");

    const [availability, setAvailability] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!roomType || !checkIn || !checkOut) return;

        const fetchAvailability = async () => {
            setLoading(true);
            try {
                const checkInDate = new Date(checkIn);
                const checkOutDate = new Date(checkOut);
                
                let currentDate = new Date(checkInDate);
                let isAvailable = true;
                let priceList = [];

                while (currentDate < checkOutDate) {
                    const monthYear = `${String(currentDate.getMonth() + 1).padStart(2, '0')} ${String(currentDate.getFullYear()).slice(-2)}`;
                    const day = String(currentDate.getDate()).padStart(2, '0');

                    const docRef = doc(db, "rooms", roomType, monthYear, day);
                    const docSnap = await getDoc(docRef);

                    if (!docSnap.exists() || !docSnap.data().reserved) {
                        isAvailable = true;
                    }
                    
                    const price = Number(docSnap.data().price);
                    if (typeof price === "number" && !isNaN(price)) {
                        priceList.push(price);
                    }

                    currentDate.setDate(currentDate.getDate() + 1);
                }

                setAvailability(isAvailable);

                if (priceList.length > 0) {
                    const total = priceList.reduce((acc, price) => acc + price, 0);
                    setTotalPrice(total.toFixed(2));
                } else {
                    setTotalPrice(0);
                }
            } catch (error) {
                console.error("Error fetching availability:", error);
                setAvailability(null);
            }
            setLoading(false);
        };

        fetchAvailability();
    }, [roomType, checkIn, checkOut]);

    const proceedToPayment = async (e) => {
        e.preventDefault()

        const res = await fetch('/api/payment', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                price: totalPrice,
            })
        })

        const dataFromApi = await res.json()

        // Init Stripe
        const stripe = await loadStripe('pk_test_51R3gTwGpQr2GxG8SfIEWBq1y2Yf8b957KH3q4gtqRUOhOJig6tD3y045CEXGN4ufMbXxJqBBCAPBW0P1Xps35bVS00BK89sggg')
        stripe.redirectToCheckout({ sessionId: dataFromApi.id })
    }

    return (
        <div className="w-screen min-h-screen bg-gray-100 p-4 md:p-8 flex flex-col md:flex-row">
            {/* Left Column - Room Details */}
            <div className="w-full md:w-2/3 bg-white shadow-lg p-6 rounded-lg mb-6 md:mb-0 mt-32">
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
            <div className="w-full md:w-1/3 md:ml-6 bg-white shadow-lg p-6 rounded-lg mt-32">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 font-playfairDisplay">Booking Details</h2>
                <p><strong>Check-in:</strong> {checkIn}</p>
                <p><strong>Check-out:</strong> {checkOut}</p>
                <p><strong>Guests:</strong> {guests}</p>
                <p className="mt-5 border rounded shadow p-1 text-center"><strong>Total Price:</strong> {totalPrice} €</p>

                <h3 className="text-lg md:text-xl font-semibold mt-4 font-playfairDisplay">Your Information</h3>
                <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mt-2" />
                <input type="email" placeholder="Email" className="w-full p-2 border rounded mt-2" />

                <button className="bg-blue-500 text-white p-2 w-full rounded mt-4 hover:bg-blue-400 transition duration-200" onClick={proceedToPayment}>
                    Proceed to Payment
                </button>
            </div>
        </div>
    )
}