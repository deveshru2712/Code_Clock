import GridUnderlay from "@/components/GridUnderlay";
import BentoSection from "@/components/main/Bento/BentoSection";
import HeroSection from "@/components/main/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen relative w-full flex flex-col items-center justify-center">
      {/* grid */}
      <GridUnderlay />
      {/* main content */}
      <HeroSection />
      <BentoSection />
    </div>
  );
}
