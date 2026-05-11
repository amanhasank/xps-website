import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { manufacturingProcesses } from '../data/manufacturing';

export default function ManufacturingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const openModal = (process) => {
    setSelectedProcess(process);
    setCurrentPageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPreviousPage = () => {
    if (!selectedProcess) return;
    setCurrentPageIndex((prev) =>
      prev === 0 ? selectedProcess.pages.length - 1 : prev - 1
    );
  };

  const goToNextPage = () => {
    if (!selectedProcess) return;
    setCurrentPageIndex((prev) =>
      prev === selectedProcess.pages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-[55vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/manufacturing/rm-4.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="relative z-10 text-white px-4">
          <Fade direction="up" duration={1000} triggerOnce>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Manufacturing</h1>
          </Fade>
          <Fade direction="up" delay={300} duration={1000} triggerOnce>
            <p className="text-xl md:text-2xl text-gray-200">Excellence in Every Process</p>
          </Fade>
        </div>
      </section>

      {/* Process Grid */}
      <section className="container mx-auto px-6 py-12 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Manufacturing Process</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {manufacturingProcesses.map((process) => (
            <div
              key={process.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group flex flex-col"
            >
              <div className="relative h-[200px] bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={process.image}
                  alt={process.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative flex flex-col flex-grow">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{process.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{process.description}</p>
                <button
                  onClick={() => openModal(process)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 pulse-button mt-auto"
                >
                  <Eye className="w-5 h-5 eye-icon" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedProcess && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" onClick={closeModal}></div>

            <div className="relative w-full max-w-6xl transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
              <div className="absolute right-4 top-4 z-10">
                <button
                  onClick={closeModal}
                  className="rounded-full bg-gray-100 p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">{selectedProcess.name}</h2>

                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Image */}
                  <div className="space-y-4 flex flex-col items-center">
                    <div className="relative w-full flex flex-col items-center">
                      <div className="overflow-hidden rounded-xl w-full flex justify-center items-center bg-white border border-gray-100 shadow-sm" style={{ minHeight: 300, maxHeight: 340 }}>
                        <img
                          src={selectedProcess.pages[currentPageIndex].image}
                          alt={selectedProcess.pages[currentPageIndex].title}
                          className="w-full h-[320px] object-contain p-4 transition-all duration-300"
                        />
                      </div>
                      {selectedProcess.pages.length > 1 && (
                        <div className="flex items-center justify-center mt-4 gap-4">
                          <button
                            onClick={goToPreviousPage}
                            className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-blue-700 shadow"
                            aria-label="Previous slide"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <span className="text-gray-600 text-sm">
                            {currentPageIndex + 1} / {selectedProcess.pages.length}
                          </span>
                          <button
                            onClick={goToNextPage}
                            className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-blue-700 shadow"
                            aria-label="Next slide"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="rounded-lg bg-gray-50 p-5 h-full flex flex-col">
                      <h3 className="text-2xl font-bold text-blue-800 mb-4">
                        {selectedProcess.pages[currentPageIndex].title}
                      </h3>
                      <ul className="space-y-3">
                        {selectedProcess.pages[currentPageIndex].content.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-blue-600 font-bold">•</span>
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-xs text-gray-400">{currentPageIndex + 1} of {selectedProcess.pages.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
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
        .pulse-button:hover .eye-icon {
          animation: eye-blink 0.5s ease-in-out;
        }
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
