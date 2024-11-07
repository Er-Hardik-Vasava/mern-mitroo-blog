import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
