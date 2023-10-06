import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";


const Me = () => {
  return (
    <div>
      <div className="bg-[url('/official.png')] bg-no-repeat bg-cover">
        <Navbar />
        <Home />
      </div>
      <div className="">
      <About />
      </div>
      <Contact />
     
    </div>
  );
};

export default Me;
