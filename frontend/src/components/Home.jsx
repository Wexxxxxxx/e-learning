import React from "react";
import img from "../assets/img/homebg.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-center items-center md:p-12  md:pr-30  pb-32 md:pb-60 md:pt-0 h-[1000px]"
    >
      <div className="w-full md:w-7/12 justify-center mt-32 items-center flex xl:text-6xl lg:text-4xl md:text-3xl text-4xl text-center md:text-start">
        <p className="text-black font-bold xl:leading-[70px] lg:leading-[50px] md:leading-[40px] -tracking-wider  ">
          Learn With us! <br />
          We will teach you how to
          <div className="">
            <TypeAnimation
              sequence={[`Learn,`, `Read,`, `Visualize.`, 600, ""]}
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="pt-5">
            <button className="py-3 px-3 lg:py-3 lg:px-4 text-black font-bold xl:leading-[70px] lg:leading-[50px] md:leading-[40px] -tracking-wider hover:bg-amber-300  bg-amber-200 rounded-full">
              Get started
            </button>
          </div>
        </p>
      </div>
      <img
        src={img}
        className="md:w-6/12 pt-20 md:h-[500px]  lg:h-[600px]"
      ></img>
    </div>
  );
};

export default Home;
