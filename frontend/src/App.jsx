import { useState } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="p-4 h-screen w-screen flex justify-center  items-center">
      {/* <Login /> */}
      {/* <Signup/> */}
      <Home/>
    </div>
  );
}

export default App;
