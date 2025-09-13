"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";
import { useSession } from "@/lib/auth/auth-client";
import { useTheme } from "next-themes";
import Loader from "../Loader";
import LiveStatus from "../main/LiveStatus";
import InsanityMeter from "../main/InsanityMeter";

export default function CodingStatusCard() {
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
    <div>
      <div className="relative px-7 py-6 w-full max-w-lg rounded-2xl dark:bg-sidebar backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-gray-900/20 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-5 mb-3">
          {/* Enhanced Profile Image */}
          <div className="relative">
            {session.user.image && (
              <>
                <Image
                  src={session.user.image}
                  height={60}
                  width={60}
                  alt="Profile image"
                  className="relative rounded-full border-2 border-white/50 shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </>
            )}
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {session.user.name || "No name provided"}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
              23 • SWE • Coder • CP
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="relative group/tooltip">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 w-9 rounded-full border-gray-200/60 dark:border-gray-700/60 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110"
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
                <div className="absolute top-10 z-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                  Twitter
                </div>
              </div>

              <div className="relative group/tooltip">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 w-9 rounded-full border-gray-200/60 dark:border-gray-700/60 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:scale-110"
                >
                  <Github
                    size={16}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </Button>
                <div className="absolute z-10 top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                  GitHub
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-3" />

        {/* Coding Status Section */}
        <div className="space-y-4">
          <LiveStatus />

          {/* Enhanced Insanity Meter */}
          <InsanityMeter />
        </div>
      </div>
    </div>
  );
}
