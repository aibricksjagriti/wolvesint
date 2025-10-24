import HeroSection from "@/src/About/HeroSection";
import InfographicSection from "@/src/About/InfoGraphicSection";
import MissionVision from "@/src/About/MissionVision";
import OurExpertise from "@/src/About/OurExpertise";
import TeamSlider from "@/src/About/TeamSlider";
import ComingSoon from "@/src/ComingSoon";
import React from "react";

const PageAbout = () => {
  return (
    <div className=" bg-[var(--background)]">
      {/* <ComingSoon /> */}
      <HeroSection />
      <MissionVision />
      <OurExpertise />
      {/* <InfographicSection /> */}
      <TeamSlider />
    </div>
  );
};

export default PageAbout;
