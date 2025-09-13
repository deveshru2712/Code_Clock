"use client";
import React from "react";
import { Button } from "../ui/button";
import { Clock, Github } from "lucide-react";
import Image from "next/image";
import { useSession } from "@/lib/auth/auth-client";
import { useTheme } from "next-themes";
import Loader from "../Loader";

const CodingStatusCard = () => {
  const { data: session, isPending } = useSession();
  const { theme } = useTheme();

  // Handle loading state
  if (isPending) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  // Handle no session
  if (!session || !session.user) {
    return null;
  }

  return (
    <>
      <div className="px-6 py-4 w-full max-w-md rounded-2xl bg-white dark:bg-sidebar border shadow flex items-center gap-4 h-fit">
        {/* Profile Image */}
        {session.user.image && (
          <Image
            src={session.user.image}
            height={55}
            width={55}
            alt="Profile image"
            className="rounded-full flex-shrink-0"
          />
        )}

        {/* Main Content Container */}
        <div className="flex items-start justify-between gap-4 flex-1">
          {/* Left Section - User Info */}
          <div className="flex flex-col justify-center items-start flex-shrink-0">
            <span className="text-gray-900 dark:text-white font-medium">
              {session.user.name || "No name provided"}
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              23, swe, coder, cp
            </span>

            {/* Social media buttons */}
            <div className="flex items-center gap-2.5 mt-3">
              <div className="relative group">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center justify-center p-2 h-8 w-8"
                >
                  {theme === "dark" ? (
                    <Image
                      src="/twitter_light_mode.png"
                      alt="Twitter icon"
                      height={16}
                      width={16}
                      className="cursor-pointer"
                    />
                  ) : (
                    <Image
                      src="/twitter_dark_mode.jpg"
                      alt="Twitter icon"
                      height={16}
                      width={16}
                      className="cursor-pointer"
                    />
                  )}
                </Button>
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  Twitter
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-black dark:border-b-white"></div>
                </div>
              </div>

              <div className="relative group">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center justify-center p-2 h-8 w-8"
                >
                  <Github size={16} />
                </Button>
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  GitHub
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-black dark:border-b-white"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Working Status */}
          <div>
            <div className="shadow border rounded-xl px-3 py-1 flex items-center gap-2 text-sm">
              <div className="flex gap-2.5">
                <Button className="p-1.5 ">
                  <Image
                    src={"/vscode_image.webp"}
                    height={20}
                    width={20}
                    alt="vs_code"
                    className="object-contain"
                  />
                </Button>
                <div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    04:03:22
                  </span>
                  <span className="flex gap-1 items-center text-slate-700 dark:text-slate-300 text-xs">
                    <Clock size={13} />
                    Today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodingStatusCard;
