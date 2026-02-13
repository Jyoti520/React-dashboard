import { ArrowDown, ArrowUpRight, DollarSign, Eye, ShoppingBag, Users } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const overviewData = [
  { name: "Revenue", value: "$1,234,567", change: 12.5, icon: DollarSign },
  { name: "Users", value: "46,678", change: 8.5, icon: Users },
  { name: "Orders", value: "9,827", change: -3.2, icon: ShoppingBag },
  { name: "Page Views", value: "1,234,567", change: 15.7, icon: Eye },
];

function OverviewCards() {
  return (
    <div className="grid grid-col-1 gap-4 min-md:grid-cols-2 sm:gap-4 lg:grid-cols-4 mb-8">
      {overviewData.map((data, index) => (
        <motion.div
          className="px-6 py-2 bg-gradient-to-tr my-2 from-indigo-500/10 to-slate-900/10 shadow-lg backdrop-blur-lg rounded-xl p-4 border-2 border-indigo-500/30"
          key={data.name}
          whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg text-gray-400">{data.name}</h3>
              <p className="text-2xl font-medium text-gray-200">{data.value}</p>
            </div>
            <div
              className={`p-3 rounded-full bg-opacity-15 ${
                data.change >= 0 ? "bg-green-400" : "bg-red-500"
              } `}
            >
              <data.icon
                size={24}
                className={`${
                  data.change >= 0 ? "text-green-400" : "text-red-500"
                }`}
              />
            </div>
          </div>
          {/* change value */}
          <div className={`flex items-center ${data.change >=0? "text-green-500":"text-red-500"}`}>
            {data.change >=0 ? <ArrowUpRight size={20}/> : <ArrowDown size={20}/>}
            <span className="text-sm ml-1">{data.change}%</span>
            <span className="text-sm text-gray-400 ml-2">vs last period</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default OverviewCards;
