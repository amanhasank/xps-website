import React from "react";
import { Fade } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";

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
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-r from-blue-200 to-blue-50 opacity-30 -z-10 rounded-b-3xl"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <Fade triggerOnce>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-blue-900 tracking-wide">
            Industries We Serve
          </h1>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <Fade key={industry.name} triggerOnce delay={index * 100}>
              <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.03} transitionSpeed={1500}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
                  <div className="relative h-[220px] bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-3 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-500 tracking-wide text-center">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </Tilt>
            </Fade>
          ))}
        </div>
      </div>
    </main>
  );
}
