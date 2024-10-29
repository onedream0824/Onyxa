import React from "react";
// import { useState, useRef } from "react";
import {
  // ChevronDown,
  Calendar,
  Search,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import logo from "../assets/Logo.svg";
import "./Add.css";

const Header = () => {
  // const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const productsBtnRef = useRef(null); // Reference to the PRODUCTS button

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow font-thin">
      <div className="border-b border-gray-200 container mx-auto px-4 md:px-16 pt-1 pb-0 min-w-full slide-down">
        <div className="flex items-center justify-between">
          <nav className="flex gap-4 md:gap-16 items-center">
            <a href="/" rel="noopener noreferrer">
              <img
                src={logo}
                alt="Logo"
                width={150}
                height={30}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <div className="hidden lg:flex flex-row relative group space-x-7 items-center">
              {/* <button
                ref={productsBtnRef}
                className="flex items-center text-black hover:text-indigo-600 transition-colors duration-300"
                onClick={toggleDropdown}
              >
                <span className="font-semibold tracking-wide">PRODUCTS</span>
                <ChevronDown
                  size={24}
                  className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                />
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-20"
                  style={{
                    top: productsBtnRef.current
                      ? productsBtnRef.current.offsetHeight + 2
                      : 0,
                  }}
                >
                  <a className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-300">
                    POCELAIN SLABS
                  </a>
                  <a className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-300">
                    NANO INK QUARTZ
                  </a>
                  <a className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-300">
                    QUARTZ SLABS
                  </a>
                  <a className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-300">
                    POCELAIN TILES
                  </a>
                  <a className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-300">
                    NATURAL STONE
                  </a>
                </div>
              )} */}
              <a
                href="/articles"
                className="text-black hover:text-indigo-600 transition-colors duration-300 hover:cursor-pointer font-semibold tracking-wide"
              >
                ARTICLES
              </a>
              <a
                href="/about"
                className="text-black hover:text-indigo-600 transition-colors duration-300 hover:cursor-pointer font-semibold tracking-wide"
              >
                ABOUT US
              </a>
              <a
                href="/contact"
                className="text-black hover:text-indigo-600 transition-colors duration-300 hover:cursor-pointer font-semibold tracking-wide"
              >
                CONTACT US
              </a>
              <a className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-300 hover:cursor-pointer font-semibold">
                LIMITED OFFERS
              </a>
            </div>
          </nav>
          <div className="flex md:flex-row flex-col items-center space-x-4 justify-end">
            <a className="flex items-center space-x-1 text-black font-bold hover:text-indigo-600 transition-colors duration-300 hover:cursor-pointer">
              <Calendar size={20} />
              <span>APPOINTMENT</span>
            </a>
            <a className="text-black font-bold hover:text-indigo-600 transition-colors duration-300 hover:cursor-pointer">
              +1 (905) 326-4314
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 container mx-auto px-6 lg:px-20 md:px-12 sm:px-8 py-1 min-w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-black hover:text-gray-900"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-black hover:text-gray-900"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-black hover:text-gray-900"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-10 py-1 bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 w-full max-w-xs"
            />
            <Search
              size={20}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
