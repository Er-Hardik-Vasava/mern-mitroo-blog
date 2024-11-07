import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, isAuthenticated, setUser, setIsAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigateTo = useNavigate();

  const getUserData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/v1/user/me", {
        withCredentials: true,
      });
      setUser(data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("http://localhost:3000/api/v1/user/logout", {
        withCredentials: true,
      });
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/home");
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : "Logout failed!";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/login");
    }
  }, [isAuthenticated, navigateTo]);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-10 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Profile</h1>

        {loading ? (
          <div className="text-center text-gray-500">Loading profile...</div>
        ) : user ? (
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <p className="mt-1 text-lg font-semibold text-gray-800">{user.name}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Username</label>
              <p className="mt-1 text-lg font-semibold text-gray-800">@{user.username}</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <p className="mt-1 text-lg font-semibold text-gray-800">{user.email}</p>
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-center text-gray-500">No user data available.</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
