import React from 'react'
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer,Tooltip,Legend  } from 'recharts'
import { motion } from 'framer-motion'



  const userActivityData = [
    { name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
    { name: "Tue", "0-4": 30, "4-8": 50, "8-12": 70, "12-16": 90, "16-20": 110, "20-24": 40 },
    { name: "Wed", "0-4": 40, "4-8": 60, "8-12": 80, "12-16": 100, "16-20": 120, "20-24": 50 },
    { name: "Thu", "0-4": 50, "4-8": 70, "8-12": 90, "12-16": 110, "16-20": 130, "20-24": 60 },
    { name: "Fri", "0-4": 60, "4-8": 80, "8-12": 100, "12-16": 120, "16-20": 140, "20-24": 70 },
    { name: "Sat", "0-4": 70, "4-8": 90, "8-12": 110, "12-16": 130, "16-20": 150, "20-24": 80 },
    { name: "Sun", "0-4": 80, "4-8": 100, "8-12": 120, "12-16": 140, "16-20": 160, "20-24": 90 },
  ];

function UserActivityChart() {
  return (
    <motion.div
    className="bg-gradient-to-tr from-gray-700 to-gray-800 shadow-lg backdrop-blur-lg rounded-xl p-4 border-2 border-gray-600"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
  >
    <h2 className="text-left text-lg font-medium text-gray-300">
      User Activity
    </h2>
    <div className="h-80">
      <ResponsiveContainer
        width={"100%"}
        height={"100%"}
      >
        <BarChart data={userActivityData}>
          

        
          <XAxis dataKey="name" stroke="#bcbcbc" spacing={4} />
          <YAxis stroke="#bcbcbc"/>

         
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.8)",
              borderColor: "#888d84",
            }}
            itemStyle={{ color: "#D1D5DB" }}
          />
          <Legend fontSize={30} fontFamily={"Arial"}/>

        
          <Bar dataKey="0-4"   stackId={'a'}  fill="#EC48F9" barSize={30}/>
          <Bar dataKey="4-8"   stackId={'a'}  fill="#FFD700" barSize={30}/>
          <Bar dataKey="8-12"  stackId={'a'}  fill="#6EE787" barSize={30}/>
          <Bar dataKey="12-16" stackId={'a'}  fill="#ff7474" barSize={30}/>
          <Bar dataKey="16-20" stackId={'a'}  fill="#8f5cf6" barSize={30}/>
          <Bar dataKey="20-24" stackId={'a'}  fill="#FF33A6" barSize={30}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
  )
}




export default UserActivityChart