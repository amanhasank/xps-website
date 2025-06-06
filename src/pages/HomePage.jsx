import React, { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import { Fade } from "react-awesome-reveal";
import { ArrowRight } from 'lucide-react';
import { productCategories } from '../data/products';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState("");

  const openModal = (imageSrc, imageAlt) => {
    setSelectedImage(imageSrc);
    setSelectedImageAlt(imageAlt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedImage(null);
      setSelectedImageAlt("");
    }, 300);
  };

  return (
    <main>
      <HeroSlider />
      {/* Hero Section */}
      <section className="relative py-16 text-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/logos/test1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-blue-900/50"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">Leading Manufacturer of High Tensile Fasteners in India</h1>
          <p className="text-lg text-gray-200">Specialized in Nuts, Bolts, Screws, Socket Head, Allen Bolts & More</p>
          <a href="/products">
            <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded">
              Explore Our Fastener Range
            </button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">About XPS India - Your Trusted Fastener Manufacturer</h2>
        <p className="text-base leading-relaxed">
          XPS India is a leading manufacturer of high-strength fasteners with over 50 years
          of experience in supplying OEMs globally. We specialize in manufacturing premium quality nuts, bolts, screws, 
          socket head cap screws, allen bolts, hex bolts, CSK screws, grub screws, and button head cap screws. 
          Our state-of-the-art facilities include advanced CNC machining, heat treatment, cold forging, and hot forging processes.
        </p>
      </section>

      {/* Company Introduction Section */}
      <section className="py-12 px-6 relative">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/logos/test3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="space-y-6 text-gray-200">
            <p className="leading-relaxed">
              We are pleased to introduce ourselves as the manufacturers of high tensile fasteners under the brand name of "XPS". 
              Our comprehensive range includes socket head cap screws, allen bolts, hex bolts, CSK screws, grub screws, and button head cap screws. 
              We supply our products throughout India to many consumers directly as well as through our strong dealers network. 
              XPS specializes in the production of all kinds of high strength fasteners conforming to GB, ISO, DIN, AS, ANSI, BS standards.
            </p>
            
            <p className="leading-relaxed">
              Our manufacturing excellence is backed by ISO9001 quality system standards. We operate each link from raw materials processing 
              to the production process with strict quality control. Our facilities include advanced CNC machining, heat treatment, 
              cold forging, and hot forging processes. With 50 years of experience in the fastener industry, XPS management thrives 
              on its expertise in handling big OEMs across various sectors including 2-wheeler, commercial vehicle manufacturing, 
              and heavy engineering industries.
            </p>

            <p className="leading-relaxed">
              Our state-of-the-art manufacturing facilities include:
              • Advanced CNC machining for precision engineering
              • Heat treatment for superior strength and durability
              • Cold forging and hot forging processes
              • Surface finish treatments
              • Quality testing and inspection
            </p>

            <p className="leading-relaxed">
              We understand the critical nature of fasteners in your applications. That's why we offer:
              • Customized fastener solutions
              • Quick turnaround times
              • Flexible manufacturing capabilities
              • Comprehensive quality assurance
              • Technical support and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Fade triggerOnce={true}>
            <h2 className="text-3xl font-semibold text-center mb-12 text-blue-900">International Certifications</h2>
          </Fade>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <Fade triggerOnce={true} delay={100}>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/logos/iso-9001.png"
                  alt="ISO 9001:2015 Certified"
                  className="w-16 h-16 object-contain mb-4 cursor-pointer"
                  onClick={() => openModal('/logos/iso-9001.png', 'ISO 9001:2015 Certified')}
                />
                <div className="text-2xl font-bold text-blue-600 mb-1">ISO</div>
                <div className="text-sm text-gray-600 text-center">9001:2015</div>
              </div>
            </Fade>

            <Fade triggerOnce={true} delay={200}>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/logos/iso-45001.png"
                  alt="ISO 45001:2018 Certified"
                  className="w-16 h-16 object-contain mb-4 cursor-pointer"
                  onClick={() => openModal('/logos/iso-45001.png', 'ISO 45001:2018 Certified')}
                />
                <div className="text-2xl font-bold text-blue-600 mb-1">ISO</div>
                <div className="text-sm text-gray-600 text-center">45001:2018</div>
              </div>
            </Fade>

            <Fade triggerOnce={true} delay={300}>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/logos/iso-14001.png"
                  alt="ISO 14001:2015 Certified"
                  className="w-16 h-16 object-contain mb-4 cursor-pointer"
                  onClick={() => openModal('/logos/iso-14001.png', 'ISO 14001:2015 Certified')}
                />
                <div className="text-2xl font-bold text-blue-600 mb-1">ISO</div>
                <div className="text-sm text-gray-600 text-center">14001:2015</div>
              </div>
            </Fade>

            <Fade triggerOnce={true} delay={400}>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/logos/iatf-16949.png"
                  alt="IATF 16949:2016 Certified"
                  className="w-16 h-16 object-contain mb-4 cursor-pointer"
                  onClick={() => openModal('/logos/iatf-16949.png', 'IATF 16949:2016 Certified')}
                />
                <div className="text-2xl font-bold text-blue-600 mb-1">IATF</div>
                <div className="text-sm text-gray-600 text-center">16949:2016</div>
              </div>
            </Fade>

            <Fade triggerOnce={true} delay={500}>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/logos/ce.png"
                  alt="CE Certified"
                  className="w-16 h-16 object-contain mb-4 cursor-pointer"
                  onClick={() => openModal('/logos/ce.png', 'CE Certified')}
                />
                <div className="text-2xl font-bold text-blue-600 mb-1">CE</div>
                <div className="text-sm text-gray-600 text-center">Certification</div>
              </div>
            </Fade>

            <Fade triggerOnce={true} delay={600}>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/logos/rohs.png"
                  alt="ROHS Compliant"
                  className="w-16 h-16 object-contain mb-4 cursor-pointer"
                  onClick={() => openModal('/logos/rohs.png', 'ROHS Compliant')}
                />
                <div className="text-2xl font-bold text-blue-600 mb-1">ROHS</div>
                <div className="text-sm text-gray-600 text-center">Compliance</div>
              </div>
            </Fade>
          </div>

          {/* BIS Certifications - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-3xl mx-auto">
            <Fade triggerOnce={true} delay={700}>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/logos/bis1.png"
                  alt="BIS Certification 1"
                  className="w-16 h-16 object-contain mb-4 cursor-pointer"
                  onClick={() => openModal('/logos/bis1.png', 'BIS Certification 1')}
                />
                <div className="text-2xl font-bold text-blue-600 mb-1">BIS</div>
                <div className="text-sm text-gray-600 text-center">Certification 1</div>
              </div>
            </Fade>

            <Fade triggerOnce={true} delay={800}>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/logos/bis2.png"
                  alt="BIS Certification 2"
                  className="w-16 h-16 object-contain mb-4 cursor-pointer"
                  onClick={() => openModal('/logos/bis2.png', 'BIS Certification 2')}
                />
                <div className="text-2xl font-bold text-blue-600 mb-1">BIS</div>
                <div className="text-sm text-gray-600 text-center">Certification 2</div>
              </div>
            </Fade>

            <Fade triggerOnce={true} delay={900}>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/logos/bis3.png"
                  alt="BIS Certification 3"
                  className="w-16 h-16 object-contain mb-4 cursor-pointer"
                  onClick={() => openModal('/logos/bis3.png', 'BIS Certification 3')}
                />
                <div className="text-2xl font-bold text-blue-600 mb-1">BIS</div>
                <div className="text-sm text-gray-600 text-center">Certification 3</div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative py-16">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/logos/xpsvideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-blue-900/50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Fade triggerOnce={true}>
            <h2 className="text-4xl font-bold text-center mb-4 text-white">Premium Fastener Solutions</h2>
            <p className="text-lg text-center text-gray-200 mb-12">High Tensile Fasteners, Nuts, Bolts, and Specialized Fastening Solutions</p>
          </Fade>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {productCategories.map((product, index) => (
              <Fade key={product.id} triggerOnce={true} delay={index * 100}>
                <div 
                  className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer h-[280px] flex flex-col"
                  onClick={() => window.location.href = `/products?product=${product.id}`}
                >
                  <div className="relative overflow-hidden h-[200px] flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={`${product.name} - High Tensile Fasteners by XPS India`}
                      className="w-full h-full object-contain p-4 transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center flex-grow flex items-center justify-center">
                    <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          <div className="text-center mt-12">
          <a href="/products">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg transition duration-200 text-lg font-semibold">
                View Complete Fastener Range
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="container mx-auto px-6">
          <Fade triggerOnce={true}>
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Resources</h2>
          </Fade>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Downloadable Resources */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Download Resources</h3>
              <div className="space-y-4">
                <a 
                  href="/catalogue.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-blue-50/80 backdrop-blur-sm rounded-lg hover:bg-blue-100 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-900">E-Catalogue</h4>
                      <p className="text-sm text-gray-600">Complete product catalog</p>
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>

                <a 
                  href="/price-list.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-blue-50/80 backdrop-blur-sm rounded-lg hover:bg-blue-100 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-900">Price List</h4>
                      <p className="text-sm text-gray-600">Latest pricing information</p>
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Company Video */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Company Video</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="/logos/xpsvideo.mp4"
                  title="XPS India Company Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">Contact Us</h2>
        <p className="mb-2">📍 Xtra Precision Screws Private Limited
57 KM Milestone, Delhi Rohtak Road, Village Gandhra, Tehsil Sampla, Rohtak - 124501 Haryana, India</p>
        <p className="mb-2">📞 +91 9254012456</p>
        <p className="mb-8">📧 sales@xpsindia.com</p>
        <div className="w-full h-64">
          <iframe
            title="XPS India Location"
            className="w-full h-full border-0 rounded-md shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1413201571656!2d76.60383881513015!3d28.900544684802364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912a5abf8fcbfcd%3A0xb7d3f0cf89e6572a!2sXPS%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Certification Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-filter backdrop-blur-sm transition-opacity duration-300 ease-in-out" onClick={closeModal}>
          <div className="relative bg-white rounded-lg shadow-xl max-w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 ease-in-out scale-95 opacity-0 modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold z-10 bg-white rounded-full p-1">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt={selectedImageAlt}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

      <style jsx>{`
         .modal-content {
            transition: transform 0.3s ease-out, opacity 0.3s ease-out;
         }
         .modal-content {
             transform: scale(0.95);
             opacity: 0;
         }
        ${isModalOpen ? `
          .modal-content {
             transform: scale(1);
             opacity: 1;
          }
         ` : ''}
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>


    </main>
  );
}