import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="border border-gray-700 hover:border-yellow-300 hover:cursor-pointer p-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Why = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black">
      <div className=" text-white flex flex-col items-center justify-center p-8 lg:p-20 md:p-16 sm:p-12 xl:p-24 font-light max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-16 tracking-tight leading-none text-center shadow-lg">
          WHY ONYXA?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl w-full mb-16">
          <FeatureCard
            title="Fast & Flexible Delivery"
            description="Browse our catalogue with peace of mind knowing we provide fast and flexible delivery on all products."
          />
          <FeatureCard
            title="Unique Design"
            description="Our catalogue is vast and varied, giving you access to an enormous selection of products to choose from."
          />
          <FeatureCard
            title="Support & Satisfaction"
            description="Any questions? Onyxa wants to help you define your luxury design, so let us know how we can help!"
          />
        </div>

        <p className="text-green-300 text-xl font-medium">
          Book free 1-on-1 help from our team of experts.
        </p>
      </div>
    </div>
  );
};

export default Why;
