import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="border border-gray-700 hover:border-yellow-300 hover:cursor-pointer p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Why = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center p-24 font-thin">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">WHY ONYXA?</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-12">
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

      <p className="text-[#BFCC12] text-lg">
        Book free 1-on-1 help from our team of experts.
      </p>
    </div>
  );
};

export default Why;
