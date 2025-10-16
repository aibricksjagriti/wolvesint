import Footer from "@/src/Footer";
import HeroSection from "@/src/Home/HeroSection";
import Navbar from "@/src/Home/Navbar";
import ProjectSlider from "@/src/Home/ProjectSlider";
import PropertyTypeSlider from "@/src/Home/PropertyTypeSlider";
import TrendingProjects from "@/src/Home/TrendingProjects";
import UpcomingProjects from "@/src/Home/UpcomingProjects";
import React from "react";

const page = () => {
  return (
    <main className=" bg-[#ffffff]">
      <Navbar />
      <HeroSection />
      <UpcomingProjects />
      <TrendingProjects />
      <PropertyTypeSlider />
      {/* <ProjectSlider /> */}
      <Footer />
    </main>
  );
};

export default page;
