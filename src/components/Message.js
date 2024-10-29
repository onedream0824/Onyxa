import React from "react";

const Message = () => {
  return (
    <div className="font-sans py-20 w-full bg-white text-gray-800">
      <div className="text-center">
        <p className="text-4xl font-semibold my-4">Message Us</p>
        <p className="text-xl my-4 text-gray-600">
          Reserve your spot online! Just fill out the form below, and we'll call
          you back soon!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mx-auto px-4 max-w-4xl">
        <div className="w-full max-w-2xl">
          <input
            className="w-full bg-gray-100 py-3 px-4 my-3 border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md"
            placeholder="Name"
          />
        </div>
        <div className="w-full max-w-2xl">
          <textarea
            className="w-full bg-gray-100 py-3 px-4 my-3 border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md h-40"
            placeholder="Message (optional)"
          />
        </div>
        <div>
          <button className="bg-black hover:bg-gray-700 text-white my-3 px-8 py-3 rounded-lg transition-colors duration-200">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
