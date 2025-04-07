import React from 'react'
import {motion} from 'framer-motion'

function StatsCards({name, icon:Icon, color, value}) {
  return (
    <motion.div className='bg-gradient-to-tr my-2 from-gray-800 to-gray-700  backdrop-blur-sm shadow-lg rounded-lg border-2 border-gray-700' 
    whileHover={{y:-5, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)"}} >
    <div className="flex justify-around gap-2 items-center px-2 py-3 sm:px-6">
    <Icon size={"32"} color={color}></Icon>
    <span className="flex  flex-col items-center gap-1">
    <span className='text-lg font-medium text-gray-400'>{name}</span>
    <p className='text-3xl font-medium text-center text-gray-200'>{value}</p>
    </span>
   
    </div>
      
    </motion.div>
  )
}

export default StatsCards