import React from "react";

const InsanityMeter = () => {
  return (
    <div className="p-4 rounded-xl bg-gradient-to-r from-gray-50/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-700/50 border border-gray-200/30 dark:border-gray-700/30 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-3 gap-1.5">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          🧠 Insanity Meter
        </span>
        <span className="text-xs px-2 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400">
          DANGER ZONE
        </span>
      </div>

      <div className="relative">
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-gradient-to-r from-green-400  via-orange-400 to-red-500 rounded-full animate-pulse shadow-lg" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/50  via-orange-400/50 to-red-500/50 rounded-full blur-sm animate-pulse" />
        </div>

        <div className="absolute right-2 -bottom-[7px] w-2 h-2 bg-red-500 rounded-full animate-bounce shadow-lg">
          <div className="absolute inset-0 bg-red-400 rounded-full animate-ping" />
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
        <span>😊 Sane</span>
        <span>🤯 Insane</span>
      </div>
    </div>
  );
};

export default InsanityMeter;
