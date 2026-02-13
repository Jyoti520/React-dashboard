import React from 'react'
import {motion} from 'framer-motion'

function StatsCards({name, icon:Icon, color, value}) {
  return (
    <motion.div className='bg-gradient-to-r my-2 from-indigo-500/10 to-slate-900/10 shadow-lg backdrop-blur-lg rounded-xl border-2 border-indigo-500/30 mb-6' 
    whileHover={{y:-5, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)"}} >
    <div className="flex justify-around gap-2 items-center px-2 py-3 sm:px-6">
    <Icon size={"28"} color={color}></Icon>
    <span className="flex  flex-col items-center gap-1">
    <span className='text-sm sm:text-lg font-medium text-gray-400'>{name}</span>
    <p className='text-xl sm:text-2xl md:3xl font-medium text-center text-gray-200'>{value}</p>
    </span>
   
    </div>
      
    </motion.div>
  )
}

export default StatsCards