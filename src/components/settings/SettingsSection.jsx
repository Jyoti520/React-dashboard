import { motion } from "framer-motion";
import React from "react";

function SettingsSection({ icon: Icon, title, children }) {
  return (
    <motion.div
      className="bg-gradient-to-tr from-gray-800 to-gray-700 backdrop-blur-lg shadow-lg rounded-lg p-6 border-2 border-gray-700 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-start justify-start mb-4">
        <Icon size={24} className="text-amber-500 mr-4 font-semibold" />
        <h2 className="text-xl text-gray-200 font-medium">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

export default SettingsSection;
