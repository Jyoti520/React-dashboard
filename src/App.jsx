import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Sidebar from "./components/Sidebar";
import UsersPage from "./components/pages/UsersPage";
import SalesPage from "./components/pages/SalesPage";
import ProductsPage from "./components/pages/ProductsPage";
import OrdersPage from "./components/pages/OrdersPage";
import AnalyticsPage from "./components/pages/AnalyticsPage";
import SettingPage from "./components/pages/SettingPage";

function App() {
  return (
    <>
      <div
        className="flex h-screen text-gray-100 overflow-hidden 
    bg-gradient-to-tr from-gray-700  to-gray-800"
      >
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-opacity-50 bg-gradient-to-tr from-gray-600 to-gray-500 via-gray-800"></div>
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>

        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/users" element={<UsersPage />}></Route>
          <Route path="/sales" element={<SalesPage />}></Route>
          <Route path="/orders" element={<OrdersPage />}></Route>
          <Route path="/analytics" element={<AnalyticsPage />}></Route>
          <Route path="/settings" element={<SettingPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
