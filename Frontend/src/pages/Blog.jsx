import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BlogName = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user, isAuthenticated } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigateTo = useNavigate();

  const getMyBlogs = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/v1/blog/my", {
        withCredentials: true,
      });
      setBlogs(data.blogs || []);
    } catch (error) {
      setBlogs([]);
      toast.error("Failed to fetch blogs");
      console.error(error);
    }
  };

  const addBlogs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/blog/add",
        { title, content, author: user?.name || "Anonymous" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setTitle("");
      setContent("");
      getMyBlogs();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add blog");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlogs = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/api/v1/blog/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
      getMyBlogs();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete blog");
      console.error(error);
    }
  };

  const updateBlogs = async (id) => {
    const updatedBlog = blogs.find((blog) => blog._id === id);
    if (!updatedBlog) return;

    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/v1/blog/update/${id}`,
        { title: updatedBlog.title, content: updatedBlog.content }, // Only send updated fields
        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
      getMyBlogs();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update blog");
      console.error(error);
    }
  };

  const handleInputChange = (blogId, field, value) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog._id === blogId ? { ...blog, [field]: value } : blog
      )
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      getMyBlogs();
    } else {
      navigateTo("/login");
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="mx-auto p-6 mb-10 bg-white rounded-lg shadow-lg w-11/12">
        <h1 className="text-2xl font-bold mb-4">Create Your Blog</h1>
        <input
          type="text"
          placeholder="Your Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Blog Content"
          value={content}
          rows={10}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
          onClick={addBlogs}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Blog"}
        </button>
      </div>

      <div className="p-4 w-11/12 mx-auto">
        {blogs.length > 0 ? (
          blogs.map((element) => (
            <div
              key={element._id}
              className="mb-4 p-4 border border-gray-300 rounded-lg shadow-lg"
            >
              <input
                type="text"
                value={element.title}
                onChange={(e) =>
                  handleInputChange(element._id, "title", e.target.value)
                }
                className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Blog Title"
              />
              <textarea
                value={element.content}
                onChange={(e) =>
                  handleInputChange(element._id, "content", e.target.value)
                }
                className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Blog Content"
              />
              <div className="flex items-center mb-4">
                <span className="mr-2 font-semibold">By:</span>
                <input
                  type="text"
                  value={element.author || ""}
                  readOnly
                  className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Blog Author"
                />
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => deleteBlogs(element._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
                <button
                  onClick={() => updateBlogs(element._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Update
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-xl text-gray-500 text-center">
            No Blogs Created
          </h1>
        )}
      </div>
    </>
  );
};

export default BlogName;
