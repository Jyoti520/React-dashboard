import {motion} from 'framer-motion'
import StatsCards from '../commonComps/StatsCards'
import { DollarSign, TrendingUpIcon, CreditCardIcon, ShoppingBagIcon} from 'lucide-react'
import SalesAreaChart from '../sales/SalesAreaChart'
import SalesBycategoryChart from '../sales/SalesBycategoryChart'
import DailySalesChart from '../sales/DailySalesChart'
import MainSection from '../commonComps/MainSection'


const salesStats={
    totalRevenue:"$1,256,786",
    AvgOrderValue:"$75.00",
    conversionRate:"3.45",
    salesGrowth:"14.5%"
}

function SalesPage() {
  return (
    <MainSection>
        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-2
    lg:grid-cols-4 mb-8"
        >
          <StatsCards
            name="Total Revenue"
            icon={DollarSign}
            color="#10B081" //
            value={salesStats.totalRevenue}
          ></StatsCards>
          <StatsCards
            name="Average order value"
            icon={ShoppingBagIcon}
            color="#634411"
            value={salesStats.AvgOrderValue}
          ></StatsCards>
          <StatsCards
            name="Conversion Rate"
            icon={TrendingUpIcon}
            color="#6EE787"
            value={salesStats.conversionRate}
          ></StatsCards>
          <StatsCards
            name="Sales growth"
            icon={CreditCardIcon}
            color="#E4ffff"
            value={salesStats.salesGrowth}
          ></StatsCards>
        </motion.div>

        <SalesAreaChart/>

        <div className="grid grid-cols-1 mb-6 lg:grid-cols-2 gap-8">
       <SalesBycategoryChart/>  
       <DailySalesChart/>
       </div>
      </MainSection>
  )
}

export default SalesPage