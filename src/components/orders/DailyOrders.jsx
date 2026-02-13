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
import ChartSection from '../commonComps/ChartSection';


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
    <ChartSection title='Daily Orders'>
     
      <ResponsiveContainer
        width={"100%"}
        height={"100%"}
        
      >
        <LineChart data={dailyOrders}>
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
            type="monotone"
            dataKey="orders"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{strokeWidth:0, r:4, fill:"#93c5fd"}}
            activeDot={{strokeWidth:4, r:4, stroke:"#3b82f6"}}
          />
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </ChartSection>
  )
}

export default DailyOrders