import React, { useState } from "react";

const EasyShorta = () => {
  const handleClick = () => {
    const text = "App, App, App ";

    const value = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(value);

    
  };

  return (
    <div className="flex flex-col justify-center items-center text-center  ">
      <div className="text-2xl py-3 px-4 rounded-xl mt-5 bg-cyan-700">
        <h1>SHORT A SOUND CLICK START TO PLAY A GAME!</h1>
      </div>
      <div className="flex flex-col  pt-12   ">
        <button
        className="bg-red-500  px-3 py-2 rounded-xl" 
        onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
};

export default EasyShorta;
