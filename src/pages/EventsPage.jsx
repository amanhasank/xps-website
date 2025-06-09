import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Calendar, MapPin, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "India Warehousing Show 2025",
    location: "Yashobhoomi, IICC, Dwarka, New Delhi, India",
    date: "26-28 June 2025",
    booth: "Stall #A59",
    images: [
      "/events/warehousing/ev1.png"
    ],
    description: "Join us at the India Warehousing & Logistics Show 2025, where we'll showcase our specialized fastening solutions for the warehousing and logistics industry."
  },
  {
    id: 2,
    title: "India Prefab Expo 2025",
    location: "Yashobhoomi IIC Dwarka, New Delhi",
    date: "28-30 August 2025",
    booth: "i10",
    images: [
      "/events/banner0.jpg"
    ],
    description: "Infinity Expo presents India Prefab Expo, 28–30 August 2025 at Yashobhoomi IIC, New Delhi. Explore the latest in steel prefab tech, connect with industry leaders, and join expert talks shaping the future of construction."
  },
  {
    id: 3,
    title: "Automec 2025",
    location: "Sao Paulo, Brazil",
    date: "2025",
    images: [
      "/events/auto-expo/ab1.jpeg",
      "/events/auto-expo/ab2.jpeg",
      "/events/auto-expo/ab3.jpeg",
      "/events/auto-expo/ab4.jpeg",
      "/events/auto-expo/ab5.jpeg",
      "/events/auto-expo/ab6.jpeg"

    ],
    description: "Join us at Automec 2025, South America's premier automotive trade show. We'll be showcasing our innovative automotive fastening solutions and connecting with industry leaders."
  },
  {
    id: 4,
    title: "IMTOF 2024",
    location: "Chennai, Tamil Nadu",
    date: "2024",
    images: [
      "/events/auto-expo/bc1.jpeg",
      "/events/auto-expo/bc2.jpeg",
      "/events/auto-expo/bc3.jpeg",
      "/events/auto-expo/bc4.jpeg",
      "/events/auto-expo/bc5.jpeg",
      "/events/auto-expo/bc6.jpeg",
      "/events/auto-expo/bc7.jpeg",
      "/events/auto-expo/bc8.jpeg"

    ],
    description: "Visit us at IMTOF 2024, where we'll present our latest innovations in tooling and manufacturing technology. Connect with industry experts and explore new opportunities."
  },
  {
    id: 5,
    title: "Excon 2024",
    location: "Bangalore, Karnataka",
    date: "2024",
    images: [
      "/events/auto-expo/cd1.jpeg",
      "/events/auto-expo/cd2.jpeg",
      "/events/auto-expo/cd3.jpeg",
      "/events/auto-expo/cd4.jpeg"
    ],
    description: "Experience our construction equipment solutions at Excon 2024. We'll showcase our specialized fasteners and components designed for heavy machinery and construction applications."
  },
  {
    id: 6,
    title: "Aerodef 2025",
    location: "Yashobhoomi, Dwarka, New Delhi",
    date: "2025",
    images: [
      "/events/aerodef/ev1.jpeg",
      "/events/aerodef/ev2.jpeg",
      "/events/aerodef/ev3.jpeg",
      "/events/aerodef/ev4.jpeg"
    ],
    description: "Join us at Aerodef 2025, India's premier aerospace and defense exhibition. We'll be showcasing our high-tensile fasteners and specialized aerospace components."
  },
  {
    id: 7,
    title: "Fastener Fair Global 2025",
    location: "Stuttgart, Germany",
    date: "2025",
    images: [
      "/events/fastener-fair/ev1.jpeg",
      "/events/fastener-fair/ev2.jpeg",
      "/events/fastener-fair/ev3.jpeg",
      "/events/fastener-fair/ev5.jpeg"
    ],
    description: "Visit us at the world's leading exhibition for the fastener and fixing industry. Experience our latest innovations in fastener technology."
  },
  {
    id: 8,
    title: "Bauma CONEXPO 2024",
    location: "India Exposition Mart, Greater Noida, Uttar Pradesh",
    date: "2024",
    images: [
      "/events/bauma/ev1.jpeg",
      "/events/bauma/ev2.jpeg",
      "/events/bauma/ev3.jpeg",
      "/events/bauma/ev4.jpeg",
      "/events/bauma/ev5.jpeg",
    ],
    description: "Meet us at Bauma CONEXPO India, the leading construction equipment trade fair. Discover our construction-grade fasteners and solutions."
  },
  {
    id: 9,
    title: "Auto Expo - The Components Show 2025",
    location: "Yashobhoomi, Dwarka, New Delhi",
    date: "2023",
    images: [
      "/events/auto-expo/ev1.jpeg",
      "/events/auto-expo/ev2.jpeg",
      "/events/auto-expo/ev3.jpeg",
      "/events/auto-expo/ev4.jpeg",
      "/events/auto-expo/ev5.jpeg",
      "/events/auto-expo/ev6.jpeg",
      "/events/auto-expo/ev7.jpeg",
      "/events/auto-expo/ev8.jpeg",
      "/events/auto-expo/ev9.jpeg"
    ],
    description: "Experience our automotive fastening solutions at India's largest automotive components exhibition."
  }
];

