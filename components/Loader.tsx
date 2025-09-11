import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";
import { useTheme } from "next-themes";

export default function Loader() {
  const { theme } = useTheme();
  const getLoaderColor = theme == "dark" ? "#fff" : "#000";

  return <Bouncy key={theme} size="45" speed="1.75" color={getLoaderColor} />;
}
