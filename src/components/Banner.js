import React, { useState, useEffect } from "react";
import Image from "../assets/1.jpg";
import Background from "../assets/2.png";

const Banner = () => {
  const slides = [
    { title: "PORCELAIN", subtitle1: "QUARTZ", subtitle2: "NATURAL" },
    { title: "UNEARTH", subtitle1: "STONE", subtitle2: "BEAUTY" },
    { title: "PREMIUM", subtitle1: "PORCELAIN", subtitle2: "TILE & SLAB" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [fade, setFade] = useState(false);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFade(false);
    }, 300);
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(false);
    }, 300);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const goToSlide = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(false);
    }, 300);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const backgroundOffsetX = (mousePosition.x / window.innerWidth) * -1;
  const backgroundOffsetY = (mousePosition.y / window.innerHeight) * -1;
  const imageOffsetX = (mousePosition.x / window.innerWidth) * 1;
  const imageOffsetY = (mousePosition.y / window.innerHeight) * 1;

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="w-full h-[98vh] max-w-7xl mx-auto flex justify-center items-center relative overflow-hidden font-thin">
        <img
          src={Background}
          alt="background"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[300px] lg:w-[1200px] lg:h-[800px] md:w-[840px] md:h-[560px] sm:w-[600px] sm:h-[400px] opacity-90"
          style={{
            transform: `translate(${backgroundOffsetX}%, ${backgroundOffsetY}%)`,
          }}
        />
        <img
          src={Image}
          alt="Porcelain and quartz stone showcase"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 w-[270px] h-[170px] lg:w-[700px] lg:h-[440px] md:w-[500px] md:h-[314px] sm:w-[318px] sm:h-[200px] drop-shadow-2xl"
          style={{
            transform: `translate(${imageOffsetX}%, ${imageOffsetY}%)`,
          }}
        />
        <div className="absolute text-white flex flex-col items-center justify-center image-animate-fadeInUP glass-dark backdrop-blur-md border border-luxury-gold/20 shadow-luxury-lg w-[195px] h-[175px] lg:w-[500px] lg:h-[450px] md:w-[350px] md:h-[320px] sm:w-[233px] sm:h-[210px]">
          <p
            className={`lg:text-6xl md:text-4xl sm:text-2xl text-xl lg:py-2 py-1 transition-opacity duration-300 font-display font-bold tracking-tight ${
              fade ? "opacity-0" : "opacity-100"
            } text-luxury-gold drop-shadow-lg`}
          >
            {slides[currentSlide].title}
          </p>
          <p
            className={`lg:text-6xl md:text-4xl sm:text-2xl text-xl lg:py-2 py-1 transition-opacity duration-300 font-display font-bold tracking-tight ${
              fade ? "opacity-0" : "opacity-100"
            } text-white drop-shadow-lg`}
          >
            {slides[currentSlide].subtitle1}
          </p>
          <p
            className={`lg:text-6xl md:text-4xl sm:text-2xl text-xl lg:py-2 py-1 transition-opacity duration-300 font-display font-bold tracking-tight ${
              fade ? "opacity-0" : "opacity-100"
            } text-luxury-gold-light drop-shadow-lg`}
          >
            {slides[currentSlide].subtitle2}
          </p>
          {["PORCELAIN", "PREMIUM"].includes(slides[currentSlide].title) && (
            <button className="bg-gradient-gold text-luxury-dark lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 lg:my-6 md:my-4 sm:my-2 font-semibold rounded-full hover:shadow-glow transition-all duration-300 transform hover:scale-105 border-2 border-luxury-gold shadow-luxury">
              See Products
            </button>
          )}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-5xl px-4 hover:text-luxury-gold transition-all duration-300 hover:scale-125 backdrop-blur-sm bg-black/20 rounded-r-full"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-5xl px-4 hover:text-luxury-gold transition-all duration-300 hover:scale-125 backdrop-blur-sm bg-black/20 rounded-l-full"
            onClick={nextSlide}
          >
            &gt;
          </button>
          <div className="absolute lg:bottom-5 md:bottom-3 sm:bottom-2 bottom-1 flex space-x-3">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  currentSlide === index 
                    ? "bg-luxury-gold shadow-glow scale-125" 
                    : "bg-gray-400/50 hover:bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
