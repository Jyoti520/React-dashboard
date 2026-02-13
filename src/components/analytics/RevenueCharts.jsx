import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';


const revenueData=[
  { month: 'Jan', revenue: 4000 ,target: 3800},
  { month: 'Feb', revenue: 3000 ,target: 3200},
  { month: 'Mar', revenue: 5000 ,target: 5500},
  { month: 'Apr', revenue: 3500 ,target: 3800},
  { month: 'May', revenue: 5500 ,target: 6000},
  { month: 'Jun', revenue: 6300 ,target: 6800},
  { month: 'Jul', revenue: 7000 ,target: 7500},
  
]
function RevenueCharts() {


   const [selectedTimeRange, setSelectedTimeRange] = useState("this.Month");
  return (
    <motion.div
         className="bg-gradient-to-tr from-indigo-500/10 to-slate-900/10 shadow-lg backdrop-blur-lg rounded-xl p-6 border-2 border-indigo-500/30 mb-6"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.1 }}
       >
         <div className="flex justify-between items-center mb-6">
           <h2 className="text-center text-xl font-normal text-gray-300">
             Revenue vs Target
           </h2>
           <select
          className="bg-white/10 text-gray-600 rounded-md px-3 py-1  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedTimeRange}
          onChange={() => setSelectedTimeRange(e.target.value)}
          >
            <option >this Week</option>
            <option >this Month</option>
            <option >this Quarter</option>
            <option >this Year</option>
          </select>
           </div>
   
           <div className="h-80">
           <ResponsiveContainer width={"100%"} height={"100%"}>
             <AreaChart data={revenueData}>
               <XAxis
                 dataKey={"month"}
                 stroke="#bcbcbc"
                
               />
               <YAxis stroke="#bcbcbc"  />
               <Tooltip
                 contentStyle={{
                   backgroundColor:"rgba(31,41,55,0.8)",
                   borderColor: "#888d84",
                 }}
                 itemStyle={{ color: "#D1D5DB" }}
               />
               <Legend/>
               <Area
                 type="monotone"
                 dataKey="revenue"
                 stroke="#6366f1"
                 strokeWidth={2}
                 fill="#6366f1"
                 fillOpacity={0.6}
                 
               />
                <Area
                 type="monotone"
                 dataKey="target"
                 stroke="#14b8a6"
                 strokeWidth={2}
                 fill="#5eead4"
                 fillOpacity={0.4}
                
               />
             </AreaChart>
           </ResponsiveContainer>
         </div>
       </motion.div>
  )
}

export default RevenueCharts






