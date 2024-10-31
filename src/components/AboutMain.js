import React, { useState, useRef, useEffect } from "react";
import IntroductionImage from "../assets/about.jpeg";
import { FaCheck } from "react-icons/fa";
import "./Add.css"; // Ensure this CSS file contains necessary animations or adjust as needed.

const AboutMain = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white w-full h-[88vh] flex items-center justify-center">
      <div className="container mx-auto p-4 lg:p-20">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-5/12 p-6">
            <h2 className="text-5xl text-gray-800 font-bold mb-6">
              About Onyxa
            </h2>
            <div
              ref={ref}
              className={`transition-opacity duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg text-gray-700 mb-8">
                As industry leaders in porcelain slab and stoneware, our goal at
                Onyxa Canada is to bring your imagination to life. With an
                enormous catalogue of Porcelain slabs and Nano-Ink Quartz, the
                beauty of stone is at your fingertips.
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <FaCheck className="mr-2 text-green-500" />
                  Complete Showroom
                </p>
                <p className="flex items-center">
                  <FaCheck className="mr-2 text-green-500" />
                  Specialty in Porcelain
                </p>
                <p className="flex items-center">
                  <FaCheck className="mr-2 text-green-500" />
                  Fast and Flexible Delivery
                </p>
                <p className="flex items-center">
                  <FaCheck className="mr-2 text-green-500" />
                  Support and Satisfaction
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-7/12 flex justify-center p-4">
            <img
              src={IntroductionImage}
              alt="About Onyxa"
              className="shadow-lg rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
