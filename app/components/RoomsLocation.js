"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

const locations = [
  { id: 1, name: "JNS luxury apartments", lat: 36.343871992716146, lng: 28.19742289414295 },
];

export default function RoomsLocation() {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl text-center mb-6 font-semibold font-playfairDisplay">Our Location</h2>
      <div className="h-[500px] w-full">
        <Map locations={locations} />
      </div>
    </div>
  );
}