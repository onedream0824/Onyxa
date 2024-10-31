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
    <div className="bg-gray-50 ">
      <div className="w-full h-[98vh] max-w-7xl mx-auto flex justify-center items-center relative overflow-hidden font-thin">
        <img
          src={Background}
          alt="background"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[300px] lg:w-[1200px] lg:h-[800px] md:w-[840px] md:h-[560px] sm:w-[600px] sm:h-[400px]"
          style={{
            transform: `translate(${backgroundOffsetX}%, ${backgroundOffsetY}%)`,
          }}
        />
        <img
          src={Image}
          alt="image"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 w-[270px] h-[170px] lg:w-[700px] lg:h-[440px] md:w-[500px] md:h-[314px] sm:w-[318px] sm:h-[200px] "
          style={{
            transform: `translate(${imageOffsetX}%, ${imageOffsetY}%)`,
          }}
        />
        <div className="absolute text-white flex flex-col items-center justify-center image-animate-fadeInUP bg-black/60 w-[195px] h-[175px] lg:w-[500px] lg:h-[450px] md:w-[350px] md:h-[320px] sm:w-[233px] sm:h-[210px] ">
          <p
            className={`lg:text-5xl md:text-3xl sm:text-xl text-lg lg:py-2 py-1 transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {slides[currentSlide].title}
          </p>
          <p
            className={`lg:text-5xl md:text-3xl sm:text-xl text-lg lg:py-2 py-1 transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {slides[currentSlide].subtitle1}
          </p>
          <p
            className={`lg:text-5xl md:text-3xl sm:text-xl text-lg lg:py-2 py-1 transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {slides[currentSlide].subtitle2}
          </p>
          {["PORCELAIN", "PREMIUM"].includes(slides[currentSlide].title) && (
            <button className="bg-white lg:px-6 lg:py-2 md:px-4 md:py-1 sm:px-3 lg:my-5 md:my-3 sm:my-1 text-black hover:bg-black hover:text-white border border-white">
              See Products
            </button>
          )}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
            onClick={nextSlide}
          >
            &gt;
          </button>
          <div className="absolute lg:bottom-5 md:bottom-3 sm:bottom-2 bottom-1 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  currentSlide === index ? "bg-white" : "bg-gray-400"
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
