import React from "react";
import SettingsSection from "./SettingsSection";
import { User } from "lucide-react";

function Profile() {
  return (
    <SettingsSection icon={User} title={"Profile"}>
      
      <div className="flex flex-col sm:flex-row mb-6">
        <img
          src={"https://randomuser.me/api/portraits/men/9.jpg"}
          alt="profile"
          className="w-20 h-20 object-cover rounded-full mr-6 border-2 border-amber-600"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-300">Charlie Davis</h3>
          <p className="text-lg text-gray-400">charlie.davis@example.com</p>
        </div>
      </div>
      <button className="border-2 border-amber-600 px-6 py-2 text-white hover:bg-amber-600 hover:outline-2 w-full font-semibold  transition duration-300 rounded  sm:w-auto">Edit Profile</button>
     
    </SettingsSection>
  );
}

export default Profile;
