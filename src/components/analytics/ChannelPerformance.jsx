import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ChartSection from '../commonComps/ChartSection';


const channelPerformance = [
  { name: "Online Store", value: 5000 },
  { name: "Physical Store", value: 3000 },
  { name: "Wholesale", value: 1500 },
  { name: "Resellers", value: 2500 },
  { name: "Direct Sales", value: 2000 },
];

const COLORS = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FF8333"];

function ChannelPerformance() {
  return (
    <ChartSection
    title='channel Performance'   
  >
      <AnimatePresence>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={channelPerformance}
              dataKey="value"
            
              cx="50%" // Center X position
              cy="50%" // Center Y position
              outerRadius={80}
              fill="#8884d8"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {channelPerformance.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{ backgroundColor: "rgba(31,41,55,0.8)", borderColor: "#ECfA4" }}
              itemStyle={{ color: "#ECfA4" }}
            />
            <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </AnimatePresence>
   </ChartSection>
  )
}

export default ChannelPerformance