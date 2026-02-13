import Profile from '../settings/Profile'
import Notifications from '../settings/Notifications'
import Security from '../settings/Security'
import DangerZone from '../settings/DangerZone'
import MainSection from '../commonComps/MainSection'

function SettingPage() {
  return (
      <MainSection>
       <Profile/>
       <Notifications/>
       <Security/>
       <DangerZone/>
      </MainSection>
  )
}

export default SettingPage