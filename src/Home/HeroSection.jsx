// "use client";
// import { useState, useEffect, useRef } from "react";
// import { Search } from "lucide-react";
// import MultiSelect from "./MultiSelect";

// export default function HeroSection() {
//   const videos = [
//     "/home/hero-bg.mp4",
//     "/home/hero-bg-2.mp4",
//     "/home/hero-bg-3.mp4",
//   ];

//   const [currentVideo, setCurrentVideo] = useState(0);
//   const [isFading, setIsFading] = useState(false);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const videoEl = videoRef.current;
//     if (!videoEl) return;

//     const handleVideoEnd = () => {
//       setIsFading(true);

//       setTimeout(() => {
//         // Go to next video
//         const nextIndex = (currentVideo + 1) % videos.length;
//         setCurrentVideo(nextIndex);

//         // Change source and restart video
//         videoEl.src = videos[nextIndex];
//         videoEl.load();
//         videoEl.play().catch(() => {});

//         setIsFading(false);
//       }, 500); // 0.5s fade transition
//     };

//     videoEl.addEventListener("ended", handleVideoEnd);
//     return () => videoEl.removeEventListener("ended", handleVideoEnd);
//   }, [currentVideo, videos]);

//   useEffect(() => {
//     // ensure first video auto starts
//     const videoEl = videoRef.current;
//     if (videoEl) {
//       videoEl.src = videos[currentVideo];
//       videoEl.load();
//       videoEl.play().catch(() => {});
//     }
//   }, []); // run only once

//   return (
//     <section className="relative h-[700px] w-full overflow-hidden">
//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
//           isFading ? "opacity-0" : "opacity-100"
//         }`}
//         muted
//         playsInline
//         autoPlay
//       />

//       {/* Fade Overlay */}
//       <div
//         className={`absolute inset-0 bg-black transition-opacity duration-700 pointer-events-none ${
//           isFading ? "opacity-100" : "opacity-0"
//         }`}
//       ></div>

//       {/* Readability Overlay */}
//       <div className="absolute inset-0 bg-black/20 z-5"></div>

//       {/* Content */}
//       <div className="absolute bottom-0 left-0 w-full flex flex-col items-center z-10 text-white pb-10 px-4">
//         <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-lightcream drop-shadow-lg text-center">
//           Live The Future
//         </h1>

//         {/* Search Filter Box */}
//         <div className="w-full md:w-[85%] lg:w-[80%] bg-white/10 backdrop-blur-md border border-brickred rounded-2xl p-6 shadow-2xl">
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
//             <select className="p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-brickred">
//               <option>Property Type</option>
//               <option>Apartment</option>
//               <option>Villa</option>
//               <option>Penthouse</option>
//             </select>

//             <select className="p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-brickred">
//               <option>Location</option>
//               <option>Dubai</option>
//               <option>Abu Dhabi</option>
//             </select>

//             <select className="p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-brickred">
//               <option>Developer</option>
//               <option>EMAAR</option>
//               <option>DAMAC</option>
//             </select>

//             <select className="p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-brickred">
//               <option>Price</option>
//               <option>$100k - $500k</option>
//               <option>$500k - $1M</option>
//             </select>

//             <MultiSelect />
//           </div>

//           {/* Search Input */}
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
//             <input
//               type="text"
//               placeholder="Search Properties..."
//               className="p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-brickred lg:col-span-4"
//             />

//             <button className="flex items-center justify-center gap-2 w-full bg-brickred text-white rounded-lg py-3 font-semibold hover:bg-ochre transition">
//               <Search size={18} />
//               Find
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import MultiSelect from "./MultiSelect";

export default function HeroSection() {
  const router = useRouter();
  const videoRef = useRef(null);

  const videos = [
    "/home/hero-bg.mp4",
    "/home/hero-bg-2.mp4",
    "/home/hero-bg-3.mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // 🔍 Search states
  const [searchText, setSearchText] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [city, setCity] = useState("");
  const [developer, setDeveloper] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Video logic (unchanged)
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const handleVideoEnd = () => {
      setIsFading(true);
      setTimeout(() => {
        const nextIndex = (currentVideo + 1) % videos.length;
        setCurrentVideo(nextIndex);
        videoEl.src = videos[nextIndex];
        videoEl.load();
        videoEl.play().catch(() => {});
        setIsFading(false);
      }, 500);
    };

    videoEl.addEventListener("ended", handleVideoEnd);
    return () => videoEl.removeEventListener("ended", handleVideoEnd);
  }, [currentVideo, videos]);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.src = videos[currentVideo];
      videoEl.load();
      videoEl.play().catch(() => {});
    }
  }, []);

  // 🔍 Handle search
  const handleSearch = () => {
    const params = new URLSearchParams();

    if (searchText) params.append("q", searchText);
    if (propertyType) params.append("propertyType", propertyType);
    if (city) params.append("city", city);
    if (developer) params.append("developer", developer);
    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);

    router.push(`/search?${params.toString()}`);
  };

  return (
    <section className="relative h-[700px] w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
        muted
        playsInline
        autoPlay
      />

      <div className="absolute inset-0 bg-black/30 z-5"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center z-10 text-white pb-10 px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-center">
          Live The Future
        </h1>

        {/* Search Box */}
        <div className="w-full md:w-[85%] lg:w-[80%] bg-white/10 backdrop-blur-md border border-brickred rounded-2xl p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="p-3 rounded-lg bg-white text-black"
            >
              <option value="">Property Type</option>
              <option value="Apartment">Apartments</option>
              <option value="Villa">Villas</option>
              <option value="Penthouse">Penthouses</option>
              <option value="Commercials">Commercials</option>
              <option value="Plots">Plots</option>
              <option value="Investments">Investments</option>
            </select>

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="p-3 rounded-lg bg-white text-black"
            >
              <option value="">City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Dubai">Dubai</option>
            </select>

            <select
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
              className="p-3 rounded-lg bg-white text-black"
            >
              <option value="">Developer</option>
              <option value="EMAAR">EMAAR</option>
              <option value="DAMAC">DAMAC</option>
            </select>

            <select
              onChange={(e) => {
                const [min, max] = e.target.value.split("-");
                setMinPrice(min);
                setMaxPrice(max);
              }}
              className="p-3 rounded-lg bg-white text-black"
            >
              <option value="">Price</option>
              <option value="100000-500000">$100k - $500k</option>
              <option value="500000-1000000">$500k - $1M</option>
            </select>

            <MultiSelect />
          </div>

          {/* Search input */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Properties..."
              className="p-3 rounded-lg bg-white text-black lg:col-span-4"
            />

            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 bg-brickred text-white rounded-lg py-3 font-semibold hover:bg-ochre transition"
            >
              <Search size={18} />
              Find
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
