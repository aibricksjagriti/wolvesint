import Navbar from "@/src/Home/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-[var(--color-lightcream)]">
      <Navbar />

      <section
        id="home"
        className="flex flex-col items-center justify-center h-screen text-center"
      >
        <h1 className="text-5xl font-serif text-[var(--color-darkgray)]">
          Welcome to{" "}
          <span className="text-[var(--color-brickred)]">LuxeEstates</span>
        </h1>
        <p className="text-lg font-sans text-[var(--color-darkgray)] mt-4 max-w-2xl">
          Discover a new era of elegance and sophistication in modern living.
        </p>
      </section>
    </main>
  );
};

export default page;
