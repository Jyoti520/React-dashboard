import React, { useState } from "react";
import {
  ResponsiveContainer,
  Area,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
} from "recharts";
import { motion } from "framer-motion";

const monthlySalesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 5000 },
  { month: "Mar", sales: 5500 },
  { month: "Apr", sales: 4200 },
  { month: "May", sales: 5700 },
  { month: "Jun", sales: 7000 },
  { month: "Jun", sales: 8100 },
];

function SalesAreaChart() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("this.Month");

  return (
    <motion.div
      className="bg-gradient-to-tr from-gray-700 to-gray-800 shadow-lg backdrop-blur-sm rounded-xl p-4 border-2 border-gray-600 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-left text-xl font-medium text-gray-300">
          Sales overview
        </h2>
        <select
          name=""
          id=""
          className="bg-gray-700 text-gray-100 rounded-md px-3 py-1  focus:outline-none focus:ring-2 focus:ring-green-400"
          value={selectedTimeRange}
          onChange={() => setSelectedTimeRange(e.target.value)}
        >
          <option>this Week</option>
          <option>this Month</option>
          <option>this Quarter</option>
          <option>this Year</option>
        </select>
      </div>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <AreaChart data={monthlySalesData}>
            <XAxis dataKey={"month"} stroke="#bcbcbc" />
            <YAxis stroke="#bcbcbc" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#888d84",
              }}
              itemStyle={{ color: "#D1D5DB" }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#6EF787"
              strokeWidth={2}
              fill="#6EF787"
              fillOpacity={0.3}
            />
            <Legend/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesAreaChart;
