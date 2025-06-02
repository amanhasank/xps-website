import React, { useState } from "react";
import { Mail, Phone, Linkedin, Twitter, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <NavLink to="/" end className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}>Products</NavLink>
            <NavLink to="/manufacturing" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}>Manufacturing</NavLink>
            <NavLink to="/industry" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}>Industry</NavLink>
            <NavLink to="/events" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}>Events & Media</NavLink>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}>Plant Gallery</NavLink>
            <NavLink to="/careers" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}>Careers</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}>Contact Us</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex justify-between items-center px-6 py-4 shadow-md">
           <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="XPS India Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-blue-800">XPS INDIA</span>
          </div>
          <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 px-6 py-8 text-lg font-medium">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600"} onClick={toggleMobileMenu}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600"} onClick={toggleMobileMenu}>Products</NavLink>
          <NavLink to="/manufacturing" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600"} onClick={toggleMobileMenu}>Manufacturing</NavLink>
          <NavLink to="/industry" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600"} onClick={toggleMobileMenu}>Industry</NavLink>
          <NavLink to="/events" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600"} onClick={toggleMobileMenu}>Events & Media</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600"} onClick={toggleMobileMenu}>Plant Gallery</NavLink>
          <NavLink to="/careers" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600"} onClick={toggleMobileMenu}>Careers</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600"} onClick={toggleMobileMenu}>Contact Us</NavLink>
        </nav>
      </div>
    </>
  );
} 