"use client";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="relative w-[85%] mx-auto py-20">
      {/* Blue Wave Shape Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#8b7329] rounded-r-[120px]" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* IDEA Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-between"
        >
          {/* Left Icon */}
          <div className="flex-shrink-0">
            <img
              src="/about/idea.png"
              alt="Idea"
              className="w-52 h-52 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Text */}
          <div className="text-[var(--color-darkgray)] max-w-md">
            <h2 className="text-4xl font-bold mb-4">IDEA</h2>
            <p className="leading-relaxed text-black/90">
              At{" "}
              <span className="font-semibold text-[#d5b258]">
                AI Bricks Realtors
              </span>
              , every vision starts with an idea — to create modern,
              sustainable, and intelligent spaces that redefine luxury living.
              We combine innovation, architecture, and technology to turn dreams
              into beautifully crafted realities.
            </p>
          </div>
        </motion.div>

        {/* GOAL Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col lg:flex-row items-center gap-8 bg-white  p-10 shadow-xl"
        >
          {/* Goal Text */}
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-4xl font-bold text-[#8b7329] mb-4">GOAL</h2>
            <p className="text-gray-700 leading-relaxed">
              Our goal is to be at the forefront of real estate excellence —
              building trust through transparency, innovation, and precision.
              From Dubai to Mumbai and Pune, we aim to deliver projects that
              inspire confidence and elevate lifestyles.
            </p>
          </div>

          {/* Target Icon */}
          <div className="flex-shrink-0">
            <img
              src="/about/goal.png"
              alt="Goal"
              className="w-52 h-52 object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