export default function EventsPage() {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + events.length) % events.length);
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedEvent(null);
      setCurrentImageIndex(0);
    }, 300);
  };

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedEvent.images.length);
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-blue-900 text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/events/main.jpg')" }}
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <Fade triggerOnce>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Media</h1>
          </Fade>
          <Fade triggerOnce delay={200}>
            <p className="text-xl md:text-2xl">Join us at upcoming industry events</p>
          </Fade>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Fade triggerOnce>
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Upcoming Events</h2>
          </Fade>

          {/* Featured Upcoming Events */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.slice(0, 2).map((event, index) => (
                <Fade key={event.id} triggerOnce delay={index * 100}>
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                    <div className="relative h-[400px] group">
                      <img 
                        src={event.images[0]} 
                        alt={event.title}
                        className="w-full h-full object-cover filter blur-sm transition-all duration-500 group-hover:blur-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 whitespace-nowrap overflow-hidden text-ellipsis">{event.title}</h3>
                        <div className="flex items-center space-x-6 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-6 h-6 mr-2" />
                            <span className="text-lg">{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-6 h-6 mr-2" />
                            <span className="text-lg">{event.location}</span>
                          </div>
                        </div>
                        <div className="bg-blue-600/90 inline-block px-4 py-2 rounded-lg mb-4">
                          <span className="font-semibold">Booth: {event.booth}</span>
                        </div>
                        <p className="text-lg mb-6 line-clamp-3">{event.description}</p>
                        <button 
                          onClick={() => openModal(event)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center text-lg transform transition-all duration-300 hover:scale-105 hover:translate-x-2 group"
                        >
                          <span className="relative overflow-hidden">
                            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                              View Details
                            </span>
                            <span className="absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                              View Details
                            </span>
                          </span>
                          <ArrowRight className="ml-2 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>

          {/* Past Events Section */}
          <Fade triggerOnce>
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Past Events</h2>
          </Fade>

          {/* Event Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(2).map((event, index) => (
              <Fade key={event.id} triggerOnce delay={index * 100}>
                <div 
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                  onClick={() => openModal(event)}
                >
                  <div className="relative h-48">
                    <img 
                      src={event.images[0]} 
                      alt={event.title}
                      className="w-full h-full object-cover filter blur-sm transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3 transform transition-transform duration-300 hover:scale-110">
                        <ArrowRight className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-600 font-semibold">{event.date}</span>
                      {event.booth && <span className="text-gray-600 text-sm">{event.booth}</span>}
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Event Modal with Gallery */}
      {isModalOpen && selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Main Image */}
            <div className="relative h-[400px]">
              <img 
                src={selectedEvent.images[currentImageIndex]} 
                alt={`${selectedEvent.title} - ${currentImageIndex + 1}`}
                className="w-full h-full object-contain bg-gray-100"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Image Navigation */}
              {selectedEvent.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 p-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 p-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Event Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{selectedEvent.title}</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{selectedEvent.location}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{selectedEvent.description}</p>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {selectedEvent.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
                      currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${selectedEvent.title} - Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {selectedEvent.booth && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900 font-semibold">Booth Information</p>
                  <p className="text-blue-800">{selectedEvent.booth}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 