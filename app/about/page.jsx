import HeroSection from "@/src/About/HeroSection";
import InfographicSection from "@/src/About/InfoGraphicSection";
import MissionVision from "@/src/About/MissionVision";
import ComingSoon from "@/src/ComingSoon";
import React from "react";

const PageAbout = () => {
  return (
    <div className="w-[90%] mx-auto bg-[var(--background)]">
      {/* <ComingSoon /> */}
      <HeroSection />
      <MissionVision />
      {/* <InfographicSection /> */}
    </div>
  );
};

export default PageAbout;
