import React from 'react'
import {
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  
} from "recharts";
import { motion } from "framer-motion";

const USER_DATA = [
  { month: "Jul", users: 2000 },
  { month: "Aug", users: 3400 },
  { month: "Sep", users: 4500 },
  { month: "Oct", users: 4200 },
  { month: "Nov", users: 5000 },
  { month: "Dec", users: 5100 },
  { month: "Jan", users: 5600 },
  { month: "Feb", users: 6900 },
  { month: "Mar", users: 7000 },
];


function UserGrowthChart() {
  return (
    <motion.div
           className="bg-gradient-to-tr from-gray-700 to-gray-800 shadow-lg backdrop-blur-lg rounded-xl p-4 border-2 border-gray-600"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
         >
           <div className="h-80">
             <h2 className="text-left text-xl font-normal text-gray-300">
               User rate
             </h2>
            
             <ResponsiveContainer
               width={"100%"}
               height={"100%"}
               
             >
               <LineChart data={USER_DATA}>
                   <CartesianGrid strokeDasharray='3 3' stroke="#374151"/>
                 <XAxis
                   dataKey={"month"}
                   stroke="#bcbcbc"
                 />
                 <YAxis stroke="#bcbcbc" />
                 <Tooltip
                   contentStyle={{
                     backgroundColor: "rgba(31,41,55,0.8)",
                     borderColor: "#888d84",
                   }}
                   itemStyle={{ color: "#D1D5DB" }}
                 />
                 <Line
                   type="linear"
                   dataKey="users"
                   stroke="#ff7474"
                   strokeWidth={2}
                 />
                  <Legend/>
               </LineChart>
             </ResponsiveContainer>
           </div>
         </motion.div>
  )
}

export default UserGrowthChart