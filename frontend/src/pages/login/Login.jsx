import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(inputs);
  };
  return (
    <div className="flex flex-col justify-center items-center min-w-96  mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-gray-300 text-center font-semibold">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="label p-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Username "
              className="w-full input input-bordered h-10 "
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password "
              className="w-full input input-bordered h-10 "
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <button className="btn btn-block btn-sm mt-6" disabled={loading}>
              {loading ? <span className="loading loading-spinner" /> : "Login"}
            </button>
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Dont't have an Account?
            <span className="text-blue-500"> Signup</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
