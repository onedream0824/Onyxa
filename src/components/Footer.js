import React from "react";
import { Facebook, Instagram, Linkedin, MessageSquare } from "lucide-react";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 pt-8 border-t font-thin">
      <div className="container max-w-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-7xl  mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b pb-2">
              Our Products
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-900 underline">
                  Porcelain Slabs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 underline">
                  Porcelain Tiles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 underline">
                  Quartz Slabs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 underline">
                  Nano Ink Quartz
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 border-b pb-2">
              Get in Touch
            </h3>
            <p className="mb-2">Phone: (905) 326-4314</p>
            <a
              href="#"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Send Us a Message
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 border-b pb-2">
              Showroom Location
            </h3>
            <p className="mb-2">1701 Creditstone Rd.</p>
            <p className="mb-4">Concord, ON, L4K 5V6</p>
            <a href="#" className="text-black underline font-bold">
              Schedule Your Visit
            </a>
          </div>

          <div className="flex flex-col justify-center items-center my-10">
            <img src={logo} alt="Onyxa Logo" width={200} height={60} />
            <p className="text-sm text-gray-500">
              © 2024, Onyxa Canada, Inc. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-base hover:text-gray-900">
              About Us
            </a>
            <a href="#" className="text-base hover:text-gray-900">
              Contact Us
            </a>
            <a href="#" className="text-base hover:text-gray-900">
              Privacy Policy
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-gray-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-4 w-full flex justify-center items-center">
        Designed & Developed by Exobit Inc.
      </div>
    </footer>
  );
};

export default Footer;
