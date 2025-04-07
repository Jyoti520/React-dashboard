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

const userDemographicData=[
  {name:"18-24", value:20},
  {name:"25-34", value:30},
  {name:"34-44", value:25},
  {name:"45-54", value:15},
  {name:"55+",   value:10},
  
]
  // Custom colors for each category
  const COLORS = ['#6EE787', '#EC48F9', '#FFD700', '#ff7474', '#FF33A6'];

 
function UserDemographicChart() {
  return (
    <motion.div
    className="bg-gradient-to-tr from-gray-700 to-gray-800 shadow-lg backdrop-blur-lg rounded-xl p-6 border-2 border-gray-600 lg:col-span-2 mb-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
      <h2 className="text-left text-xl font-normal text-gray-300">
    User Demographics
  </h2>
<div className="h-80">
  <AnimatePresence>
  <ResponsiveContainer width={"100%"} height={'100%'} >
  <PieChart>
    <Pie
      data={userDemographicData}
      dataKey="value"
      cx="50%" // Center X position
      cy="50%" // Center Y position
      outerRadius={100}
      fill="#8884d8"
      fontSize={18}
      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
    >
      {userDemographicData.map((entry, index) => (
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

export default UserDemographicChart