"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import Grid from "@/components/Grid";
import HeroSection from "@/components/main/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden flex items-center justify-center px-4">
      {/* main content */}
      <Grid />
      <HeroSection />
    </div>
  );
}
