"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import Grid from "@/components/Grid";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Item variants for individual elements
  const itemVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5 },
    },
  };

  // Pop out animation for icons
  const popOutVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 15,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="min-h-screen relative w-full overflow-hidden flex items-center justify-center px-4">
      {/* main content */}
      <Grid />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full px-4 py-14 sm:px-8 md:px-12 relative z-10"
      >
        <main className="flex flex-col items-center justify-start text-center gap-6 md:gap-8">
          <motion.h1
            variants={itemVariants}
            className="flex flex-col items-center gap-3 md:gap-4 font-fredoka font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span>Stay on track by</span>
            <span className="text-white bg-[#70BFFF] rounded-md px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Tracking time
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="w-full md:w-2/3 lg:w-3/5 text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter"
          >
            Transform your coding workflow with intelligent session tracking.
            Monitor your productivity, analyze your coding patterns, and unlock
            insights that help you become a more efficient developer.
          </motion.p>

          <motion.button
            variants={itemVariants}
            className="bg-[#FF8058] hover:bg-[#e6734d] cursor-pointer text-white px-5 py-4 rounded-4xl text-lg sm:text-xl"
          >
            Get Tracking
          </motion.button>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2"
          >
            <span className="text-slate-700 text-sm sm:text-base">
              Currently available for:
            </span>
            <Button className="bg-white hover:bg-gray-50 px-2 py-5 border shadow-lg dark:shadow-2xl transition-colors duration-300">
              <Image
                src={"/vscode_image.webp"}
                height={45}
                width={25}
                alt="VS Code Editor"
                className="h-6 w-auto sm:h-7"
              />
            </Button>
          </motion.div>
        </main>
      </motion.div>
    </div>
  );
}
