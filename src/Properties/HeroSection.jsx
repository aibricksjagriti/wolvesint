// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Search } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="py-24 px-6 md:px-12 ">
//       <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-12">
//         {/* ===== Left Content ===== */}
//         <motion.div
//           className="w-full md:w-1/2 mt-10 md:mt-0"
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <h1 className="text-4xl md:text-5xl font-semibold text-darkgray leading-tight mb-4 lg:mt-20 mt-2">
//             Find a Home That’s <br />
//             <span className="text-color-ochre">Perfect For You</span>
//           </h1>
//           <p className="text-gray-600 mb-8 leading-relaxed">
//             Experience the epitome of reliability, flexibility, and
//             customization with our top-tier real estate services designed to
//             help you find your dream home.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap gap-4 mb-10">
//             <button className="bg-ochre text-white px-6 py-3 rounded-md shadow-md hover:bg-brickred transition">
//               Learn More
//             </button>
//             <button className="border border-brickred text-brickred px-6 py-3 rounded-md hover:bg-ochre hover:text-white transition flex items-center gap-2">
//               Watch Video →
//             </button>
//           </div>

//           {/* ===== Modern Search Box ===== */}
//           <div className="bg-[#f8f8ff] border-2 border-ochre rounded-2xl p-4 md:p-6 shadow-sm">
//             {/* Input Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-ochre">
//                 <option>Property Type</option>
//                 <option>Apartment</option>
//                 <option>Villa</option>
//                 <option>Townhouse</option>
//               </select>

//               <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-ochre">
//                 <option>Location</option>
//                 <option>Dubai</option>
//                 <option>Abu Dhabi</option>
//                 <option>Sharjah</option>
//               </select>

//               <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-ochre">
//                 <option>Developer</option>
//                 <option>Emaar</option>
//                 <option>Damac</option>
//                 <option>Nakheel</option>
//               </select>

//               <div className="sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row gap-4">
//                 <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-ochre">
//                   <option>Price</option>
//                   <option>$100K - $500K</option>
//                   <option>$500K - $1M</option>
//                   <option>$1M+</option>
//                 </select>

//                 <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-ochre">
//                   <option>Handover</option>
//                   <option>Ready</option>
//                   <option>Off-plan</option>
//                 </select>

//                 <button className="bg-brickred text-white rounded-xl flex items-center justify-center gap-2 px-6 py-3 hover:bg-ochre transition">
//                   <Search className="w-5 h-5" /> Find
//                 </button>
//               </div>
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
//           <div className="absolute top-6 right-6 w-[320px] h-[320px] bg-[#e0ecff] rounded-lg -z-10 hidden md:block"></div>

//           <Image
//             src="/home/dubai.webp"
//             alt="Modern Villa"
//             width={500}
//             height={400}
//             className="rounded-lg shadow-xl object-cover"
//           />

//           <Image
//             src="/home/abu-dhabi.webp"
//             alt="Classic Home"
//             width={300}
//             height={240}
//             className="absolute -bottom-10 -right-10 rounded-lg shadow-lg object-cover hidden md:block"
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
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HeroSection() {
  const router = useRouter();

  const [filters, setFilters] = useState({
    propertyType: "",
    location: "",
    developer: "",
    price: "",
    handover: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    const params = new URLSearchParams({
      activeStatus: "Yes",
    });

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    router.push(`/search?${params.toString()}`);
  };

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-12">
        {/* ===== Left Content ===== */}
        <motion.div
          className="w-full md:w-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-darkgray leading-tight mb-4 lg:mt-20 mt-2">
            Find a Home That’s <br />
            <span className="text-color-ochre">Perfect For You</span>
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Experience the epitome of reliability, flexibility, and
            customization with our top-tier real estate services designed to
            help you find your dream home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/about">
              <button className="bg-ochre text-white px-6 py-3 rounded-md shadow-md hover:bg-brickred transition">
                Learn More
              </button>
            </Link>
            {/* <button className="border border-brickred text-brickred px-6 py-3 rounded-md hover:bg-ochre hover:text-white transition flex items-center gap-2">
              Watch Video →
            </button> */}
          </div>

          {/* ===== Search Box ===== */}
          <div className="bg-[#f8f8ff] border-2 border-ochre rounded-2xl p-4 md:p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <select
                name="propertyType"
                onChange={handleChange}
                className="input"
              >
                <option value="">Property Type</option>
                <option value="Apartment">Apartments</option>
                <option value="Villa">Villas</option>
                <option value="Penthouse">Penthouses</option>
                <option value="Commercials">Commercials</option>
                <option value="Plots">Plots</option>
                <option value="Investments">Investments</option>
              </select>

              <select name="location" onChange={handleChange} className="input">
                <option value="">Location</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Dubai">Dubai</option>
              </select>

              <select
                name="developer"
                onChange={handleChange}
                className="input"
              >
                <option value="">Developer</option>
                <option value="Shapoorji">
                  Shapoorji Pallonji Real Estate
                </option>
                <option value="Krisala Developers">Krisala Developers</option>
                <option value="Hiranandani Developers">
                  Hiranandani Developers
                </option>
                <option value="Tata Housing Development Company">
                  Tata Housing Development Company
                </option>
                <option value="Gera Developers">Gera Developers</option>
                <option value="Kolte Patil Developers">
                  Kolte Patil Developers
                </option>
                <option value="Lodha Developers">Lodha Developers</option>
                <option value="Godrej Developers">Godrej Developers</option>
                <option value="Kohinoor Developers">Kohinoor Developers</option>
                <option value="VTP Developers">VTP Developers</option>
              </select>

              <div className="sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row gap-4">
                <select name="price" onChange={handleChange} className="input">
                  <option value="">Price</option>
                  <option value="">Price</option>
                  <option value="0-5000000">Under ₹50 Lakhs</option>
                  <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
                  <option value="10000000-15000000">₹1 - 1.5 Crores</option>
                  <option value="15000000-25000000">₹1.5 - 2.5 Crores</option>
                  <option value="25000000-40000000">₹2.5 - 4 Crores</option>
                  <option value="40000000-">Above ₹4 Crores</option>
                </select>

                {/* <select
                  name="handover"
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">Handover</option>
                  <option value="Ready">Ready</option>
                  <option value="Off-plan">Off-plan</option>
                </select> */}

                <button
                  onClick={handleSearch}
                  className="bg-brickred text-white rounded-xl flex items-center justify-center gap-2 px-6 py-3 hover:bg-ochre transition"
                >
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
            className="absolute -bottom-10 -right-10 rounded-lg shadow-lg object-cover hidden md:block"
          />
        </motion.div>
      </div>

      {/* Tailwind helper */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          background: white;
        }
      `}</style>
    </section>
  );
}
