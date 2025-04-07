import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
const salesByCategory = [
    { name: 'Electronics', value: 500 },
    { name: 'Clothing', value: 200 },
    { name: 'Furniture', value: 150 },
    { name: 'Toys', value: 300 },
    { name: 'Groceries', value: 180 },
  ];

  const COLORS = ['#6EE787', '#EC48F9', '#FFD700', '#ff7474', '#FF33A6'];
function SalesBycategoryChart() {
  return (
    <motion.div
          className="bg-gradient-to-tr from-gray-700 to-gray-800 shadow-lg backdrop-blur-sm rounded-lg p-4 border-2 border-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
            <h2 className="text-left text-xl font-normal text-gray-200">
          Sales by category
        </h2>
      <div className="h-80">
        <AnimatePresence>
      <ResponsiveContainer width={"100%"} height={'100%'} >
        <PieChart>
          <Pie
            data={salesByCategory}
            dataKey="value"
            nameKey="name"
            cx="50%" // Center X position
            cy="50%" // Center Y position
            outerRadius={100}
            fill="#8884d8"
           
            label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {salesByCategory.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          
              <Tooltip contentStyle={{backgroundColor:"rgba(31,41,55,0.8)",
                  borderColor:"#888d84"}} itemStyle={{color:"#fff"}} />
              <Legend />
        </PieChart>
      </ResponsiveContainer>
      </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default SalesBycategoryChart