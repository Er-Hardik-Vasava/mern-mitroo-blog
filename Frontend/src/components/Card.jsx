import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CardDesign from "./CardDesign";

const Card = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://localhost:3000/api/v1/blog/all", {
        withCredentials: true,
      });
      setBlogs(data.blogs || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to fetch blogs");
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-700 text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-red-600 text-xl">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="py-8 px-4">
      <h2 className="text-center text-3xl font-bold mb-6">People's Blogs</h2>
      <div className="flex flex-wrap justify-center items-center bg-white rounded-lg p-4">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <CardDesign
              key={blog._id}
              title={blog.title}
              content={blog.content}
              author={blog.author}
            />
          ))
        ) : (
          <h1 className="text-xl text-gray-700 text-center">
            No Blogs Created
          </h1>
        )}
      </div>
    </div>
  );
};

export default Card;
