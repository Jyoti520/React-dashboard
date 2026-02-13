import RevenueCharts from "../analytics/RevenueCharts";
import OverviewCards from "../analytics/OverviewCards";
import ChannelPerformance from "../analytics/ChannelPerformance";
import ProductPerformance from "../analytics/ProductPerformance";
import UserRetention from "../analytics/UserRetention";
import CustomerSegmentation from "../analytics/CustomerSegmentation";
import MainSection from "../commonComps/MainSection";

function AnalyticsPage() {
  return (
    <MainSection>
      <OverviewCards />
      <RevenueCharts />

      <div className="max-w-[100%] grid grid-cols-1 gap-8 sm:grid-cols-2 ">
        <ChannelPerformance />
        <ProductPerformance />
        <UserRetention />
        <CustomerSegmentation />
      </div>
    </MainSection>
  );
}

export default AnalyticsPage;
