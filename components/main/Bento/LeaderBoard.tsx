import React from "react";
import { Medal, Trophy } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Leaderboard = () => {
  const users = [
    { name: "Joanna", time: "233min" },
    { name: "Mark", time: "89min" },
    { name: "Sarah", time: "56min" },
    { name: "Alex", time: "23min" },
    { name: "Michael", time: "18min" },
  ];

  return (
    <div className="max-w-md min-w-sm h-fit mx-auto border py-2 px-5 rounded-md shadow-md">
      <h1 className="text-normal font-medium flex items-center gap-1.5">
        <span className="text-lg">Leaderboard</span>
        <Trophy size={24} />
      </h1>
      <div className="mt-4">
        <div className="flex justify-between font-medium items-center">
          <span>Rank</span>
          <span>Name</span>
          <span>Coded</span>
        </div>
        <Separator className="mb-1.5" />
        <div className="space-y-2">
          {users.map((user, index) => (
            <Row
              key={index}
              rank={index + 1}
              name={user.name}
              time={user.time}
              isLast={index === users.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

interface RowProps {
  rank: number;
  name: string;
  time: string;
  isLast: boolean;
}

function Row({ rank, name, time, isLast }: RowProps) {
  const medalColorBasedOnRank = (rank: number) => {
    if (rank == 1) {
      return "gold";
    } else if (rank == 2) {
      return "silver";
    } else if (rank == 3) {
      return "brown";
    } else {
      return "black";
    }
  };

  // Todo: give a special glow to the ranker

  return (
    <>
      <div
        className={`flex items-center shadow px-3 py-1.5 rounded-md justify-between pt-1 text-center ${
          rank == 1 ? "shadow-[0px_1px_5px_0px_#fbbf24]" : ""
        } ${rank == 2 ? "shadow-[0px_1px_5px_0px_#9ca3af]" : ""} ${
          rank == 3 ? "shadow-[0px_0px_5px_0px_#ea580c]" : ""
        }
`}
      >
        <div className="flex-1 flex items-center text-left">
          <Medal size={18} color={medalColorBasedOnRank(rank)} />
          {rank}
        </div>

        <span className="flex-1 text-center">{name}</span>
        <span className="flex-1 text-right">
          <span className="text-xs text-slate-800 px-1 py-0.5 rounded-2xl bg-black/10">
            {time}
          </span>
        </span>
      </div>
      {!isLast && <Separator />}
    </>
  );
}
