import React from "react";
import background from "../assets/7.png";

const Appointment = () => {
  return (
    <div className="flex items-center justify-center w-full h-full p-8 md:p-32 bg-black text-white relative">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl p-10 md:py-15 md:px-32 border border-white relative z-10">
        <h2 className="text-2xl md:text-4xl py-2">
          Want to Visit Our Stone Showroom?
        </h2>
        <p className="text-lg md:text-xl py-2">
          Explore our spacious showroom and gaze at glorious full slab displays.
        </p>
        <div className="mt-10">
          <button className="mt-5 mb-14 py-2 px-4 bg-white text-black border border-white transition duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
      <img
        src={background}
        alt="Background"
        className="absolute bottom-0 left-0 w-full max-w-xs md:max-w-md lg:max-w-lg h-auto"
      />
    </div>
  );
};

export default Appointment;
