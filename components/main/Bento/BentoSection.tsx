"use client";
import React from "react";
import { motion, Variants } from "motion/react";
import Leaderboard from "./LeaderBoard";
import LanguageDistribution from "./LanguageDistribution";
import InstallOnVsCode from "./InstallOnVsCode";
import { DefaultMultipleBarChart } from "@/components/main/Bento/Chart";

const slideUpVariants: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const scaleVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export default function BentoSection() {
  return (
    <motion.div
      className="w-full px-6 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {/* Content */}
      <div className="max-w-6xl relative z-10 mx-auto h-[500px] w-full px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <motion.div variants={slideUpVariants}>
              <DefaultMultipleBarChart />
            </motion.div>
            <motion.div variants={scaleVariants}>
              <InstallOnVsCode />
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            <motion.div variants={slideUpVariants}>
              <Leaderboard />
            </motion.div>
            <motion.div variants={scaleVariants}>
              <LanguageDistribution />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
