"use client";
import { Search, MapPin } from "lucide-react";
import MultiSelect from "./MultiSelect";

export default function HeroSection() {
  return (
    <section className="relative h-[700px] w-full overflow-hidden ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/home/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content at Bottom */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center z-10 text-white pb-10 px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-[var(--color-lightcream)] drop-shadow-lg text-center">
          Live The Future
        </h1>

        {/* Search Filter Box */}
        <div className="w-full md:w-[85%] lg:w-[80%] bg-white/10 backdrop-blur-md border border-[var(--color-brickred)] rounded-2xl p-6 shadow-2xl">
          {/* Top Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
            <select className="p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-brickred)]">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Penthouse</option>
            </select>

            <select className="p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-brickred)]">
              <option>Location</option>
              <option>Dubai</option>
              <option>Abu Dhabi</option>
            </select>

            <select className="p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-brickred)]">
              <option>Developer</option>
              <option>EMAAR</option>
              <option>DAMAC</option>
            </select>

            <select className="p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-brickred)]">
              <option>Price</option>
              <option>$100k - $500k</option>
              <option>$500k - $1M</option>
            </select>

            <MultiSelect />
          </div>

          {/* Search Input */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
            <input
              type="text"
              placeholder="Search Properties..."
              className="p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-brickred)] lg:col-span-4"
            />

            <button className="flex items-center justify-center gap-2 w-full bg-[var(--color-brickred)] text-white rounded-lg py-3 font-semibold hover:bg-[var(--color-ochre)] transition">
              <Search size={18} />
              Find
            </button>
          </div>

          {/* Bottom Buttons */}
          {/* <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <button className="flex items-center justify-center gap-2 w-full md:w-1/3 border border-[var(--color-brickred)] text-[var(--color-brickred)] rounded-lg py-3 font-semibold hover:bg-[var(--color-brickred)] hover:text-white transition">
              <MapPin size={18} />
              Show Map
            </button>

            <button className="flex items-center justify-center gap-2 w-full md:w-1/3 bg-[var(--color-brickred)] text-white rounded-lg py-3 font-semibold hover:bg-[var(--color-ochre)] transition">
              <Search size={18} />
              Find
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
