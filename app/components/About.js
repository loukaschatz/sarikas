import Link from "next/link";
import Image from "next/image";
import srcImage from '../../public/images/about.jpg';

export default function About() {
    return (
        <section className="relative">
            <div className=" p-32 grid grid-cols-4 gap-10">
                <div className="col-span-2 space-y-5 relative">
                    <h1 className="font-playfairDisplay font-semibold text-3xl">We create unforgettable memories for our guests</h1>
                    <p className="font-rubik text-justify">Thessaloniki Luxury Suites is a leading Airbnb management company based in Thessaloniki, Greece. We specialize in providing quality accommodations and personalized services to ensure our guests have an unforgettable stay. Our team consists of experienced professionals with diverse backgrounds in the hospitality and tourism industry.</p>
                
                    <Link href="/about">
                        <button className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 font-rubik border border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
                            Read More
                        </button>
                    </Link>
                </div>

                <div className="col-span-2">
                    <Image src={srcImage} alt="aboutSection Image" />
                </div>
            </div>
        </section>
    )
}