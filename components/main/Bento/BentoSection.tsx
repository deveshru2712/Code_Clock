import { DefaultMultipleBarChart } from "@/components/ui/default-multiple-bar-chart";
import Image from "next/image";
import React from "react";
import Leaderboard from "./LeaderBoard";

const BentoSection = () => {
  return (
    <div className="w-full px-6 relative md:px-12 min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={"/new-light.svg"}
          fill={true}
          alt="background"
          className="object-cover"
          priority
        />
      </div>
      {/* Content */}
      <div className="max-w-7xl mx-auto pt-36">
        <div className="grid grid-rows-2 grid-cols-2">
          <div className=""></div>
          <div></div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default BentoSection;
