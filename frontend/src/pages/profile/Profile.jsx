import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import useColor from "../../hooks/useColor";
import useMode from "../../zustand/useMode";
import { MdOutlineDarkMode } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Profile = () => {
  const { authUser } = useAuthContext();
  // console.log(authUser);
  const { bgColor, textColor, dropdownBgColor, dropdownBgColorHover } =
    useColor();
  const { mode, setMode } = useMode();
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
    localStorage.setItem("CurrentTheme", mode === "light" ? "dark" : "light");
  };
  const oddColor = mode === "dark" ? "bg-slate-950" : "bg-slate-100";
  const oddColorHover =
    mode === "dark" ? "hover:bg-slate-900" : "hover:bg-slate-200";
  return (
    <div className="flex flex-col md:flex-row h-full w-full justify-around p-5 md:p-20 gap-10">
      <NavLink
        to="/"
        className={`fixed top-5 left-5 md:top-6 md:left-16 text-2xl md:text-3xl rounded-full p-2 ${dropdownBgColor} ${dropdownBgColorHover} shadow-md shadow-gray-600`}
      >
        <IoMdArrowRoundBack className={`${textColor}`} />
      </NavLink>
      <div
        className={`w-full md:w-1/2 p-4 flex flex-col items-center justify-center border border-gray-600 rounded-lg shadow-lg shadow-gray-600 ${bgColor} ${textColor}`}
      >
        <img
          src={authUser.profilePic}
          alt="Profile Image"
          className="md:w-48 md:h-48 w-32 h-32 rounded-full ring ring-gray-500 p-1 mb-5"
        />
        <h2 className="text-xl md:text-2xl font-bold">{authUser.fullName}</h2>
        <p className="text-md md:text-lg">@{authUser.username}</p>
      </div>
      <div className="w-full  md:w-1/2 text-md lg:text-lg p-4 flex flex-col items-center justify-center border border-gray-600 rounded-lg shadow-lg shadow-gray-600 ">
        <div className="w-full flex justify-center items-center flex-col ">
          <div
            className={`px-5 py-5 mb-1 ${dropdownBgColor} ${dropdownBgColorHover} ${textColor} rounded-md flex justify-between w-full`}
          >
            <div className="text-left ">Full Name</div>
            <div>{authUser.fullName}</div>
          </div>
          <div
            className={`px-5 py-5 mb-1 w-full flex justify-between  ${textColor} ${oddColor} ${oddColorHover}`}
          >
            <div className="text-left">Username</div>
            <div>@{authUser.username}</div>
          </div>
          <div
            className={`px-5 py-5 mb-1 ${dropdownBgColor} ${dropdownBgColorHover} ${textColor} rounded-md w-full flex justify-between`}
          >
            <div className="text-left">User ID</div>
            <div>{authUser._id}</div>
          </div>
          <div
            className={`px-5 py-5 mb-1 w-full flex justify-between ${textColor} ${oddColor} ${oddColorHover}`}
          >
            <div className="text-left ">Gender</div>
            <div>{authUser.gender === "male" ? "Male" : "Female"}</div>
          </div>
          <div
            className={` px-5 py-5  ${dropdownBgColor} ${dropdownBgColorHover} ${textColor} rounded-md w-full flex justify-between`}
          >
            <div className="text-left ">Interface</div>
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleMode}
            >
              {mode === "dark" ? (
                <ImSun className={`md:h-6 md:w-6 w-5 h-5 ${textColor}  `} />
              ) : (
                <MdOutlineDarkMode className={`h-6 w-6 ${textColor}  `} />
              )}
              <span className="ml-2">
                {mode === "dark" ? "Light" : "Dark"} Mode
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
