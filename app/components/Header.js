"use client";

import Link from "next/link"; // Αν χρησιμοποιείς Next.js
import { useState, useEffect } from "react";
import Image from "next/image"; // Για βελτιστοποιημένη εικόνα στο Next.js

import { Rubik } from 'next/font/google';
import { usePathname } from "next/navigation"; // Για έλεγχο της τρέχουσας σελίδας

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '700'] // Επιλέγουμε βάρη γραμματοσειράς
});

export default function Header() {
  const [bgTransparent, setBgTransparent] = useState(true);
  const [textColor, setTextColor] = useState("text-white"); // Αρχικό χρώμα λευκό
  const pathname = usePathname(); // Παίρνουμε την τρέχουσα διαδρομή της σελίδας

  // Ενημέρωση κειμένου βάσει της σελίδας (χωρίς scroll)
  useEffect(() => {
    if (pathname === "/contact" || pathname === "/rooms" || pathname === "/reserve-room") {
      setTextColor("text-black"); // Μαύρο κείμενο αν είναι σε Contact ή Rooms
    } else {
      setTextColor("text-white"); // Λευκό κείμενο σε όλες τις άλλες σελίδες
    }
  }, [pathname]); // Εκτελείται κάθε φορά που αλλάζει η σελίδα

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgTransparent(false);
        setTextColor("text-white"); // Όταν γίνεται scroll, το κείμενο γίνεται λευκό
      } else {
        setBgTransparent(true);
        setTextColor(pathname === "/contact" || pathname === "/rooms" || pathname === "/reserve-room" ? "text-black" : "text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 h-28 w-full flex items-center transition-all duration-300 z-10 ${bgTransparent ? "bg-transparent" : "bg-black shadow-md"} ${rubik.className}`}>
      <nav className="flex items-center w-full justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/">
          <Image src="/jns-1.png" alt="Logo" width={200} height={50} className="cursor-pointer" />
        </Link>

        {/* Navigation Menu */}
        <ul className={`flex space-x-6 ${textColor} font-semibold`}>
          <li className="hover:text-blue-400 transition duration-200"><Link href="/">Home</Link></li>
          <li className="hover:text-blue-400 transition duration-200"><Link href="/about">About</Link></li>
          <li className="hover:text-blue-400 transition duration-200"><Link href="/rooms">Rooms</Link></li>
          <li className="hover:text-blue-400 transition duration-200"><Link href="/rhodes">Rhodes</Link></li>
          <li className="hover:text-blue-400 transition duration-200"><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Book Your Stay Button (Full Height) */}
        <div className="bg-blue-500 text-white px-6 flex items-center justify-center uppercase hover:bg-blue-400 transition duration-200 ease-in w-40 h-28 font-semibold">
          <h1 className="w-10"><Link href="/book">Book your stay</Link></h1>
        </div>
      </nav>
    </header>
  );
}
