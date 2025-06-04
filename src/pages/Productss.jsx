import React, { useState, useEffect, useRef } from 'react';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react'; // Import icons
import { useSearchParams } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { productCategories } from '../data/products';

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For carousel
  const [searchParams] = useSearchParams();
  const productRefs = useRef({});

  useEffect(() => {
    // Add any initialization logic here
  }, []); // Empty dependency array since we don't need productCategories here

  useEffect(() => {
    const productId = searchParams.get('product');
    if (productId) {
      const product = productCategories.find(p => p.id === parseInt(productId));
      if (product) {
        const ref = productRefs.current[productId];
        if (ref) {
          ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
          openModal(product);
        }
      }
    }
  }, [searchParams]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0); // Reset carousel index
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProduct(null);
      setSelectedImage(null);
      setSelectedImageAlt("");
    }, 300);
  };

  const openImageModal = (imageSrc, imageAlt) => {
    setSelectedImage(imageSrc);
    setSelectedImageAlt(imageAlt);
  };

  // Carousel navigation
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="container mx-auto px-6 py-12 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Products</h1>

      {/* Product Categories Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {productCategories.map(category => (
          <div 
            key={category.id} 
            ref={el => productRefs.current[category.id] = el}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group flex flex-col"
          >
            <div className="relative h-[200px] bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 relative flex flex-col flex-grow">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{category.name}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{category.description}</p>
              <button
                onClick={() => openModal(category)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 pulse-button mt-auto"
              >
                <Eye className="w-5 h-5 eye-icon" />
                View Details
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Brochure Download Section */}
      <section className="text-center py-8 bg-blue-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Learn More About Our Range</h2>
        <a
          href="/catalogue.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Download Brochure
        </a>
      </section>

      {/* Product Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" onClick={() => setIsModalOpen(false)}></div>
            
            <div className="relative w-full max-w-6xl transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
              <div className="absolute right-4 top-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full bg-gray-100 p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                
                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    {selectedProduct.additionalImages ? (
                      <div className="grid grid-cols-2 gap-4">
                        {selectedProduct.additionalImages.map((img, index) => (
                          <div key={index} className="overflow-hidden rounded-lg border border-gray-200">
                            <h6 className="text-center text-sm font-medium text-gray-700 mb-2">{img.title}</h6>
                            <img
                              src={img.image}
                              alt={img.title}
                              className="h-48 w-full object-contain p-2"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        <div className="overflow-hidden rounded-lg">
                          <img
                            src={selectedProduct.mainImage}
                            alt={selectedProduct.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <img
                            src={selectedProduct.technicalImage}
                            alt={`${selectedProduct.name} Technical Drawing`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h3 className="mb-3 text-lg font-semibold text-gray-900">Specifications</h3>
                      <ul className="space-y-2">
                        {selectedProduct.specifications.map((spec, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="mr-2 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

       {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(37, 99, 235, 0); }
        }
        .pulse-button {
          animation: pulse-glow 2s infinite ease-in-out;
        }

        @keyframes eye-blink {
           0%, 100% { transform: scaleY(1); }
           50% { transform: scaleY(0.2); }
         }

         /* Simple bounce animation for eye icon on hover */
         .pulse-button:hover .eye-icon {
           animation: eye-blink 0.5s ease-in-out;
         }

         /* Fix for line clamping description in cards */
         .line-clamp-3 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            -webkit-line-clamp: 3;
         }

      `}</style>
    </main>
  );
} 