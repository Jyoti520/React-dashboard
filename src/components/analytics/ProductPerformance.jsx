import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell , XAxis, YAxis, ResponsiveContainer,Tooltip,Legend  } from 'recharts'
import { motion } from 'framer-motion'

const productPerformanceData = [
	{ name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
	{ name: "Product B", sales: 3000, revenue: 1398, profit: 2210 },
	{ name: "Product C", sales: 2000, revenue: 9800, profit: 2290 },
	{ name: "Product D", sales: 2780, revenue: 3908, profit: 2000 },
	{ name: "Product E", sales: 1890, revenue: 4800, profit: 2181 },
];

function ProductPerformance() {
  return (
    <motion.div
    className="bg-gradient-to-tr from-gray-700 to-gray-800 shadow-lg backdrop-blur-lg rounded-xl p-4 border-2 border-gray-700 mt-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
  >
    <h2 className="text-left text-lg font-medium text-gray-300">
     Product Performance
    </h2>
    <div className="h-80">
      <ResponsiveContainer
        width={"100%"}
        height={"100%"}
      >
        <BarChart data={productPerformanceData}>

          {/* X and Y axes */}
          <XAxis dataKey="name" stroke="#bcbcbc" spacing={4} />
          <YAxis stroke="#bcbcbc"/>

          {/* Tooltip and Legend */}
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.8)",
              borderColor: "#888d84",
            }}
            itemStyle={{ color: "#D1D5DB" }}
          />
          <Legend  />

          {/* Bar chart with sales data */}
          <Bar dataKey="sales"   stackId={'a'}  fill="#8B5CF6" barSize={20}/>
          <Bar dataKey="revenue" stackId={'b'}  fill="#F59E0B" barSize={20}/>
          <Bar dataKey="profit"  stackId={'c'}  fill="#EC48F9" barSize={20}/>
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
  )
}

export default ProductPerformance