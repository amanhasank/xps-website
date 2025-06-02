import React, { useState, useEffect, useRef } from 'react';
import { Eye, X } from 'lucide-react'; // Import icons
import { useSearchParams } from 'react-router-dom';

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For carousel
  const [searchParams] = useSearchParams();
  const productRefs = useRef({});

  // Updated Placeholder data for product categories with more details and images
  const productCategories = [
    {
      id: 1,
      name: 'SOCKET HEAD CAP SCREW',
      description: 'High-strength screws with a cylindrical head and hexagonal drive.',
      image: '/products/bb1-hd.jpeg',
      mainImage: '/products/prd-1.png',
      technicalImage: '/products/prd-t.png',
      specifications: [
        'As per DIN912 & ISO4762 for Metric Series and BS2470 for Inch Series',
        'Range: Metric Series: M3 to M48',
        'Range: Inch Series: 3/16" to 1"',
        'M3 to M24 by Cold Forging Process',
        'M24 and Above by Hot Forging Process',
        'Controlled hex socket for maximum wrenching strength',
        'Uniform socket depth for accurate key fit & higher torque',
        'Knurled head for finger grip fast assembly',
        'Smooth fillet radius to withstand head soundness',
        'Formed threads with improved root radius provide greater strength to threads',
        'Uniform & uninterrupted grain flow for greater strength',
        'Controlled mechanical properties for higher strength'
      ]
    },
    {
      id: 2,
      name: 'SOCKET COUNTER SUNK HEAD (CSK)',
      description: 'Screws that sit flush with the surface, featuring a conical head.',
      image: '/products/bb2-hd.jpeg',
      mainImage: '/products/prd2.png',
      technicalImage: '/products/prd-t2.png',
      specifications: [
        'Perfect angle under the head ensures flush seating',
        'Controlled hex socket for maximum wrenching strength',
        'Smooth fillet radius to withstand head soundness',
        'Hi-grade alloy steel for good strength & wear resistance',
        'Uniform socket depth for accurate key fit & higher torque',
        'Closely controlled threads under radius root process proper fit & depth assemblies',
        'Controlled mechanical properties for higher strength',
        'Controlled concentricity in totality to create a high resistance to lateral movements'
      ]
    },
    {
      id: 3,
      name: 'SOCKET SET SCREW',
      description: 'Headless screws fully threaded, used for fastening one object within another.',
      image: '/products/bb3.png',
      mainImage: '/products/prd-21.png',
      technicalImage: '/products/ss22.jpg',
      specifications: [
        'A set screw is a type of screw generally used to secure an object within or against another object',
        'The set screw passes through a threaded hole in the outer object and is tightened against the inner object',
        'Set screws do not come in one shape or size - there are several different variations with different strengths',
        'Different-shaped tips have unique properties that engineers can take advantage of',
        'Cone point type for proper nesting of the screw',
        'Flat point for pressing perfectly flat against the surface',
        'Available in various point types for different applications'
      ]
    },
    {
      id: 4,
      name: 'BUTTON HEAD CAP SCREW',
      description: 'Screws with a wide, low-profile cylindrical head and hexagonal drive.',
      image: '/products/bb4-hd.jpeg',
      mainImage: '/products/btn.jpg',
      technicalImage: '/products/prd-t4.png',
      specifications: [
        'Controlled hex socket for maximum wrenching strength',
        'Uniform socket depth for accurate key fit & higher torque',
        'Smooth fillet radius to withstand head soundness',
        'Formed threads with improved root radius provide greater strength to threads',
        'Uniform & uninterrupted grain flow for greater strength',
        'Controlled mechanical properties for higher strength',
        'High grade alloy steel for good strength & wear resistance',
        'Smooth radiuses head ensures easy handling to the user',
        'Controlled concentricity in totality to create a high resistance to lateral movements'
      ]
    },
    {
      id: 5,
      name: 'HEX NUTS',
      description: 'Six-sided nuts used with bolts and screws to fasten components.',
      image: '/products/bb5-hd.jpeg',
      mainImage: '/products/hex.png',
      technicalImage: '/products/prd-t5.png',
      specifications: [
        'As per DIN934 & ISO4032 for Metric Series',
        'Range: Metric Series: M3 to M64',
        'M3 to M24 by Cold Forging Process',
        'M24 and Above by Hot Forging Process',
        'Controlled thread profile for maximum strength',
        'Uniform thread depth for accurate fit & higher torque',
        'Smooth fillet radius to withstand soundness',
        'Uniform & uninterrupted grain flow for greater strength',
        'Controlled mechanical properties for higher strength'
      ]
    },
    {
      id: 6,
      name: 'HEX HEAD BOLT/SCREW',
      description: 'Bolts/screws with a hexagonal head, driven by a wrench.',
      image: '/products/bb6-hd.jpeg',
      mainImage: '/products/hex-h.jpg',
      technicalImage: '/products/prd-t6.png',
      specifications: [
        'Controlled Hexagon for maximum wrenching strength',
        'Smooth fillet radius to withstand head soundness',
        'Formed threads with improved root radius provide greater strength to threads',
        'Uniform & uninterrupted grain flow for greater strength',
        'Controlled mechanical properties for higher strength',
        'High quality steel for good strength & wear resistance'
      ]
    },
    {
      id: 7,
      name: 'HEXAGON WRENCHES (ALLEN KEYS)',
      description: 'L-shaped tools used to drive bolts and screws with hexagonal sockets.',
      image: '/products/bb7.png',
      mainImage: '/products/key.jpg',
      technicalImage: '/products/prd-t7.png',
      specifications: [
        'Hexagonal Internal Wrenching Tool Suitable for all Socket Screw',
        'As per Din 911, ISO2936, IS 3082, BS 2470',
        'Range - Metric: 1.5mm -19 mm',
        'Range - Inch: 1/16" - ¾"',
        'High Precision Dimensional Accurate Hexagonal Keys',
        'High Strength and Highly Ductile',
        'Heat Treated to Minim. 47 HRC',
        'Also Available in Sets'
      ]
    },
    {
      id: 8,
      name: 'SPECIAL FASTENERS',
      description: 'Custom-engineered fasteners designed for specific applications.',
      image: '/products/bb8.png',
      mainImage: '/products/sp1.jpg',
      technicalImage: '/products/sp5.png',
      additionalImages: [
        {
          title: 'Wheel bolt',
          image: '/products/sp1.jpg'
        },
        {
          title: 'Flange bolt',
          image: '/products/sp2.jpg'
        },
        {
          title: 'Shoulder Bolt',
          image: '/products/sp3.jpg'
        },
        {
          title: 'Studs',
          image: '/products/sp4.jpg'
        },
        {
          title: 'Technical Drawing 1',
          image: '/products/sp5.png'
        },
        {
          title: 'Technical Drawing 2',
          image: '/products/sp6.png'
        },
        {
          title: 'Technical Drawing 3',
          image: '/products/sp7.png'
        },
        {
          title: 'Technical Drawing 4',
          image: '/products/sp8.png'
        },
        {
          title: 'Technical Drawing 5',
          image: '/products/sp9.png'
        }
      ],
      specifications: [
        'Custom designed as per customer requirements and drawings',
        'Wheel bolts for automotive applications',
        'Flange bolts with integrated washer',
        'Shoulder bolts for precise positioning',
        'Studs for threaded connections',
        'Special thread profiles and dimensions',
        'Custom head styles and drive types',
        'Special surface treatments and coatings'
      ]
    }
  ];

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
    // Add a small delay before clearing the product to allow transition to complete
    setTimeout(() => setSelectedProduct(null), 300); 
    setCurrentImageIndex(0);
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