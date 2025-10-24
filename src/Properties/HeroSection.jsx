// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Search, MapPin, Home } from "lucide-react";

// export default function HeroSection() {
//   const [activeTab, setActiveTab] = useState("BUY");

//   return (
//     <section className=" py-24 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-12">
//         {/* ===== Left Content ===== */}
//         <motion.div
//           className="w-full md:w-1/2 mt-10 md:mt-0"
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <h1 className="text-4xl md:text-5xl font-semibold text-[var(--color-darkgray)] leading-tight mb-4">
//             Find a Home That’s <br />
//             <span className="text-[var(--color-ochre)]"> Perfect For You</span>
//           </h1>
//           <p className="text-gray-600 mb-8 leading-relaxed">
//             Experience the epitome of reliability, flexibility, and
//             customization with our top-tier real estate services designed to
//             help you find your dream home.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap gap-4 mb-10">
//             <button className="bg-[var(--color-brickred)] text-white px-6 py-3 rounded-md shadow-md hover:bg-[var(--color-ochre)] transition">
//               Learn More
//             </button>
//             <button className="border border-[var(--color-brickred)] text-[var(--color-brickred)] px-6 py-3 rounded-md hover:bg-[var(--color-ochre)] hover:text-white transition flex items-center gap-2">
//               Watch Video →
//             </button>
//           </div>

//           {/* ===== Search Box ===== */}
//           <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
//             {/* Tabs */}
//             <div className="flex border-b">
//               {["BUY", "SELL", "RENT"].map((tab) => (
//                 <button
//                   key={tab}
//                   className={`flex-1 text-center py-3 font-medium transition ${
//                     activeTab === tab
//                       ? "bg-[#e0ecff] text-[var(--color-darkgray)]"
//                       : "bg-gray-100 text-gray-500 hover:bg-gray-200"
//                   }`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             {/* Inputs */}
//             <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
//               <div className="flex items-center gap-2 text-gray-600">
//                 <MapPin className="w-5 h-5 text-[var(--color-brickred)]" />
//                 <div>
//                   <p className="text-sm font-medium">Location</p>
//                   <p className="text-sm text-gray-500">CocoWalk, USA</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2 text-gray-600">
//                 <Home className="w-5 h-5 text-[var(--color-brickred)]" />
//                 <div>
//                   <p className="text-sm font-medium">Home</p>
//                   <p className="text-sm text-gray-500">Modern, Stylish</p>
//                 </div>
//               </div>

//               <button className="bg-[var(--color-brickred)] text-white px-6 py-3 rounded-md hover:bg-[var(--color-ochre)] transition flex items-center gap-2">
//                 <Search className="w-5 h-5" /> Search
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* ===== Right Image Section ===== */}
//         <motion.div
//           className="w-full md:w-1/2 flex justify-center relative"
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           {/* Background shape */}
//           <div className="absolute top-6 right-6 w-[320px] h-[320px] bg-[#e0ecff] rounded-lg -z-10 hidden md:block"></div>

//           {/* Large building image */}
//           <Image
//             src="/home/dubai.webp" // Replace with your image
//             alt="Modern Villa"
//             width={500}
//             height={400}
//             className="rounded-lg shadow-xl object-cover"
//           />

//           {/* Overlapping image */}
//           <Image
//             src="/home/abu-dhabi.webp" // Replace with your image
//             alt="Classic Home"
//             width={300}
//             height={240}
//             className="absolute -bottom-10 -left-10 rounded-lg shadow-lg object-cover hidden md:block"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Search } from "lucide-react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("BUY");

  return (
    <section className="py-24 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-12">
        {/* ===== Left Content ===== */}
        <motion.div
          className="w-full md:w-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-[var(--color-darkgray)] leading-tight mb-4 lg:mt-20 mt-2">
            Find a Home That’s <br />
            <span className="text-[var(--color-ochre)]">Perfect For You</span>
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Experience the epitome of reliability, flexibility, and
            customization with our top-tier real estate services designed to
            help you find your dream home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-[var(--color-ochre)] text-white px-6 py-3 rounded-md shadow-md hover:bg-[var(--color-brickred)] transition">
              Learn More
            </button>
            <button className="border border-[var(--color-brickred)] text-[var(--color-brickred)] px-6 py-3 rounded-md hover:bg-[var(--color-ochre)] hover:text-white transition flex items-center gap-2">
              Watch Video →
            </button>
          </div>

          {/* ===== Modern Search Box ===== */}
          <div className="bg-[#f8f8ff] border border-[var(--color-ochre)] rounded-2xl p-4 md:p-6 shadow-sm">
            {/* Tabs */}
            {/* <div className="flex border-b mb-4">
              {["BUY", "SELL", "RENT"].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 text-center py-3 font-medium transition ${
                    activeTab === tab
                      ? "bg-[#e0ecff] text-[var(--color-darkgray)]"
                      : "bg-transparent text-gray-500 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div> */}

            {/* Input Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option>Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Townhouse</option>
              </select>

              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option>Location</option>
                <option>Dubai</option>
                <option>Abu Dhabi</option>
                <option>Sharjah</option>
              </select>

              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option>Developer</option>
                <option>Emaar</option>
                <option>Damac</option>
                <option>Nakheel</option>
              </select>

              <div className="sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row gap-4">
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <option>Price</option>
                  <option>$100K - $500K</option>
                  <option>$500K - $1M</option>
                  <option>$1M+</option>
                </select>

                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <option>Handover</option>
                  <option>Ready</option>
                  <option>Off-plan</option>
                </select>
                {/* <input
                  type="text"
                  placeholder="Search Properties..."
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                /> */}
                <button className="bg-[var(--color-brickred)] text-white rounded-xl flex items-center justify-center gap-2 px-6 py-3 hover:bg-[var(--color-ochre)] transition">
                  <Search className="w-5 h-5" /> Find
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== Right Image Section ===== */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute top-6 right-6 w-[320px] h-[320px] bg-[#e0ecff] rounded-lg -z-10 hidden md:block"></div>

          <Image
            src="/home/dubai.webp"
            alt="Modern Villa"
            width={500}
            height={400}
            className="rounded-lg shadow-xl object-cover"
          />

          <Image
            src="/home/abu-dhabi.webp"
            alt="Classic Home"
            width={300}
            height={240}
            className="absolute -bottom-10 -left-10 rounded-lg shadow-lg object-cover hidden md:block"
          />
        </motion.div>
      </div>
    </section>
  );
}
