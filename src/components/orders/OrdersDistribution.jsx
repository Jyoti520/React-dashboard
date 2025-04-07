import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ordersDistributionData = [
  { name: "Pending", value: 35 },
  { name: "Processing", value: 55 },
  { name: "Shipped", value: 70 },
  { name: "Delivered", value: 130 },
];
// Custom colors for each category
const COLORS = ["#6EE787", "#EC48F9", "#FFD700", "#ff7474", "#FF33A6"];

function OrdersDistribution() {
  return (
    <motion.div
      className="bg-gradient-to-tr from-gray-700 to-gray-800 shadow-md backdrop-blur-sm rounded-lg p-4 border-2 border-gray-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-left text-xl font-medium text-gray-300">
        Orders Status
      </h2>
      <div className="h-80">
        <AnimatePresence>
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <PieChart>
              <Pie
                data={ordersDistributionData}
                dataKey="value"
                nameKey="name"
                cx="50%" // Center X position
                cy="50%" // Center Y position
                outerRadius={80}
                fill="#8884d8"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {ordersDistributionData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{ backgroundColor:"rgba(31,41,55,0.8)",
                  borderColor:"#888d84" }}
                itemStyle={{ color: "#fff" }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default OrdersDistribution;
