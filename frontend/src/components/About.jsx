import React from "react";
import img1 from "../assets/img/reading.png";
import img2 from "../assets/img/sounds.png";
import img3 from "../assets/img/activities.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center text-center xl:h-screen bg-orange-100 "
    >
      <div className="text-black text-4xl uppercase font-bold text-center leading-[4rem] md:text-5xl xl:text-7xl md:p-5 md:tracking-wide  md:leading-12 md:text-center md:px-3 xl:pt-12 md:pt-5">
        <p>Welcome to Menu</p>
      </div>
      <div className="flex md:flex-col pt-2 pb-1 text-center text-md text-black text-md font-light leading-6  tracking-widest md:text-lg xl:text-3xl xl:w-1/2 xl:pt-10 md:leading-6">
        <p>
          On this page, you will learn how to read and participate in some
          exciting activities!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:p-2 gap-10 md:pt-8 pt-5 md:pb-12 pb-12 xl:p-12 xl:gap-20 group">
        <div className="flex flex-col h-[31rem]  group-hover:scale-[0.85] hover:!scale-100 cursor-pointer text-center text-white font-semi text-2xl md:text-md md:ml-2 md:mr-2  bg-cyan-600 rounded-3xl md:w-[230px] xl:w-[350px]  shadow-lg shadow-amber-600 hover:shadow-amber-500">
          <img
            src={img1}
            alt=""
            className="shadow-lg rounded-b-[550%] rounded-t-[70%]"
          />
          <div className="flex flex-col items-center justify center space-y-12 h-44 py-3 ">
            <p>BOOK MATERIALS </p>
            <p>Come on, Let's Read a book!</p>
            <Link
              to="/reading"
              className="py-3 px-4  inline-flex justifiy-center items-center rounded-3xl border-transparent font-bold transition cursor-pointer hover:-translate-y-1 delay-75 bg-amber-500 hover:bg-amber-600"
            >
              Click here
            </Link>
          </div>
        </div>
        <div className="flex flex-col h-[31rem]  group-hover:scale-[0.85] hover:!scale-100 cursor-pointer  text-center text-white font-semi text-2xl md:text-md md:ml-2 md:mr-2  bg-cyan-600 rounded-3xl md:w-[230px] xl:w-[350px]  shadow-lg shadow-amber-600 hover:shadow-amber-500">
          <img
            src={img2}
            alt=""
            className="shadow-lg rounded-b-[550%] rounded-t-[70%]"
          />
          <div className="flex flex-col items-center justify center space-y-12 h-44 py-3 ">
            <p>AUDIO WORDS</p>
            <p>Come on, Let's make a sound!</p>
            <Link
              to="/audio"
              className="py-3 px-4  inline-flex justifiy-center items-center rounded-3xl border-transparent font-bold transition cursor-pointer hover:-translate-y-1 delay-75 bg-amber-500 hover:bg-amber-600"
            >
              Click here
            </Link>
          </div>
        </div>
        <div className="flex flex-col h-[31rem]  group-hover:scale-[0.85] hover:!scale-100 cursor-pointer text-center text-white font-semi text-2xl md:text-md md:ml-2 md:mr-2  bg-cyan-600 rounded-3xl md:w-[230px] xl:w-[350px]  shadow-lg shadow-amber-600 hover:shadow-amber-500">
          <img
            src={img3}
            alt=""
            className="shadow-lg rounded-b-[550%] rounded-t-[70%]"
          />
          <div className="flex flex-col items-center justify center space-y-12 h-44 py-3 ">
            <p>ACTIVITIES</p>
            <p>Come on, Let's have a quiz!</p>
            <Link
              to="/activities"
              className="py-3 px-4   inline-flex justifiy-center items-center rounded-3xl border-transparent font-bold transition cursor-pointer hover:-translate-y-1 delay-75 bg-amber-500 hover:bg-amber-600"
            >
              Click here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
