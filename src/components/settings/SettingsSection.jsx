import { motion } from "framer-motion";
import React from "react";

function SettingsSection({ icon: Icon, title, children }) {
  return (
    <motion.div
      className="bg-gradient-to-r from-indigo-500/10 to-slate-900/10 shadow-lg backdrop-blur-lg rounded-xl p-4 border-2 border-indigo-700/30 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-start justify-start mb-4">
        <Icon size={24} className="text-indigo-400 mr-4 font-semibold" />
        <h2 className="text-xl text-gray-200 font-medium">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

export default SettingsSection;
