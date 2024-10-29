import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blog_1 from "../assets/Blog_1.png";
import Blog_2 from "../assets/Blog_2.png";
import Blog_3 from "../assets/Blog_3.png";
import Blog_4 from "../assets/Blog_4.png";
import Blog_5 from "../assets/Blog_5.png";
import Blog_6 from "../assets/Blog_6.jpeg";
import Blog_7 from "../assets/Blog_7.png";
import Blog_8 from "../assets/Blog_8.png";
import Blog_9 from "../assets/Blog_9.png";
import "./Add.css";

const blogs = [
  {
    title: "Nano Ink Quartz: A Deep Dive into Advanced Quartz Technologies",
    date: "June 20, 2024",
    description:
      "When choosing quartz surfaces for interior and exterior designs, Nano Ink Quartz is emerging as a game-changing material. This advanced technology significantly enhances the depth",
    image: Blog_1,
  },
  {
    title: "Maria D'Souza",
    date: "June 11, 2024",
    description:
      "Unlocking the True Cost of Quartz Countertops in Toronto in 2024: Your Ultimate Guide Are you dreaming of a kitchen or bathroom makeover that screams",
    image: Blog_2,
  },
  {
    title: "Babak Samadi",
    date: "June 7, 2024",
    description:
      "Porcelain or Granite? Bathroom Countertop Dilemmas for the Indecisive in 2024 Welcome to the ultimate battle of the bathroom titans! Today, we’re diving headfirst into",
    image: Blog_3,
  },
  {
    title: "Leo Tong",
    date: "May 28, 2024",
    description:
      "Bathroom Quartz Countertops: Top 2024 Design Trends The bathroom’s role has evolved over the years. It used to be a small, purely functional space. Today,",
    image: Blog_4,
  },
  {
    title: "Azar.P",
    date: "May 18, 2024",
    description:
      "Quartz vs. Quartzite Countertops: Which is Right for Your Home? Choosing the perfect countertop for your home can be daunting, especially when faced with similarly",
    image: Blog_5,
  },
  {
    title: "Terry WANG",
    date: "May 16, 2024",
    description:
      "Porcelain Vs Quartz Bathroom Countertops, Which one is good for your home Picking the perfect countertops for your bathroom is a decision that reflects your",
    image: Blog_6,
  },
  {
    title: "Best Kitchen Countertop Design Ideas",
    date: "May 8, 2024",
    description:
      "Best Kitchen Countertop Design Ideas In the heart of your kitchen, the countertop isn’t just a surface; it’s a central piece. Whether it’s the classic",
    image: Blog_7,
  },
  {
    title: "Porcelain Countertops vs Granite",
    date: "May 6, 2024",
    description:
      "Porcelain Countertops Vs. Granite: Which is Best for You in 2024 Deciding between porcelain and granite for your next kitchen or bathroom makeover? This choice",
    image: Blog_8,
  },
  {
    title: "Best Porcelain Countertops Design Trends in 2024",
    date: "May 3, 2024",
    description:
      "Porcelain Countertops Design Trends in 2024 Are you ready to transform your kitchen into a modern masterpiece? In 2024, porcelain countertops are taking center stage,",
    image: Blog_9,
  },
];

function ComponentBlog({ title, date, description, image, onViewDetails }) {
  return (
    <div className="border rounded-lg shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col w-full md:w-4/5 lg:w-9/12 bg-white transform hover:-translate-y-2 hover:scale-105 mx-auto mb-6">
      <img className="w-full h-56 object-cover" src={image} alt={title} />{" "}
      {/* Reduced height from h-64 to h-56 */}
      <div className="p-6 text-left flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">{title}</h2>
        <p className="text-gray-700 text-base mb-5 flex-grow">{description}</p>
        <div className="mt-auto">
          <button
            onClick={onViewDetails}
            className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors"
          >
            View More Details
          </button>
          <div className="flex justify-start items-center pt-2">
            <span className="text-sm font-medium text-gray-600">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(9);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogs.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if (currentPage < pageNumbers.length) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="my-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBlogs.map((blog, index) => (
          <ComponentBlog
            key={index}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            image={blog.image}
            onViewDetails={() => console.log("Viewing", blog.title)}
          />
        ))}
      </div>
      <div className="flex w-full justify-center items-center mt-8 space-x-3">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="text-lg p-3 hover:bg-gray-50 rounded-full disabled:opacity-50 transition"
        >
          <FiChevronLeft />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 rounded-md transition-colors ${
              currentPage === number
                ? "bg-blue-500 text-white font-semibold"
                : "text-blue-600 hover:bg-blue-100"
            }`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={nextPage}
          disabled={currentPage === pageNumbers.length}
          className="text-lg p-3 hover:bg-gray-50 rounded-full disabled:opacity-50 transition"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Blog;
