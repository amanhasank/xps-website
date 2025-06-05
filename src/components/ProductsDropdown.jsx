import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

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

export default function ProductsDropdown({ isOpen, onMouseLeave }) {
  return (
    <div 
      className={`absolute w-96 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform origin-top ${
        isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
      }`}
      onMouseLeave={onMouseLeave}
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
              to={product.path}
              className="block px-4 py-3 hover:bg-blue-50 transition-all duration-200 group"
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
                  <h3 className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          </Fade>
        ))}
      </div>
    </div>
  );
} 