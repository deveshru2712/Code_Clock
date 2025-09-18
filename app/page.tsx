"use client";
import Grid from "@/components/Grid";
import HeroSection from "@/components/main/HeroSection";
import BentoSection from "@/components/main/Bento/BentoSection";

export default function Home() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden flex flex-col items-center justify-center pt-28">
      {/* Grid */}
      <Grid />
      {/* main content */}
      <HeroSection />
      <BentoSection />
    </div>
  );
}
