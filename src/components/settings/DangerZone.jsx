import React from 'react'

import {  Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'

function DangerZone() {
  return (
    <motion.div
    className="bg-red-900 bg-opacity-40 backdrop-blur-lg shadow-lg rounded-lg p-6 border-2 border-red-600 mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <div className="flex items-center mb-4">
        <Trash2 className='text-red-600 mr-3'/>
        <h2 className="text-xl font-semibold text-gray-100">Danger Zone</h2>
    </div>
    <p className="text-gray-300 mb-4">Permanently delete your account and all your contents</p>
    <button className="bg-red-500 px-6 py-2 text-white hover:bg-red-600 w-full font-semibold  transition duration-300 rounded  sm:w-auto">Edit Profile</button>

  
  </motion.div>
  )
}

export default DangerZone