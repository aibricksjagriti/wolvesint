"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const ProjectSlider = () => {
  // ✅ Replace with your project images (stored in /public/home/)
  const projects = [
    { name: "Sharjah", image: "/home/sarjah.webp" },
    { name: "RAK", image: "/home/rak.webp" },
    { name: "Dubai", image: "/home/dubai.webp" },
    { name: "Ajman", image: "/home/ajman.webp" },
    { name: "Abu Dhabi", image: "/home/abu-dhabi.webp" },
  ];

  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % projects.length)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map(
        (prevIndex) => (prevIndex + projects.length - 1) % projects.length
      )
    );
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    left1: { x: "-50%", scale: 0.8, zIndex: 3, opacity: 0.7 },
    left: { x: "-90%", scale: 0.6, zIndex: 2, opacity: 0.5 },
    right: { x: "90%", scale: 0.6, zIndex: 2, opacity: 0.5 },
    right1: { x: "50%", scale: 0.8, zIndex: 3, opacity: 0.7 },
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-[#f8f8f8] min-h-screen overflow-hidden">
      {/* Slider */}
      <div className="relative flex justify-center items-center w-full h-[500px]">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="absolute rounded-3xl overflow-hidden shadow-2xl"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.6 }}
            style={{ width: "480px", height: "480px" }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center">
              <h3 className="text-white text-2xl font-semibold mb-6 drop-shadow-lg">
                {project.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-4 mt-12">
        <button
          className="text-white bg-[var(--color-brickred)] rounded-lg py-2 px-6 font-semibold hover:bg-[var(--color-ochre)] transition"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white bg-[var(--color-brickred)] rounded-lg py-2 px-6 font-semibold hover:bg-[var(--color-ochre)] transition"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
