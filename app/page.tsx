import GridUnderlay from "@/components/Grid";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen relative flex items-center justify-center overflow-hidden">
      <GridUnderlay />

      <main className="relative z-10 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl lg:text-7xl tracking-tight text-shadow-[0px_2px_0px_rgba(0,0,0,0.15)] dark:text-shadow-[0px_3px_1px_rgba(255,255,255,0.15)] font-semibold font-fredoka mb-8">
            Code smarter,{" "}
            <Button className="bg-white hover:bg-gray-50 px-2.5 py-6 border shadow-lg dark:shadow-2xl transition-all duration-300 hover:scale-105">
              <Image
                src={"/vscode_image.webp"}
                height={55}
                width={35}
                alt="VS Code Editor"
              />
            </Button>{" "}
            track better
          </h1>

          <p className="md:w-full w-2/3 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your coding workflow with intelligent session tracking.
            Monitor your productivity, analyze your coding patterns, and unlock
            insights that help you become a more efficient developer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Install Extension
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </main>

      {/* floating icons */}
      <Button className="absolute top-1/4 translate-x-1/2 left-8 md:left-16 lg:left-1/12 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
        <Image
          src={"https://skillicons.dev/icons?i=js"}
          height={64}
          width={64}
          alt="JavaScript"
        />
      </Button>

      <Button className="absolute -translate-x-1/2 top-3/4 left-12 md:left-20 lg:left-1/5 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
        <Image
          src={"https://skillicons.dev/icons?i=ts"}
          height={64}
          width={64}
          alt="TypeScript"
        />
      </Button>

      <Button className="absolute top-1/4 right-8 md:right-16 lg:right-1/12 -translate-x-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
        <Image
          src={"https://skillicons.dev/icons?i=tailwind"}
          height={64}
          width={64}
          alt="Tailwind CSS"
        />
      </Button>

      <Button className="absolute top-3/4 right-12 md:right-20 lg:right-1/5 -translate-x-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
        <Image
          src={"https://skillicons.dev/icons?i=go"}
          height={64}
          width={64}
          alt="Go"
        />
      </Button>
    </div>
  );
}
