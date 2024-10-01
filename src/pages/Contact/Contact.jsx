import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-300 flex flex-col items-center">
        <main className="flex-grow container mx-auto p-6">
          <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              We’d love to hear from you! Please fill out the form below, and we
              will get back to you as soon as possible.
            </p>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
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
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> mrKing@cool.com
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> +91 1234567890  
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> Ahmedabad City,
              Gujarat, India
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
