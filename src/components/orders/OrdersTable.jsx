import React from 'react'
import { useState }  from "react"; 

import { Search } from "lucide-react";
const orderStatus = [
    {
      orderId: 1001,
      date: '2024-01-01',
      category: 'Electronics',
      quantity: 3,
      totalOrderValue: 450,
      status: 'Delivered',
    },
    {
      orderId: 1002,
      date: '2024-01-02',
      category: 'Clothing',
      quantity: 2,
      totalOrderValue: 120,
      status: 'Pending',
    },
    {
      orderId: 1003,
      date: '2024-01-02',
      category: 'Home Appliances',
      quantity: 1,
      totalOrderValue: 200,
      status: 'Delivered',
    },
    {
      orderId: 1004,
      date: '2024-01-03',
      category: 'Books',
      quantity: 4,
      totalOrderValue: 100,
      status: 'Shipped',
    },
    {
      orderId: 1005,
      date: '2024-01-03',
      category: 'Toys',
      quantity: 5,
      totalOrderValue: 250,
      status: 'Delivered',
    },
  
]
  function OrdersTable() {

const [search, setSearch]=useState("")
const [data, setData]= useState(orderStatus)

const handleSearch=(e)=>{

   const searchInput=e.target.value.toLowerCase()
   setSearch(searchInput)
  const filteredData= orderStatus.filter((order=> order.category.toLowerCase().includes(searchInput) || order.category.toLowerCase().includes(searchInput)))
   setData(filteredData)
}
  
  return (
    <div className="bg-gradient-to-tr from-indigo-500/10 to-slate-900/10 shadow-lg backdrop-blur-lg rounded-xl p-6 border-2 border-indigo-500/30 mb-6">
        <div className="flex justify-between items-center mb-6 overflow-x-auto">
          <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-2">Order List</h3>

          <div className="relative">
            <input
              type="text"
              value={search}
              placeholder="Search Orders here..."
              onChange={handleSearch}
              className="bg-white/10 placeholder:text-gray-300
     focus:outline-none focus:ring-2 focus:ring-blue-400 pl-4 rounded-md py-2 pr-6"
            />
            <Search size={19} className="absolute top-2.5 right-2" />
          </div>
        </div>

         <div className="overflow-auto">
        
        <table className="min-w-full divide-y-2 divide-indigo-900/10">
          <thead>
         <tr className="text-blue-400 font-medium">
          <th className="px-6 py-4 tracking-tighter">ID</th>
          <th className="px-6 py-4 tracking-tighter">DATE</th>
          <th className="px-6 py-4 tracking-tighter">CATEGORY</th>
          <th className="px-6 py-4 tracking-tighter">TOTAL VALUE</th>
          <th className="px-6 py-4 tracking-tighter">STATUS</th>
        </tr>
        </thead>
        <tbody className="divide-y-2 divide-indigo-900/10">
          
        {data.map((order,index) => {
           return ( <>
         <tr key={order.orderId} >
             <td className=" flex flex-col gap-2 px-6 py-3 whitespace-nowrap text-sm text-gray-100 font-medium text-left">{order.orderId}</td>
              <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-100 font-medium text-left">{order.date}</td>
              <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-100 font-medium text-left">{order.category}</td>
              <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-100 font-medium text-left">{order.totalOrderValue / order.quantity}</td>
              
              <td className={`px-6 py-3 whitespace-nowrap text-sm text-gray-100 font-medium text-left ${order.status==="Delivered"? "text-green-400": order.status==="Pending" ? "text-red-400":
                order.status==="shipped"? "text-red-500" : "text-yellow-500"
              }`}>{order.status}</td>
           

          </tr>
          </>)
          })}
          
        </tbody>

      
        </table>
      </div>
         


      </div>
  )
}

export default OrdersTable