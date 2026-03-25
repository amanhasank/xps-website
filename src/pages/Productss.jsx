import React, { useState, useEffect, useRef } from 'react';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react'; // Import icons
import { useSearchParams } from 'react-router-dom';
import { productCategories } from '../data/products';

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For carousel
  const [currentPageIndex, setCurrentPageIndex] = useState(0); // For page navigation
  const [searchParams] = useSearchParams();
  const productRefs = useRef({});

  // Build images array for the selected product
  const images = React.useMemo(() => {
    if (!selectedProduct) return [];
    if (selectedProduct.additionalImages) {
      return [
        { src: selectedProduct.image, alt: selectedProduct.name },
        ...selectedProduct.additionalImages.map(img => ({ src: img.image, alt: img.title }))
      ];
    } else {
      return [
        { src: selectedProduct.image, alt: selectedProduct.name },
        { src: selectedProduct.mainImage, alt: selectedProduct.name },
        { src: selectedProduct.technicalImage, alt: `${selectedProduct.name} Technical Drawing` }
      ];
    }
  }, [selectedProduct]);

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
    setCurrentPageIndex(0); // Reset page index
    setIsModalOpen(true);
  };

  // Sync image index with page index when pages change
  useEffect(() => {
    if (selectedProduct?.pages && selectedProduct.pages.length > 0 && images.length > 0) {
      // Map page index to image index (cycle through images if more pages than images)
      const imageIndex = currentPageIndex % images.length;
      setCurrentImageIndex(imageIndex);
    }
  }, [currentPageIndex, selectedProduct, images.length]);

  // Carousel navigation - synchronized with page navigation
  const goToPreviousImage = () => {
    if (selectedProduct?.pages && selectedProduct.pages.length > 0) {
      // Navigate pages if product has pages (image will sync via useEffect)
      setCurrentPageIndex((prevPageIndex) =>
        prevPageIndex === 0 ? selectedProduct.pages.length - 1 : prevPageIndex - 1
      );
    } else {
      // Navigate images if no pages
      setCurrentImageIndex((prevIndex) =>
        images.length === 0 ? 0 : (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
      );
    }
  };

  const goToNextImage = () => {
    if (selectedProduct?.pages && selectedProduct.pages.length > 0) {
      // Navigate pages if product has pages (image will sync via useEffect)
      setCurrentPageIndex((prevPageIndex) =>
        prevPageIndex === selectedProduct.pages.length - 1 ? 0 : prevPageIndex + 1
      );
    } else {
      // Navigate images if no pages
      setCurrentImageIndex((prevIndex) =>
        images.length === 0 ? 0 : (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
      );
    }
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
                
                {/* Page Tabs - Only show if product has pages */}
                {selectedProduct.pages && selectedProduct.pages.length > 0 && (
                  <div className="mb-6 flex gap-2 border-b border-gray-200">
                    {selectedProduct.pages.map((page, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPageIndex(index)}
                        className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                          currentPageIndex === index
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {page.title}
                      </button>
                    ))}
                  </div>
                )}

                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-4 flex flex-col items-center">
                    {/* Image Slider */}
                    {(() => {
                      if (!images.length) return null;
                      const current = images[currentImageIndex];
                      return (
                        <div className="relative w-full flex flex-col items-center">
                          <div className="overflow-hidden rounded-lg w-full flex justify-center items-center" style={{ minHeight: 250 }}>
                            <img
                              src={current.src}
                              alt={current.alt}
                              className="w-auto max-h-80 object-contain mx-auto transition-all duration-300"
                            />
                          </div>
                          {/* Navigation */}
                          {(selectedProduct?.pages && selectedProduct.pages.length > 0) || images.length > 1 ? (
                            <div className="flex items-center justify-center mt-4 gap-4">
                              <button
                                onClick={goToPreviousImage}
                                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-blue-700 shadow"
                                aria-label={selectedProduct?.pages ? "Previous page" : "Previous image"}
                              >
                                <ChevronLeft className="w-6 h-6" />
                              </button>
                              <span className="text-gray-600 text-sm">
                                {selectedProduct?.pages && selectedProduct.pages.length > 0
                                  ? `${currentPageIndex + 1} / ${selectedProduct.pages.length}`
                                  : `${currentImageIndex + 1} / ${images.length}`
                                }
                              </span>
                              <button
                                onClick={goToNextImage}
                                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-blue-700 shadow"
                                aria-label={selectedProduct?.pages ? "Next page" : "Next image"}
                              >
                                <ChevronRight className="w-6 h-6" />
                              </button>
                            </div>
                          ) : null}
                        </div>
                      );
                    })()}
                  </div>
                  
                  <div className="space-y-4">
                    {/* Page Content */}
                    {selectedProduct.pages && selectedProduct.pages.length > 0 ? (
                      <div className="rounded-lg bg-gray-50 p-4">
                        <h3 className="mb-3 text-lg font-semibold text-gray-900">
                          {selectedProduct.pages[currentPageIndex].title}
                        </h3>
                        <ul className="space-y-2">
                          {selectedProduct.pages[currentPageIndex].content.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2 text-blue-600 font-bold">•</span>
                              <span className="text-gray-700">{item.value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      /* Fallback to specifications if no pages */
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
                    )}
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