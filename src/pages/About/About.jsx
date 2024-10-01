import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const About = () => {
  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-gray-300 flex flex-col items-center">
        <main className="flex-grow container mx-auto p-6">
          <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              We are a passionate group of tech enthusiasts dedicated to sharing
              the latest trends, tips, and insights in the world of computers
              and technology. Our goal is to help you navigate the ever-evolving
              tech landscape with ease and confidence.
            </p>
            <p className="text-gray-700">
              Whether you're a beginner looking for guidance or a seasoned pro
              seeking advanced tips, our blog aims to provide valuable content
              for everyone.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Our mission is to empower individuals with knowledge and tools to
              make informed decisions about their technology needs. We strive to
              create a welcoming community where readers can share their
              experiences and learn from each other.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">What We Cover</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Computer Hardware Reviews</li>
              <li>Software Tutorials and Guides</li>
              <li>Latest Technology Trends</li>
              <li>DIY Tech Projects</li>
              <li>Tech News and Updates</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
            <p className="text-gray-700 mb-4">
              We encourage you to join our community! Share your thoughts in the
              comments section, connect with us on social media, and subscribe
              to our newsletter for the latest updates.
            </p>
            <p className="text-gray-700">
              Thank you for being a part of our journey. Together, let’s explore
              the fascinating world of technology!
            </p>
          </section>
        </main>
      </div>
      <Footer/>
    </>
  );
};

export default About;
