import ComingSoon from "@/src/ComingSoon";
import AllProperties from "@/src/Properties/AllProperties";
import HeroSection from "@/src/Properties/HeroSection";
import React from "react";

const PageProperties = () => {
  return (
    <div className=" bg-[var(--background)]">
      {/* <ComingSoon /> */}
      <HeroSection />
      <AllProperties />
    </div>
  );
};

export default PageProperties;
