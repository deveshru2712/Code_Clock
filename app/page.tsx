import LangCard from "@/components/LangCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden flex items-center justify-center px-4">
      {/* Background circle */}
      <div className="absolute inset-0 -z-10">
        <div
          className="relative w-[300px] top-1/3 left-1/2 -translate-x-1/2
          md:w-[800px] md:left-1/2 md:-translate-x-1/2 md:top-1/3 md:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/4 border lg:w-[1000px] aspect-square border-slate-200 rounded-full"
        />
      </div>

      {/* main content */}

      <div className="max-w-7xl w-full px-4 py-14 sm:px-8 md:px-12">
        <main className="flex flex-col items-center justify-start text-center gap-6 md:gap-8">
          <h1 className="flex flex-col items-center gap-3 md:gap-4 font-fredoka font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span>Stay on track by</span>
            <span className="text-white bg-[#70BFFF] rounded-md px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Tracking time
            </span>
          </h1>

          <p className="w-full md:w-2/3 lg:w-3/5 text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter">
            Transform your coding workflow with intelligent session tracking.
            Monitor your productivity, analyze your coding patterns, and unlock
            insights that help you become a more efficient developer.
          </p>

          <Button
            size="lg"
            className="bg-[#FF8058] hover:bg-[#e6734d] cursor-pointer px-8 py-6 sm:px-10 sm:py-8 rounded-4xl text-lg sm:text-xl"
          >
            Get Tracking
          </Button>

          <div className="flex items-center gap-2">
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
          </div>
        </main>

        {/* floating button */}

        <div className="absolute top-1/2 left-1/6 -translate-x-1/2 -translate-y-full">
          <LangCard
            src={"https://skillicons.dev/icons?i=ts"}
            time={"10min"}
            title="TypeScript"
          />
        </div>

        <div className="absolute top-1/2 right-1/6 translate-x-1/2 -translate-y-full">
          <LangCard
            src={"https://skillicons.dev/icons?i=go"}
            time={"17min"}
            title="Go"
          />
        </div>

        <div className="absolute top-1/4 left-1/12 translate-x-1/2 -translate-y-full">
          <LangCard
            src={"https://skillicons.dev/icons?i=js"}
            time={"13min"}
            title="JavaScript"
          />
        </div>

        <div className="absolute top-1/4 right-1/12 -translate-x-1/2 -translate-y-full">
          <LangCard
            src={"https://skillicons.dev/icons?i=tailwind"}
            time={"45min"}
            title="Tailwind CSS"
          />
        </div>

        <div className="absolute top-2/3 left-1/4 -translate-x-1/2 -translate-y-1/5">
          <LangCard
            src={"https://skillicons.dev/icons?i=cpp"}
            time={"15min"}
            title="C++"
          />
        </div>

        <div className="absolute top-2/3 right-1/6 -translate-x-full -translate-y-1/5">
          <LangCard
            src={"https://skillicons.dev/icons?i=python"}
            time={"25min"}
            title="Python"
          />
        </div>
      </div>
    </div>
  );
}
