import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h4 className="font-bold text-lg mb-2 text-gray-400">
              mitroo<span className="text-gray-700">blog.com</span>
            </h4>
            <h4 className="font-bold text-lg mb-2">About Us</h4>
            <p className="text-base text-black">
              Welcome to mitroo<span className="text-black">blog.com</span>! We’re a group of tech enthusiasts passionate about sharing insights, experiences, and stories from the ever-changing world of technology.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h4 className="font-bold text-lg mb-2">Links</h4>
            <ul className="list-none space-y-2">
              <li>
                <Link to="/home" className="text-black hover:text-gray-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-black hover:text-gray-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black hover:text-gray-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h4 className="font-bold text-lg mb-2">Contact Us</h4>
            <p>Email: mitrooblog@cool.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>
          &copy; 2024 <span className="text-gray-400 font-bold">mitroo</span>
          <span className="text-gray-700 font-bold">blog.com</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
