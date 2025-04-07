import React from 'react'
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


const dailyOrders=[
  {date:"7/01" , orders: 45},
  {date:"7/02" , orders: 56},
  {date:"7/03" , orders: 47},
  {date:"7/04" , orders: 50},
  {date:"7/05" , orders: 56},
  {date:"7/06" , orders: 61},
  {date:"7/07" , orders: 63},
]


function DailyOrders() {
  return (
    <motion.div
    className="bg-gradient-to-tr from-gray-700 to-gray-800 shadow-lg backdrop-blur-lg rounded-xl p-6 border-2 border-gray-600"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
  >
    <div className="h-80">
      <h2 className="text-left text-lg font-medium text-gray-300">
        Daily Orders
      </h2>
     
      <ResponsiveContainer
        width={"100%"}
        height={"100%"}
        
      >
        <LineChart data={dailyOrders}>
          <CartesianGrid strokeDasharray={'3 3'} stroke="#545454"/>
          <XAxis
            dataKey={"date"}
            stroke="#bcbcbc"
           
          />
          <YAxis stroke="#bcbcbc"   />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.8)",
              borderColor: "#888d84",
            }}
            itemStyle={{ color: "#D1D5DB" }}
          />
          <Line
            type="linear"
            dataKey="orders"
            stroke="#FF8c00"
            strokeWidth={2}
            dot={{strokeWidth:2, r:6, fill:"#d97706"}}
            activeDot={{strokeWidth:4, r:4,}}
          />
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
  )
}

export default DailyOrders