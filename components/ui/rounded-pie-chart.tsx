"use client";

import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

export const description = "A pie chart with a label list";

const chartData = [
  { language: "javascript", time: 275, fill: "var(--color-javascript)" },
  { language: "python", time: 200, fill: "var(--color-python)" },
  { language: "java", time: 187, fill: "var(--color-java)" },
  { language: "csharp", time: 173, fill: "var(--color-csharp)" },
  { language: "other", time: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  Language: {
    label: `Time spent`,
  },
  javascript: {
    label: "JavaScript",
    color: "var(--chart-1)",
  },
  python: {
    label: "Python",
    color: "var(--chart-2)",
  },
  java: {
    label: "Java",
    color: "var(--chart-3)",
  },
  csharp: {
    label: "C#",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function RoundedPieChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center">
        <CardTitle>
          Programming Languages Usage
          <Badge
            variant="outline"
            className="text-green-500 bg-green-500/10 border-none ml-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span>Active</span>
          </Badge>
        </CardTitle>
        <CardDescription>Daily Distribution</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[210px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="language" hideLabel />}
            />
            <Pie
              data={chartData}
              innerRadius={30}
              dataKey="time"
              radius={10}
              cornerRadius={8}
              paddingAngle={4}
            >
              <LabelList
                dataKey="language"
                stroke="none"
                fontSize={12}
                fontWeight={500}
                fill="currentColor"
                formatter={(value: number) => value.toString()}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
