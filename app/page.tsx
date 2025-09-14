import GridUnderlay from "@/components/Grid";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen relative flex items-center justify-center">
      <GridUnderlay />

      <div className="relative z-10 flex items-center justify-center">
        <main className="max-w-6xl mx-auto">
          <h1 className="text-6xl tracking-tight text-shadow-[0px_2px_0px_rgba(0,0,0,0.15)] dark:text-shadow-[0px_3px_1px_rgba(255,255,255,0.15)] font-semibold font-fredoka">
            Fire your{" "}
            <Button className="bg-white px-3 py-6 border shadow-lg dark:shadow-2xl">
              <Image
                src={"/vscode_image.webp"}
                height={55}
                width={35}
                alt="code_editore"
              />
            </Button>{" "}
            Track your session
          </h1>
        </main>
      </div>
    </div>
  );
}
