"use client";
import Grid from "@/components/Grid";
import HeroSection from "@/components/main/HeroSection";
import BentoSection from "@/components/main/Bento/BentoSection";
import Leaderboard from "@/components/main/Bento/LeaderBoard";
import { DefaultMultipleBarChart } from "@/components/main/Bento/Chart";

export default function Home() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden flex flex-col items-center justify-center pt-28">
      {/* Grid */}
      {/* <Grid /> */}
      {/* main content */}
      {/* <HeroSection />
      <BentoSection /> */}
      <div className="max-w-6xl mx-auto w-full px-12 py-6">
        <div className="grid grid-cols-2 gap-1">
          <DefaultMultipleBarChart />
          <div className="w-fit">
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}
