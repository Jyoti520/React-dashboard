import React from "react";
import Header from "../commonComps/Header";
import RevenueCharts from "../analytics/RevenueCharts";
import OverviewCards from "../analytics/OverviewCards";
import ChannelPerformance from "../analytics/ChannelPerformance";
import ProductPerformance from "../analytics/ProductPerformance";
import UserRetention from "../analytics/UserRetention";
import CustomerSegmentation from "../analytics/CustomerSegmentation";


function AnalyticsPage() {
  return (
    <div className="flex-1 relative z-50 w-full overflow-auto ">
      <Header title={"Analytics"} />
      <main className="max-w-7xl px-4 py-6 mx-auto lg:px-8 sm:px-6">
      
        <OverviewCards />
        <RevenueCharts/>

        <div className="max-w-[100%] grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8 sm:grid-cols-1">
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention/>
          <CustomerSegmentation/>

        </div>
        
      </main>
    </div>
  );
}

export default AnalyticsPage;

