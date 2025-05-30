import React from "react";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-white border-b text-sm px-6 py-2 flex justify-between items-center text-gray-600">
        <div className="flex space-x-4 items-center">
          <span className="flex items-center space-x-1">
            <Mail className="w-4 h-4" />
            <span>sales@xpsindia.com</span>
          </span>
          <span className="flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <span>+91 - 8396 941 941</span>
          </span>
        </div>
        <div className="flex space-x-3">
          <a href="https://www.linkedin.com/company/xps-india" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-700" />
          </a>
          <a href="https://twitter.com/xps_india" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-500" />
          </a>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="XPS India Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-blue-800">XPS INDIA</span>
          </div>
          <nav className="space-x-6 text-sm font-medium">
            <NavLink to="/" end className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}>Products</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}>About Us</NavLink>
            <NavLink to="/downloads" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}>Downloads</NavLink>
            <NavLink to="/careers" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}>Careers</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}>Contact Us</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
} 