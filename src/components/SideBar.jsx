// src/components/SidebarNavbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiMessageCircle,
  FiUsers,
  FiSettings,
} from "react-icons/fi";

function SidebarNavbar() {
  return (
    <div className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-16 bg-white text-gray-400">
      
      {/* Logo */}
      <div className="flex items-center justify-center h-14 border-b border-gray-200">
       <h2 className="font-bold text-black">KM</h2>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center gap-5 py-6 flex-1">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-white text-black"
                : "hover:bg-gray-800 hover:text-white"
            }`
          }
        >
          <FiHome size={20} />
        </NavLink>



        <NavLink
          to="/friends"
          className={({ isActive }) =>
            `p-2 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-white text-black"
                : "hover:bg-gray-800 hover:text-white"
            }`
          }
        >
          <FiUsers size={20} />
        </NavLink>

      </div>

      {/* Bottom Settings */}
      <div className="flex justify-center py-5 border-t  border-gray-200">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `p-2 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-white text-black"
                : "hover:bg-gray-800 hover:text-white"
            }`
          }
        >
          <FiSettings size={20} />
        </NavLink>
      </div>

    </div>
  );
}

export default SidebarNavbar;
