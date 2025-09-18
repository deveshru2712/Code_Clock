"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import ModeToggle from "../ModeToggle";
import { redirect } from "next/navigation";
import { useSession } from "@/lib/auth/auth-client";

const Navbar = () => {
  const { data: session, isPending } = useSession();
  return (
    <div className="w-full px-4 md:px-8 lg:px-12 bg-background/95 backdrop-blur-sm py-3 fixed top-0 z-50 border-b border-gray-100 dark:border-slate-800 shadow-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href={"/"}
          className="flex items-center text-xl font-bold transition-all hover:scale-105"
        >
          <div className="mr-2 bg-orange-500 text-white p-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          Code Clock
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-slate-200">
          <a
            href="#howItWorks"
            className="transition-colors hover:text-orange-500 relative group"
          >
            How it works
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#components"
            className="transition-colors hover:text-orange-500 relative group"
          >
            Components
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          {!session && !isPending && (
            <Button
              onClick={() => redirect("/sign-in")}
              className="ring-1  ring-orange-400 hover:bg-background/80 bg-background dark:text-slate-300 hover:dark:bg-slate-800 font-medium text-gray-800 cursor-pointer transition-all duration-200 px-5 py-2 rounded-md"
            >
              Login
            </Button>
          )}
          <Button className="bg-orange-500 hover:scale-95 hover:bg-orange-500 cursor-pointer duration-300 text-white font-medium transition-all px-5 py-2 rounded-md shadow-sm hover:shadow-md">
            Install Now
          </Button>
          <div
            className={`${session && !isPending ? "flex" : "hidden md:flex"}`}
          >
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
