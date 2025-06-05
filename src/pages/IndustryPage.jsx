import React from "react";
import { Fade } from "react-awesome-reveal";

const industries = [
  { name: "AGRICULTURE", image: "/industry/ind1.png" },
  { name: "AUTOMOBILE", image: "/industry/ind2.png" },
  { name: "DEFENCE", image: "/industry/ind3.jpg" },
  { name: "AEROSPACE", image: "/industry/ind4.jpg" },
  { name: "TEXTILE MACHINERY", image: "/industry/ind5.jpg" },
  { name: "RAILWAYS", image: "/industry/ind6.jpg" },
  { name: "ENGINEERING", image: "/industry/ind7.jpg" },
  { name: "MEDICAL ENGINEERING", image: "/industry/ind8.jpg" },
  { name: "OIL & GAS EQUIPMENTS", image: "/industry/ind9.jpeg" },
  { name: "PLASTICS PROCESSING", image: "/industry/ind10.jpg" },
  { name: "ELECTRICAL & ELECTRONICS", image: "/industry/ind11.jpg" },
  { name: "EARTH MOVING EQUIPMENTS", image: "/industry/ind12.png" },
  { name: "TELECOM EQUIPMENT", image: "/industry/ind13.jpg" },
  { name: "FMCG", image: "/industry/ind14.png" },
  { name: "INFRASTRUCTURE SECTOR", image: "/industry/ind15.jpg" },
];

export default function IndustryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="container mx-auto px-6 py-16">
        <Fade triggerOnce={true}>
          <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Industries We Serve</h1>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Fade key={industry.name} triggerOnce={true} delay={index * 100}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <div className="relative h-[200px] bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{industry.name}</h3>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </main>
  );
} 