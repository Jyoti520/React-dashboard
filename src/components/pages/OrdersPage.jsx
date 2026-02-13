import {motion} from 'framer-motion'
import {ShoppingBagIcon, CheckCircle2, Clock, DollarSign} from 'lucide-react'
import StatsCard from '../commonComps/StatsCards'
import DailyOrders from '../orders/DailyOrders'
import OrdersDistribution from '../orders/OrdersDistribution'
import OrdersTable from '../orders/OrdersTable'
import MainSection from '../commonComps/MainSection'

const orderStats={
  totalOrders:"1,533",
  pendingOrder:"45",
  completeOrders:"1,145",
  totalRevenue:"$97899"
}

function OrdersPage() {
  return (
      <MainSection>
       {/* STaTS */}
       <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mb-8"
       initial={{opacity:0, y:20}}
       animate={{opacity:1, y:0}}
       transition={{duration:1}}>

        <StatsCard name="Total orders"    icon={ShoppingBagIcon}        color="#F59E0B"   value={orderStats.totalOrders}></StatsCard>
        <StatsCard name="Pending orders"      icon={Clock}       color="#885CF6"  value={orderStats.pendingOrder}></StatsCard>
        <StatsCard name="Completed Orders" icon={CheckCircle2} color="#EC4899"  value={orderStats.completeOrders}></  StatsCard>
        <StatsCard name="Total Revenue" icon={DollarSign}   color="#108981" value={orderStats.totalRevenue}></StatsCard>
       </motion.div>

       {/* CHARTs */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
       <DailyOrders/>
       <OrdersDistribution/>
       </div>
       <OrdersTable/>
      </MainSection>
  )
}

export default OrdersPage