import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="m-16">
      <div
        className={`h-16 p-5 fixed top-0 left-0 w-full z-50 ${
          isScrolled ? "bg-gray-700" : "bg-black"
        } text-white transition-colors duration-300`}
      >
        <div className="flex items-center justify-between max-md:hidden">
          <div className="text-lg">
            dev<span className="text-gray-400">blog.com</span>
          </div>
          <div className="mx-5">
            <ul className="flex flex-wrap gap-5">
              {["Home", "Blog", "About", "Contact"].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `text-white hover:text-gray-300 transition-colors duration-300 ${
                        isActive ? "text-gray-500" : ""
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    `text-white hover:text-gray-300 transition-colors duration-300 ${
                      isActive ? "text-gray-500" : ""
                    }`
                  }
                >
                  SIGN IN
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden flex items-center justify-between p-5 fixed top-0 left-0 w-full z-50 ${
          isScrolled ? "bg-gray-800" : "bg-black"
        } text-white transition-colors duration-300`}
      >
        <div className="text-lg">
          dev<span className="text-gray-400">blog.com</span>
        </div>
        <button onClick={toggleSidebar} className="text-white">
          ☰
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 md:hidden">
          <div className="absolute top-0 right-0 w-64 bg-black text-white h-full p-5">
            <button onClick={toggleSidebar} className="text-white mb-5">
              ✖️
            </button>
            <ul className="flex flex-col gap-5">
              {["Home", "Blog", "About", "Contact", "SignIN"].map(
                (item, index) => (
                  <li key={index}>
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      className={({ isActive }) =>
                        `text-white hover:text-gray-300 transition-colors duration-300 ${
                          isActive ? "text-gray-500" : ""
                        }`
                      }
                      onClick={toggleSidebar}
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
