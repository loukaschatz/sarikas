import Link from "next/link";
import Image from "next/image";
import srcImage from '../../public/images/about.jpg';

export default function About() {
    return (
        <section className="relative w-screen min-h-screen bg-gray-100 text-gray-900 flex items-center">
            <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
                
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                    <h1 className="font-playfairDisplay font-semibold text-3xl md:text-4xl">
                        We create unforgettable memories for our guests
                    </h1>
                    <p className="font-rubik text-lg text-gray-700">
                        Thessaloniki Luxury Suites is a leading Airbnb management company based in Thessaloniki, Greece. We specialize in providing quality accommodations and personalized services to ensure our guests have an unforgettable stay. Our team consists of experienced professionals with diverse backgrounds in the hospitality and tourism industry.
                    </p>
                
                    <Link href="/about">
                        <button className="w-40 font-rubik border border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
                            Read More
                        </button>
                    </Link>
                </div>

                <div className="w-full md:w-1/2">
                    <Image src={srcImage} alt="About Section Image" className="rounded-lg shadow-lg w-full object-cover"/>
                </div>
            </div>
        </section>
    )
}
