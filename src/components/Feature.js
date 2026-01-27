import React from "react";
import { Check, Waves, Star, Shield, Sparkles } from "lucide-react";
import useOnScreen from "../utils/hooks/useOnScreen";

function ComponentFeature({ icon, title, description }) {
  return (
    <div className="flex flex-col items-start p-8 transition-all duration-300 transform hover:cursor-pointer bg-white rounded-xl hover:shadow-luxury-lg border border-gray-100 hover:border-luxury-gold/30 group">
      <div className="bg-gradient-gold p-4 rounded-full mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-display font-bold mb-3 text-luxury-dark group-hover:text-luxury-gold transition-colors">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

const Feature = () => {
  const [ref1, isVisible1] = useOnScreen({ threshold: 0.5 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.5 });
  return (
    <div className="flex flex-col md:flex-row justify-center mx-auto p-24 bg-gradient-to-b from-white to-gray-50 font-thin">
      <div className="flex flex-col items-start mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-0 w-full md:w-1/3">
        <div className="flex py-3 items-start">
          <Check className="text-luxury-gold w-6 h-6 sm:w-8 sm:h-8 mr-2" />
          <h2 className="text-base sm:text-lg font-semibold text-luxury-gold leading-tight">
            Premium Porcelain Products
          </h2>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-center text-luxury-dark leading-snug sm:leading-normal mb-12">
          Together, we will build
          <br />
          <span className="text-luxury-gold">your ideal space</span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 w-full md:w-6/12 sm:4/12">
        <div
          ref={ref1}
          className={`relative group ${
            isVisible1 ? "opacity-100 slide-left" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <ComponentFeature
            icon={<Waves className="w-6 h-6 text-white" />}
            title="Strong & Durable"
            description="Onyxa Porcelain is designed to stand up against the toughest wear, and is guaranteed to stay stable over time. UV resistant, non-absorbent, withstanding sudden temperature changes, and fireproof - our porcelain is ideal for indoor or outdoor use, whatever the application may be."
          />
        </div>

        <div
          ref={ref2}
          className={`relative group ${
            isVisible2 ? "opacity-100 slide-left" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <ComponentFeature
            icon={<Star className="w-6 h-6 text-white" />}
            title="Premium Material"
            description="Porcelain options offer luxurious and grand design choices for creating elegant looking spaces. Create a deluxe yet comfortable environment, without compromising on durability."
          />
        </div>

        <div
          ref={ref2}
          className={`relative group ${
            isVisible2 ? "opacity-100 slide-right" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <ComponentFeature
            icon={<Shield className="w-6 h-6 text-white" />}
            title="Stain & Scratch Resistant"
            description="From hallways with heavy foot traffic to bathroom vanities and kitchen countertops, Onyxa Porcelain is resilient and versatile. Our Porcelain is tough against food and liquid spills, as well as external wear and tear."
          />
        </div>

        <div
          ref={ref1}
          className={`relative group ${
            isVisible1 ? "opacity-100 slide-right" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <ComponentFeature
            icon={<Sparkles className="w-6 h-6 text-white" />}
            title="Hygienic & Non-Porous"
            description="Whether it's a bathroom vanity or a kitchen countertop, you can rest assured knowing your porcelain is hygienic and non-porous, meaning it won't discolor or weaken over time."
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
