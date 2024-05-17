import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import useColor from "../../hooks/useColor";

const Signup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    fullName: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();
  const {
    textColor,
    bgColor,
    mainBgColor,
    mainTextColor,
    mainTextColorHover,
    mainBgColorHover,
    inputBgColor,
  } = useColor();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col justify-center items-center min-w-96  mx-auto border rounded-lg border-gray-400 shadow-xl">
      <div
        className={`w-full p-6 rounded-lg shadow-md ${bgColor} bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 `}
      >
        <h1 className={`text-3xl ${textColor} text-center font-semibold`}>
          Signup
          <Link className={`${mainTextColor} ${mainTextColorHover}`} to={"/"}>
            {" "} ChatApp
          </Link>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullname" className={`label p-2 ${textColor} `}>
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe "
              className={`w-full input input-bordered h-10 ${textColor} ${inputBgColor} `}
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="username" className={`label p-2 ${textColor} `}>
              Username
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className={`w-full input input-bordered h-10 ${textColor} ${inputBgColor} `}
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="password" className={`label p-2 ${textColor} `}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password "
              className={`w-full input input-bordered h-10 ${textColor} ${inputBgColor} `}
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="confirmpassword"
              className={`label p-2 ${textColor} `}
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter Password "
              className={`w-full input input-bordered h-10 ${textColor} ${inputBgColor}`}
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox
            handleCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <div>
            <button
              className={`btn btn-block btn-sm mt-6 ${mainBgColor} ${mainBgColorHover} ${textColor}`}
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Signup"
              )}
            </button>
          </div>

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
            <span className={`${mainTextColor} ${mainTextColorHover}`}>
             {" "} Login
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
