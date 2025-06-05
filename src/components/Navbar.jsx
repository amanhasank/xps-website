import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ProductsDropdown from './ProductsDropdown';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="XPS Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Home
            </Link>
            <div className="relative group">
              <button
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 flex items-center"
              >
                Products
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2">
                <ProductsDropdown 
                  isOpen={isProductsOpen} 
                  onMouseLeave={() => setIsProductsOpen(false)} 
                />
              </div>
            </div>
            <Link to="/manufacturing" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Manufacturing
            </Link>
            <Link to="/plant-gallery" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Plant Gallery
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Events & Media
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/manufacturing"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Manufacturing
            </Link>
            <Link
              to="/plant-gallery"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Plant Gallery
            </Link>
            <Link
              to="/events"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Events & Media
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 