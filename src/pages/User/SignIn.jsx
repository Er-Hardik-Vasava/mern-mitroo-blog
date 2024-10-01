import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const SignIn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <Navbar />
      <div className="p-16 md:pt-4 bg-gray-300 ">
        <h2 className="text-2xl mb-4">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              required
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password:</label>
            <input
              type="password"
              required
              className="border rounded w-full p-2"
            />
          </div>
          <Link to="/signin">
            <button
              type="submit"
              className="bg-gray-500 text-white m-2 px-4 py-2 rounded hover:bg-gray-800"
            >
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button
              type="submit"
              onClick={handleClick}
              className="bg-gray-500 text-white m-2 px-4 py-2 rounded hover:bg-gray-800"
            >
              Sign Up
            </button>
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
