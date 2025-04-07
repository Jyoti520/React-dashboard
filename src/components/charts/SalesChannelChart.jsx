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
    <motion.div
      className="bg-gradient-to-tr from-gray-700 to-gray-800 shadow-lg backdrop-blur-lg rounded-xl p-4 border-2 border-gray-600 lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-center text-xl font-medium text-gray-300">
        Sales by Channel
      </h2>
      <div className="h-80 w-[100%]">
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
            <Bar dataKey="sales" fill="#FF33A6" barSize={100}>
              {salesData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesChannelChart;
