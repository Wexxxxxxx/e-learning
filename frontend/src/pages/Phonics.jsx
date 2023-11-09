import React, { useState } from "react";
import { Link } from "react-router-dom";
const Phonics = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[url('/bgreading.png')] h-screen bg-cover bg-no-repeat pb-12">
      <div className="flex flex-col justify-center text-center items-center">
        <div className="text-5xl text-black pt-5 tracking-widest">
          <h1>WELCOME TO PRACTICE MATERIALS</h1>
        </div>
      </div>
      {/* START OF DIV */}
      <div className="flex flex-row justify-center text-center items-center  gap-12 mt-36    px-24  pt-12">
        <div className="sm:flex  gap-12">
          <div className="hs-accordion-group">
            <div
              className="hs-accordion active rounded-xl bg-cyan-600 px-10 py-4"
              id="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <button
                onClick={toggleAccordion}
                className="f hs-accordion-toggle text-3xl text-white group py-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold transition dark:hs-accordion-active:text-amber-500 dark:text-gray-200 dark:hover:text-gray-400"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
              >
                (EASY) Aa SOUND
                <svg
                  className="hs-accordion-active:hidden hs-accordion-active:text-amber-200 block w-3 h-3 group-hover:text-gray-500 text-orange-100"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden ${
                  isOpen ? "" : "active"
                }`}
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <div className="flex flex-col justify-start items-start text-center px-9 py-4 rounded-md mt-5 border-t-1 border-gray-200 bg-orange-200">
                  <Link
                    to="/easyshorta"
                    className="px-6 py-3 rounded-xl bg-amber-300"
                  >
                    CLICK START
                  </Link>
                </div>
                <div className="flex flex-col justify-start items-start text-center px-9  py-4 rounded-md mt-5 border-t-1 border-gray-200 bg-orange-200">
                  <Link
                    to="/easylonga"
                    className="px-6 py-3 rounded-xl bg-amber-300"
                  >
                    CLICK START
                  </Link>
                </div>
                <div className="flex flex-col justify-start items-start text-center px-9  py-4 rounded-md mt-5 border-t-1 border-gray-200 bg-orange-200">
                  <button className="px-6 py-3 rounded-xl bg-amber-300">
                    CLICK START
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* MEDIUM SHORT A  */}
          <div className="hs-accordion-group">
            <div
              className="hs-accordion active rounded-xl bg-cyan-600 px-10 py-4"
              id="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <button
                onClick={toggleAccordion}
                className="f hs-accordion-toggle text-3xl text-white group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold transition dark:hs-accordion-active:text-amber-500 dark:text-gray-200 dark:hover:text-gray-400"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
              >
                (EASY) Aa SOUND
                <svg
                  className="hs-accordion-active:hidden hs-accordion-active:text-amber-200 block w-3 h-3 group-hover:text-gray-500 text-orange-100"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden ${
                  isOpen ? "" : "active"
                }`}
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <div className="flex flex-col justify-start items-start text-center px-9 py-4 rounded-md mt-5 border-t-1 border-gray-200 bg-orange-200">
                  <Link
                    to="/easyshorta"
                    className="px-6 py-3 rounded-xl bg-amber-300"
                  >
                    CLICK START
                  </Link>
                </div>
                <div className="flex flex-col justify-start items-start text-center px-9  py-4 rounded-md mt-5 border-t-1 border-gray-200 bg-orange-200">
                  <Link
                    to="/easylonga"
                    className="px-6 py-3 rounded-xl bg-amber-300"
                  >
                    CLICK START
                  </Link>
                </div>
                <div className="flex flex-col justify-start items-start text-center px-9  py-4 rounded-md mt-5 border-t-1 border-gray-200 bg-orange-200">
                  <button className="px-6 py-3 rounded-xl bg-amber-300">
                    CLICK START
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* HARD SHORT A SOUND */}
          <div className="hs-accordion-group">
            <div
              className="hs-accordion active rounded-xl bg-cyan-600 px-10 py-4"
              id="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <button
                onClick={toggleAccordion}
                className="f hs-accordion-toggle text-3xl text-white group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold transition dark:hs-accordion-active:text-amber-500 dark:text-gray-200 dark:hover:text-gray-400"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
              >
                (EASY) Aa SOUND
                <svg
                  className="hs-accordion-active:hidden hs-accordion-active:text-amber-200 block w-3 h-3 group-hover:text-gray-500 text-orange-100"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden ${
                  isOpen ? "" : "active"
                }`}
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <div className="flex flex-col justify-start items-start text-center px-9 py-4 rounded-md mt-5 border-t-1 border-gray-200 bg-orange-200">
                  <Link
                    to="/easyshorta"
                    className="px-6 py-3 rounded-xl bg-amber-300"
                  >
                    CLICK START
                  </Link>
                </div>
                <div className="flex flex-col justify-start items-start text-center px-9  py-4 rounded-md mt-5 border-t-1 border-gray-200 bg-orange-200">
                  <Link
                    to="/easylonga"
                    className="px-6 py-3 rounded-xl bg-amber-300"
                  >
                    CLICK START
                  </Link>
                </div>
                <div className="flex flex-col justify-start items-start text-center px-9  py-4 rounded-md mt-5 border-t-1 border-gray-200 bg-orange-200">
                  <button className="px-6 py-3 rounded-xl bg-amber-300">
                    CLICK START
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // END OF DIV

  );
};

export default Phonics;
