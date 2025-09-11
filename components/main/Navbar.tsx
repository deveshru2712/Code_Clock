import Link from "next/link";
import React from "react";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <div className="w-full px-12 py-4 backdrop-blur-2xl fixed top-0 z-10 border-b shadow">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href={"/"} className="text-lg font-semibold">
          Code Clock
        </Link>
        <ModeToggle />
      </nav>
    </div>
  );
};

export default Navbar;
