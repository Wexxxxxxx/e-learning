import React from "react";

import img from "../assets/img/A.png";
import img2 from "../assets/img/B.png";
import img3 from "../assets/img/C.png";
import img4 from "../assets/img/D.png";
import img5 from "../assets/img/E.png";
import img6 from "../assets/img/F.png";

const Reading = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center text-black text-4xl md:text-5xl lg:text-7xl tracking-widest pt-12 bg-[url('/bgreading.png')] bg-cover bg-no-repeat ">
      <p className="">Welcome To Reading Materials</p>
      <div className="grid gap-x-8 gap-y-10 lg:gap-x-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-20 pb-20">
        <div className="flex flex-col h-[27rem] md:h-[25rem] lg:h-[35rem] rounded-3xl w-[25rem]  bg-orange-300">
          <img
            src={img}
            alt="img"
            className="h-[240px]  rounded-b-[50%] rounded-t-[7%] object-contain bg-cyan-700"
          />
          <p className="underline">Aa</p>
          <button>Hello</button>
          <div className="text-2xl text-white pt-16 flex flex-col justify-center items-center">
            <div class="texts"></div>
          </div>
        </div>
        <div className="flex flex-col h-[27rem] md:h-[25rem] lg:h-[35rem]  rounded-3xl w-[25rem]  bg-orange-300">
          <img
            src={img2}
            alt="img"
            className="h-[250px]  rounded-b-[50%] rounded-t-[7%] object-contain bg-cyan-700"
          />
          <p className="underline">Bb</p>
        </div>
        <div className="flex flex-col h-[27rem] md:h-[25rem] lg:h-[35rem]  rounded-3xl w-[25rem]  bg-orange-300">
          <img
            src={img3}
            alt="img"
            className="h-[250px]  rounded-b-[50%] rounded-t-[7%] object-contain bg-cyan-700"
          />
          <p className="underline">Cc</p>
        </div>
        <div className="flex flex-col h-[27rem] md:h-[25rem] lg:h-[35rem]  rounded-3xl w-[25rem]  bg-orange-300">
          <img
            src={img4}
            alt="img"
            className="h-[250px]  rounded-b-[50%] rounded-t-[7%] object-contain bg-cyan-700"
          />
          <p className="underline">Dd</p>
        </div>
        <div className="flex flex-col h-[27rem] md:h-[25rem] lg:h-[35rem] rounded-3xl w-[25rem]  bg-orange-300">
          <img
            src={img5}
            alt="img"
            className="h-[250px]  rounded-b-[50%] rounded-t-[7%] object-contain bg-cyan-700"
          />
          <p className="underline">Ee</p>
        </div>
        <div className="flex flex-col h-[27rem] md:h-[25rem] lg:h-[35rem]  rounded-3xl w-[25rem]  bg-orange-300">
          <img
            src={img6}
            alt="img"
            className="h-[250px]  rounded-b-[50%] rounded-t-[7%] object-contain bg-cyan-700"
          />
          <p className="underline">Ff</p>
        </div>
      </div>
    </div>
  );
};

export default Reading;
