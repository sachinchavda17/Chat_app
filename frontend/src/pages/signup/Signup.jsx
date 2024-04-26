import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-96  mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-gray-300 text-center font-semibold">
          Signup
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form action="">
          <div>
            <label htmlFor="fullname" className="label p-2">
              Full Name{" "}
            </label>
            <input
              type="text"
              placeholder="John Doe "
              className="w-full input input-bordered h-10 "
            />
          </div>
          <div>
            <label htmlFor="username" className="label p-2">
              Username{" "}
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10 "
            />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              Password{" "}
            </label>
            <input
              type="password"
              placeholder="Enter Password "
              className="w-full input input-bordered h-10 "
            />
          </div>
          <div>
            <label htmlFor="confirmpassword" className="label p-2">
              Confirm Password{" "}
            </label>
            <input
              type="password"
              placeholder="Enter Password "
              className="w-full input input-bordered h-10 "
            />
          </div>
          <GenderCheckbox/>
          <div>
            <button className="btn btn-block btn-sm mt-6">Signup</button>
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover-text-blue-600 mt-2 inline-block"
          >
            Already have an account?
            <span className="text-blue-500"> Login</span>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Signup;
