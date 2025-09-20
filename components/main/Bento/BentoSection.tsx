import React from "react";
import Leaderboard from "./LeaderBoard";
import LanguageDistribution from "./LanguageDistribution";
import InstallOnVsCode from "./InstallOnVsCode";
import { DefaultMultipleBarChart } from "@/components/ui/default-multiple-bar-chart";

export default function BentoSection() {
  return (
    <div className="w-full px-6 md:px-12">
      {/* Content */}
      <div className="max-w-6xl relative z-10 mx-auto h-[500px] w-full px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <DefaultMultipleBarChart />
            <InstallOnVsCode />
          </div>

          <div className="flex flex-col gap-4">
            <Leaderboard />
            <LanguageDistribution />
          </div>
        </div>
      </div>
    </div>
  );
}
