import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";

const reviews = [
  {
    name: "Omid Taabodi",
    rating: 5,
    date: "11 months ago",
    text: "Great please to see and feel the product amazing selection of stones porcelain & quartz on the top the staff (ROYA) was great with service and went above and...",
    image: avatar1,
  },
  {
    name: "Maria D'Souza",
    rating: 5,
    date: "a year ago",
    text: "Amazing place with great selections. After visiting many showrooms, we were able to find exactly what we were looking for. A special shout out to Roya for being...",
    image: avatar2,
  },
  {
    name: "Babak Samadi",
    rating: 5,
    date: "2 years ago",
    text: "They have an amazing selection of slabs (both porcelain and quartz). I have been to almost every tile shop in the city and they have very beautiful and unique...",
    image: avatar3,
  },
  {
    name: "Leo Tong",
    rating: 5,
    date: "2 years ago",
    text: "They have an amazing selection of slabs (both porcelain and quartz). I have been to almost every tile shop in the city and they have very beautiful and unique...",
    image: avatar4,
  },
  {
    name: "Azar.P",
    rating: 5,
    date: "2 years ago",
    text: "They have an amazing selection of slabs (both porcelain and quartz). I have been to almost every tile shop in the city and they have very beautiful and unique...",
    image: avatar5,
  },
  {
    name: "Terry WANG",
    rating: 5,
    date: "2 years ago",
    text: "They have an amazing selection of slabs (both porcelain and quartz). I have been to almost every tile shop in the city and they have very beautiful and unique...",
    image: avatar6,
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} m-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ChevronRight className="w-6 h-6 text-gray-600" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} mx-auto p-2 rounded-full bg-gray-200 hover:bg-gray-300`}
      style={{ ...style, display: "block", zIndex: 1 }}
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6 text-gray-600" />
    </button>
  );
}

const Review = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlidesToShow = () => {
    if (windowWidth < 600) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 font-thin">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-center mb-12">
          <span className="text-black">People</span>{" "}
          <span className="text-black font-bold">Reviews</span>{" "}
          <span className="text-black">About Onyxa</span>
        </h2>

        <div className="mb-8 text-center">
          <h3 className="text-xl font-semibold mb-2">ONYXA CANADA INC.</h3>
          <div className="flex items-center justify-center">
            <span className="text-4xl font-bold mr-2">4.7</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Overall rating out of 50 Google reviews
          </p>
        </div>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="p-10">
              <div className="bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-xl p-6 border-b-4 border-gray-100 transition-transform transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md mr-4"
                  />
                  <div>
                    <h4 className="text-black font-bold text-lg">
                      {review.name}
                    </h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-300 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{review.date}</p>
                <p className="text-base text-gray-800">{review.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
