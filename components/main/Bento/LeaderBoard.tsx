import React from "react";
import { Crown, Medal, Trophy } from "lucide-react";
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
    <div className="max-w-md min-w-sm bg-slate-50 h-fit border py-2 px-5 rounded-2xl shadow-sm">
      <h1 className="text-normal font-medium flex items-start gap-1.5">
        <span className="text-lg">Top Performers</span>
        <Trophy size={20} color="#fbbf24" className="pt-0.5" />
      </h1>
      <div>
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

  const glowBasedOnRank = (rank: number) => {
    if (rank == 1) {
      return "shadow shadow-[0px_1px_5px_0px_#fbbf24]";
    } else if (rank == 2) {
      return "shadow shadow-[0px_1px_5px_0px_#9ca3af]";
    } else if (rank == 3) {
      return "shadow shadow-[0px_0px_5px_0px_#ea580c]";
    } else {
      return "shadow";
    }
  };

  return (
    <>
      <div
        className={`${
          rank == 1 ? "scale-105" : "hover:scale-105"
        } bg-white duration-300 cursor-pointer transition-all flex items-center px-3 py-1.5 rounded-md justify-between pt-1 text-center ${glowBasedOnRank(
          rank
        )}`}
      >
        <div className="flex-1 flex items-center text-left">
          {rank == 1 ? (
            <Crown size={18} color={medalColorBasedOnRank(rank)} />
          ) : (
            <Medal size={18} color={medalColorBasedOnRank(rank)} />
          )}
          {rank}
        </div>

        <span className="flex-1 text-center">{name}</span>
        <span className="flex-1 text-right">
          <span className="text-xs text-slate-50 px-1.5 py-0.5 rounded-2xl bg-orange-500">
            {time}
          </span>
        </span>
      </div>
      {!isLast && <Separator />}
    </>
  );
}
