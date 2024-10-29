import React, { useState, useRef, useEffect } from "react";
import IntroductionImage from "../assets/about.jpeg";
import { FaCheck } from "react-icons/fa";
import "./Add.css";

const AboutMain = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
          observer.unobserve(ref.current);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [ref]);

  return (
    <div className="flex flex-wrap bg-gray-200 w-full h-[90vh] font-light">
      <div className="w-full md:w-5/12 flex items-start pt-[15vh] lg:pl-[10vh] md:pl-[5vh]">
        <div className="p-6">
          <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-gray-800 font-bold">
            ABOUT ONYXA
          </h2>
          <div
            ref={ref}
            className={`mt-10 lg:text-xl md:text-lg sm:text-base text-sm text-gray-700 ${
              isVisible ? "animate-slideUp" : ""
            }`}
          >
            <p>
              As industry leaders in porcelain slab and stoneware, our goal at
              Onyxa Canada is to bring your imagination to life. With an
              enormous catalogue of Porcelain slabs and Nano-Ink Quartz, the
              beauty of stone is at your fingertips.
            </p>
          </div>
          <div className="mt-20 text-lg text-gray-700 flex flex-col">
            <p className="flex items-center py-2">
              <FaCheck className="mr-3 text-green-600" />
              Complete Showroom
            </p>
            <p className="flex items-center py-2">
              <FaCheck className="mr-3 text-green-600" />
              Specialty in Porcelain
            </p>
            <p className="flex items-center py-2">
              <FaCheck className="mr-3 text-green-600" />
              Fast and Flexible Delivery
            </p>
            <p className="flex items-center py-2">
              <FaCheck className="mr-3 text-green-600" />
              Support and Satisfaction
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center px-4 md:px-0 md:w-7/12">
        <img
          src={IntroductionImage}
          alt="About Onyxa"
          className="lg:max-w-[70vh] md:max-w-[40vh] sm:max-w-[28vh] max-w-[20vh] shadow-lg rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AboutMain;
