import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-blue-900 via-blue-800 to-gray-900 text-white pt-12 pb-0 px-4 mt-12 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Company Image */}
        <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
          <img src="/factory.png" alt="XPS Factory" className="w-80 h-56 object-cover rounded-xl shadow-2xl border-4 border-blue-700" />
        </div>
        {/* Contact Info */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="font-semibold text-lg text-blue-300">Online Support</div>
          <div className="text-2xl font-bold text-white">+91 8396 941 941</div>
          <div className="font-semibold mt-6 text-blue-300">ASK YOUR QUESTIONS BY EMAIL:</div>
          <div className="text-lg text-white">sales@xpsindia.com</div>
        </div>
        {/* Social & Logo */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-6">
          <div className="font-semibold mb-2 text-blue-300">GET IN TOUCH</div>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-800 rounded-full p-2 hover:bg-blue-600 hover:text-white transition shadow">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/xps_india" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-800 rounded-full p-2 hover:bg-blue-500 hover:text-white transition shadow">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white text-pink-600 rounded-full p-2 hover:bg-pink-500 hover:text-white transition shadow">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/xps-india" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-800 rounded-full p-2 hover:bg-blue-700 hover:text-white transition shadow">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <img src="/logo.png" alt="XPS Logo" className="w-48 h-auto bg-white rounded shadow-md p-2 hover:scale-105 transition" />
          <div className="text-xs text-blue-200 mt-2">XTRA PRECISION SCREWS</div>
        </div>
      </div>
      <div className="border-t border-blue-700 mt-10 pt-4 pb-2 text-center text-sm text-blue-200">
        &copy; {new Date().getFullYear()} Xtra Precision Screws Pvt. Ltd. All rights reserved.
      </div>
      {/* Back to Top Button */}
      <a href="#" className="absolute right-6 bottom-6 bg-blue-700 text-white p-2 rounded-full shadow-lg hover:bg-blue-500 transition">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M5 15l7-7 7 7"/>
        </svg>
      </a>
    </footer>
  );
} 