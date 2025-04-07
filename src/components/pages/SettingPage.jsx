import React from 'react'
import Header from '../commonComps/Header'
import Profile from '../settings/Profile'
import Notifications from '../settings/Notifications'
import Security from '../settings/Security'
import DangerZone from '../settings/DangerZone'

function SettingPage() {
  return (
    <div className='flex-1 relative overflow-auto'>
      <Header title={"Settings"}/>
      <main className="max-w-4xl px-4 py-6 mx-auto lg:px-8">
       <Profile/>
       <Notifications/>
       <Security/>
      <DangerZone/>

      </main>
    </div>
  )
}

export default SettingPage