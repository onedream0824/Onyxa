import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="border border-luxury-gold/30 hover:border-luxury-gold hover:cursor-pointer p-8 rounded-xl transition-all duration-500 ease-in-out transform hover:scale-105 glass-dark backdrop-blur-sm hover:shadow-luxury-lg group">
      <h2 className="text-2xl font-display font-bold mb-4 text-luxury-gold group-hover:text-luxury-gold-light transition-colors">{title}</h2>
      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">{description}</p>
    </div>
  );
};

const Why = () => {
  return (
    <div className="bg-gradient-luxury relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
      <div className="relative text-white flex flex-col items-center justify-center p-8 lg:p-20 md:p-16 sm:p-12 xl:p-24 font-light max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-display font-extrabold mb-16 tracking-tight leading-none text-center">
          <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-light bg-clip-text text-transparent drop-shadow-2xl">
            WHY ONYXA?
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full mb-16">
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

        <p className="text-luxury-gold-light text-2xl font-semibold bg-gradient-to-r from-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">
          Book free 1-on-1 help from our team of experts.
        </p>
      </div>
    </div>
  );
};

export default Why;
