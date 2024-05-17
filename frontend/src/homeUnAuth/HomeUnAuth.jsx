import React from "react";
import useColor from "../hooks/useColor";
import { Link } from "react-router-dom";

const HomeUnAuth = () => {
  const { textColor, bgColor,mainBgColor,mainBgColorHover } = useColor();
  return (
    <div
      className={`${textColor} ${bgColor} text-3xl font-bold flex justify-center items-center text-center flex-col`}
    >
      <div>WELCOME IN CHAT APP LOGIN TO EXPLORE OUR CHAT WEB APP.</div>
      <Link to={"/login"} className={`${mainBgColor} ${textColor} ${mainBgColorHover} rounded-full px-3 py-2 mt-2 `}>Login</Link>
    </div>
  );
};

export default HomeUnAuth;
