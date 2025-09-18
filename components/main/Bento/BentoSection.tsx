import Image from "next/image";
import React from "react";

const BentoSection = () => {
  return (
    <div className="w-full px-6 relative md:px-12 min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={"/new.svg"}
          fill={true}
          alt="background"
          className="object-cover"
          priority
        />
      </div>
      {/* Content */}
      <div></div>
    </div>
  );
};

export default BentoSection;
