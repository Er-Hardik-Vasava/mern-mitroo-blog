import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-400">mitroo<span className='text-gray-700'>blog.com</span></h1>
      <p className="text-lg max-w-2xl text-center mb-4">
        Welcome to mitroo<span className='text-gray-700'>blog.com</span>! This blog is a space where we share thoughts, stories, and ideas on various topics. 
        Our goal is to connect with you and create a community of like-minded individuals.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
      <p className="text-lg max-w-2xl text-center mb-4">
        We are a group of friends who love to write and share our experiences. 
        Our diverse backgrounds bring unique perspectives to the content we create.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Join Us!</h2>
      <p className="text-lg max-w-2xl text-center mb-4">
        We invite you to join us on this journey. Whether you’re looking for inspiration or simply want to connect, 
        we’re glad you’re here!
      </p>
    </div>
  );
};

export default About;
