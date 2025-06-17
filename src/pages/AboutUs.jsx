import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="relative h-[33vh] md:h-[40vh] w-full bg-cover bg-center mb-12 rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: `url('/logo.png')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center"
          >
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-xl">
              About Us
            </motion.h1>
            <motion.p
              className="mt-4 text-lg sm:text-xl md:text-2xl font-medium drop-shadow-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Learn more about XPS India
            </motion.p>
          </motion.div>
        </div>

        {/* Content Section */}
        <motion.div
          className="bg-white shadow-xl rounded-3xl p-10 md:p-14 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We are pleased to introduce ourselves as the manufacturer of high tensile fasteners under the brand name of 'XPS' and supplying our products throughout India to many customers directly as well as through our strong dealers network. XPS specializes in the production of all kinds of high strength fasteners. The products are in conformity with DIN, ISO, GB, AS, ANSL, BS etc.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              With the experience of more than 50 years in the fastener industry, XPS management, thrives on it's know how capabilities of dealing & handling big OEM's in all the sectors like 2-wheeler, commercial vehicles, heavy engineering industries, Medical, Electrical & Electronics, Defence, Aerospace, Railways etc. Our team is well experienced and expert in handling of supply chain management. From our years in the business, we understand that many of our customers are working to meet tight deadlines, or have a very precise production schedule that they need to adhere to in order to meet their objectives. We are able to work flexibly, and we have the capacity to meet short turnaround times. We will even ship your components to you when we are finished working on them, ensuring they make it to you exactly when required.
            </p>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          className="bg-white shadow-xl rounded-3xl p-10 md:p-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Director Card */}
            {[{
              name: 'Sourabh Jain',
              role: 'Director Production and Finance',
              image: '/sourabh.jpeg'
            }, {
              name: 'Nikhlesh Jain',
              role: 'Director Sales and Marketing',
              image: '/nikhlesh.jpeg'
            }].map((director, idx) => (
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.3}
                scale={1.05}
                key={idx}
                className="bg-gradient-to-br from-white to-gray-100 shadow-md rounded-2xl p-6 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer flex flex-col items-center"
                  onClick={() => openModal(director.image)}
                >
                  <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 shadow-lg">
                    <img src={director.image} alt={director.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 hover:opacity-100 transition-opacity text-sm">View Full Image</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{director.name}</h3>
                  <p className="text-blue-600 font-medium">{director.role}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-xl overflow-hidden shadow-xl">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-2xl font-bold bg-gray-800 hover:bg-gray-700 p-2 rounded-full z-10"
            >
              &times;
            </button>
            <img src={selectedImage} alt="Full size" className="w-full h-full object-contain" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
