import React from "react";
import {
  ResponsiveContainer,
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";

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

function CategoryChart() {
  return (
    <motion.div
      className="bg-gradient-to-tr from-gray-700 to-gray-800 shadow-lg backdrop-blur-lg rounded-xl p-4 border-2 border-gray-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div className="h-80">
        <h2 className="text-left text-xl font-medium text-gray-300">
          Sales overview
        </h2>
       
        <ResponsiveContainer
          width={"100%"}
          height={"100%"}
          
        >
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray={'3 3'} stroke="#d97706"/>
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
              type="linear"
              dataKey="sales"
              stroke="#d97706"
              strokeWidth={4}
              dot={{strokeWidth:4, r:4, fill:"#d97706"}}
              activeDot={{strokeWidth:4, r:4,}}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default CategoryChart;
