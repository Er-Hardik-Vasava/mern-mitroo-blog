import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h4 className="font-bold text-lg mb-2">
              dev<span className="text-gray-400">blog.com</span>
            </h4>
            <h4 className="font-bold text-lg mb-2">About Us</h4>
            <p className="text-base">
              Welcome to dev
              <span className="text-gray-400">blog.com</span>! We’re a
              passionate team of language lovers dedicated to making language
              learning engaging and accessible for everyone.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 px-4 max-md:hidden">
            <h4 className="font-bold text-lg mb-2">Links</h4>
            <ul className="list-none">
              <li className="mb-2">
                <Link to="/home" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h4 className="font-bold text-lg mb-2">Contact Us</h4>
            <p>Email: mrKing@cool.com</p>
            <p>Phone: +91 1234567890</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>
          &copy; 2024 dev<span className="text-gray-400">blog.com</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
