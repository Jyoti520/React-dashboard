import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

let sidebar_navItems = [
  { name: "Dashboard", icon: BarChart2, color: "#F08080", href: "/" },
  { name: "Products", icon: ShoppingBag, color: "#EC4899", href: "/products" },
  { name: "Users", icon: Users, color: "#FFB6C1", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "#6EE789", href: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F95E0B", href: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#388F26", href: "analytics" },
  { name: "Settings", icon: Settings, color: "#6366F1", href: "/settings" },
];

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

  // Update the sidebar state based on window width (for responsiveness)
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false); // Collapse sidebar on mobile
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Adding resize event listener on mount
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state based on the current window width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      
      <motion.div
        className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
            isSidebarOpen ? "w-64" : "w-24"
        }`}
           
      >
       
        <div className="h-full border-r-2 border-gray-600 bg-gradient-to-tr from-gray-600 via-gray-800 to-gray-700 shadow-lg backdrop-blur-lg flex flex-col p-4">
          {<motion.button
            className="p-2 rounded-full  hover:bg-gray-500 transition-colors max-w-fit text-gray-300"
            whileHover={{ scale: 1.1, color:"white" }}
            whileTap={{ scale: 0.9, color:"white" }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu size="24"/>
          </motion.button>}
          <nav className="mt-4 flex-grow-0">
            {sidebar_navItems.map((item, index) => (
              <Link key={index} to={item.href} path={item.href} className="no-underline text-gray-200">
                <motion.div className="flex py-2 mt-4 px-2 hover:bg-gray-600 rounded-md text-lg">
                  <item.icon
                    size={24}
                    style={{ color: item.color, minWidth: "24px" }}
                  />
                  <AnimatePresence>
                    {isSidebarOpen && (
                     
                      <motion.span
                        className="ml-4 whitespace-nowrap text-gray-300"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2}}
                      >
                        {item.name}
                      </motion.span>
                         
                    )}
                    </AnimatePresence>
                </motion.div>
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
