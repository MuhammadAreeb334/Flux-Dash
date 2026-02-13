import React from "react";
import Logo from "../Assets/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  HatGlasses,
  User,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  const handleMenu = () => setMenuOpen(false);
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login")
  };

  const menuItems = [
    { name: "Analytics", icon: <LayoutDashboard size={20} />, path: "/" },
    { name: "User", icon: <Users size={20} />, path: "/user" },
    { name: "Ameer", icon: <HatGlasses size={20} />, path: "/ameer" },
    // { name: "Customers", icon: <User size={20} />, path: "/customers" },
  ];

  return (
    <div className="h-full p-6 flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center">
          <div className="w-14 h-14 flex items-center">
            <img
              src={Logo}
              alt="Business Logo"
              className="w-full h-auto object-contain"
            />
          </div>
          <h2 className="text-2xl md:text-lg font-light tracking-wide -ml-3">
            Flux Dash
          </h2>
        </div>

        <div className="md:hidden">
          <button onClick={handleMenu}>
            <Menu size={18} />
          </button>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={handleMenu}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all ${
                isActive
                  ? "text-[#75787b] bg-white font-medium shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`
            }
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="h-px bg-gray-300 my-4 w-full" />

      <nav className="space-y-2">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all ${
              isActive
                ? "text-[#75787b] bg-white font-medium shadow-lg"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`
          }
        >
          <Settings size={20} />
          <span className="text-sm">Settings</span>
        </NavLink>

        {/* <NavLink
          to="/login"
          className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all text-gray-300 hover:text-white hover:bg-white/5"
        >
          <LogOut size={20} />
          <span className="text-sm">Sign Out</span>
        </NavLink> */}
        <button
          onClick={() => handleLogout()}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all text-gray-300 hover:text-white hover:bg-white/5"
        >
          <LogOut size={20} />
          <span className="text-sm">Sign Out</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
