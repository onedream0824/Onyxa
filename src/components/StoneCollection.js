import React from "react";
import porcelainSlabs from "../assets/6.jpg";
import quartzSlabs from "../assets/5.jpg";
import naturalStone from "../assets/4.jpg";
import porcelainTile from "../assets/3.jpg";

const row_one = [
  { name: "PORCELAIN SLABS", image: porcelainSlabs, widthClass: "w-full" },
  { name: "NATURAL STONE", image: naturalStone, widthClass: "w-full" },
];

const row_two = [
  { name: "QUARTZ SLABS", image: quartzSlabs, widthClass: "w-full" },
  { name: "PORCELAIN TILE", image: porcelainTile, widthClass: "w-full" },
];

const StoneCollection = () => {
  return (
    <div className="container mx-auto px-4 py-12 font-thin">
      <h1 className="text-4xl md:text-5xl font-light text-center mb-4">
        Unique <span className="font-normal">Stone Collection</span>
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
        As industry leaders in porcelain stoneware, our goal at Onyxa Canada is
        to bring your imagination to life. With an enormous catalogue of Natural
        Stone, Quartz, and Porcelain products, a world of beauty is at your
        fingertips.
      </p>
      <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12"></div>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/12" />
        <div className="w-full md:w-6/12 mx-2">
          {row_one.map((category, index) => (
            <div
              key={index}
              className={`${category.widthClass} relative overflow-hidden group my-4`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity group-hover:bg-opacity-40">
                <div
                  className="text-white text-center bg-black bg-opacity-65 p-28 group-hover:bg-opacity-100 hover:cursor-pointer duration-300 
        transition-transform hover:scale-90"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {category.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white bg-opacity-30 flex items-center justify-center mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3 a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-4/12 mx-2">
          {row_two.map((category, index) => (
            <div
              key={index}
              className={`${category.widthClass} relative overflow-hidden group my-4`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity group-hover:bg-opacity-40">
                <div
                  className="text-white text-center bg-black bg-opacity-65 p-28 group-hover:bg-opacity-100 hover:cursor-pointer duration-300 
        transition-transform hover:scale-90"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {category.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white bg-opacity-30 flex items-center justify-center mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3 a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/12" />
      </div>
    </div>
  );
};

export default StoneCollection;
