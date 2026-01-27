import React from "react";

const Message = () => {
  return (
    <div className="font-sans py-20 w-full bg-gradient-to-b from-white to-gray-50 text-luxury-dark">
      <div className="text-center">
        <p className="text-5xl font-display font-bold my-4 text-luxury-dark">
          Message <span className="text-luxury-gold">Us</span>
        </p>
        <p className="text-xl my-4 text-gray-700 max-w-2xl mx-auto">
          Reserve your spot online! Just fill out the form below, and we'll call
          you back soon!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mx-auto px-4 max-w-4xl">
        <div className="w-full max-w-2xl">
          <input
            className="w-full bg-white py-4 px-5 my-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
            placeholder="Name"
          />
        </div>
        <div className="w-full max-w-2xl">
          <textarea
            className="w-full bg-white py-4 px-5 my-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold rounded-lg h-40 transition-all duration-300 shadow-sm hover:shadow-md resize-none"
            placeholder="Message (optional)"
          />
        </div>
        <div>
          <button className="bg-gradient-gold text-luxury-dark hover:shadow-glow my-3 px-10 py-4 rounded-full transition-all duration-300 font-semibold transform hover:scale-105 shadow-luxury">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
