"use client";
import { Building2, Hammer, Globe, Landmark } from "lucide-react";

export default function OurExpertise() {
  const cards = [
    {
      icon: <Building2 className="w-8 h-8 mb-3" />,
      title: "Premium Real Estate Development",
      desc: "Crafting architectural landmarks that redefine modern living — from residential spaces to commercial hubs built with excellence.",
      active: true,
    },
    {
      icon: <Hammer className="w-8 h-8 mb-3" />,
      title: "Construction & Engineering",
      desc: "Delivering precision-engineered structures with the highest standards of safety, design, and durability.",
    },
    {
      icon: <Landmark className="w-8 h-8 mb-3" />,
      title: "Property Management System",
      desc: "Ensuring lasting value through expert property care, maintenance, and end-to-end real estate management solutions.",
    },
    {
      icon: <Globe className="w-8 h-8 mb-3" />,
      title: "Smart & Sustainable Spaces",
      desc: "Integrating innovation and sustainability to create energy-efficient, future-ready environments for tomorrow’s lifestyle.",
    },
  ];

  return (
    <section className="w-[90%] mx-auto py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-4xl  font-semibold text-[var(--color-darkgray)]">
              OUR <span className="text-[var(--color-ochre)]">EXPERTISE</span>
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              At AiBricks Realtors, we blend innovation, craftsmanship, and
              trust to deliver real estate solutions that inspire confidence and
              elevate modern living.
            </p>
          </div>
          {/* <button className="bg-green-900 hover:bg-green-800 text-white rounded-full px-6 py-2 w-fit self-start md:self-auto">
            Start Your Journey
          </button> */}
        </div>

        {/* Cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-sm transition-all duration-300 ${
                card.active
                  ? "bg-[linear-gradient(135deg,_#f1df9e_0%,_#d5b258_100%)] text-white"
                  : "bg-[#edece8] hover:bg-[#f1e5b4] text-gray-900"
              }`}
            >
              <div
                className={`${
                  card.active ? "text-white" : "text-[var(--color-brickred)]"
                } flex flex-col items-start`}
              >
                {card.icon}
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p
                  className={`text-md ${
                    card.active ? "text-gray-100" : "text-gray-600"
                  } mb-4`}
                >
                  {card.desc}
                </p>
                <button
                  className={`rounded-full px-5 py-2 text-sm font-medium ${
                    card.active
                      ? "bg-white text-[var(--color-brickred)] hover:bg-gray-100"
                      : "bg-[var(--color-brickred)] text-white hover:bg-[var(--color-ochre)]"
                  }`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
