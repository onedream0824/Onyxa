import React, { useEffect, useState } from "react";
import { Calendar, Search, Facebook, Linkedin, Instagram } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";
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
    <header className="fixed top-0 left-0 w-full z-50 shadow-luxury font-light">
      <div className="border-b border-luxury-gold/20 container mx-auto px-4 md:px-16 pt-2 pb-0 min-w-full bg-gradient-luxury glass-dark backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <nav className="flex gap-4 md:gap-16 items-center">
            <a href="/" rel="noopener noreferrer">
              <img
                src={logo}
                alt="Logo"
                width={150}
                height={30}
                className="hover:opacity-80 transition-all duration-300 hover:scale-105 filter drop-shadow-glow"
              />
            </a>
            <div className="hidden lg:flex flex-row relative group space-x-7 items-center">
              <a
                href="/articles"
                className={`${
                  activeTab === 1 ? "text-luxury-gold" : "text-white"
                } hover:text-luxury-gold transition-all duration-300 font-semibold tracking-wide relative group`}
              >
                ARTICLES
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="/about"
                className={`${
                  activeTab === 2 ? "text-luxury-gold" : "text-white"
                } hover:text-luxury-gold transition-all duration-300 font-semibold tracking-wide relative group`}
              >
                ABOUT US
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="/contact"
                className={`${
                  activeTab === 3 ? "text-luxury-gold" : "text-white"
                } hover:text-luxury-gold transition-all duration-300 font-semibold tracking-wide relative group`}
              >
                CONTACT US
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300"></span>
              </a>
              <a className="bg-gradient-gold text-luxury-dark px-6 py-2 rounded-full hover:shadow-glow transition-all duration-300 font-semibold shadow-luxury transform hover:scale-105 hover:brightness-110">
                LIMITED OFFERS
              </a>
            </div>
          </nav>
          <div className="flex md:flex-row flex-col items-center space-x-4 justify-end">
            <a className="flex items-center space-x-2 text-white font-bold hover:text-luxury-gold transition-all duration-300 group">
              <Calendar size={20} className="group-hover:scale-110 transition-transform" />
              <span>APPOINTMENT</span>
            </a>
            <a className="text-white font-bold hover:text-luxury-gold transition-all duration-300">
              +1 (905) 326-4314
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-luxury-dark via-luxury-charcoal to-luxury-slate container mx-auto px-6 lg:px-20 md:px-12 sm:px-8 py-2 min-w-full shadow-luxury border-t border-luxury-gold/10">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-white hover:text-luxury-gold transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-white hover:text-luxury-gold transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-white hover:text-luxury-gold transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-10 py-2 text-white bg-luxury-charcoal/50 border border-luxury-gold/30 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 w-full max-w-xs rounded-lg transition-all duration-300 placeholder:text-gray-400 hover:border-luxury-gold/50 backdrop-blur-sm"
            />
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
