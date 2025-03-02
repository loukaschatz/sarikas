import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 font-playfairDisplay">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
        
        {/* Λογότυπο */}
        <div className="flex justify-center md:justify-start">
          <img src="/jns-1.png" alt="The Luxury Suites Logo" className="h-16" />
        </div>

        {/* Στοιχεία επικοινωνίας */}
        <div>
          <h2 className="text-lg font-semibold font-rubik">Επικοινωνία</h2>
          <p className="mt-2">Τηλέφωνο: <a href="tel:+302101234567" className="text-blue-400">+30 210 123 4567</a></p>
          <p>Email: <a href="mailto:info@theluxurysuites.gr" className="text-blue-400">info@theluxurysuites.gr</a></p>
          <p>Διεύθυνση: Αθήνα, Ελλάδα</p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold font-rubik">Χρήσιμοι Σύνδεσμοι</h2>
          <ul className="mt-2 space-y-2">
            <li><Link href="/about" className="hover:text-blue-400">Σχετικά με εμάς</Link></li>
            <li><Link href="/accommodation" className="hover:text-blue-400">Διαμονή</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Επικοινωνία</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400">Όροι και Προϋποθέσεις</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold font-rubik">Ακολουθήστε μας</h2>
          <div className="flex justify-center sm:justify-start mt-2 space-x-4">
            <a href="#" className="text-blue-400 text-2xl hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="text-pink-400 text-2xl hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="text-blue-300 text-2xl hover:text-blue-400"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} JNS penthouse apartments. Όλα τα δικαιώματα κατοχυρωμένα.
      </div>
    </footer>
  );
}
