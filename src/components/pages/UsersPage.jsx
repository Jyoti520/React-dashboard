import {motion} from 'framer-motion'
import StatsCards from '../commonComps/StatsCards'
import UsersTable from '../Users/UsersTable'
import {Users, UserCheck , UserRoundPlus, UserX} from 'lucide-react'
import UserGrowthChart from '../Users/UserGrowthChart'
import UserActivityChart from '../Users/UserActivityChart'
import UserDemographicChart from '../Users/UserDemographicChart'
import MainSection from '../commonComps/MainSection'
function UsersPage() {
  return (
   
      <MainSection>
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

        <div className="grid grid-cols-1 mt-6 lg:grid-cols-2 gap-8">
       <UserGrowthChart/>
       <UserActivityChart/>
       <UserDemographicChart/>
       </div>
      </MainSection>
  )
}

export default UsersPage