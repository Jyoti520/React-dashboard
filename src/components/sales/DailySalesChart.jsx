import React from 'react'
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

const dailySales=[
{ week: "Mon", sales: 1000 },
{ week: "Tue", sales: 1200 },
{ week: "Wed", sales: 800 },
{ week: "Thu", sales: 900 },
{ week: "Fri", sales: 1500 },
{ week: "Sat", sales: 1100 },
{ week: "Sun", sales: 1300 },

]


function DailyOrders() {
  return (
    <motion.div
    className="bg-gradient-to-tr from-gray-700 to-gray-800 shadow-lg backdrop-blur-sm rounded-xl p-6 border-2 border-gray-600"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <h2 className="text-center text-xl font-normal text-gray-300">
    Daily sales trend
    </h2>
    <div className="h-80">
      <ResponsiveContainer
        width={"100%"}
        height={"100%"}
       
      >
        <BarChart data={dailySales}>

          {/* X and Y axes */}
          <XAxis dataKey="week" stroke="#bcbcbc" spacing={4} />
          <YAxis stroke="#bcbcbc" />

          {/* Tooltip and Legend */}
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.8)",
              borderColor: "#888d84",
            }}
            itemStyle={{ color: "#fff"}}
          />
          <Legend />

          {/* Bar chart with sales data */}
          <Bar dataKey="sales" fill="#d97706" barSize={40}>
            {dailySales.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={"#ff7474"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
  )
}

export default DailyOrders