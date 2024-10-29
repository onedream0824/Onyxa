import React from "react";
import useOnScreen from "../utils/hooks/useOnScreen";

const AboutIntroduction = () => {
  const [ref1, isVisible1] = useOnScreen({ threshold: 0.5 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.5 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.5 });
  const [ref4, isVisible4] = useOnScreen({ threshold: 0.5 });

  return (
    <div className="bg-white w-full min-h-screen p-16  mt-32 font-light">
      <div className="text-left mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
          <span className="text-indigo-600">COMPLETE</span> SHOWROOM
        </h1>
      </div>
      <div
        ref={ref1}
        className={`flex flex-col md:flex-row justify-between items-start my-10 ${
          isVisible1 ? "animate-fadeInUp" : "opacity-0"
        }`}
      >
        <div className="md:w-1/2">
          <p className="text-xl text-gray-700">
            We welcome you to visit the Onyxa showroom in
          </p>
          <p className="text-xl text-gray-700">
            Vaughan so that you may see our beautiful, full-slab
          </p>
          <p className="text-xl text-gray-700">
            displays in person. With full porcelain slab{" "}
          </p>
          <p className="text-xl text-gray-700">
            pieces on display, you get to see exactly what
          </p>
          <p className="text-xl text-gray-700">
            each product looks like – no tiny samples to leave you guessing.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="pb-10">
            <p className="text-xl text-gray-700">
              You can easily book your next visit appointment
            </p>
            <p className="text-xl text-gray-700">
              through our online appointment reservation.{" "}
            </p>
          </div>
          <div>
            <p className="text-xl text-gray-700">Showroom address:</p>
            <p className="text-xl text-gray-700">1701 Creditstone Rd.</p>
            <p className="text-xl text-gray-700">Concord, ON, L4K 5V6</p>
          </div>
        </div>
      </div>
      <div
        ref={ref2}
        className={`text-left mt-32 ${
          isVisible2 ? "animate-fadeInUp" : "opacity-0"
        }`}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
          Specialty in <span className="text-indigo-600">Porcelain</span>
        </h2>
        <p className="text-xl text-gray-700 mt-10">
          Onyxa Canada is your source for the finest Porcelain
        </p>
        <p className="text-xl text-gray-700">
          tiles and slabs – all made to fit the most unique
        </p>
        <p className="text-xl text-gray-700">
          requirements and desires. Our catalogue is vast
        </p>
        <p className="text-xl text-gray-700">
          and varied, giving you access to a selection of
        </p>
        <p className="text-xl text-gray-700">
          products you won't find anywhere else.
        </p>
      </div>
      <div
        ref={ref3}
        className={`text-left mt-32 ${
          isVisible3 ? "animate-fadeInUp" : "opacity-0"
        }`}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 hover:scale-105  duration-200">
          <span className="text-indigo-600">FAST</span> AND FLEXIBLE DELIVERY
        </h2>
        <p className="text-xl text-gray-700 mt-10">
          Browse our catalogue with peace of mind knowing that we provide
        </p>
        <p className="text-xl text-gray-700">
          fast and flexible delivery on all of our products, shipped directly to
        </p>
        <p className="text-xl text-gray-700">
          you. Ask us about our delivery options for details about your specific
        </p>
        <p className="text-xl text-gray-700">location.</p>
      </div>
      <div
        ref={ref4}
        className={`text-left my-32 ${
          isVisible4 ? "animate-fadeInUp" : "opacity-0"
        }`}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
          SUPPORT AND <span className="text-indigo-600">SATISFACTION</span>
        </h2>
        <p className="text-xl text-gray-700 mt-10">
          Any questions? Our team is here to help! We are focused on meeting
        </p>
        <p className="text-xl text-gray-700">
          our customer’s specific needs, and dedicated to supporting and
        </p>
        <p className="text-xl text-gray-700">
          that you may bring your dream space to life.
        </p>
        <p className="text-xl text-gray-700">location.</p>
      </div>
    </div>
  );
};

export default AboutIntroduction;
