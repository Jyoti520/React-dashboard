import React, { useState } from 'react'
import { Bell } from 'lucide-react'
import SettingsSection from './SettingsSection'
import ToggleSwitch from './ToggleSwitch'
function Notifications() {
  const [notification,setNotification]=useState({push:true, email:false, sms:true})
 


  return (
    <SettingsSection icon={Bell} title={"Notifications"}>
    
          <ToggleSwitch  label={"Push notification"} isOn={notification.push} 
          onToggle={()=>setNotification({...notification, push: !notification.push})}/>
          <ToggleSwitch  label={"Email notification"} isOn={notification.email} 
          onToggle={()=>setNotification({...notification, email: !notification.email})}/>
          <ToggleSwitch  label={"SMS notification"} isOn={notification.sms}
          onToggle={()=>setNotification({...notification, sms: !notification.sms})}/>

    </SettingsSection>
  )
}

export default Notifications