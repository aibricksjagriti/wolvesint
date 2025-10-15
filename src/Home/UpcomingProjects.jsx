// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Building2 } from "lucide-react";

// export default function UpcomingProjects() {
//   const projects = [
//     {
//       name: "Sharjah",
//       image: "/home/sarjah.webp",
//     },
//     {
//       name: "RAK",
//       image: "/home/rak.webp",
//     },
//     {
//       name: "Dubai",
//       image: "/home/dubai.webp",
//     },
//     {
//       name: "Ajman",
//       image: "/home/ajman.webp",
//     },
//     {
//       name: "Abu Dhabi",
//       image: "/home/abu-dhabi.webp",
//     },
//   ];

//   return (
//     <section className="py-16 bg-[#f8f8f8] text-center">
//       {/* Heading */}
//       <div className="mb-10">
//         <div className="flex justify-center mb-2">
//           <Building2 size={40} className="text-[var(--color-ochre)]" />
//         </div>
//         <h2 className="text-4xl md:text-4xl font-serif font-bold text-[var(--color-darkgray)] uppercase">
//           Upcoming Projects
//         </h2>
//         <p className="text-gray-600 mt-2 text-lg">New upcoming developments</p>
//       </div>

//       {/* Swiper Carousel */}
//       <div className="w-full px-4 md:px-16">
//         <Swiper
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           slidesPerView="auto"
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 150,
//             modifier: 2.5,
//           }}
//           pagination={{ clickable: true }}
//           navigation={true}
//           modules={[EffectCoverflow, Pagination, Navigation]}
//           className="max-w-6xl mx-auto"
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide
//               key={index}
//               className="bg-transparent flex justify-center items-center"
//               style={{ width: "280px", height: "380px" }}
//             >
//               <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
//                 <img
//                   src={project.image}
//                   alt={project.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center">
//                   <h3 className="text-white text-2xl font-semibold mb-6 drop-shadow-lg">
//                     {project.name}
//                   </h3>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Building2 } from "lucide-react";
import ProjectSlider from "./ProjectSlider";

export default function UpcomingProjects() {
  const projects = [
    { name: "Sharjah", image: "/home/sarjah.webp" },
    { name: "RAK", image: "/home/rak.webp" },
    { name: "Dubai", image: "/home/dubai.webp" },
    { name: "Ajman", image: "/home/ajman.webp" },
    { name: "Abu Dhabi", image: "/home/abu-dhabi.webp" },
    { name: "Sharjah", image: "/home/sarjah.webp" },
    { name: "RAK", image: "/home/rak.webp" },
    { name: "Dubai", image: "/home/dubai.webp" },
    { name: "Ajman", image: "/home/ajman.webp" },
    // { name: "Abu Dhabi", image: "/home/abu-dhabi.webp" },
  ];

  return (
    <section className="py-16 bg-[#f8f8f8] text-center w-full">
      {/* Heading */}
      <div className="">
        <div className="flex justify-center mb-2">
          <Building2 size={40} className="text-[var(--color-ochre)]" />
        </div>
        <h2 className="text-4xl font-serif font-bold text-[var(--color-darkgray)] uppercase">
          Upcoming Projects
        </h2>
        <p className="text-gray-600 mt-2 text-lg">New upcoming developments</p>
      </div>

      <ProjectSlider />

      {/* Swiper Carousel */}
      {/* <div className="w-full max-w-[1400px] mx-auto px-6">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3} // ✅ ensures full width and even layout
          spaceBetween={-40}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full"
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 0 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 5 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="relative w-full max-w-[480px] h-[380px] rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.03]">
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </section>
  );
}
