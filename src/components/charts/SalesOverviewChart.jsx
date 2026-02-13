import React from "react";
import {
  ResponsiveContainer,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartSection from "../commonComps/ChartSection";

const salesData = [
  { month: "Jul", sales: 2000 },
  { month: "Aug", sales: 3400 },
  { month: "Sep", sales: 4500 },
  { month: "Oct", sales: 4200 },
  { month: "Nov", sales: 5000 },
  { month: "Dec", sales: 5100 },
  { month: "Jan", sales: 6600 },
  { month: "Feb", sales: 7000 },
  { month: "Mar", sales: 7900 },
  { month: "Apr", sales: 8100 },
 
];

function SalesOverviewChart() {
  return (
    <ChartSection
    className="pb-6"
     title="Sales overview"
    >
       
        <ResponsiveContainer
          width={"100%"}
          height={"100%"}
          
        >
          <LineChart data={salesData}>
            <XAxis
              dataKey={"month"}
              stroke="#bcbcbc"
              tickLine={false}
              className="px-2"
            />
            <YAxis stroke="#bcbcbc"  tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#888d84",
              }}
              itemStyle={{ color: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#10b981"
              strokeWidth={4}
              dot={{strokeWidth:0, r:5, fill:"#6ee7b7"}}
              activeDot={{strokeWidth:2, r:4,}}
            />
          </LineChart>
        </ResponsiveContainer>
     </ChartSection>
  );
}

export default SalesOverviewChart;
