import axios from "axios";
import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { user, isAuthenticated } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      toast.error("You must be logged in to send a message.");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/contact/send",
        { name, email, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center w-11/12 mx-auto">
      <main className="flex-grow container mx-auto p-6">
        <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            We’d love to hear from you! Please fill out the form below, and we
            will get back to you as soon as possible.
          </p>

          {isAuthenticated ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300"
              >
                Send Message
              </button>
            </form>
          ) : (
            <p className="text-red-500">
              You must be logged in to send a message.
            </p>
          )}
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> mitrooblog@cool.com
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> +91 9876543210
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> Sabarmati, Ahmedabad City, Gujarat, India
          </p>
        </section>
      </main>
    </div>
  );
};

export default Contact;
