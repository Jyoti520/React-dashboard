import { motion } from 'framer-motion'
import React from 'react'
import { LineChart, CartesianGrid, XAxis,YAxis, Tooltip, Legend, Line, ResponsiveContainer} from 'recharts'

function UserRetention() {

  const userRetentionData= [
    {day:"Week 1", retention: 90},
    {day:"Week 2", retention: 75},
    {day:"Week 3", retention: 65},
    {day:"Week 4", retention: 53},
    {day:"Week 5", retention: 47},
    {day:"Week 6", retention: 38},
    {day:"Week 7", retention: 35},
    {day:"Week 8", retention: 30},
  ]
  return (

  <motion.div
    className="bg-gradient-to-tr from-gray-700 to-gray-800 shadow-lg backdrop-blur-lg rounded-xl p-4 border-2 border-gray-700 mt-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
  >
   <h2 className="text-left text-lg font-medium text-gray-300">
     User Retention
    </h2>

   <div className="h-80">
         <ResponsiveContainer
           width={"100%"}
           height={"100%"}
         >
      <LineChart data={userRetentionData}>
        <CartesianGrid strokeDasharray="3 3" stroke='#374151'/>
        <XAxis dataKey="day" stroke="#bcbcbc" spacing={4} />
         <YAxis stroke="#bcbcbc"/>
        <Tooltip
           contentStyle={{
             backgroundColor:"rgba(31,41,55,0.8)",
             borderColor:"#888d84",
           }}
        
                 />
        <Legend />
        <Line type="monotone" dataKey="retention" stroke="#d97706" strokeWidth={2}/>
      </LineChart>
    </ResponsiveContainer>
    </div>
  </motion.div>
  )
}

export default UserRetention