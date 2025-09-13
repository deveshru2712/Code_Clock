import React from "react";
import { Button } from "../ui/button";

const IsActive = () => {
  return (
    <Button className="bg-[#18181B] text-slate-200 flex gap-1.5 items-center">
      Currently Active
      <div className="relative">
        <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
        <div className="absolute top-0 left-0 h-3 w-3 rounded-full bg-green-400/30 animate-ping" />
      </div>
    </Button>
  );
};

export default IsActive;
