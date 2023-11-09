import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Signupuser = () => {
  return (
    <section className="bg-[url('/background2.png')] h-screen bg-no-repeat bg-cover ">
      <>
        {/* Hire Us */}

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-xl mx-auto">
            <div className="mt-12">
              {/* Form */}
              <form className="bg-cyan-600 py-12 px-8 rounded-lg">
                <div className="flex flex-col">
                  <h1 className="text-white text-2xl">Sign up your account</h1>
                </div>
                <div className="grid gap-4 lg:gap-6 pt-6">
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="hs-firstname-hire-us-2"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Student Number
                      </label>
                      <input
                        type="text"
                        name="hs-firstname-hire-us-2"
                        id="hs-firstname-hire-us-2"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-smtext-black"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hs-lastname-hire-us-2"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Section
                      </label>
                      <input
                        type="text"
                        name="hs-lastname-hire-us-2"
                        id="hs-lastname-hire-us-2"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm text-black"
                      />
                    </div>
                  </div>
                  {/* End Grid */}

                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="hs-company-hire-us-2"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="hs-company-hire-us-2"
                        id="hs-company-hire-us-2"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm text-black"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hs-company-website-hire-us-2"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="hs-company-website-hire-us-2"
                        id="hs-company-website-hire-us-2"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm text-black"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="hs-company-hire-us-2"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="text"
                        name="hs-company-hire-us-2"
                        id="hs-company-hire-us-2"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm text-black"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hs-company-website-hire-us-2"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Gmail
                      </label>
                      <input
                        type="text"
                        placeholder="@gmail.com"
                        name="hs-company-website-hire-us-2"
                        id="hs-company-website-hire-us-2"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm text-black"
                      />
                    </div>
                  </div>
                  {/* End Grid */}
                </div>
                {/* End Grid */}
                {/* Checkbox */}
                <div className="mt-3 flex">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3">
                    <label
                      htmlFor="remember-me"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      By submitting this form I have read and acknowledged the{" "}
                      <a
                        className="text-blue-600 decoration-2 hover:underline font-medium"
                        href="#"
                      >
                        Privact policy
                      </a>
                    </label>
                  </div>
                </div>
                {/* End Checkbox */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pt-3">
                  <Link
                    to="/login"
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-green-500 hover:bg-green-600 border border-transparent text-sm lg:text-base text-white font-medium rounded-md g-offset-white transition py-3 px-4"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/user"
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-red-500 hover:bg-red-600 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  >
                    Return
                  </Link>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
        {/* End Hire Us */}
      </>
    </section>
  );
};

export default Signupuser;
