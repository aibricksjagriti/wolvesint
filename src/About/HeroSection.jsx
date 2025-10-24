// "use client";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative  py-16 lg:py-24 overflow-hidden">
//       <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 items-center gap-12">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
//             Discover Your Ideal <br />
//             <span className="text-blue-600">Holiday Stay</span>
//           </h1>
//           <p className="text-gray-600 mb-8 text-lg">
//             Explore unique stays and unforgettable experiences around the world.
//           </p>

//           <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col sm:flex-row items-center gap-4 max-w-2xl">
//             <input
//               type="text"
//               placeholder="Search Destination..."
//               className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
//             />
//             <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
//               <Search size={18} /> Discover
//             </button>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="/home/cta-banner-3.jpg"
//             alt="Traveler"
//             className="rounded-3xl w-full object-cover h-[600px] shadow-2xl"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-[90%] mx-auto py-16 lg:mt-20 sm:mt-0 lg:mb-10 justify-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 items-center gap-12">
        {/* --- LEFT CONTENT --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-[var(--color-darkgray)] leading-tight mb-6 mt-16">
            Discover Your Dream <br />
            <span className="text-[#d5b258]">Property Destination</span>
          </h1>

          <p className="text-gray-700 mb-8 text-lg leading-relaxed max-w-xl">
            At{" "}
            <span className="font-semibold text-gray-900">
              AI Bricks Realtors
            </span>
            , we redefine modern living with smart, sustainable, and luxurious
            real estate across <strong>Dubai</strong>, <strong>Pune</strong>,
            and <strong>Mumbai</strong>. Experience properties that inspire
            comfort, innovation, and elegance.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col sm:flex-row items-center gap-4 max-w-2xl border border-gray-200">
            <input
              type="text"
              placeholder="Search properties, city or area..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d5b258]"
            />
            <button className="bg-[#d5b258] text-white px-6 py-2 rounded-lg hover:bg-[#c0a043] transition flex items-center gap-2">
              <Search size={18} /> Explore
            </button>
          </div>
        </motion.div>

        {/* --- RIGHT IMAGE --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="/home/dubai.webp"
            alt="Luxury Real Estate Dubai"
            className=" w-full object-cover h-[600px] shadow-2xl border border-gray-200"
          />

          {/* Floating overlay card */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-lg p-4 rounded-2xl shadow-lg max-w-[250px]">
            <h3 className="font-semibold text-gray-900 text-lg">
              Featured Project
            </h3>
            <p className="text-gray-600 text-sm">
              Downtown Dubai • 3BHK Apartments
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
