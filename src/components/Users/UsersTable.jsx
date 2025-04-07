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
    <div className="bg-gray-800 backdrop-blur-md shadow-lg rounded-lg bg-opacity-50 py-4 px-6 border-t-2  border-2 border-gray-600 mb-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-medium text-gray-100 mb-2">User List</h3>

      <div className="relative">
        <input
          value={search}
          type="text"
          placeholder="Search users here..."
          className="bg-gray-700 placeholder:text-gray-300 focus:outline-none
 focus:ring-2 focus:ring-amber-700  pl-2 rounded-md py-2 pr-6"
            onChange={handleSearch}/>
        <Search size={19} className="absolute top-2.5 right-2" />
      </div>
    </div>

     <div className="overflow-auto">
    
    <table className="min-w-full divide-y-2 divide-gray-700">
      <thead>
     <tr className="text-amber-400 font-medium">
      <th className="px-6 py-4 tracking-tighter text-amber-500">NAME</th>
      <th className="px-6 py-4 tracking-tighter text-amber-500">EMAIL</th>
      <th className="px-6 py-4 tracking-tighter text-amber-500">ROLE</th>
      <th className="px-6 py-4 tracking-tighter text-amber-500">STATUS</th>
      <th className="px-6 py-4 tracking-tighter text-amber-500"></th>
    </tr>
    </thead>
    <tbody className="divide-y-2 divide-gray-700">
      
    {data.map((user) => {
       return ( <>
     <tr key={user.id} >
         <td className="flex items-center gap-4 px-6 py-3 whitespace-nowrap text-md text-gray-100 font-medium text-left">
            <img src={user.avatar} alt="profile" className='size-10 rounded-full border border-amber-100' />
            {user.name}
        </td>
          <td className="px-6 py-3 whitespace-nowrap text-md text-gray-100 font-medium text-left">{user.email}</td>
          <td className="px-6 py-3 whitespace-nowrap text-md text-gray-100 font-medium text-left">{user.role}</td>
          <td className={`px-6 py-2 whitespace-nowrap text-md text-gray-100 font-medium text-left ${user.status=="Active" ? "text-green-300": "text-red-400"} `}>{user.status}</td>
         <td> <button className=" ml-4"> 
        <EditIcon size={20} color="#7fffd4"/>
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