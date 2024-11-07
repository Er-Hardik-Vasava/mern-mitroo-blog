import React, { useEffect, useState, useContext } from "react";
import blogImage from "../assets/images/blog.jpg";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import blogVideo from "../assets/video/blogVideo.mp4";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { setIsAuthenticated, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleBlogClick = () => {
    navigate("/blog");
  };

  return (
    <>
      <section className="flex flex-wrap bg-white p-4 md:p-8 lg:p-16 border-b border-gray-300">
        <div className="flex flex-col justify-center items-center p-3 md:p-5 order-2 md:order-1 md:h-full w-full md:w-1/2">
          <p className="md:text-2xl mb-6 text-center max-w-lg opacity-100">
            In the ever-evolving landscape of technology, staying connected and
            informed is crucial for personal and professional growth. As we
            navigate through the latest trends in social media, digital
            marketing, and remote collaboration, it’s important to share
            insights and experiences with friends and peers.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
          <video
            muted
            autoPlay
            loop
            src={blogVideo}
            className="w-full h-auto max-w-full rounded-lg"
            alt="Descriptive Alt Text"
          />
        </div>
      </section>

      <section className="border-b border-gray-300 pt-5">
        <div className="flex flex-wrap items-center justify-center p-6 bg-white">
          <div className="w-full md:w-1/2 flex justify-center items-center mb-6">
            <img
              src={blogImage}
              className="w-full h-auto max-w-sm md:max-w-lg rounded-lg"
              alt="Illustration of blogging"
            />
          </div>
          <p className="md:text-2xl mb-6 text-center max-w-lg opacity-100">
            Welcome to Your Creative Space! Blogging is about connecting,
            inspiring, and engaging with a community. This blog is your platform
            to express your thoughts, ideas, and experiences with the world.
          </p>
        </div>
        <div className="flex justify-center mb-6">
          <button
            onClick={isAuthenticated ? handleBlogClick : handleLoginClick}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 hover:shadow-xl transition duration-300"
          >
            {isAuthenticated ? "Start Blogging" : "Login to Start Blogging"}
          </button>
        </div>
      </section>

      <section className="bg-white py-8 border-b border-gray-300">
        <h2 className="text-center text-3xl font-bold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-center mb-4">
          We are a community of writers and readers who believe in the power of
          words. Join us on this journey of creativity and connection.
        </p>
      </section>
    </>
  );
};

export default HeroSection;
