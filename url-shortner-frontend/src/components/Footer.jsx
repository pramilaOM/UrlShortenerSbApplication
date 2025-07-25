import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(#3b82f6,#9333ea)] text-white py-8 z-30 relaive">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between">
        
        {/* <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">Linklytics</h2>
          <p>Simplifying URL shortening for efficient sharing</p>
        </div> */}

        <p className="mt-4 lg:mt-0">
          &copy; 2024 Linklytics. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 lg:mt-0 ">
          <a href="#" className="hover:text-gray-200">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
