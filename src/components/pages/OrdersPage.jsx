import React from 'react'
import {motion} from 'framer-motion'
import {ShoppingBagIcon, CheckCircle2, Clock, DollarSign} from 'lucide-react'
import StatsCard from '../commonComps/StatsCards'
import Header from '../commonComps/Header'
import DailyOrders from '../orders/DailyOrders'
import OrdersDistribution from '../orders/OrdersDistribution'
import OrdersTable from '../orders/OrdersTable'

const orderStats={
  totalOrders:"1,533",
  pendingOrder:"45",
  completeOrders:"1,145",
  totalRevenue:"$97899"
}

function OrdersPage() {
  return (
    <div className='flex-1 mx-auto relative z-10 w-full overflow-auto scrollbar-none'>
      <Header title={"Orders"}/>
      <main className='max-w-7xl px-4 py-6 mx-auto lg:p-8'>
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
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
       <DailyOrders/>
       <OrdersDistribution/>
       </div>
       <OrdersTable/>
      </main>
    </div>
  )
}

export default OrdersPage