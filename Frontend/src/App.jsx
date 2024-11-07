import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "./context/AuthContext.jsx";
import Registration from "./pages/Registration.jsx";
import Home from "../src/pages/Home.jsx";
import Contact from "../src/pages/Contact.jsx";
import Blog from "../src/pages/Blog.jsx";
import About from "../src/pages/About.jsx";
import Login from "../src/pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Profile from "../src/pages/Profile.jsx";

function App() {
  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(AuthContext);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/user/me",
          {
            withCredentials: true,
          }
        );
        setUser(data.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setIsAuthenticated(false);
        setUser({});
      }
    };

    getUser();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </>
  );
}

export default App;
