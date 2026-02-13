import React from 'react'
import { Trash, Search, EditIcon } from 'lucide-react';
import { useState } from 'react';

const USER_DATA = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Editor',
      status: 'Inactive',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'Subscriber',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      role: 'Admin',
      status: 'Pending',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: 5,
      name: 'Charlie Davis',
      email: 'charlie.davis@example.com',
      role: 'Editor',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    }
  ];
  
  
function UsersTable() {

const [search, setSearch]=useState("")
const [data, setData]= useState(USER_DATA)

const handleSearch=(e)=>{
    
   const searchInput=e.target.value.toLowerCase()
   setSearch(searchInput)
  const filteredData= data.filter((user=>  user.name.toLowerCase().includes(searchInput) || user.role.toLowerCase().includes(searchInput)))
   setData(filteredData)
}
   
   const deleteuser=(id)=>{
     setData(data.filter((user=>user.id !==id)))
   }

  return (
    <div className="bg-gradient-to-r from-indigo-500/10 to-slate-900/10 shadow-lg backdrop-blur-lg rounded-xl p-4 border-2 border-indigo-500/30 py-4 px-6 border-t-2 mb-6">
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
      <h3 className="text-lg font-medium text-gray-200 mb-2">Users</h3>

      <div className="relative">
        <input
          value={search}
          type="text"
          placeholder="Search users here..."
          className="bg-white/10 placeholder:text-gray-400 focus:outline-none
 focus:ring-2 focus:ring-indigo-700 pl-4 rounded-md py-2 pr-6"
            onChange={handleSearch}/>
        <Search size={19} className="absolute top-2.5 right-2" />
      </div>
    </div>

     <div className="overflow-auto">
    
    <table className="min-w-full divide-y-2 divide-indigo-900/10">
    <thead>
     <tr className="text-violet-400">
      <th className="px-6 py-4 tracking-tighter">NAME</th>
      <th className="px-6 py-4 tracking-tighter">EMAIL</th>
      <th className="px-6 py-4 tracking-tighter">ROLE</th>
      <th className="px-6 py-4 tracking-tighter">STATUS</th>
      <th className="px-6 py-4 tracking-tighter"></th>
    </tr>
    </thead>
    <tbody className="divide-y-2">
      
    {data.map((user) => {
       return ( <>
     <tr key={user.id} >
         <td className="flex items-center gap-4 px-6 py-3 whitespace-nowrap text-md text-gray-100 font-medium text-left">
            <img src={user.avatar} alt="profile" className='size-10 rounded-full border border-amber-100' />
            {user.name}
        </td>
          <td className="px-6 py-3 whitespace-nowrap text-md text-gray-100 font-medium text-left">{user.email}</td>
          <td className="px-6 py-3 whitespace-nowrap text-md text-gray-100 font-medium text-left">{user.role}</td>
          <td className={`px-6 py-2 whitespace-nowrap text-md text-gray-100 font-medium text-left ${user.status=="Active" ? "text-green-400": "text-red-500"} `}>{user.status}</td>
         <td> <button className=" ml-4"> 
        <EditIcon size={20} color="cyan"/>
      </button>
      <button className=" ml-4" onClick={()=>deleteuser(user.id)}> 
        <Trash size={24} color="red"/>
      </button>
          </td>

      </tr>
      </>)
      })}
      
    </tbody>

  
    </table>
  </div>
     


  </div>
 
  )
}

export default UsersTable