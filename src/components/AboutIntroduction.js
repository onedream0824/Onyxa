import React, { useState, useEffect } from "react";
import useOnScreen from "../utils/hooks/useOnScreen";
import ad_1 from "../assets/ad_1.png";
import ad_2 from "../assets/ad_2.jpg";
import ad_3 from "../assets/ad_3.jpg";
import ad_4 from "../assets/ad_4.jpg";

const images = [ad_1, ad_2, ad_3, ad_4];

const AboutIntroduction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const [ref1, isVisible1] = useOnScreen({ threshold: 0.5 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.5 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.5 });
  const [ref4, isVisible4] = useOnScreen({ threshold: 0.5 });

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-white">
      <div className="min-h-screen max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto bg-gradient-to-b from-coolGray-900 to-black text-white font-light">
        <div className="container mx-auto px-16 py-32">
          <h1 className="text-5xl text-black font-bold mb-10">
            <span className="text-violet-600">Complete</span> Showroom
          </h1>
          <div
            ref={ref1}
            className={`flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-10 transition-opacity duration-700 ${
              isVisible1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="md:w-1/2">
              <p className="text-xl leading-relaxed text-black">
                We welcome you to visit the Onyxa showroom in Vaughan.
                Experience our full-slab displays and see the quality of our
                products in person, giving you a realistic perspective far
                beyond tiny samples.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <p className="text-xl leading-relaxed text-black">
                Easily book your next visit through our online appointment
                system. Find us at:
              </p>
              <p className="text-xl text-black mt-4">
                1701 Creditstone Rd, Concord, ON, L4K 5V6
              </p>
            </div>
          </div>
          <div className="mt-32">
            <h2 className="text-5xl text-black font-bold">
              Specialty in <span className="text-violet-600">Porcelain</span>
            </h2>
            <p
              ref={ref2}
              className={`mt-10 text-xl text-black leading-relaxed transition-opacity duration-700 ${
                isVisible2 ? "opacity-100" : "opacity-0"
              }`}
            >
              Onyxa Canada is your premier source for the finest porcelain tiles
              and slabs, tailored to meet unique requirements and desires.
              Explore our extensive and exclusive catalogue.
            </p>
          </div>
          <div className="flex justify-center items-center mt-20">
            <img
              src={images[currentIndex]}
              alt="Fashionable Ad"
              style={{ width: "70vh", height: "50vh" }}
              className={`rounded-lg shadow-xl transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <div className="text-right mt-20">
            <h2 className="text-5xl text-black font-bold">
              Fast and Flexible{" "}
              <span className="text-violet-600">Delivery</span>
            </h2>
            <div
              ref={ref3}
              className={`mt-10 text-xl text-black leading-relaxed transition-opacity duration-700 ${
                isVisible3 ? "opacity-100" : "opacity-0"
              }`}
            >
              Browse our catalogue with confidence, knowing that we provide
              prompt and adaptable delivery services directly to your location.
              Our commitment is to exceed your expectations with every
              interaction.
            </div>
          </div>
          <div className="text-right mt-20">
            <h2 className="text-5xl text-black font-bold">
              <span className="text-violet-600">Support and </span> Satification
            </h2>
            <div
              ref={ref4}
              className={`mt-10 text-xl text-black leading-relaxed transition-opacity duration-700 ${
                isVisible4 ? "opacity-100" : "opacity-0"
              }`}
            >
              Any questions? Our team is here to help! We are focused on meeting
              our customer’s specific needs, and dedicated to supporting and
              satisfying you. Onyxa wants to help you define your luxury style,
              so that you may bring your dream space to life.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntroduction;
