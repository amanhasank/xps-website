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
      description: 'XPS source material directly from high quality steel manufacturers. All the material is thoroughly inspected before processing.',
      image: '/manufacturing/raw.png',
      detailedDescription: `XPS sources material directly from high quality steel manufacturers. All the material is thoroughly inspected before processing. Each grade is marked and provided with a proper identification tag. After the inspection the material is given for processing (annealing & drawing).

Wire Drawing is carried out to get the required wire size for cold forging the parts depending upon the size of fasteners to be manufactured. Each lot is identified with a unique heat number. The lots are 100% checked for chemical composition (by Spectrometer), metallurgical & mechanical Properties. All records are maintained and can be provided on demand.`,
      images: [
        '/manufacturing/raw.png',
        '/manufacturing/DSC_8435.jpg',
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
      description: 'It is the process of forming the shape of the metal in hot condition into a predetermined shape. A metal is heated to the proper temperature by high-speed electric induction before it is inserted into a metal piece.',
      image: '/manufacturing/hot.png',
      detailedDescription: `Forging is the process of deforming metal into a predetermined shape using certain tools and equipment—deformation is accomplished using hot, cold, or even warm forging processes. It is the basic operation in most bolts and screws to give their desired shape. XPS has the capability to develop and forge highly special parts, Bolts/Screws/Studs etc. along with the vast range of standard fasteners.

Hot Forging is the process of forming the shape of the metal in hot condition into a predetermined shape. A metal is heated to the proper temperature by high-speed electric induction before it is inserted into a metal piece. Bolts are hot forged when the material is too large in diameter or it is not malleable enough.

* Below M27 we manufacture by cold forging`,
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
      description: 'It is the process of forming the shape of a metal piece by external forces in ambient conditions. It is normally done at room temperature or near room temperature.',
      image: '/manufacturing/coldf.png',
      detailedDescription: `Forging is the process of deforming metal into a predetermined shape using certain tools and equipment—deformation is accomplished using hot, cold, or even warm forging processes. It is the basic operation in most bolts and screws to give their desired shape. XPS has the capability to develop and forge highly special parts, Bolts/Screws/Studs etc. along with the vast range of standard fasteners.

Cold Forging is the process of forming the shape of a metal piece by external forces in ambient conditions. It is normally done at room temperature or near room temperature. At XPS, we do the cold forging on our fully automatic high speed multi station bolt formers. Our capacity includes a wide range of High Tensile Fasteners.

* Above M24 we manufacture by hot forging`,
      images: [
        '/manufacturing/coldf.png',
        '/manufacturing/cold1.png',
        '/manufacturing/cold2.png',
        '/manufacturing/cold.png',
        '/manufacturing/DSC_8432.jpg',
        '/manufacturing/DSC_8430.jpg'
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
      description: 'XPS is capable of doing many second operation in House',
      image: '/manufacturing/s6.png',
      detailedDescription: 'XPS is capable of doing many second operation in House',
      images: [
        '/manufacturing/s6.png',
        '/manufacturing/s2.jpg',
        '/manufacturing/s3.jpg',
        '/manufacturing/s5.jpg',
        '/manufacturing/s1.png',
        '/manufacturing/s4.jpg',
        '/manufacturing/DSC_8230.jpg'
      ],
      specifications: [
        {
          title: 'OPERATIONS',
          value: 'CNC, DRILLING, BORING, GRINDING, ROLLING, MILLING'
        }
      ]
    },
    {
      id: 5,
      title: 'HEAT TREATMENT',
      description: 'High-strength or heat-treated fasteners are often required to handle the tensile, shear or combination loads on the bolted joints in demanding applications.',
      image: '/manufacturing/heattreatment.jpeg',
      detailedDescription: `High-strength or heat-treated fasteners are often required to handle the tensile, shear or combination loads on the bolted joints in demanding applications. Many demanding applications require high-strength fasteners in order to handle high tensile and shear stresses generated by the applied loads on the bolted or fastened joint.

The Heat Treatment Department conducts hardening and tempering to ensure that the fasteners meet the required strength and hardness class. This is needed to prevent unacceptable safety risks in the application of the fasteners. The defining characteristic for product quality is core hardness. The requirement for this characteristic is that the product attains, at a minimum, 90 percent martensite grain structures.

At XPS, heavy investment has been done to install the latest and state of the art continuous furnace to ensure that the desired results are achieved every time. Regular maintenance and check-ups are done to maintain the same quality. All the data are stored and can be shown on demand.`,
      images: [
        '/manufacturing/heattreatment.jpeg',
        '/manufacturing/DSC_8195.jpg' 
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
      title: 'SURFACE TREATMENT',
      description: 'Surface Treatment in Fasteners is done to prevent it from Corrosion and give artistic look.',
      image: '/manufacturing/surface.png',
      detailedDescription: `Surface Treatment in Fasteners is done to prevent it from Corrosion and give artistic look.

We provide following surface treatment as per customer requirement:

• Zinc and Manganese Phosphate Coating on Automatic Phosphating Line
• Alkaline Zinc Plating, Trivalent Chrome & Hexavalent Chrome in White, Blue, Yellow, Olive Green & Black Passivation on an Automatic Plating Line
• Cadmium Plating / Nickel Plating / Anodizing
• Zinc Iron & Zinc Nickel Plating
• Geomet, Dacromet, Magni, Zinc Flake Coating
• Hot Dip Galvanizing
• MoS2 Coating
• Loctite (Note: It is not surface Finish)`,
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
      title: 'QUALITY',
      description: 'XPS conducts rigorous quality assurance testing on all the fasteners it produces. Fasteners and Machine components are tested against stringent quality measures to guarantee performance and compliance for all the metrics based on industry standards or specific requirements.',
      image: '/manufacturing/quality.png',
      detailedDescription: `XPS conducts rigorous quality assurance testing on all the fasteners it produces. Fasteners and Machine components are tested against stringent quality measures to guarantee performance and compliance for all the metrics based on industry standards or specific requirements.

XPS has a QUALITY PLAN that ASSURES all parts will meet and exceed customer requirements. Our quality staff, with many years of experience in quality control and engineering, has complete understanding of all standards and specifications. Together with our "State of the Art" fastener testing equipment, you can be ASSURED of receiving the PRECISE, QUALITY TESTED fastener for your specific application.

We can furnish Dimensional Inspection Reports, Physical and Chemical Reports, and Certificates of Compliance upon request.`,
      images: [
        '/manufacturing/quality.png',
        '/manufacturing/arrow.png',
        '/manufacturing/arrow2.png',
        '/manufacturing/DSC_8517.jpg',
        '/manufacturing/DSC_8508.jpg'
      ],
      specifications: [
        {
          title: 'QUALITY ASSURANCE',
          value: '100% TESTING & CERTIFICATION'
        }
      ]
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

            {manufacturingProcesses.map((process, index) => (
              <Fade 
                key={process.id} 
                direction={index % 2 === 0 ? "left" : "right"}
                triggerOnce={true}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-center gap-8 py-12 px-6 my-8 group">
                  {/* Step Number */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:block hidden">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      {process.id}
                    </div>
                  </div>

                  {/* Process Card */}
                  <div
                    className={`w-full md:w-5/6 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 cursor-pointer`}
                    onClick={() => openModal(process)}
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
                    }}
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
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {process.id}
                          </div>
                          <h2 className="text-2xl font-semibold text-blue-900">{process.title}</h2>
                        </div>
                        <h2 className="text-2xl font-semibold text-blue-900 mb-4 hidden md:block">{process.title}</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">{process.description}</p>
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          Learn More
                          <ChevronRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
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
                  {selectedProcess.specifications && (
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