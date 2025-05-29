import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
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
            <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Downloads</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Careers</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Welcome to XPS India</h1>
        <p className="text-lg text-blue-800">Manufacturers of High-Tensile Fasteners</p>
        <a href="/products">
          <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded">
            Explore Products
          </button>
        </a>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">About Us</h2>
        <p className="text-base leading-relaxed">
          XPS India is a leading manufacturer of high-strength fasteners with over 50 years
          of experience in supplying OEMs globally. We are ISO 9001 certified and specialize in
          manufacturing fasteners as per DIN, ISO, ANSI, and BS standards.
        </p>
      </section>

      {/* Products Section */}
      <section className="bg-blue-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">Our Products</h2>
        <div className="text-center">
          <a href="/products">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">View Full Product Range</button>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">Contact Us</h2>
        <p className="mb-2">📍 Plot-161, HSIIDC, I.E. Kutana, Hissar Road, Rohtak, Haryana 124001, India</p>
        <p className="mb-2">📞 +91 8396 941 941</p>
        <p className="mb-8">📧 sales@xpsindia.com</p>
        <div className="w-full h-64">
          <iframe
            className="w-full h-full border-0 rounded-md shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1413201571656!2d76.60383881513015!3d28.900544684802364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912a5abf8fcbfcd%3A0xb7d3f0cf89e6572a!2sXPS%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}