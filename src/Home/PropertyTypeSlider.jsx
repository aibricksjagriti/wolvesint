"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Building2 } from "lucide-react";

const propertyTypes = [
  {
    title: "Townhouses",
    subtitle: "Suburban Elegance",
    image: "/home/abu-dhabi.webp",
  },
  {
    title: "Villas",
    subtitle: "Luxury Retreats",
    image: "/home/ajman.webp",
  },
  {
    title: "Penthouses",
    subtitle: "Skyline Living",
    image: "/home/dubai.webp",
  },
  {
    title: "Mansions",
    subtitle: "Exclusive Residences",
    image: "/home/sarjah.webp",
  },
];

export default function PropertyTypeSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % propertyTypes.length);
  const prevSlide = () =>
    setIndex(
      (prev) => (prev - 1 + propertyTypes.length) % propertyTypes.length
    );

  return (
    // gold gradient : bg-[radial-gradient(circle_at_center,_#f1df9e_0%,_#d5b258_50%,_#8b7329_100%)]
    // brickred gradient: bg-[radial-gradient(circle_at_center,_var(--color-brickred)_0%,_#ca2f70_60%,_var(--color-brickred)_100%)]

    <section className="bg-[radial-gradient(circle_at_center,_#8b7329_0%,_#d5b258_50%,_#f1df9e_100%)] text-white py-16 px-4 sm:px-6 md:px-10 relative overflow-hidden my-16">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <div className="pb-10">
          <div className="flex justify-center mb-2">
            <Building2 size={40} className="text-[var(--color-brickred)]" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-[var(--color-lightcream)] uppercase">
            One Size Doesn’t Fit All
          </h2>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 z-10 bg-[var(--color-brickred)] text-[#001433] rounded-full p-2 sm:p-3 hover:scale-110 transition-transform"
        >
          <ChevronLeft size={22} className="text-[var(--color-lightcream)]" />
        </button>

        {/* Slider */}
        <div className="overflow-hidden w-full max-w-7xl">
          <motion.div
            className="flex gap-3 "
            initial={false}
            animate={{ x: `-${index * 100}%` }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            {propertyTypes.map((type, i) => (
              <motion.div
                key={i}
                className="relative min-w-[80%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[23%] rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-[320px] sm:h-[360px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/70 to-black/10 group-hover:via-black/80 transition-all duration-500 flex flex-col justify-center p-6 text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1">
                    {type.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-2">
                    {type.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 z-10 bg-[var(--color-brickred)] text-[#001433] rounded-full p-2 sm:p-3 hover:scale-110 transition-transform"
        >
          <ChevronRight size={22} className="text-[var(--color-lightcream)]" />
        </button>
      </div>
    </section>
  );
}
