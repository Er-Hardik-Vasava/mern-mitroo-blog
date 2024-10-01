import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home.jsx";
import Contact from "../src/pages/Contact/Contact.jsx";
import Blog from "../src/pages/Blog/Blog.jsx";
import About from "../src/pages/About/About.jsx";
import SignIn from "../src/pages/User/SignIn.jsx";
import RegistrationForm from "../src/pages/User/Signup.jsx";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<RegistrationForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
