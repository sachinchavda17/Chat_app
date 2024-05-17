import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import useColor from "../../hooks/useColor";

const Login = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const {
    textColor,
    bgColor,
    mainBgColor,
    mainTextColor,
    mainTextColorHover,
    mainBgColorHover,
    inputBgColor
  } = useColor();
  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(inputs);
  };
  return (
    <div className="flex flex-col justify-center items-center min-w-96  mx-auto border rounded-lg border-gray-400">
      <div
        className={`w-full p-6 rounded-lg shadow-md ${bgColor} bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0`}
      >
        <h1 className={`text-3xl ${textColor} text-center font-semibold`}>
          Login
          <Link className={`${mainTextColor} ${mainTextColorHover}`} to="/">
          {" "}  ChatApp
          </Link>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className={`label p-2 ${textColor} `}>
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Username "
              className={`w-full input input-bordered h-10 ${inputBgColor} ${textColor} `}
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="password" className={`label p-2${textColor} `}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password "
              className={`w-full input input-bordered h-10 ${inputBgColor} ${textColor} `}
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <button
              className={`btn btn-block btn-sm mt-6 ${mainBgColor} ${mainBgColorHover} ${textColor}`}
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner" /> : "Login"}
            </button>
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Dont't have an Account?
            <span className={`${mainTextColor} ${mainTextColorHover}`}>
              {" "}
              Signup
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
