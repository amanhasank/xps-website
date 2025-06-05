import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/" },
        { name: "Our Products", path: "/products" },
        { name: "Manufacturing", path: "/manufacturing" },
        { name: "Plant Gallery", path: "/plant-gallery" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "Socket Head Cap Screws", path: "/products#socket-head-cap-screws" },
        { name: "Button Head Cap Screws", path: "/products#button-head-cap-screws" },
        { name: "Hex Head Cap Screws", path: "/products#hex-head-cap-screws" },
        { name: "Special Fasteners", path: "/products#special-fasteners" },
        { name: "View All Products", path: "/products" },
      ],
    },
    {
      title: "More",
      links: [
        { name: "Events", path: "/events" },
        { name: "Careers", path: "/careers" },
      ],
    },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://facebook.com", 
      label: "Facebook",
      color: "hover:text-blue-500",
      bgColor: "hover:bg-white/10"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com", 
      label: "Twitter",
      color: "hover:text-sky-400",
      bgColor: "hover:bg-white/10"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com", 
      label: "Instagram",
      color: "hover:text-pink-500",
      bgColor: "hover:bg-white/10"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com", 
      label: "LinkedIn",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-white/10"
    },
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 98179 07015" },
    { icon: Mail, text: "info@xpsindia.com" },
    { icon: MapPin, text: "Xtra Precision Screws Private Limited 57 KM Milestone, Delhi Rohtak Road, Village Gandhra, Tehsil Sampla, Rohtak - 124501 Haryana, India" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info with Logo */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:items-start"
            >
              <motion.img
                src="/logo.png"
                alt="XPS Logo"
                className="w-40 h-auto mb-3 bg-white rounded-lg p-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <p className="text-gray-300 text-sm text-center md:text-left">
                Leading manufacturer of high-quality fasteners and special components for various industries.
              </p>
            </motion.div>
            <div className="space-y-2">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-3"
            >
              <h3 className="text-base font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} XPS India. All rights reserved.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-1.5 rounded-full ${social.bgColor} ${social.color} transition-all duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 