import React from "react";
import { Mail, Phone } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Career & CSR</h1>
        <p className="text-lg text-blue-800">Join Our Team at XPS India</p>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg">
            <p className="leading-relaxed text-gray-700">
              In order to satisfy the steadily growing requirements of our global technology group, we rely on experienced, committed, and motivated employees. We are thoroughly familiar with numerous industries around the world and offer our staff a wide range of professional prospects. In order to offer our customers the best possible solutions, we attach great importance to the selective development of our employees. For this purpose, we offer them a wide selection of in-house training and continuing education opportunities.
            </p>

            <p className="leading-relaxed text-gray-700">
              Are you prepared to engage in a professional career with Xtra Precision Screws Pvt. Ltd. as your partner? We offer you ideal opportunities to apply your skills and wide latitude to design your professional career. Pioneer always welcome young, dynamic, ground to earth hard workers and dedicated for their growth. We look forward to hearing from you.
            </p>

            <p className="leading-relaxed text-gray-700">
              We invite you to become part of the action in continuing of our successful corporate history. We are now having various recruitments available in All over India.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">Contact Us</h2>
            <p className="text-lg mb-4">We look forward to resume from you at the following:</p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="tel:+919254071600" className="text-gray-700 hover:text-blue-600">
                  +91 9254 071 600
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:hr@xpsindia.com" className="text-gray-700 hover:text-blue-600">
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