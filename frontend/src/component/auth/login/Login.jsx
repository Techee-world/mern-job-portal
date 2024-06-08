import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/authActions";

const Login = () => {
  const [logInData, setLogInData] = useState({ email: "", password: "" });
  const [logInError, setLogInError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logInInputHandle = (e) => {
    setLogInData({ ...logInData, [e.target.name]: e.target.value });
  };

  const logInSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(logInData));
      navigate("/");
    } catch (error) {
      console.error(error.message);
      setLogInError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div>
      <section className="relative py-28 2xl:py-40 bg-gray-800 overflow-hidden lg:h-screen h-auto">
        <div className="relative container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <div className="max-w-md">
                  <h2 className="mt-8 mb-12 text-5xl font-bold font-heading text-white">
                    Start your journey by logging in.
                  </h2>
                  <p className="text-lg text-gray-200">
                    <span>The brown fox jumps over</span>
                    <span className="text-white"> the lazy dog.</span>
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="px-6 lg:px-10 py-6 bg-gray-600 rounded-lg">
                  <form onSubmit={logInSubmitHandle} action="#">
                    <h3 className="mb-10 text-2xl text-blue-300 font-bold font-heading">
                      Login
                    </h3>
                    <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                      <span className="inline-block pr-3 py-2 border-r border-gray-50">
                        {/* SVG Icon */}
                      </span>
                      <input
                        onChange={logInInputHandle}
                        name="email"
                        className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-400 rounded-r-full focus:outline-none"
                        type="email"
                        placeholder="Email"
                        value={logInData.email}
                        required
                      />
                    </div>
                    <div className="flex items-center pl-6 mb-5 bg-white rounded-full">
                      <span className="inline-block pr-3 py-2 border-r border-gray-50">
                        {/* SVG Icon */}
                      </span>
                      <input
                        onChange={logInInputHandle}
                        name="password"
                        className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-400 rounded-r-full focus:outline-none"
                        type="password"
                        placeholder="Password"
                        value={logInData.password}
                        required
                      />
                    </div>
                    <div className="text-gray-400 mb-4">
                      Don't have an account?
                      <Link to="/register">
                        <span className="text-blue-300 underline">
                          {" "}
                          Register{" "}
                        </span>
                      </Link>
                    </div>
                    <button
                      type="submit"
                      className="py-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200"
                    >
                      Next
                    </button>
                  </form>
                  {logInError && (
                    <div className="text-red-300 text-center my-2">
                      {logInError}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
