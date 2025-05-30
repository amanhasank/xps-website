import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { ReactTyped } from "react-typed";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/slide1.png",
    typedStrings: [
      "XPS - Biggest Manufacturer",
      "One Stop"
    ],
    subtitle: "High-tensile fasteners for every industry",
  },
  {
    image: "/slide2.png",
    typedStrings: [
      "Quality and Precision",
      "Certified and Trusted."
    ],
    subtitle: "Delivering excellence for 50+ years",
  },
  {
    image: "/slide3.png",
    typedStrings: [
      "Innovation in Fasteners"
    ],
    subtitle: "Custom solutions for every need",
  },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 shadow hover:bg-blue-800 transition"
      onClick={onClick}
      aria-label="Next Slide"
      type="button"
    >
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 shadow hover:bg-blue-800 transition"
      onClick={onClick}
      aria-label="Previous Slide"
      type="button"
    >
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  );
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [showText, setShowText] = useState(true);
  const timeoutRef = useRef();
  const sliderRef = useRef();

  const settings = {
    dots: false, // Hide default dots
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => {
      setShowText(false);
    },
    afterChange: (index) => {
      setCurrent(index);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setShowText(true), 500);
    },
  };

  useEffect(() => {
    setShowText(true);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <img
              src={slide.image}
              alt="slide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
              {showText && (
                <>
                  <ReactTyped
                    strings={slide.typedStrings}
                    typeSpeed={60}
                    backSpeed={40}
                    backDelay={1200}
                    loop
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-orange-500 mb-4 drop-shadow-lg animate-fadeInUp"
                  />
                  <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white font-semibold animate-fadeInUp drop-shadow-lg mt-2">
                    {slide.subtitle}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </Slider>
      {/* Fixed Custom Dots */}
      <div className="absolute md:bottom-6 bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20 pointer-events-auto backdrop-blur-sm">
        {slides.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => sliderRef.current.slickGoTo(dotIdx)}
            className="w-6 h-6 flex items-center justify-center p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-full bg-transparent"
            aria-label={`Go to slide ${dotIdx + 1}`}
            style={{ touchAction: "manipulation" }}
          >
            <span
              className={`w-3 h-3 rounded-full shadow ${
                current === dotIdx
                  ? "bg-blue-600/80 border-2 border-blue-600"
                  : "bg-white/60 border-2 border-blue-200"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
} 