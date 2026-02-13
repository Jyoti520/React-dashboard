import React from "react";
import {
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import { motion } from "framer-motion";
import ChartSection from "../commonComps/ChartSection";

const salesData = [
  { name: "Online Store", sales: 5000 },
  { name: "Physical Store", sales: 3000 },
  { name: "Wholesale", sales: 1500 },
  { name: "Resellers", sales: 2500 },
  { name: "Direct Sales", sales: 2000 },
];

const COLORS = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FF8333"];

function SalesChannelChart() {
  return (
    <ChartSection
      className="lg:col-span-2"
      title="sales through channel"
    >
        <ResponsiveContainer
          width={"100%"}
          height={"100%"}
         
        >
          <BarChart data={salesData}>

            {/* X and Y axes */}
            <XAxis dataKey="name" stroke="#bcbcbc" spacing={4} />
            <YAxis stroke="#bcbcbc" />

            {/* Tooltip and Legend */}
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#888d84",
              }}
              itemStyle={{ color: "#fff"}}
            />
            <Legend fontSize={30}/>

            {/* Bar chart with sales data */}
            <Bar dataKey="sales" fill="#10b981" barSize={100}>
              {salesData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartSection>
  );
}

export default SalesChannelChart;
