import React from 'react'
import {motion} from 'framer-motion'
import Header from '../commonComps/Header'
import StatsCards from '../commonComps/StatsCards'
import UsersTable from '../Users/UsersTable'
import {Users, UserCheck , UserRoundPlus,  Zap, UserX} from 'lucide-react'
import UserGrowthChart from '../Users/UserGrowthChart'
import UserActivityChart from '../Users/UserActivityChart'
import UserDemographicChart from '../Users/UserDemographicChart'
function UsersPage() {
  return (
    <div className="w-[100%] flex-0 justify-center mx-auto relative z-50 overflow-auto">
      <Header title={"Users"} />
      <main className="max-w-7xl px-4 py-2 mx-auto lg:p-8 sm:px-4">
        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-2
    lg:grid-cols-4 mb-8"
        >
          <StatsCards
            name="Total Users"
            icon={Users}
            color="#EF4444" 
            value="152,749"
          ></StatsCards>
          <StatsCards
            name="New Users Today"
            icon={UserRoundPlus}
            color="orange"
            value="300"
          ></StatsCards>
          <StatsCards
            name="Active users"
            icon={UserCheck}
            color="#EC4899"
            value="98,540"
          ></StatsCards>
          <StatsCards
            name="Churn Rate"
            icon={UserX}
            color="#108981"
            value="3.2%"
          ></StatsCards>
        </motion.div>

        <UsersTable/>

        <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 gap-8">
       <UserGrowthChart/>
       <UserActivityChart/>
       <UserDemographicChart/>
       </div>
      </main>
    </div>
  )
}

export default UsersPage