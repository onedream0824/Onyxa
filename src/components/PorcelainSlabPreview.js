import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/8.jpg";
import image2 from "../assets/9.jpg";
import image3 from "../assets/10.jpg";
import image4 from "../assets/11.jpg";
import "./Add.css";

const PorcelainSlabPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");
  const images = [image1, image2, image3, image4];
  const totalImages = images.length;
  const [imageCount, setImageCount] = useState(
    getImageCount(window.innerWidth)
  );

  useEffect(() => {
    function handleResize() {
      setImageCount(getImageCount(window.innerWidth));
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getImageCount(width) {
    if (width >= 1024) {
      // lg screens
      return 3;
    } else if (width >= 768) {
      // md screens
      return 2;
    } else {
      // sm screens
      return 1;
    }
  }

  const nextSlide = () => {
    setAnimation("animate-fade");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    setTimeout(() => setAnimation(""), 500); // Animation duration
  };

  const prevSlide = () => {
    setAnimation("animate-fade");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    setTimeout(() => setAnimation(""), 500); // Reset animation class after it finishes
  };

  const visibleImages = images
    .slice(currentIndex, currentIndex + imageCount)
    .concat(
      images.slice(0, Math.max(imageCount - (totalImages - currentIndex), 0))
    );

  return (
    <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-white font-thin">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Featured <span className="text-indigo-300">Porcelain Slabs</span>
        </h2>
        <p className="text-gray-300 mb-8">
          Discover our premium series of porcelain slabs, perfect for kitchen
          countertops, bathroom vanities, and wall cladding.
        </p>
        <div className="flex justify-center items-center space-x-8 mb-6">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-110"
            aria-label="Previous slabs"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {visibleImages.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 ${animation}`}
              >
                <img
                  src={image}
                  alt={`Porcelain Slab ${index}`}
                  className="w-full h-96 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-110"
            aria-label="Next slabs"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
        <button className="bg-indigo-500 text-white text-sm py-2 px-6 rounded-md hover:bg-indigo-400 transition duration-300">
          Check More
        </button>
      </div>
    </section>
  );
};

export default PorcelainSlabPreview;
