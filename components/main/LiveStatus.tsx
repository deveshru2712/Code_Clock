import { Clock, Code2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const LiveStatus = () => {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/30 dark:border-blue-700/30 backdrop-blur-sm gap-3">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Button className="h-10 w-10 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            <Image
              src="/vscode_image.webp"
              height={22}
              width={22}
              alt="vs_code"
              className="object-contain"
            />
          </Button>

          <div className="absolute -bottom-1 -right-1 w-4 h-4">
            <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75" />
            <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow-md">
              <div className="absolute inset-1 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <Code2 size={16} className="text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Currently Coding
            </span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
            React & TypeScript
          </p>
        </div>
      </div>

      <div className="text-right">
        <div className="text-lg font-bold text-slate-700 dark:text-slate-300 ">
          04:03:22
        </div>
        <div className="flex items-center gap-2 mt-1">
          <Clock size={14} className="text-gray-500 dark:text-gray-400" />
          <span className="text-gray-700 dark:text-gray-200 font-mono text-sm">
            Today
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveStatus;
