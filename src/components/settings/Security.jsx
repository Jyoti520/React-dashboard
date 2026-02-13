import React, { useState } from 'react'
import SettingsSection from './SettingsSection'
import { Lock } from "lucide-react";
import ToggleSwitch from './ToggleSwitch';
function Security() {
    const [twoFactor, setTwoFactor]=useState(false)
  return (
    <SettingsSection icon={Lock} title={"Security"}>
        <ToggleSwitch label={"Two Factor Authentication"} isOn={twoFactor} 
        onToggle={()=>setTwoFactor(!twoFactor)}/>

       <div className="mt-4">
       <button className="border-2 border-indigo-600 px-6 py-2 text-white hover:bg-indigo-600 hover:outline-2 w-full font-semibold  transition duration-300 rounded  sm:w-auto">Change Password</button>
        </div> 
    </SettingsSection>

  )
}

export default Security