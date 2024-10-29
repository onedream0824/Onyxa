import React from "react";
import "./Add.css";
import Background from "../assets/article_back.jpg";

const BlogIntroduction = () => {
  return (
    <div className="relative text-center bg-white font-light">
      <div className="blur-sm">
        <img
          src={Background}
          alt="Article Background"
          className="w-full h-[40vh] md:h-[70vh] object-cover filter brightness-75"
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
