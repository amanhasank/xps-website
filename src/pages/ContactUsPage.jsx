import React from 'react';

export default function ContactUsPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-900">Get in Touch</h1>
      <p className="text-lg text-center mb-12 text-gray-700">
        We are eager to hear from you. Please fill out the form below or use the contact details provided.
      </p>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Form */}
        <div className="md:w-1/2">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Phone Number (Optional)" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input type="text" id="company" name="company" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Company (Optional)" />
            </div>
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-gray-700">Product Requirement</label>
              <select id="product" name="product" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select a requirement</option>
                <option value="bolts">Bolts</option>
                <option value="nuts">Nuts</option>
                <option value="washers">Washers</option>
                <option value="custom">Custom Requirement</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..."></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Send Message
              </button>
            </div>
          </form>
          {/* Success message placeholder */}
          <div id="success-message" className="mt-4 text-green-600 text-center hidden">
            Thank you for your message! We will get back to you shortly.
          </div>
        </div>

        {/* Contact Details */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Contact Information</h3>
            <p className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Phone: <a href="tel:+918396941941" className="ml-2 text-blue-600 hover:underline">+91 9254012456</a>
            </p>
            <p className="flex items-center text-gray-700 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email: <a href="mailto:sales@xpsindia.com" className="ml-2 text-blue-600 hover:underline">sales@xpsindia.com</a>
            </p>
            <p className="flex items-start text-gray-700 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Address: <span className="ml-2">Xtra Precision Screws Private Limited
57 KM Milestone, Delhi Rohtak Road, Village Gandhra, Tehsil Sampla, Rohtak - 124501 Haryana, India</span>
            </p>
          </div>

          {/* Google Maps Embed */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Our Location</h3>
            <div className="w-full h-64 bg-gray-200 rounded-md shadow-md flex items-center justify-center text-gray-500">
              {/* Placeholder for Google Maps iframe */}
               <iframe
                title="XPS India Location"
                className="w-full h-full border-0 rounded-md shadow-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1413201571656!2d76.60383881513015!3d28.900544684802364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912a5abf8fcbfcd%3A0xb7d3f0cf89e6572a!2sXPS%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* WhatsApp and Call Now Buttons */}
          <div className="flex flex-col space-y-4">
             {/* WhatsApp Button */}
            <a
              href="https://wa.me/918396941941"
              className="flex items-center justify-center py-3 px-6 rounded-md shadow-sm text-lg font-semibold text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.165c1.04-.51 2.104-.947 3.174-1.324C6.03 16.837 7.337 17.52 8.545 17.52c1.427 0 2.503-.493 3.435-1.424.932-.932 1.425-2.008 1.425-3.436 0-1.427-.493-2.504-1.425-3.436-.932-.931-2.008-1.424-3.435-1.424-1.428 0-2.504.493-3.436 1.424-.931.932-1.424 2.009-1.424 3.436 0 .781.201 1.593.62 2.303l-1.585 5.78zm6.02-5.033c-.586-.294-1.183-.61-1.77-.945l-.294.146-1.44 5.246 5.328-1.39c.335.587.67 1.174 1.005 1.761l.295-.147c.587-.294 1.174-.61 1.761-.945L15.79 19.97l-5.246 1.44c-.586-.335-1.173-.67-1.76-1.006l-.147.295zm9.978-11.93c-1.89-1.891-4.959-1.891-6.851 0-1.89 1.891-1.89 4.96 0 6.851s4.96 1.89 6.851 0c1.89-1.891 1.89-4.96 0-6.851z"/>
              </svg>
              WhatsApp Us
            </a>

             {/* Call Now Button (Visible on Mobile) */}
            <a
              href="tel:+918396941941"
              className="md:hidden flex items-center justify-center py-3 px-6 rounded-md shadow-sm text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 2.946a1 1 0 01-.542 1.06l-1.517.759a3.5 3.5 0 001.471 1.471l.759-1.517a1 1 0 011.06-.542l2.946.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.823 18 2 12.177 2 5V3z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 