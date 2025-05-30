import React from "react";
import { ChevronRight } from "lucide-react";

const industries = [
  { name: "AGRICULTURE", image: "/industry/agriculture.jpg" },
  { name: "AUTOMOBILE", image: "/industry/automobile.jpg" },
  { name: "DEFENCE", image: "/industry/defence.jpg" },
  { name: "AEROSPACE", image: "/industry/aerospace.jpg" },
  { name: "TEXTILE MACHINERY", image: "/industry/textile.jpg" },
  { name: "RAILWAYS", image: "/industry/railways.jpg" },
  { name: "ENGINEERING", image: "/industry/engineering.jpg" },
  { name: "MEDICAL ENGINEERING", image: "/industry/medical.jpg" },
  { name: "OIL & GAS EQUIPMENTS", image: "/industry/oilgas.jpg" },
  { name: "PLASTICS PROCESSING", image: "/industry/plastics.jpg" },
  { name: "ELECTRICAL & ELECTRONICS", image: "/industry/electrical.jpg" },
  { name: "EARTH MOVING EQUIPMENTS", image: "/industry/earthmoving.jpg" },
  { name: "TELECOM EQUIPMENT", image: "/industry/telecom.jpg" },
  { name: "FMCG", image: "/industry/fmcg.jpg" },
  { name: "INFRASTRUCTURE SECTOR", image: "/industry/infrastructure.jpg" },
];

export default function IndustryPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Industry</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-48 object-cover filter grayscale(100%) group-hover:grayscale(0) transition-filter duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-blue-600 group-hover:bg-blue-800 text-white py-3 px-4 flex items-center transition-colors duration-300">
                <ChevronRight className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold uppercase truncate">
                  {industry.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 