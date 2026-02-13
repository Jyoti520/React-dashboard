import React from "react";
import {
    Legend,
    ResponsiveContainer,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,

  } from "recharts";
  import { motion } from "framer-motion";
import ChartSection from "../commonComps/ChartSection";


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
  <ChartSection
       title="Sales by Product"
    
     >
         <ResponsiveContainer
           width={"100%"}
           height={"100%"}
           
         >
           <LineChart data={salesData} margin={{top:10,right:20, left:0,bottom:5}}>
              
             <XAxis
               dataKey={"month"}
               stroke="#bcbcbc"
               className="px-2"
             />
             <YAxis stroke="#bcbcbc" />
             <Tooltip
               contentStyle={{
                 backgroundColor: "rgba(31,41,55,0.8)",
                 borderColor: "#374515",
               }}
               itemStyle={{ color: "#ddd6fe" }}
             />
             <Line
               dot={{r:5, fill:"#6ee7b7", strokeWidth:0}}
               activeDot={{r:4, fill:"#6ee7b7", strokeWidth:2}}
               type="monotone"
               dataKey="sales"
               stroke="#10b981"
               strokeWidth={2}
             />
              <Legend ></Legend>
           </LineChart>
         </ResponsiveContainer>
      </ChartSection>
  );
}

export default SalesByProduct;
