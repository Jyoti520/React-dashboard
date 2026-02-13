import { motion } from "framer-motion"


function ChartSection({children, className="", title}) {
  return (
    <motion.div
    className={`bg-gradient-to-tr from-indigo-500/10 to-slate-900/10 shadow-lg backdrop-blur-lg rounded-xl p-6 border-2 border-indigo-700/30 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
  >
    <div className="flex flex-col h-80">
      <h2 className="text-left text-xl font-medium text-gray-400">
        {title}
      </h2>
      {children}
      </div>
      </motion.div>
  )
}

export default ChartSection