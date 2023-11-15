import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="bg-[url('/background2.png')] h-screen bg-no-repeat bg-cover ">
      
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  ">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-full h-28  mr-2" src={logo} alt="logo" />
          </a>
          <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  bg-cyan-600 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Username
                  </label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="@gmail.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">           
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-500 hover:bg-green-600"
                >
                  Sign in
                </button>
                <Link
                  type="submit"
                  to="/"
                  className="w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-500 hover:bg-red-600"
                >
                  Return
                  </Link>
                <p className="text-sm font-light text-white">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/Signupuser"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="/Signupuser"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
     
    </section>
  );
};

export default Login;