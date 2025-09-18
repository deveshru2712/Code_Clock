"use client";
import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";
import { useTheme } from "next-themes";

export default function Loader() {
  const { theme } = useTheme();

  if (theme == "light") {
    return <Bouncy size="45" speed="1.75" color="black" />;
  }

  if (theme == "dark") {
    return <Bouncy size="45" speed="1.75" color="white" />;
  }
}
