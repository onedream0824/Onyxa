import React from "react";
import { Facebook, Instagram, Linkedin, MessageSquare } from "lucide-react";
import logo from "../assets/Logo-Onyxa.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-luxury text-gray-300 pt-12 border-t border-luxury-gold/20 font-thin">
      <div className="container max-w-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b border-luxury-gold/30 pb-2 text-luxury-gold">
              Our Products
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-luxury-gold transition-colors duration-300 relative group">
                  Porcelain Slabs
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-luxury-gold transition-colors duration-300 relative group">
                  Porcelain Tiles
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-luxury-gold transition-colors duration-300 relative group">
                  Quartz Slabs
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-luxury-gold transition-colors duration-300 relative group">
                  Nano Ink Quartz
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 border-b border-luxury-gold/30 pb-2 text-luxury-gold">
              Get in Touch
            </h3>
            <p className="mb-3 text-white">Phone: (905) 326-4314</p>
            <a
              href="#"
              className="flex items-center text-luxury-gold hover:text-luxury-gold-light transition-all duration-300 group"
            >
              <MessageSquare className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Send Us a Message
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 border-b border-luxury-gold/30 pb-2 text-luxury-gold">
              Showroom Location
            </h3>
            <p className="mb-2 text-white">1701 Creditstone Rd.</p>
            <p className="mb-4 text-white">Concord, ON, L4K 5V6</p>
            <a href="#" className="text-luxury-gold hover:text-luxury-gold-light font-semibold transition-all duration-300 relative group">
              Schedule Your Visit
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="flex flex-col justify-center items-center my-10">
            <img src={logo} alt="Onyxa Logo" width={200} height={60} className="filter drop-shadow-glow" />
            <p className="text-sm text-gray-400 mt-4">
              © 2024, Onyxa Canada, Inc. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 flex flex-col md:flex-row justify-between items-center border-t border-luxury-gold/10">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-base hover:text-luxury-gold transition-colors duration-300">
              About Us
            </a>
            <a href="#" className="text-base hover:text-luxury-gold transition-colors duration-300">
              Contact Us
            </a>
            <a href="#" className="text-base hover:text-luxury-gold transition-colors duration-300">
              Privacy Policy
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-luxury-gold transition-all duration-300 hover:scale-110">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-luxury-gold transition-all duration-300 hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-luxury-gold transition-all duration-300 hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-luxury-dark text-gray-400 p-4 w-full flex justify-center items-center border-t border-luxury-gold/10">
        Designed & Developed by Exobit Inc.
      </div>
    </footer>
  );
};

export default Footer;
