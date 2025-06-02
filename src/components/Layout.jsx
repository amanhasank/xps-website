import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <ScrollToTop />
      <Navigation />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
} 