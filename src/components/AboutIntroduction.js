import React from "react";
import useOnScreen from "../utils/hooks/useOnScreen";

const AboutIntroduction = () => {
  const [ref1, isVisible1] = useOnScreen({ threshold: 0.5 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.5 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.5 });
  const [ref4, isVisible4] = useOnScreen({ threshold: 0.5 });

  return (
    <div className="bg-white w-full min-h-screen p-16 mt-32 font-light">
      <div className="text-left mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
          <span className="text-indigo-600">COMPLETE</span> SHOWROOM
        </h1>
      </div>
      <div
        ref={ref1}
        className={`flex flex-col md:flex-row justify-between items-start my-10 transition-opacity duration-700 ${
          isVisible1 ? "opacity-100 animate-fadeInUp" : "opacity-0"
        }`}
      >
        <div className="md:w-1/2">
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            We welcome you to visit the Onyxa showroom in
          </p>
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            Vaughan so that you may see our beautiful, full-slab
          </p>
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            displays in person. With full porcelain slab{" "}
          </p>
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            pieces on display, you get to see exactly what
          </p>
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            each product looks like – no tiny samples to leave you guessing.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="pb-10">
            <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
              You can easily book your next visit appointment
            </p>
            <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
              through our online appointment reservation.{" "}
            </p>
          </div>
          <div>
            <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
              Showroom address:
            </p>
            <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
              1701 Creditstone Rd.
            </p>
            <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
              Concord, ON, L4K 5V6
            </p>
          </div>
        </div>
      </div>
      <div className="text-left mt-32">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
          Specialty in <span className="text-indigo-600">Porcelain</span>
        </h2>
        <div
          ref={ref2}
          className={`transition-opacity duration-700 ${
            isVisible2 ? "opacity-100 animate-fadeInUp" : "opacity-0"
          }`}
        >
          <p className="text-xl text-gray-700 mt-10 transition-transform duration-500 hover:scale-105">
            Onyxa Canada is your source for the finest Porcelain
          </p>
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            tiles and slabs – all made to fit the most unique
          </p>
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            requirements and desires. Our catalogue is vast
          </p>
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            and varied, giving you access to a selection of
          </p>
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            products you won't find anywhere else.
          </p>
        </div>
      </div>
      <div className="text-left my-32">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
          <span className="text-indigo-600">FAST</span> AND FLEXIBLE DELIVERY
        </h2>
        <div
          ref={ref3}
          className={`transition-opacity duration-700 ${
            isVisible3 ? "opacity-100 animate-fadeInUp" : "opacity-0"
          }`}
        >
          <p className="text-xl text-gray-700 mt-10 transition-transform duration-500 hover:scale-105">
            Browse our catalogue with peace of mind knowing that we provide
          </p>
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            fast and flexible delivery on all of our products, shipped directly
            to
          </p>
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            you. Ask us about our delivery options for details about your
            specific
          </p>
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            location.
          </p>
        </div>
      </div>
      <div className="text-left my-32">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
          SUPPORT AND <span className="text-indigo-600">SATISFACTION</span>
        </h2>
        <div
          ref={ref4}
          className={`transition-opacity duration-700 ${
            isVisible4 ? "opacity-100 animate-fadeInUp" : "opacity-0"
          }`}
        >
          <p className="text-xl text-gray-700 mt-10 transition-transform duration-500 hover:scale-105">
            Any questions? Our team is here to help! We are focused on meeting
          </p>
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            our customer’s specific needs, and dedicated to supporting and
          </p>
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            satisfying you. Onyxa wants to help you define your luxury style, so
          </p>
          <p className="text-xl text-gray-700 transition-transform duration-500 hover:scale-105">
            that you may bring your dream space to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutIntroduction;
