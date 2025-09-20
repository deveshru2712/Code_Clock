import { TrendingUp } from "lucide-react";
import React from "react";

export default function InstallOnVsCode() {
  return (
    <div className="h-full bg-slate-50 rounded-2xl border shadow-sm flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
            Easy Install on VS Code
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Install the CodeClock extension directly from the VS Code
            marketplace with one click
          </p>

          <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden mb-3">
            <div className="flex justify-between items-start p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">CodeClock</h3>
                  <p className="text-gray-500 text-sm">Productivity Tracker</p>
                </div>
              </div>
              <div className="bg-green-100 text-green-700 gap-0.5 text-xs font-medium py-1 px-2 rounded-full flex items-center">
                <TrendingUp size={20} />
                Popular
              </div>
            </div>
            <div className="px-4 pb-4">
              <p className="text-gray-600 text-sm">
                Track your coding time, compete for the top position, and boost
                your productivity.
              </p>
            </div>
          </div>

          <button className="w-full py-1.5 px-4 rounded-lg flex items-center justify-center font-medium transition-all hover:scale-95 cursor-pointer duration-200 border">
            Install
          </button>
        </div>
      </div>
    </div>
  );
}
