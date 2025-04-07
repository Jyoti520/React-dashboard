import React from "react";
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


const salesData = [
  { month: "Jul", sales: 2000 },
  { month: "Aug", sales: 3400 },
  { month: "Sep", sales: 4500 },
  { month: "Oct", sales: 4200 },
  { month: "Nov", sales: 5000 },
  { month: "Dec", sales: 5100 },
  { month: "Jan", sales: 5600 },
  { month: "Feb", sales: 6900 },
  { month: "Mar", sales: 7000 },
  { month: "Apr", sales: 7300},
  { month: "May", sales: 8000 },
  { month: "Jun", sales: 8100 },
];

 // Custom colors for each category
 const COLORS = ['#FF0733', '#33FF57', '#3357FF', '#FF33A6', '#FF9333', "#7EF978"];

function SalesByProduct() {
  return (
  <motion.div
       className="bg-gradient-to-tr from-gray-700 to-gray-800 shadow-lg backdrop-blur-lg rounded-xl p-4 border-2 border-gray-600"
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.1 }}
     >
       <div className="h-80">
         <h2 className="text-left text-xl font-medium text-gray-300">
           Sales Trends
         </h2>
        
         <ResponsiveContainer
           width={"100%"}
           height={"100%"}
           
         >
           <LineChart data={salesData}>
               <CartesianGrid strokeDasharray={'3 3'} stroke="#374151"/>
             <XAxis
               dataKey={"month"}
               stroke="#bcbcbc"
               className="px-2"
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
               dataKey="sales"
               stroke="#ff7474"
               strokeWidth={2}
             />
              <Legend ></Legend>
           </LineChart>
         </ResponsiveContainer>
       </div>
     </motion.div>
  );
}

export default SalesByProduct;
