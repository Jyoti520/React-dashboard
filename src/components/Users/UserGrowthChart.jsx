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
import ChartSection from '../commonComps/ChartSection';

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
    <ChartSection
           title='Users Rate'
         >
             <ResponsiveContainer
               width={"100%"}
               height={"100%"}
               
             >
               <LineChart data={USER_DATA}>
                 <XAxis
                   dataKey={"month"}
                   stroke="#bcbcbc"
                 />
                 <YAxis stroke="#bcbcbc" />
                 <Tooltip
                   contentStyle={{
                     backgroundColor:"rgba(31,41,55,0.8)",
                     borderColor: "#888d84",
                   }}
                   itemStyle={{ color: "#8b5cf6" }}
                 />
                 <Line
                   type="monotone"
                   dataKey="users"
                   stroke='#8b5cf6'
                  
              strokeWidth={3}
              dot={{strokeWidth:0, r:4, fill:"#c4b5fd"}}
              activeDot={{strokeWidth:2, r:5, stroke:"#8b5cf6"}}
                 />
                  <Legend/>
               </LineChart>
             </ResponsiveContainer>
           </ChartSection>
  )
}

export default UserGrowthChart