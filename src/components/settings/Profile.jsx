import React from "react";
import SettingsSection from "./SettingsSection";
import { User } from "lucide-react";

function Profile() {
  return (
    <SettingsSection icon={User} title={"Profile"}>
      
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col gap-2 items-center flex-1 sm:flex-row">
        <img
          src={"https://randomuser.me/api/portraits/men/9.jpg"}
          alt="profile"
          className="w-20 h-20 object-cover rounded-full mr-6 border-2 border-indigo-600"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-sm sm:text-md md:text-lg font-semibold text-gray-300">Charlie Davis</h3>
          <p className="text-sm sm:text-md text-gray-300">charlie.davis@example.com</p>
        </div>
        </div>
        <button className="w-full border-2 border-indigo-600 px-6 py-1 text-white hover:bg-indigo-600 hover:outline-2 font-semibold  transition duration-300 rounded sm:w-auto">Edit Profile</button>
      </div>
      
     
    </SettingsSection>
  );
}

export default Profile;
