import React from "react";
import Header from "../commonComps/Header";
import StatsCards from "../commonComps/StatsCards";
import SalesOverviewChart from "../charts/SalesOverviewChart";
import CategoryDistributionChart from "../charts/CategoryDistributionChart";
import SalesChannelChart from "../charts/SalesChannelChart";
import { Zap, Users, ShoppingBag, BarChart } from "lucide-react";
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <div className="mx-auto flex-0 relative z-50 w-full overflow-auto scrollbar-none ">
      <Header title={"Dashboard"} />
      <main className="max-w-7xl mx-auto px-4 py-2 lg:p-8 sm:px-6">
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration:1}}
        >
          <StatsCards
            name="Total sales"
            icon={Zap}
            color="#6366F1"
            value="$7548"
          />
          <StatsCards
            name="New Users"
            icon={Users}
            color="orange"
            value="649"
          />
          <StatsCards
            name="Total Products"
            icon={ShoppingBag}
            color="#EC4899"
            value="15475"
          />
          <StatsCards
            name="Conversion rate"
            icon={BarChart}
            color="#6EF787"
            value="$11,345"
          />
        </motion.div>
        <div className="grid grid-cols-1 gap-8 mb-8 lg:grid-cols-2 sm:grid-cols-1">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
