import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./contexts/AuthContext";
import useColor from "./hooks/useColor";
import HomeUnAuth from "./homeUnAuth/HomeUnAuth.jsx";
import useMode from "./zustand/useMode.js";
import Profile from "./pages/profile/Profile.jsx";

function App() {
  const { authUser } = useAuthContext();
  const { bgColor } = useColor();
  const { setMode } = useMode();
  useEffect(() => {
    const storedTheme = localStorage.getItem("CurrentTheme") || "dark";
    setMode(storedTheme);
  }, []);
  return (
      <div
        className={`p-2 h-screen w-screen flex justify-center  items-center ${bgColor}`}
      >
        <Toaster />
        <Routes>
          <Route path="/" element={!authUser ? <HomeUnAuth /> : <Home />} />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/profile"
            element={!authUser ? <Navigate to="/" /> : <Profile />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <Signup />}
          />
        </Routes>
      </div>
  );
}

export default App;
