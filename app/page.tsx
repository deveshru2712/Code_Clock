"use client";
import { DefaultMultipleBarChart } from "@/components/main/Bento/Chart";
import LanguageDistribution from "@/components/main/Bento/LanguageDistribution";
import Leaderboard from "@/components/main/Bento/LeaderBoard";

export default function Home() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden flex flex-col items-center justify-center pt-28">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-12 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <DefaultMultipleBarChart />

            <div className="w-full h-full rounded-md p-4 shadow-sm border flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">
                Additional Content
              </span>
            </div>
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
