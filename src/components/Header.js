import React, { useEffect, useState } from "react";
import { Calendar, Search, Facebook, Linkedin, Instagram } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "../assets/Logo.svg";
import "./Add.css";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    if (currentPath.includes("article")) setActiveTab(1);
    if (currentPath.includes("about")) setActiveTab(2);
    if (currentPath.includes("contact")) setActiveTab(3);
  }, [currentPath]);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg font-light">
      <div className="border-b border-gray-700 container mx-auto px-4 md:px-16 pt-2 pb-0 min-w-full">
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
              <a
                href="/articles"
                className={`${
                  activeTab == 1 ? "text-yellow-400" : "text-white"
                } hover:text-yellow-400 transition-colors duration-300 font-semibold tracking-wide`}
              >
                ARTICLES
              </a>
              <a
                href="/about"
                className={`${
                  activeTab == 2 ? "text-yellow-400" : "text-white"
                } hover:text-yellow-400 transition-colors duration-300 font-semibold tracking-wide`}
              >
                ABOUT US
              </a>
              <a
                href="/contact"
                className={`${
                  activeTab == 3 ? "text-yellow-400" : "text-white"
                } hover:text-yellow-400 transition-colors duration-300 font-semibold tracking-wide`}
              >
                CONTACT US
              </a>
              <a className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition duration-300 font-semibold">
                LIMITED OFFERS
              </a>
            </div>
          </nav>
          <div className="flex md:flex-row flex-col items-center space-x-4 justify-end">
            <a className="flex items-center space-x-1 text-white font-bold hover:text-yellow-400 transition-colors duration-300">
              <Calendar size={20} />
              <span>APPOINTMENT</span>
            </a>
            <a className="text-white font-bold hover:text-yellow-400 transition-colors duration-300">
              +1 (905) 326-4314
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 container mx-auto px-6 lg:px-20 md:px-12 sm:px-8 py-1 min-w-full shadow-lg">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-white hover:text-yellow-300 transition duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-white hover:text-yellow-300 transition duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-white hover:text-yellow-300 transition duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-10 py-2 bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full max-w-xs rounded transition duration-300"
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
