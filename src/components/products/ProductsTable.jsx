import React from "react";
import { useState } from "react";

import { Search, Edit, Trash2 } from "lucide-react";

const PRODUCT_DATA = [
  {
    id: 0,
    productName: "SwiftCharge Power Bank",
    category: "Electronics",
    price: 39.99,
    sales: 2300,
    stock: 800,
  },
  {
    id: 1,
    productName: "PureBliss Mattress Pad",
    category: "Home & Living",
    price: 129.99,
    sales: 1150,
    stock: 350,
  },
  {
    id: 2,
    productName: "AquaLife Water Filter",
    category: "Home Appliances",
    price: 59.99,
    sales: 1800,
    stock: 450,
  },
  {
    id: 3,
    productName: "SoundSphere Wireless Earbuds",
    category: "Electronics",
    price: 69.99,
    sales: 2500,
    stock: 1200,
  },
  {
    id: 4,
    productName: "FreshBrew Tea Maker",
    category: "Kitchenware",
    price: 89.99,
    sales: 1100,
    stock: 250,
  },
  {
    id: 0,
    productName: "BreezeX Fan",
    category: "Home Appliances",
    price: 49.99,
    sales: 1600,
    stock: 550,
  },
];

function ProductsTable() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();
    setSearch(searchInput);
    const filteredData = PRODUCT_DATA.filter(
      (product) =>
        product.productName.toLowerCase().includes(searchInput) ||
        product.category.toLowerCase().includes(searchInput)
    );
    setData(filteredData);
  };

  const deleteProduct = (id) => {
    setData(data.filter((product) => product.id !== id));
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500/10 to-slate-900/10 shadow-lg backdrop-blur-lg rounded-xl p-4 border-2 border-indigo-500/30 py-4 px-6 border-t-2 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-md sm:text-lg font-medium text-gray-200 mb-2">
            Product List
          </h3>

          <div className="relative">
            <input
              type="text"
              value={search}
              placeholder="Search Products here..."
              onChange={handleSearch}
              className="bg-white/10 placeholder:text-gray-400
    focus:outline-none focus:ring-2 focus:ring-indigo-600  pl-4 rounded-md py-2 pr-6 transition"
            />
            <Search size={19} className="absolute top-2.5 right-2" />
          </div>
        </div>

        <div className="overflow-auto">
          <table className="min-w-full divide-y-2 divide-indigo-900/10">
            <thead>
              <tr className="text-indigo-500 font-medium">
                <th className="px-6 py-4 tracking-tighter">
                  NAME
                </th>
                <th className="px-6 py-4 tracking-tighter">
                  PRICE
                </th>
                <th className="px-6 py-4 tracking-tighter ">
                  CATEGORY
                </th>
                <th className="px-6 py-4 tracking-tighter">
                  SALES
                </th>
                <th className="px-6 py-4 tracking-tighter">
                  STOCK
                </th>
                <th className="px-6 py-4 tracking-tighter"></th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-indigo-900/10">
              {data.map((product, index) => {
                return (
                  <>
                    <tr key={product.id}>
                      <td className=" flex flex-col gap-2 px-6 py-3 whitespace-nowrap text-sm text-gray-100 font-medium text-left">
                        {product.productName}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-100 font-medium text-left">
                        {product.category}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-100 font-medium text-left">
                        {product.price}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-100 font-medium text-left">
                        {product.sales}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-100 font-medium text-left">
                        {product.stock}
                      </td>
                      <td>
                        {" "}
                        <button className=" ml-4">
                          <Edit size={20} color="#6366f1" />
                        </button>
                        <button
                          className=" ml-4"
                          onClick={() => deleteProduct(product.id)}
                        >
                          <Trash2 size={24} color="red" />
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductsTable;
