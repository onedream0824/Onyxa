import React, { useState, useEffect } from "react";
import "./Add.css";
import Background_1 from "../assets/article_back.jpg";
import Background_2 from "../assets/ad_1.png";
import Background_3 from "../assets/ad_5.png";
import Background_4 from "../assets/ad_3.jpg";
import Background_5 from "../assets/ad_6.jpg";

const images = [
  Background_1,
  Background_2,
  Background_3,
  Background_4,
  Background_5,
];

const BlogIntroduction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="relative text-center bg-white font-light">
      <div className="relative overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Article Background"
          className={`w-full h-[40vh] md:h-[70vh] object-cover filter brightness-75 transition-opacity duration-1000 ${
            fade ? "opacity-100" : "opacity-70"
          }`}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p
          className="text-4xl md:text-6xl text-white font-bold"
          style={{ textShadow: "2px 2px 15px rgba(0, 0, 0, 0.8)" }}
        >
          Articles & Blogs
        </p>
        <p className="mt-4 text-lg md:text-xl text-white opacity-90">
          Explore the latest insights and trends in our curated articles.
        </p>
      </div>
    </div>
  );
};

export default BlogIntroduction;
