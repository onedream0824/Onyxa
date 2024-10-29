import React from "react";
import { Check, Waves, Star, Shield, Sparkles } from "lucide-react";

function ComponentFeature({ icon, title, description }) {
  return (
    <div className="flex flex-col items-start p-6 transition-transform transform hover:cursor-pointer  hover:scale-105 hover:shadow-lg bg-white rounded-lg border border-gray-200">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full mb-4 shadow-md">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

const Feature = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center mx-auto px-4 py-12 bg-gray-50 font-thin">
      <div className="flex flex-col items-start mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-0 w-full md:w-1/3">
        <div className="flex py-3 items-start">
          <Check className="text-emerald-500 w-6 h-6 sm:w-8 sm:h-8 mr-2" />
          <h2 className="text-base sm:text-lg font-semibold text-emerald-500 leading-tight">
            Premium Porcelain Products
          </h2>
        </div>
        <h1 className="text-3xl sm:text-4xl text-center text-gray-900 leading-snug sm:leading-normal mb-12">
          Together, we will build
          <br />
          your ideal space
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full md:w-2/3">
        {" "}
        <ComponentFeature
          icon={<Waves className="w-6 h-6 text-white" />}
          title="Strong & Durable"
          description="Onyxa Porcelain is designed to stand up against the toughest wear, and is guaranteed to stay stable over time. UV resistant, non-absorbent, withstanding sudden temperature changes, and fireproof - our porcelain is ideal for indoor or outdoor use, whatever the application may be."
        />
        <ComponentFeature
          icon={<Star className="w-6 h-6 text-white" />}
          title="Premium Material"
          description="Porcelain options offer luxurious and grand design choices for creating elegant looking spaces. Create a deluxe yet comfortable environment, without compromising on durability."
        />
        <ComponentFeature
          icon={<Shield className="w-6 h-6 text-white" />}
          title="Stain & Scratch Resistant"
          description="From hallways with heavy foot traffic to bathroom vanities and kitchen countertops, Onyxa Porcelain is resilient and versatile. Our Porcelain is tough against food and liquid spills, as well as external wear and tear."
        />
        <ComponentFeature
          icon={<Sparkles className="w-6 h-6 text-white" />}
          title="Hygienic & Non-Porous"
          description="Whether it's a bathroom vanity or a kitchen countertop, you can rest assured knowing your porcelain is hygienic and non-porous, meaning it won't discolor or weaken over time."
        />
      </div>
    </div>
  );
};

export default Feature;
