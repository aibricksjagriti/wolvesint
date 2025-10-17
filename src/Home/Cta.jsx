"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/home/cta-banner-3.jpg" // 🖼️ Replace with your own background image
        alt="Wolves Background"
        fill
        priority
        className="object-cover brightness-[0.55]"
      />

      {/* Overlay content */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 md:px-10 text-white flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-xl md:text-2xl mb-4 tracking-wide"
        >
          Live The Future
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif tracking-widest mb-8"
        >
          AI BRICKS
        </motion.h1>

        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 bg-[var(--color-brickred)] text-[var(--color-lightcream)] font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-[var(--color-ochre)]"
        >
          Hunt For Properties
          <ArrowRight size={18} />
        </motion.a>
      </div>

      {/* Optional gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
    </section>
  );
}
