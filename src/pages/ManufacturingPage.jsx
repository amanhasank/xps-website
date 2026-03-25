import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

export default function ManufacturingPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const manufacturingProcesses = [
    {
      id: 1,
      title: 'RAW MATERIAL & WIRE PROCESSING',
      description: 'Steel sourced directly from reputed manufacturers, 100% inspected for chemical, metallurgical, and mechanical properties before processing.',
      image: '/manufacturing/DSC_8435.jpg',
      detailedDescription: 'XPS sources high-quality steel from reputed manufacturers (JSW, JSPL). Every lot is inspected for chemical composition (by Spectrometer), metallurgical and mechanical properties, and tagged with a unique heat number. Wire drawing then provides the exact wire size required for cold forging. All records are maintained and available on demand.',
      images: [
        '/manufacturing/DSC_8434.jpg'
      ],
      specifications: [
        {
          title: 'QUALITY ASSURANCE',
          value: '100% INSPECTION'
        }
      ]
    },
    {
      id: 2,
      title: 'HOT FORGING',
      description: 'Metal is heated by high-speed electric induction and shaped under force into the required form. Used for fasteners M27 and above.',
      image: '/manufacturing/hot.png',
      detailedDescription: 'Hot Forging shapes metal by heating it to the proper temperature using high-speed electric induction before pressing it into a die. This method is used for larger diameter fasteners (M27 and above) that are too large or insufficiently malleable for cold forging. XPS has the capability to forge highly special parts — bolts, screws, studs — in addition to the standard range.',
      images: [
        '/manufacturing/forging.png'
      ],
      specifications: [
        {
          title: 'HOT FORGING',
          value: 'M27 AND ABOVE'
        }
      ]
    },
    {
      id: 3,
      title: 'COLD FORGING',
      description: 'Metal is shaped at room temperature on fully automatic high-speed multi-station bolt formers. Used for fasteners M3 to M24.',
      image: '/manufacturing/DSC_8432.jpg',
      detailedDescription: 'Cold Forging shapes metal at room temperature using external compressive forces on fully automatic, high-speed multi-station bolt formers. This process delivers superior grain flow, dimensional accuracy, and surface quality. XPS produces a wide range of high-tensile fasteners (M3 to M24) by cold forging, with hot forging used above M24.',
      images: [
        '/manufacturing/cold.png',
        '/manufacturing/DSC_8432.jpg'
      ],
      specifications: [
        {
          title: 'COLD FORGING',
          value: 'M3 TO M24'
        }
      ]
    },
    {
      id: 4,
      title: 'SECONDARY OPERATIONS',
      description: 'In-house CNC, drilling, boring, grinding, rolling, and milling for special fastener requirements.',
      image: '/manufacturing/DSC_8394.jpg',
      detailedDescription: 'XPS is capable of performing many secondary operations in-house, including CNC machining, drilling, boring, grinding, thread rolling, and milling — enabling complete control over special and custom fastener requirements without outsourcing.',
      images: [
        '/manufacturing/DSC_8230.jpg',
        '/manufacturing/DSC_8394.jpg'
      ],
      specifications: [
        {
          title: 'OPERATIONS',
          value: 'CNC, DRILLING, BORING, GRINDING, ROLLING, MILLING'
        }
      ]
    },
    {
      id: 9,
      title: 'THREAD ROLLING',
      description: 'Threads are cold-formed by displacing metal between precision dies, producing stronger threads with superior surface finish.',
      image: '/manufacturing/DSC_8430.jpg',
      detailedDescription: 'Thread Rolling is a cold-forming process where threads are formed by pressing the fastener blank between two or three hardened dies. This displaces rather than cuts the material, resulting in threads with greater tensile strength, improved fatigue resistance, and a superior surface finish compared to cut threads.',
      images: [
        '/manufacturing/DSC_8430.jpg'
      ],
      specifications: [
        {
          title: 'PROCESS',
          value: 'COLD-FORMED ROLLED THREADS'
        }
      ]
    },
    {
      id: 5,
      title: 'HEAT TREATMENT',
      description: 'Hardening and tempering to achieve the required strength class, with minimum 90% martensite grain structure at the core.',
      image: '/manufacturing/DSC_8199.jpg',
      detailedDescription: `Heat Treatment is conducted to ensure fasteners meet the required strength and hardness class. XPS uses a state-of-the-art continuous furnace to achieve consistent results. The process attains a minimum of 90% martensite grain structure at the core — the key quality indicator for high-tensile fasteners. All heat treatment data is recorded and available on demand.`,
      images: [
        '/manufacturing/DSC_8199.jpg'
      ],
      specifications: [
        {
          title: 'QUALITY STANDARD',
          value: '90% MARTENSITE GRAIN STRUCTURES'
        }
      ]
    },
    {
      id: 6,
      title: 'SURFACE FINISHING',
      description: 'Applied to protect fasteners from corrosion and enhance appearance — multiple coating options available as per customer requirement.',
      image: '/manufacturing/surface.png',
      detailedDescription: `Surface finishing protects fasteners from corrosion and improves aesthetics. XPS offers a wide range of treatments on automatic plating and phosphating lines:

• Zinc & Manganese Phosphate Coating
• Alkaline Zinc Plating (White, Blue, Yellow, Olive Green & Black Passivation)
• Cadmium / Nickel Plating / Anodizing
• Zinc Iron & Zinc Nickel Plating
• Geomet, Dacromet, Magni, Zinc Flake Coating
• Hot Dip Galvanizing
• MoS2 Coating`,
      images: [
        '/manufacturing/surface.png'
      ],
      specifications: [
        {
          title: 'TREATMENT TYPES',
          value: 'MULTIPLE OPTIONS AVAILABLE'
        }
      ]
    },
    {
      id: 7,
      title: 'QUALITY CHECK',
      description: 'Rigorous 100% inspection of dimensional, physical, and chemical properties using state-of-the-art testing equipment.',
      image: '/manufacturing/DSC_8517.jpg',
      detailedDescription: `XPS conducts rigorous quality assurance on all fasteners produced — dimensional, physical, and chemical testing against industry standards or customer-specific requirements. Our experienced quality team uses state-of-the-art equipment to ensure every fastener meets specifications. Dimensional Inspection Reports, Physical & Chemical Reports, and Certificates of Compliance are available on request.`,
      images: [
        '/manufacturing/DSC_8517.jpg',
        '/manufacturing/arrow2.png'
      ],
      specifications: [
        {
          title: 'QUALITY ASSURANCE',
          value: '100% TESTING & CERTIFICATION'
        }
      ]
    },
    {
      id: 8,
      title: 'PACKING & DISPATCH',
      description: 'Fasteners are packed to maintain product integrity as per customer specifications and dispatched for timely delivery.',
      image: '/slide4.jpg',
      detailedDescription: 'All finished fasteners are carefully packed to maintain product integrity, labelled as per customer specifications, and dispatched through reliable logistics partners to ensure timely and safe delivery to the end customer.',
      images: [
        '/slide4.jpg'
      ],
      specifications: []
    }
  ];

  const openModal = (process) => {
    setSelectedProcess(process);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProcess(null);
  };

  const nextImage = () => {
    if (selectedProcess) {
      setCurrentImageIndex((prev) => 
        prev === selectedProcess.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (selectedProcess) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProcess.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <main className="overflow-hidden">
      {/* Enhanced Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/manufacturing/maufacturing.png')",
          backgroundPosition: `center ${scrollPosition * 0.5}px`,
        }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
          style={{
            opacity: 0.7 + (scrollPosition * 0.001),
          }}
        ></div>
        <div className="relative z-10 text-white">
          <Fade direction="up" duration={1000}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Manufacturing</h1>
          </Fade>
          <Fade direction="up" delay={300} duration={1000}>
            <p className="text-xl md:text-2xl text-gray-200">Excellence in Every Process</p>
          </Fade>
        </div>
      </section>

      {/* Manufacturing Processes Section */}
      <section className="py-12 px-6 relative">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/30 via-transparent to-transparent"></div>
        
        <div className="container mx-auto max-w-5xl relative">
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 md:block hidden">
              <div 
                className="absolute top-0 left-0 w-full bg-blue-500 transition-all duration-1000"
                style={{ height: `${Math.min(100, (scrollPosition - 300) / 5)}%` }}
              ></div>
            </div>

            {/* Render all processes except HOT FORGING and COLD FORGING */}
            {manufacturingProcesses.map((process, index) => {
              // HOT FORGING (id:2) and COLD FORGING (id:3) will be handled together
              if (process.id === 2) {
                // Render HOT FORGING and COLD FORGING in parallel
                const hotForging = process;
                const coldForging = manufacturingProcesses.find(p => p.id === 3);
                if (!hotForging || !coldForging) return null;
                // Add FORGING title above the parallel section
                return (
                  <>
                    <Fade triggerOnce>
                      <div className="w-full flex justify-center mb-8">
                        <h2 className="text-3l font-bold text-white tracking-wide px-10 py-4 rounded-2xl shadow-lg bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700">
                          FORGING
                        </h2>
                      </div>
                    </Fade>
                    <Fade key="hot-cold-forging" direction="up" triggerOnce={true} className="relative">
                      <div className="flex flex-col md:flex-row items-stretch gap-8 py-12 px-6 my-8">
                        {/* HOT FORGING */}
                        <div className="flex-1">
                          {/* Process Card */}
                          <div
                            className={`w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 cursor-pointer group hover:bg-blue-600/90`}
                            onClick={() => openModal(hotForging)}
                          >
                            <div className="flex flex-col gap-6 p-6">
                              {/* Image Section */}
                              <div className="w-full relative overflow-hidden rounded-lg">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                  src={hotForging.image}
                                  alt={hotForging.title}
                                  className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <Info className="w-12 h-12 text-white transform transition-transform duration-300 group-hover:scale-110" />
                                </div>
                              </div>
                              {/* Content Section */}
                              <div className="w-full">
                                <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300 group-hover:text-white">{hotForging.title}</h2>
                                <p className="leading-relaxed mb-6 transition-colors duration-300 group-hover:text-white">{hotForging.description}</p>
                                <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-blue-200 group-hover:text-blue-800 group-hover:from-blue-200 group-hover:to-blue-100">
                                  Learn More
                                  <ChevronRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* COLD FORGING */}
                        <div className="flex-1">
                          {/* Process Card */}
                          <div
                            className={`w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 cursor-pointer group hover:bg-blue-600/90`}
                            onClick={() => openModal(coldForging)}
                          >
                            <div className="flex flex-col gap-6 p-6">
                              {/* Image Section */}
                              <div className="w-full relative overflow-hidden rounded-lg">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                  src={coldForging.image}
                                  alt={coldForging.title}
                                  className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <Info className="w-12 h-12 text-white transform transition-transform duration-300 group-hover:scale-110" />
                                </div>
                              </div>
                              {/* Content Section */}
                              <div className="w-full">
                                <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300 group-hover:text-white">{coldForging.title}</h2>
                                <p className="leading-relaxed mb-6 transition-colors duration-300 group-hover:text-white">{coldForging.description}</p>
                                <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-blue-200 group-hover:text-blue-800 group-hover:from-blue-200 group-hover:to-blue-100">
                                  Learn More
                                  <ChevronRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </>
                );
              }
              // Skip rendering COLD FORGING here (handled above)
              if (process.id === 3) return null;
              // Render all other processes as before
              return (
                <Fade 
                  key={process.id} 
                  direction={index % 2 === 0 ? "left" : "right"}
                  triggerOnce={true}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8 py-12 px-6 my-8 group">
                    {/* Step Number */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                        {process.id}
                      </div>
                    </div>

                    {/* Process Card */}
                    <div
                      className={`w-full md:w-5/6 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 cursor-pointer group hover:bg-blue-600/90`}
                      onClick={() => openModal(process)}
                    >
                      <div className="flex flex-col md:flex-row gap-6 p-6">
                        {/* Image Section */}
                        <div className="w-full md:w-1/3 relative overflow-hidden rounded-lg">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <img
                            src={process.image}
                            alt={process.title}
                            className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Info className="w-12 h-12 text-white transform transition-transform duration-300 group-hover:scale-110" />
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-2/3">
                          <div className="flex items-center gap-4 mb-4 md:hidden">
                            <h2 className="text-2xl font-semibold text-blue-900">{process.title}</h2>
                          </div>
                          <h2 className="text-2xl font-semibold mb-4 hidden md:block transition-colors duration-300 group-hover:text-white">{process.title}</h2>
                          <p className="leading-relaxed mb-6 transition-colors duration-300 group-hover:text-white">{process.description}</p>
                          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-blue-200 group-hover:text-blue-800 group-hover:from-blue-200 group-hover:to-blue-100"
                            onClick={e => { e.stopPropagation(); openModal(process); }}>
                            Learn More
                            <ChevronRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProcess && (
        <div className="fixed inset-0 bg-gradient-to-b from-black/90 to-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <Fade>
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-500">
              <div className="relative">
                {/* Image Carousel */}
                <div className="relative">
                  <div className="relative bg-gradient-to-r from-gray-100 to-gray-50">
                    <img
                      src={selectedProcess.images[currentImageIndex]}
                      alt={selectedProcess.title}
                      className="w-full h-auto max-h-[60vh] object-contain"
                    />
                  </div>
                  {selectedProcess.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); previousImage(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>
                
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-blue-900 mb-6 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                    {selectedProcess.title}
                  </h2>
                  
                  {/* Specifications */}
                  {selectedProcess.specifications && selectedProcess.specifications.length > 0 && (
                    <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">{selectedProcess.specifications[0].title}</span>
                        <span className="text-blue-600 font-bold">{selectedProcess.specifications[0].value}</span>
                      </div>
                    </div>
                  )}

                  {/* Detailed Description */}
                  <div className="prose max-w-none">
                    {selectedProcess.detailedDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Image Navigation Dots */}
                  {selectedProcess.images.length > 1 && (
                    <div className="flex justify-center gap-3 mt-6">
                      {selectedProcess.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                            currentImageIndex === index 
                              ? 'bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Fade>
        </div>
      )}
    </main>
  );
}