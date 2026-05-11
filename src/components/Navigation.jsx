import React, { useState } from "react";
import { Mail, Phone, Linkedin, Twitter, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { Fade } from 'react-awesome-reveal';
import { productCategories } from '../data/products';


export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white1-400 text-xs md:text-sm px-4 py-2 flex flex-wrap justify-between items-center text-black-300 gap-y-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold whitespace-nowrap">Sales:</span>
            <a href="mailto:sales@xpsindia.com" className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">sales@xpsindia.com</span>
            </a>
            <a href="tel:+919254012456" className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">+91 9254012456</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold whitespace-nowrap">Dispatch:</span>
            <a href="mailto:dispatch1@xpsindia.com" className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">dispatch1@xpsindia.com</span>
            </a>
            <a href="tel:+917496979733" className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">+91 7496979733</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold whitespace-nowrap">Purchase:</span>
            <a href="mailto:purchase@xpsindia.com" className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">purchase@xpsindia.com</span>
            </a>
            <a href="tel:+919729811998" className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">+91 9729811998</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold whitespace-nowrap">HR:</span>
            <a href="mailto:hr@xpsindia.com" className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">hr@xpsindia.com</span>
            </a>
            <a href="tel:+919817907015" className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">+91 9817907015</span>
            </a>
          </div>
        </div>
        <div className="flex space-x-3">
          <a href="https://www.linkedin.com/company/xps-india" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://twitter.com/xps_india" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="bg-gray-700 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="XPS India Logo" className="h-10 w-auto" />
            <span className="text-lg md:text-xl font-bold text-blue-400">Xtra Precision Screws</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 text-sm font-medium items-center">
            <NavLink to="/" end className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>Home</NavLink>
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Link
                to="/products"
                className="text-gray-300 hover:text-blue-400 focus:outline-none py-2 flex items-center"
                tabIndex={0}
                // onFocus={() => setIsProductsOpen(true)}
                // onBlur={() => setIsProductsOpen(false)}
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
              </Link>
              <div
                className={`absolute left-0 top-full pt-2 w-96 bg-gray-700 rounded-lg shadow-xl overflow-hidden transition-all duration-300 origin-top z-[9999] ${isProductsOpen ? 'block' : 'hidden'}`}
              >
                <div className="py-2 max-h-[80vh] overflow-y-auto">
                  {productCategories.map((product, index) => (
                    <Fade 
                      key={product.id} 
                      triggerOnce 
                      delay={index * 50}
                      direction="up"
                      duration={300}
                    >
                      <Link
                        to={`/products?product=${product.id}`}
                        className="block px-4 py-3 hover:bg-gray-900 transition-all duration-200 group"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 flex-shrink-0">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-gray-200 font-semibold group-hover:text-blue-400 transition-colors duration-200">
                              {product.name}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </Fade>
                  ))}
                </div>
              </div>
            </div>
            <NavLink to="/manufacturing" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>Manufacturing</NavLink>
            <NavLink to="/industry" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>Industry</NavLink>
            <NavLink to="/events" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>Events & Media</NavLink>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>Plant Gallery</NavLink>
            <NavLink to="/csr" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>CSR</NavLink>
            <NavLink to="/certifications" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>Certifications</NavLink>
            <NavLink to="/careers" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>Careers</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>About Us</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>Contact Us</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-blue-400 focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-gray-900 z-[60] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-3 shadow-lg bg-gray-800">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="XPS India Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-blue-400">Xtra Precision Screws</span>
          </div>
          <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-blue-400 focus:outline-none">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-1 px-4 py-4 text-lg font-medium overflow-y-auto max-h-[calc(100vh-64px)]">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>Home</NavLink>
          <div className="relative">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="w-full text-left text-gray-300 hover:text-blue-400 focus:outline-none py-2 flex items-center justify-between"
            >
              Products
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                isProductsOpen ? 'max-h-[500px]' : 'max-h-0'
              }`}
            >
              <div className="py-2 space-y-2">
                {productCategories.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products?product=${product.id}`}
                    className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded"
                    onClick={() => {
                      setIsProductsOpen(false);
                      toggleMobileMenu();
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span>{product.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <NavLink to="/manufacturing" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>Manufacturing</NavLink>
          <NavLink to="/industry" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>Industry</NavLink>
          <NavLink to="/events" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>Events & Media</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>Plant Gallery</NavLink>
          <NavLink to="/csr" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>CSR</NavLink>
          <NavLink to="/certifications" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>Certifications</NavLink>
          <NavLink to="/careers" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>Careers</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>About Us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>Contact Us</NavLink>
        </nav>
      </div>
    </>
  );
} 