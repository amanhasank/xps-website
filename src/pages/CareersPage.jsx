import React from "react";
import { Mail, Phone } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section with Image */}
      <section
        className="relative h-[33vh] md:h-[40vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/careers-hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg animate-fadeInDownCareers">Career & CSR</h1>
          <p className="text-xl md:text-2xl font-semibold drop-shadow-lg animate-fadeInUpCareers" style={{ animationDelay: '0.2s' }}>Join Our Team at XPS India</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              In order to satisfy the steadily growing requirements of our global technology group, we rely on experienced, committed, and motivated employees. We are thoroughly familiar with numerous industries around the world and offer our staff a wide range of professional prospects. In order to offer our customers the best possible solutions, we attach great importance to the selective development of our employees. For this purpose, we offer them a wide selection of in-house training and continuing education opportunities.
            </p>

            <p>
              Are you prepared to engage in a professional career with Xtra Precision Screws Pvt. Ltd. as your partner? We offer you ideal opportunities to apply your skills and wide latitude to design your professional career. Pioneer always welcome young, dynamic, ground to earth hard workers and dedicated for their growth. We look forward to hearing from you.
            </p>

            <p>
              We invite you to become part of the action in continuing of our successful corporate history. We are now having various recruitments available in All over India.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Contact Us</h2>
            <p className="text-lg mb-4 text-gray-700">We look forward to receiving your resume:</p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a href="tel:+919254071600" className="hover:text-blue-600">
                  +91 9254 071 600
                </a>
              </div>

              <div className="flex items-center space-x-3 text-gray-700">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a href="mailto:hr@xpsindia.com" className="hover:text-blue-600">
                  hr@xpsindia.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 