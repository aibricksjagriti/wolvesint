"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const locations = [
  {
    name: "Palm Jebel Ali",
    image: "/home/indemand/1.jpg",
  },
  {
    name: "Dubai South",
    image: "/home/indemand/2.jpg",
  },
  {
    name: "City Walk",
    image: "/home/indemand/3.jpg",
  },
  {
    name: "Dubai Creek Harbour",
    image: "/home/indemand/4.jpg",
  },
  {
    name: "Palm Jumeirah",
    image: "/home/indemand/5.jpg",
  },
  {
    name: "Downtown Dubai",
    image: "/home/indemand/6.jpg",
  },
  {
    name: "Business Bay",
    image: "/home/indemand/7.jpg",
  },
  {
    name: "Bluewaters Island",
    image: "/home/indemand/8.jpg",
  },
];

export default function DemandSection() {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-darkgray)] mb-12 tracking-wide pb-10">
          IN HIGH DEMAND
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative overflow-hidden rounded-3xl shadow-lg group"
            >
              {/* Background Image */}
              <Image
                src={loc.image}
                alt={loc.name}
                width={500}
                height={350}
                className="object-cover w-full h-60 sm:h-64 md:h-72 lg:h-60 transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-darkgray)]/80 via-transparent to-transparent group-hover:from-[#061151]/70 transition-all duration-500"></div>

              {/* Location Name */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  {loc.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
