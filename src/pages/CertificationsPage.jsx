import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const certifications = [
  { src: '/logos/iso-9001.png', title: 'ISO', subtitle: '9001:2015', alt: 'ISO 9001:2015 Certified' },
  { src: '/logos/iso-45001.png', title: 'ISO', subtitle: '45001:2018', alt: 'ISO 45001:2018 Certified' },
  { src: '/logos/iso-14001.png', title: 'ISO', subtitle: '14001:2015', alt: 'ISO 14001:2015 Certified' },
  { src: '/logos/iatf-16949.png', title: 'IATF', subtitle: '16949:2016', alt: 'IATF 16949:2016 Certified' },
  { src: '/logos/ce.png', title: 'CE', subtitle: 'Certification', alt: 'CE Certified' },
  { src: '/logos/rohs.png', title: 'ROHS', subtitle: 'Compliance', alt: 'ROHS Compliant' },
];

const CertificationsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const openModal = (img, alt) => {
    setModalImg(img);
    setModalAlt(alt);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg('');
    setModalAlt('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <Fade triggerOnce>
          <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-14">
            Our International Certifications
          </h2>
        </Fade>

        {/* Scrollable card container for mobile and grid for larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Fade key={index} triggerOnce delay={index * 100}>
              <div
                className="bg-white hover:shadow-xl transition-transform transform hover:scale-105 rounded-xl p-6 flex flex-col items-center border border-gray-200 cursor-pointer"
                onClick={() => openModal(cert.src, cert.alt)}
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-20 h-20 object-contain mb-4 transition duration-300"
                />
                <div className="text-2xl font-bold text-blue-600 mb-1">{cert.title}</div>
                <div className="text-sm text-gray-600 text-center">{cert.subtitle}</div>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-2xl relative max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-gray-600 hover:text-gray-800 text-2xl"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={modalImg}
              alt={modalAlt}
              className="w-full h-64 object-contain mb-4"
            />
            <div className="text-xl font-semibold text-center text-blue-800">{modalAlt}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationsPage;
