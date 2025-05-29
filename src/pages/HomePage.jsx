import React from "react";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Welcome to XPS India</h1>
        <p className="text-lg text-blue-800">Manufacturers of High-Tensile Fasteners</p>
        <a href="/products">
          <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded">
            Explore Products
          </button>
        </a>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">About Us</h2>
        <p className="text-base leading-relaxed">
          XPS India is a leading manufacturer of high-strength fasteners with over 50 years
          of experience in supplying OEMs globally. We are ISO 9001 certified and specialize in
          manufacturing fasteners as per DIN, ISO, ANSI, and BS standards.
        </p>
      </section>

      {/* Company Introduction Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 text-gray-700">
            <p className="leading-relaxed">
              We are pleased to introduce ourselves as the manufacturers of high tensile fasteners under the brand name of "XPS" and are supplying our products throughout India to many consumers directly as well as through our strong dealers network. XPS specializes in the production of all kinds of high strength fasteners. The products are in conformity with GB, ISO, DIN, AS, ANSL, BS etc.
            </p>
            
            <p className="leading-relaxed">
              Based firmly on ISO9001 quality system standards, the company operates each link from raw materials processing to the production process in strict accordance with the procedures and boasts well-qualified quality inspectors and perfect testing equipment's, which take effective control on the production process to ensure product quality. With the experience of 50 years in the fastener industry, XPS management thrives on it's know how capabilities of dealing & handling big OEM's in all the sectors like 2-wheeler, commercial vehicle manufacturer, heavy engineering industries etc.. Our team is well experienced and expert in handling of supply chain management.
            </p>

            <p className="leading-relaxed">
              From our years in the business, we understand that many of our customers are working to meet tight deadlines, or have a very precise production schedule that they need to adhere to in order to meet their objectives. We are able to work flexibly, and we have the capacity to meet short turnaround times. We will even ship your components to you when we are finished working on them, ensuring they make it to you exactly when required.
            </p>

            <p className="leading-relaxed">
              We provide a full spectrum of services that can give your components the characteristics they need for your intended use. We are able to undertake multiple processes, and can also provide customized solutions to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-blue-900">International Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">ISO</div>
              <div className="text-sm text-gray-600 text-center">9001:2015</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">ISO</div>
              <div className="text-sm text-gray-600 text-center">45001:2018</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">ISO</div>
              <div className="text-sm text-gray-600 text-center">14001:2015</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">IATF</div>
              <div className="text-sm text-gray-600 text-center">16949:2016</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">CE</div>
              <div className="text-sm text-gray-600 text-center">Certification</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">ROHS</div>
              <div className="text-sm text-gray-600 text-center">Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-blue-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">Our Products</h2>
        <div className="text-center">
          <a href="/products">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">View Full Product Range</button>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">Contact Us</h2>
        <p className="mb-2">📍 Plot-161, HSIIDC, I.E. Kutana, Hissar Road, Rohtak, Haryana 124001, India</p>
        <p className="mb-2">📞 +91 8396 941 941</p>
        <p className="mb-8">📧 sales@xpsindia.com</p>
        <div className="w-full h-64">
          <iframe
            title="XPS India Location"
            className="w-full h-full border-0 rounded-md shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1413201571656!2d76.60383881513015!3d28.900544684802364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912a5abf8fcbfcd%3A0xb7d3f0cf89e6572a!2sXPS%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}