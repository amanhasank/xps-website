import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { Trophy, Calendar, Users, Target, X } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Formula Bharat 2025",
    date: "January 2025",
    achievements: [
      "2nd in Business Plan Presentation Finals",
      "8th in Engineering Design Finals"
    ],
    description: "Team Defianz Racing participated in Formula Bharat 2025, showcasing their engineering excellence and business acumen. The team's success reflects months of determination, teamwork, and learning.",
    images: [
      '/events/formula.jpeg',
      '/events/formula1.jpeg',
      '/events/formula2.jpeg'
    ],
    icon: Trophy
  },
  {
    id: 2,
    title: "SUPRA SAE 2025",
    date: "August 2025",
    description: "Upcoming participation in SUPRA SAE 2025, where the team will demonstrate their innovative engineering solutions and compete with other top teams from across the country.",
    images: ["/events/formulaa.jpeg"]
  },
  {
    id: 3,
    title: "Autonomous Vehicle Development",
    description: "Working towards becoming India's first team to successfully manufacture and drive a fully functioning autonomous vehicle. This ambitious project represents the future of automotive technology.",
    images: ["/events/aircraft.jpeg"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function CSRPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedEvent(null);
  };

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section
        className="relative h-[33vh] md:h-[40vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/events/CSR1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg animate-fadeInDownCareers">CSR</h1>
          <p className="text-xl md:text-2xl font-semibold drop-shadow-lg animate-fadeInUpCareers" style={{ animationDelay: '0.2s' }}>Corporate Social Responsibility</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div 
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => openGallery(event)}
              >
                <img
                  src={event.images[0]}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  {event.date && (
                    <p className="text-sm opacity-90">{event.date}</p>
                  )}
                </div>
                {event.images.length > 1 && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
                    {event.images.length} images
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{event.description}</p>
                {event.achievements && (
                  <ul className="space-y-2">
                    {event.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center text-blue-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Gallery Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white hover:text-blue-400"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full max-w-4xl mx-4">
              <img
                src={selectedEvent.images[currentImageIndex]}
                alt={selectedEvent.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              {selectedEvent.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
                  >
                    →
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                    {currentImageIndex + 1} / {selectedEvent.images.length}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Social Media Section */}
        <Fade triggerOnce>
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Social Media Presence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Instagram</h3>
                <p className="text-gray-600">
                  Follow our journey on Instagram for behind-the-scenes content and updates.
                </p>
                <a
                  href="http://surl.li/cnkewd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
                >
                  View Instagram Posts
                </a>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">LinkedIn</h3>
                <p className="text-gray-600">
                  Connect with us on LinkedIn for professional updates and achievements.
                </p>
                <a
                  href="http://surl.li/kkwyaq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
                >
                  View LinkedIn Posts
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </main>
  );
} 