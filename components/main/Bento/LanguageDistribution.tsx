import { RoundedPieChart } from "@/components/ui/rounded-pie-chart";
import { ChartNoAxesCombined } from "lucide-react";
import React from "react";

export default function LanguageDistribution() {
  return (
    <div className="max-w-md min-w-sm w-full border py-4 px-6 rounded-lg shadow-sm bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Language Distribution
        </h2>
        <ChartNoAxesCombined size={20} className="text-gray-600" />
      </div>

      <div className="w-full">
        <RoundedPieChart />
      </div>
    </div>
  );
}
