"use client";
import Image from "next/image";

const logos = [
  { src: "/home/emaar.png", alt: "Emaar" },
  { src: "/home/nakheel.png", alt: "Nakheel" },
  { src: "/home/meraas.png", alt: "Meraas" },
  { src: "/home/sobha.png", alt: "Sobha" },
  { src: "/home/damac.png", alt: "Damac" },
  { src: "/home/omniyat.png", alt: "Omniyat" },
  { src: "/home/danube.png", alt: "Danube" },
  //   { src: "/home/aldar.png", alt: "Aldar" },
  { src: "/home/binghatti.png", alt: "Binghatti" },
];

export default function LogoSlider() {
  return (
    <section className="w-full py-12 px-4 flex justify-center items-center mt-[-100px]">
      <div className="relative w-full max-w-7xl overflow-hidden rounded-3xl border-2 border-[var(--color-brickred)] shadow-lg">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-blue-50/30 to-blue-100/50 backdrop-blur-sm rounded-3xl" />

        {/* Moving track */}
        <div className="flex animate-scroll space-x-16 py-6 px-8 relative">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-32 sm:w-40 md:w-44 lg:w-48 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={100}
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
