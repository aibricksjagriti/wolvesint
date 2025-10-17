import Footer from "@/src/Footer";
import DemandSection from "@/src/Home/DemandSection";
import HeroSection from "@/src/Home/HeroSection";
import LogoSlider from "@/src/Home/LogoSlider";
import Navbar from "@/src/Home/Navbar";
import PropertyTypeSlider from "@/src/Home/PropertyTypeSlider";
import TrendingProjects from "@/src/Home/TrendingProjects";
import UpcomingProjects from "@/src/Home/UpcomingProjects";
import React from "react";
import InDemandSection from "@/src/Home/InDemandSection";
import Cta from "@/src/Home/Cta";
import EasyForYou from "@/src/Home/EasyForYou";
import StatsSection from "@/src/Home/StatsSection";

const page = () => {
  return (
    <main className=" bg-[var(--background)]">
      <Navbar />
      <HeroSection />
      <UpcomingProjects />
      <TrendingProjects />
      <PropertyTypeSlider />
      <LogoSlider />
      <DemandSection />
      {/* <InDemandSection /> */}
      <Cta />
      <EasyForYou />
      <StatsSection />
      <Footer />
    </main>
  );
};

export default page;
