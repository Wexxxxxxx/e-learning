import React from "react";
import AudioButton from "../components/AudioButton";
import img from "../assets/img/A.png";
import img2 from "../assets/img/B.png";
import img3 from "../assets/img/C.png";
import img4 from "../assets/img/D.png";
import img5 from "../assets/img/E.png";
import img6 from "../assets/img/F.png";
import beep from "../assets/audios/A.mp3";
import beep2 from "../assets/audios/B.mp3";
import beep3 from "../assets/audios/C.mp3";
import beep4 from "../assets/audios/D.mp3";
import beep5 from "../assets/audios/E.mp3";
import beep6 from "../assets/audios/F.mp3";
import video1 from "../assets/videos/Avid.mp4";
import video2 from "../assets/videos/Bvid.mp4";
import video3 from "../assets/videos/Cvid.mp4";
import { useRef, useState } from "react";
import { AiOutlineSound, AiFillSound } from "react-icons/ai";

const Reading = () => {
  const src = [
    {
      id: "btn1",
      src: beep,
      video: video1,
      text: "Aa",
    },
    {
      id: "btn2",
      src: beep2,
      video: video2,
      text: "Bb",
    },
    {
      id: "btn3",
      src: beep3,
      video: video3,
      text: "Cc",
    },
    {
      id: "btn4",
      src: beep4,
      img: img4,
      text: "Dd",
    },
    {
      id: "btn5",
      src: beep5,
      img: img5,
      text: "Ee",
    },
    {
      id: "btn6",
      src: beep6,
      img: img6,
      text: "Ff",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center text-center text-black text-4xl md:text-5xl lg:text-7xl tracking-widest pt-12 bg-[url('/bgreading.png')] bg-cover bg-no-repeat ">
      <p>Welcome to Pratice Materials</p>
      <div className="grid gap-x-8 gap-y-10 lg:gap-x-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-20 pb-20  ">
        {src.map((item) => (
          <div key={item.id} id={item.id}>
            <AudioButton
              img={item.img}
              text={item.text}
              src={item.src}
              video={item.video}
            ></AudioButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
