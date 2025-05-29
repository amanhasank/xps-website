import React from "react";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

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
            <a href="/" className="text-blue-600">Home</a>
            <a href="/products" className="text-gray-600 hover:text-blue-600">Products</a>
            <a href="/about" className="text-gray-600 hover:text-blue-600">About Us</a>
            <a href="/downloads" className="text-gray-600 hover:text-blue-600">Downloads</a>
            <a href="/careers" className="text-gray-600 hover:text-blue-600">Careers</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</a>
          </nav>
        </div>
      </header>
    </>
  );
} 