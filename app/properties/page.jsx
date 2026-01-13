import ComingSoon from "@/src/ComingSoon";
import AllProperties from "@/src/Properties/AllProperties";
import ContactSidebar from "@/src/Properties/ContactSidebar";
import HeroSection from "@/src/Properties/HeroSection";
import PropertyCard from "@/src/Properties/PropertyCard";
import React from "react";

const PageProperties = () => {
  return (
    <div className=" bg-[var(--background)]">
      {/* <ComingSoon /> */}
      <HeroSection />
      {/* <AllProperties /> */}
      <div className="mb-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl  font-semibold text-darkGray">
            Top Projects by AI Bricks Realtors in Pune
          </h1>
          <p className="text-lg text-gray-500 mt-1">
            Buy directly from builders • No brokerage • Verified projects
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Listings */}
        <div className="lg:col-span-8 space-y-5">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4">
          <ContactSidebar />
        </div>
      </div>
    </div>
  );
};

export default PageProperties;
