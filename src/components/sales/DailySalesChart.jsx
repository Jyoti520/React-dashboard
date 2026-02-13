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
import ChartSection from '../commonComps/ChartSection';

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
    <ChartSection
    title='Sales trend'
  >
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
          <Bar dataKey="sales" fill="#10b981" barSize={30}>
            {dailySales.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={"#10b981"}
                opacity={0.6}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartSection>
  )
}

export default DailyOrders