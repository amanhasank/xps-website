import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { productCategories } from '../data/products';

export default function ProductsDropdown({ isOpen, onMouseLeave }) {
  return (
    <Fade duration={300} triggerOnce>
      <div 
        className={`absolute left-0 top-full pt-2 w-96 bg-gray-700 rounded-lg shadow-xl transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        onMouseLeave={onMouseLeave}
      >
        <div className="py-2">
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
                className="block px-4 py-3 hover:bg-gray-600 transition-all duration-200 group"
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
                    <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-300 mt-1 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Fade>
          ))}
        </div>
      </div>
    </Fade>
  );
} 