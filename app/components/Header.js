"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Rubik } from 'next/font/google';
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // Εικονίδια για το mobile menu

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '700']
});

export default function Header() {
  const [bgTransparent, setBgTransparent] = useState(true);
  const [textColor, setTextColor] = useState("text-white");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/contact" || pathname === "/rooms" || pathname === "/reserve-room") {
      setTextColor("text-black");
    } else {
      setTextColor("text-white");
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgTransparent(false);
        setTextColor("text-white");
      } else {
        setBgTransparent(true);
        setTextColor(pathname === "/contact" || pathname === "/rooms" || pathname === "/reserve-room" ? "text-black" : "text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 h-26 w-full flex transition-all duration-300 z-20 ${bgTransparent ? "bg-transparent" : "bg-black shadow-md"} ${rubik.className}`}>
      <nav className="flex items-center justify-between w-full" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/">
          <Image src="/jns-1.png" alt="Logo" width={180} height={50} className="w-32 md:w-48 cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-6 ${textColor} font-semibold`}>
          <li className="hover:text-blue-400 transition duration-200"><Link href="/">Home</Link></li>
          <li className="hover:text-blue-400 transition duration-200"><Link href="/about">About</Link></li>
          <li className="hover:text-blue-400 transition duration-200"><Link href="/rooms">Rooms</Link></li>
          <li className="hover:text-blue-400 transition duration-200"><Link href="/rhodes">Rhodes</Link></li>
          <li className="hover:text-blue-400 transition duration-200"><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="absolute top-5 right-6 md:hidden text-3xl">
          {menuOpen ? <FiX className="text-white" /> : <FiMenu className={textColor} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white text-2xl md:hidden font-playfairDisplay">
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-3xl">
              <FiX />
            </button>
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/rooms" onClick={() => setMenuOpen(false)}>Rooms</Link>
            <Link href="/rhodes" onClick={() => setMenuOpen(false)}>Rhodes</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}

        {/* Book Your Stay Button */}
        <div className="hidden md:flex bg-blue-500 text-white px-6 text-sm items-center justify-center uppercase hover:bg-blue-400 transition duration-200 ease-in w-24 md:w-32 h-full font-semibold">
          <Link href="/book">Book your stay</Link>
        </div>
      </nav>
    </header>
  );
}
