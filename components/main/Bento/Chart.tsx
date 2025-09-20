"use client";

import { Bar, BarChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { TrendingDown } from "lucide-react";

const chartData = [
  { day: "Monday", Day_average: 186, You: 80 },
  { day: "Tuesday", Day_average: 305, You: 200 },
  { day: "Wednesday", Day_average: 237, You: 120 },
  { day: "Thursday", Day_average: 73, You: 190 },
  { day: "Friday", Day_average: 209, You: 130 },
  { day: "Saturday", Day_average: 214, You: 140 },
  { day: "Sunday", Day_average: 180, You: 160 },
];

const chartConfig = {
  desktop: {
    label: "Day-average",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "You",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function DefaultMultipleBarChart() {
  return (
    <Card className="bg-slate-50">
      <CardHeader>
        <CardTitle>
          Daily Average v/s You
          <Badge
            variant="outline"
            className="text-red-500 bg-red-500/10 border-none ml-2"
          >
            <TrendingDown className="h-4 w-4" />
            <span>-5.2%</span>
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <rect
              x="0"
              y="0"
              width="100%"
              height="85%"
              fill="url(#default-multiple-pattern-dots)"
            />
            <defs>
              <DottedBackgroundPattern />
            </defs>
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Day_average" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="You" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const DottedBackgroundPattern = () => {
  return (
    <pattern
      id="default-multiple-pattern-dots"
      x="0"
      y="0"
      width="10"
      height="10"
      patternUnits="userSpaceOnUse"
    >
      <circle
        className="dark:text-muted/40 text-muted"
        cx="2"
        cy="2"
        r="1"
        fill="currentColor"
      />
    </pattern>
  );
};
