import React from "react";
import Appointment from "../components/Appointment";
import BlogIntroduction from "../components/BlogIntroduction";
import Blog from "../components/Blog";

const Article = () => {
  return (
    <div className="mt-28">
      <BlogIntroduction />
      <Blog />
      <Appointment />
    </div>
  );
};

export default Article;
