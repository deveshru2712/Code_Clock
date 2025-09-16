import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface LangCardProps {
  time: string;
  src: string;
  title: string;
  className?: string;
}

export default function LangCard({
  src,
  time,
  title,
  className,
}: LangCardProps) {
  return (
    <Button
      variant="ghost"
      className={`${className} flex items-center justify-start gap-1 bg-white border text-slate-800 p-2 h-auto hover:bg-white shadow-2xs`}
    >
      <Image
        src={src}
        height={30}
        width={30}
        alt={title}
        className="flex-shrink-0"
      />
      <span className="text-sm font-medium">{time}</span>
    </Button>
  );
}
