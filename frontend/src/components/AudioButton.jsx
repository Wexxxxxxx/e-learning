import React, { useCallback } from "react";
import { useRef, useState} from "react";
import { AiOutlineSound, AiFillSound } from "react-icons/ai";

const AudioButton = ({img, text, src, video}) => {
  const [audio, isAudio] = useState(false);
  const myAudio = useRef();

  const handleBeep = useCallback (() => {
    if (!audio) {
      isAudio(true);
      myAudio.current.play();

      myAudio.current.addEventListener("ended", () => {
        isAudio(false);
      });
    }
  } ,[]); 

  return (
    <div>
      <div className="flex flex-col h-[27rem] md:h-[27rem] lg:h-[35rem] rounded-3xl w-[25rem]   bg-orange-300">
        <video
          src={video} autoPlay loop muted
          alt="img"
          className="h-[240px]  rounded-b-[50%] rounded-t-[7%] object-fill bg-cyan-700"
        />
        <p className="underline p-6">{text}</p>
        <div className="p-10">
          <button onClick={handleBeep}>
            <audio
              id="beep"
              ref={myAudio}
              src={src}
              type="audio"
              controls={false}
            />
            {audio ? <AiFillSound size={70} /> : <AiOutlineSound size={70} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioButton;
