import React from "react";
import { motion } from "framer-motion";
import Header from "../commonComps/Header";
import StatsCards from "../commonComps/StatsCards";
import {
  Package2,
  TrendingUpIcon,
  AlertTriangleIcon,
  DollarSign,
} from "lucide-react";
import ProductsTable from "../products/ProductsTable";
import SalesByProduct from "../products/SalesByProduct";
import CategoryDistributionChart from '../charts/CategoryDistributionChart'
function ProductsPage() {
  return (
    <div className="flex-1 mx-auto relative z-50 w-full overflow-auto scrollbar-none ">
      <Header title={"Products"} />
      <main className="max-w-7xl px-4 py-2 mx-auto lg:p-8 sm:px-6">
        <motion.div
          className="grid grid-cols-1 gap-4 py-6 px-6 md:grid-cols-2 sm:grid-cols-1 sm:gap-2
    lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
        >
          <StatsCards
            name="Total Products"
            icon={Package2}
            color="#6566F1"
            value={3359}
          ></StatsCards>
          <StatsCards
            name="Top Selling"
            icon={TrendingUpIcon}
            color="#6EE787"
            value={78}
          ></StatsCards>
          <StatsCards
            name="Low Stock"
            icon={AlertTriangleIcon}
            color="#EC4899"
            value={28}
          ></StatsCards>
          <StatsCards
            name="Total Revenue"
            icon={DollarSign}
            color="#108981"
            value={"$175,345"}
          ></StatsCards>
        </motion.div>

        <ProductsTable />

        <div className="max-w-[100%] grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8">
          <SalesByProduct />
          <CategoryDistributionChart/>
        </div>
      </main>
    </div>
  );
}

export default ProductsPage;

