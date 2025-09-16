"use client";
import GridUnderlay from "@/components/Grid";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  // Container variants for stagger animation
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
    <div className="h-screen relative flex items-center justify-center overflow-hidden">
      <GridUnderlay />

      <main className="relative z-10 flex items-center justify-center">
        <motion.div
          className="pt-12 md:pt-0 max-w-6xl mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl flex flex-wrap justify-center gap-2.5 items-center lg:text-5xl tracking-tight text-shadow-[0px_2px_0px_rgba(0,0,0,0.15)] dark:text-shadow-[0px_3px_1px_rgba(255,255,255,0.15)] font-semibold font-fredoka mb-8"
          >
            <span>Code smarter,</span>

            <motion.div
              variants={popOutVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <Button className="bg-white hover:bg-gray-50 px-2.5 py-6 border shadow-lg dark:shadow-2xl transition-colors duration-300">
                <Image
                  src={"/vscode_image.webp"}
                  height={55}
                  width={35}
                  alt="VS Code Editor"
                />
              </Button>
            </motion.div>

            <span>track better</span>
          </motion.h1>

          <span></span>
          <motion.p
            variants={itemVariants}
            className="md:w-5/6 w-full text-lg  text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-inter"
          >
            Transform your coding workflow with intelligent session tracking.
            Monitor your productivity, analyze your coding patterns, and unlock
            insights that help you become a more efficient developer.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600/90 cursor-pointer text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Install Extension
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                View Documentation
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

      {/* Floating icons container with stagger */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-20"
      >
        <motion.div
          variants={popOutVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          className="absolute top-1/5 left-5 md:left-12 lg:top-1/4 lg:left-1/6"
        >
          <Image
            src={"https://skillicons.dev/icons?i=js"}
            height={64}
            width={64}
            alt="JavaScript"
          />
        </motion.div>

        <motion.div
          variants={popOutVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          className="absolute bottom-1/6 left-8 md:bottom-28 md:left-1/4 lg:bottom-32"
        >
          <Image
            src={"https://skillicons.dev/icons?i=ts"}
            height={64}
            width={64}
            alt="TypeScript"
          />
        </motion.div>

        <motion.div
          variants={popOutVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          className="absolute top-1/5 right-5 md:right-12 lg:top-1/4 lg:right-1/6"
        >
          <Image
            src={"https://skillicons.dev/icons?i=tailwind"}
            height={64}
            width={64}
            alt="Tailwind CSS"
          />
        </motion.div>

        <motion.div
          variants={popOutVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          className="absolute bottom-1/6 right-8 md:bottom-28 md:right-1/4 lg:bottom-32"
        >
          <Image
            src={"https://skillicons.dev/icons?i=go"}
            height={64}
            width={64}
            alt="Go"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
