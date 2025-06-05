import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PlantGalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    '/plant-gallery/plant-1.jpeg',
    '/plant-gallery/plant-2.jpeg',
    '/plant-gallery/plant-3.jpeg',
    '/plant-gallery/plant-4.jpeg',
    '/plant-gallery/plant-5.jpeg',
    '/plant-gallery/plant-6.jpeg',
    '/plant-gallery/plant-7.jpeg',
    '/plant-gallery/plant-8.jpeg',
    '/plant-gallery/plant-9.jpg',
    '/plant-gallery/plant-10.jpg',
    '/plant-gallery/plant-11.jpg',
    '/plant-gallery/plant-12.jpg'
    
  ];

  const openModal = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    setSelectedImage(galleryImages[(currentImageIndex + 1) % galleryImages.length]);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setSelectedImage(galleryImages[(currentImageIndex - 1 + galleryImages.length) % galleryImages.length]);
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/plant-gallery/plant-2.jpeg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="relative z-10 text-white">
          <Fade direction="up" duration={1000}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Plant Gallery</h1>
          </Fade>
          <Fade direction="up" delay={300} duration={1000}>
            <p className="text-xl md:text-2xl text-gray-200">A Glimpse into Our Manufacturing Excellence</p>
          </Fade>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 relative">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/30 via-transparent to-transparent"></div>

        <div className="container mx-auto max-w-7xl relative">
          {/* Introduction Text */}
          <div className="text-center mb-12">
            <Fade direction="up">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Manufacturing Facility</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Explore our state-of-the-art manufacturing facility through our gallery. Each image showcases our commitment to excellence, innovation, and quality in every aspect of our production process.
              </p>
            </Fade>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Fade key={index} direction="up" delay={index * 100}>
                <div 
                  className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  onClick={() => openModal(index)}
                >
                  <div className="aspect-square relative">
                    <img
                      src={image}
                      alt={`Plant Gallery ${index + 1}`}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">View Image</span>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          {/* Additional Content */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Fade direction="left">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Our Manufacturing Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our manufacturing facility is equipped with cutting-edge technology and automated systems that ensure precision and consistency in every product we create. From raw material processing to final quality checks, we maintain the highest standards of manufacturing excellence.
                </p>
              </div>
            </Fade>
            <Fade direction="right">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every step of our manufacturing process is monitored by advanced quality control systems. Our dedicated team of experts ensures that each product meets international standards and customer specifications, maintaining our reputation for excellence.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Fade>
            <div className="relative max-w-4xl w-full">
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </Fade>
        </div>
      )}
    </main>
  );
} 