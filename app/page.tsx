"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden flex items-center justify-center px-4 py-8">
      <div className="absolute w-[1000px] aspect-square -z-10 pointer-events-none rounded-full border-2 border-slate-200/40 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/4" />

      <div className="max-w-7xl w-full px-12">
        <main className="flex flex-col items-center justify-center text-center gap-8">
          <h1 className="flex flex-col items-center gap-4 font-fredoka font-bold text-5xl md:text-7xl">
            <span>Stay on track by</span>
            <span className="text-white bg-[#70BFFF] rounded-md px-4 py-2 md:px-6 md:py-3 text-4xl md:text-6xl">
              Tracking time
            </span>
          </h1>

          <p className="w-full md:w-4/5 lg:w-3/5 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter">
            Transform your coding workflow with intelligent session tracking.
            Monitor your productivity, analyze your coding patterns, and unlock
            insights that help you become a more efficient developer.
          </p>

          <Button
            size="lg"
            className="bg-[#FF8058] hover:bg-[#e6734d] cursor-pointer px-10 py-8 rounded-4xl text-xl"
          >
            Get Tracking
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-slate-700"> Currently availabel for:</span>
            <Button className="bg-white hover:bg-gray-50 px-2 py-4.5 border shadow-lg dark:shadow-2xl transition-colors duration-300">
              <Image
                src={"/vscode_image.webp"}
                height={45}
                width={25}
                alt="VS Code Editor"
              />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
