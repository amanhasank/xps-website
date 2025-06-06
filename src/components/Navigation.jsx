import React, { useState } from "react";
import { Mail, Phone, Linkedin, Twitter, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { Fade } from 'react-awesome-reveal';

const products = [
  {
    id: 1,
    name: 'SOCKET HEAD CAP SCREW',
    path: '/products#socket-head-cap-screw',
    description: 'High-strength screws with a cylindrical head and hexagonal drive.',
    image: '/products/bb1-hd.jpeg'
  },
  {
    id: 2,
    name: 'SOCKET COUNTER SUNK HEAD (CSK)',
    path: '/products#socket-counter-sunk-head',
    description: 'Screws that sit flush with the surface, featuring a conical head.',
    image: '/products/bb2-hd.jpeg'
  },
  {
    id: 3,
    name: 'SOCKET SET SCREW',
    path: '/products#socket-set-screw',
    description: 'Headless screws fully threaded, used for fastening one object within another.',
    image: '/products/bb3.png'
  },
  {
    id: 4,
    name: 'BUTTON HEAD CAP SCREW',
    path: '/products#button-head-cap-screw',
    description: 'Screws with a wide, low-profile cylindrical head and hexagonal drive.',
    image: '/products/bb4-hd.jpeg'
  },
  {
    id: 5,
    name: 'HEX NUTS',
    path: '/products#hex-nuts',
    description: 'Six-sided nuts used with bolts and screws to fasten components.',
    image: '/products/bb5-hd.jpeg'
  },
  {
    id: 6,
    name: 'HEX HEAD BOLT/SCREW',
    path: '/products#hex-head-bolt-screw',
    description: 'Bolts/screws with a hexagonal head, driven by a wrench.',
    image: '/products/bb6-hd.jpeg'
  },
  {
    id: 7,
    name: 'HEXAGON WRENCHES (ALLEN KEYS)',
    path: '/products#hexagon-wrenches',
    description: 'L-shaped tools used to drive bolts and screws with hexagonal sockets.',
    image: '/products/bb7.png'
  },
  {
    id: 8,
    name: 'SPECIAL FASTENERS',
    path: '/products#special-fasteners',
    description: 'Custom-engineered fasteners designed for specific applications.',
    image: '/products/bb8.png'
  }
];

const industries = [
  {
    id: 1,
    name: 'Automotive',
    path: '/industry#automotive',
    description: 'Precision fasteners for automotive assembly and manufacturing.'
  },
  {
    id: 2,
    name: 'Aerospace',
    path: '/industry#aerospace',
    description: 'High-performance fasteners meeting aerospace industry standards.'
  },
  {
    id: 3,
    name: 'Construction',
    path: '/industry#construction',
    description: 'Durable fasteners for construction and infrastructure projects.'
  },
  {
    id: 4,
    name: 'Electronics',
    path: '/industry#electronics',
    description: 'Specialized fasteners for electronic equipment and devices.'
  },
  {
    id: 5,
    name: 'Industrial Machinery',
    path: '/industry#industrial-machinery',
    description: 'Heavy-duty fasteners for industrial machinery and equipment.'
  },
  {
    id: 6,
    name: 'Medical Devices',
    path: '/industry#medical-devices',
    description: 'Precision fasteners for medical equipment and devices.'
  }
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white1-400 text-sm px-6 py-2 flex justify-between items-center text-black-300">
        <div className="flex space-x-4 items-center">
          <span className="flex items-center space-x-1">
            <Mail className="w-4 h-4" />
            <span>sales@xpsindia.com</span>
          </span>
          <span className="flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <span>+91 - 9254012456</span>
          </span>
        </div>
        <div className="flex space-x-3">
          <a href="https://www.linkedin.com/company/xps-india" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-400" />
          </a>
          <a href="https://twitter.com/xps_india" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-400" />
          </a>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="bg-gray-700 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="XPS India Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-blue-400">Xtra Precision Screws</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
            <NavLink to="/" end className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>Home</NavLink>
            <div className="relative">
              <Link
                to="/products"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="text-gray-300 hover:text-blue-400 focus:outline-none py-2 flex items-center"
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
                className={`absolute left-0 top-full pt-2 w-96 bg-gray-700 rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform origin-top ${
                  isProductsOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                style={{ zIndex: 1000 }}
              >
                <div className="py-2">
                  {products.map((product, index) => (
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
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-gray-200 font-semibold group-hover:text-blue-400 transition-colors duration-200">
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </Fade>
                  ))}
                </div>
              </div>
            </div>
            <NavLink to="/manufacturing" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>Manufacturing</NavLink>
            <div className="relative">
              <Link
                to="/industry"
                onMouseEnter={() => setIsIndustryOpen(true)}
                onMouseLeave={() => setIsIndustryOpen(false)}
                className="text-gray-300 hover:text-blue-400 focus:outline-none py-2 flex items-center"
              >
                Industry
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${isIndustryOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div 
                className={`absolute left-0 top-full pt-2 w-64 bg-gray-700 rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform origin-top ${
                  isIndustryOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
                }`}
                onMouseEnter={() => setIsIndustryOpen(true)}
                onMouseLeave={() => setIsIndustryOpen(false)}
                style={{ zIndex: 1000 }}
              >
                <div className="py-2">
                  {industries.map((industry, index) => (
                    <Fade 
                      key={industry.id} 
                      triggerOnce 
                      delay={index * 50}
                      direction="up"
                      duration={300}
                    >
                      <Link
                        to={industry.path}
                        className="block px-4 py-3 hover:bg-gray-900 transition-all duration-200 group"
                        onClick={() => setIsIndustryOpen(false)}
                      >
                        <div className="flex-1">
                          <h3 className="text-gray-200 font-semibold group-hover:text-blue-400 transition-colors duration-200">
                            {industry.name}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                            {industry.description}
                          </p>
                        </div>
                      </Link>
                    </Fade>
                  ))}
                </div>
              </div>
            </div>
            <NavLink to="/events" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>Events & Media</NavLink>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>Plant Gallery</NavLink>
            <NavLink to="/careers" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>Careers</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"}>Contact Us</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-blue-400 focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-gray-700 z-[60] transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex justify-between items-center px-6 py-4 shadow-lg bg-gray-900">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="XPS India Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-blue-400">XPS INDIA</span>
          </div>
          <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-blue-400 focus:outline-none">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 px-6 py-8 text-lg font-medium">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>Home</NavLink>
          <div className="relative">
            <Link
              to="/products"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
              className="text-gray-300 hover:text-blue-400 focus:outline-none py-2 flex items-center"
              onClick={toggleMobileMenu}
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
              className={`absolute left-0 top-full pt-2 w-96 bg-gray-700 rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform origin-top ${
                isProductsOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
              }`}
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
              style={{ zIndex: 1000 }}
            >
              <div className="py-2">
                {products.map((product, index) => (
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
                      onClick={() => {
                        setIsProductsOpen(false);
                        toggleMobileMenu();
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 flex-shrink-0">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-gray-200 font-semibold group-hover:text-blue-400 transition-colors duration-200">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                          {product.description}
                          {product.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
          <NavLink to="/manufacturing" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>Manufacturing</NavLink>
          <div className="relative">
            <Link
              to="/industry"
              onMouseEnter={() => setIsIndustryOpen(true)}
              onMouseLeave={() => setIsIndustryOpen(false)}
              className="text-gray-300 hover:text-blue-400 focus:outline-none py-2 flex items-center"
              onClick={toggleMobileMenu}
            >
              Industry
              <svg 
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${isIndustryOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div 
              className={`absolute left-0 top-full pt-2 w-64 bg-gray-700 rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform origin-top ${
                isIndustryOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
              }`}
              onMouseEnter={() => setIsIndustryOpen(true)}
              onMouseLeave={() => setIsIndustryOpen(false)}
              style={{ zIndex: 1000 }}
            >
              <div className="py-2">
                {industries.map((industry, index) => (
                  <Fade 
                    key={industry.id} 
                    triggerOnce 
                    delay={index * 50}
                    direction="up"
                    duration={300}
                  >
                    <Link
                      to={industry.path}
                      className="block px-4 py-3 hover:bg-gray-900 transition-all duration-200 group"
                      onClick={() => {
                        setIsIndustryOpen(false);
                        toggleMobileMenu();
                      }}
                    >
                      <div className="flex-1">
                        <h3 className="text-gray-200 font-semibold group-hover:text-blue-400 transition-colors duration-200">
                          {industry.name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                          {industry.description}
                        </p>
                      </div>
                    </Link>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
          <NavLink to="/events" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>Events & Media</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>Plant Gallery</NavLink>
          <NavLink to="/careers" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>Careers</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"} onClick={toggleMobileMenu}>Contact Us</NavLink>
        </nav>
      </div>
    </>
  );
} 