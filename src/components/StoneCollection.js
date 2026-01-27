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
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-16 font-thin">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-center mb-6 text-luxury-dark">
            Unique <span className="text-luxury-gold">Stone Collection</span>
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
            As industry leaders in porcelain stoneware, our goal at Onyxa Canada
            is to bring your imagination to life. With an enormous catalogue of
            Natural Stone, Quartz, and Porcelain products, a world of beauty is
            at your fingertips.
          </p>
          <div className="w-32 h-1.5 bg-gradient-gold mx-auto mb-16 shadow-glow"></div>

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
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-black/70 group-hover:to-luxury-dark/80">
                    <div
                      className="text-white text-center glass-dark backdrop-blur-sm p-28 group-hover:bg-opacity-90 hover:cursor-pointer duration-500 
        transition-all transform group-hover:scale-95 border border-luxury-gold/20 group-hover:border-luxury-gold/50 group-hover:shadow-luxury-lg"
                    >
                      <h3 className="text-2xl font-display font-bold mb-4 text-luxury-gold group-hover:text-luxury-gold-light transition-colors">
                        {category.name}
                      </h3>
                      <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-glow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-luxury-dark"
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
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-black/70 group-hover:to-luxury-dark/80">
                    <div
                      className="text-white text-center glass-dark backdrop-blur-sm p-28 group-hover:bg-opacity-90 hover:cursor-pointer duration-500 
        transition-all transform group-hover:scale-95 border border-luxury-gold/20 group-hover:border-luxury-gold/50 group-hover:shadow-luxury-lg"
                    >
                      <h3 className="text-2xl font-display font-bold mb-4 text-luxury-gold group-hover:text-luxury-gold-light transition-colors">
                        {category.name}
                      </h3>
                      <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-glow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-luxury-dark"
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
      </div>
    </div>
  );
};

export default StoneCollection;
