import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setIsAuthenticated, isAuthenticated } = useContext(AuthContext);
  const navigateTo = useNavigate();

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

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("http://localhost:3000/api/v1/user/logout", {
        withCredentials: true,
      });
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/home");
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : "Logout failed!";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/home");
      setIsSidebarOpen(false);
    }
  }, [isAuthenticated]);

  return (
    <div className="m-16">
      <nav className={`h-16 p-5 fixed top-0 left-0 w-full z-50 ${isScrolled ? "bg-gray-300" : "bg-gray-200"} text-black transition-colors duration-300`}>
        <div className="flex items-center justify-between">
          <div className="text-lg text-gray-400 font-bold">
            mitroo<span className="text-gray-700">blog.com</span>
          </div>
          <div className="mx-5">
            <ul className="flex flex-wrap gap-5 max-md:hidden">
              {["Home", "About", "Contact", "Login"].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `text-gray-600 hover:text-gray-800 transition-colors duration-300 ${isActive ? "text-black font-semibold border-b-2 border-black" : ""}`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      
      <div className={`md:hidden flex items-center justify-between p-5 fixed top-0 left-0 w-full z-50 ${isScrolled ? "bg-gray-300" : "bg-gray-200"} text-black transition-colors duration-300`}>
        <div className="text-lg text-gray-400 font-bold">
          mitroo<span className="text-gray-700">blog.com</span>
        </div>
        <button onClick={toggleSidebar} className="text-black" aria-label="Toggle menu">
          ☰
        </button>
      </div>

    
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-gray-200 bg-opacity-75 md:hidden">
          <div className="absolute top-0 right-0 w-64 bg-gray-200 text-black h-full p-5">
            <button onClick={toggleSidebar} className="text-black mb-5" aria-label="Close menu">
              ✖️
            </button>
            <ul className="flex flex-col gap-5">
              {["Home", "About", "Contact", "Login"].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `text-black hover:text-gray-600 transition-colors duration-300 ${isActive ? "font-semibold border-b-2 border-black" : ""}`
                    }
                    onClick={toggleSidebar}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div className="m-16">
          <nav className={`h-16 p-5 fixed top-0 left-0 w-full z-50 ${isScrolled ? "bg-gray-300" : "bg-gray-200"} text-black transition-colors duration-300`}>
            <div className="flex items-center justify-between">
              <div className="text-lg text-gray-400 font-bold">
                mitroo<span className="text-gray-700">blog.com</span>
              </div>
              <div className="mx-5">
                <ul className="flex flex-wrap gap-5 max-md:hidden">
                  {["Profile", "Home", "Blog", "About", "Contact"].map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={`/${item.toLowerCase()}`}
                        className={({ isActive }) =>
                          `text-gray-600 hover:text-gray-800 transition-colors duration-300 ${isActive ? "text-black font-semibold border-b-2 border-black" : ""}`
                        }
                      >
                        {item}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          
          <div className={`md:hidden flex items-center justify-between p-5 fixed top-0 left-0 w-full z-50 ${isScrolled ? "bg-gray-300" : "bg-gray-200"} text-black transition-colors duration-300`}>
            <div className="text-lg text-gray-400 font-bold">
              mitroo<span className="text-gray-700">blog.com</span>
            </div>
            <button onClick={toggleSidebar} className="text-black" aria-label="Toggle menu">
              ☰
            </button>
          </div>

          {isSidebarOpen && (
            <div className="fixed inset-0 z-50 bg-gray-200 bg-opacity-75 md:hidden">
              <div className="absolute top-0 right-0 w-64 bg-gray-200 text-black h-full p-5">
                <button onClick={toggleSidebar} className="text-black mb-5" aria-label="Close menu">
                  ✖️
                </button>
                <ul className="flex flex-col gap-5">
                  {["Profile", "Home", "Blog", "About", "Contact"].map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={`/${item.toLowerCase()}`}
                        className={({ isActive }) =>
                          `text-black hover:text-gray-600 transition-colors duration-300 ${isActive ? "font-semibold border-b-2 border-black" : ""}`
                        }
                        onClick={toggleSidebar}
                      >
                        {item}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <button onClick={handleLogout} className="text-black hover:text-gray-600 transition-colors duration-300">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
