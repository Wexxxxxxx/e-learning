import React, { useEffect, useState } from "react";
import axios from "axios";

const EasyShorta = () => {
  const [GetWordsByRandom, setGetWordsByRandom] = useState([]);

  useEffect(() => {
    const fetchGetWordsByRandom = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/words");

        setGetWordsByRandom(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err.massage);
      }
    };

    fetchGetWordsByRandom();
  }, []);

  console.log("GetWordsByRandom", GetWordsByRandom);

  const handleClick = () => {
    const text = "App";

    const value = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(value);
  };

  return (
    <div className="flex flex-co justify-center items-center text-center mx-12 ">
      <div className="text-2xl py-3 px-4 rounded-xl mt-5 bg-cyan-700">
        <h1>SHORT A SOUND CLICK START TO PLAY A GAME!</h1>
      </div>

      <div className="  text-white">
        {GetWordsByRandom &&
          GetWordsByRandom.map((item) => <p key={item._id}>{item.word}</p>)}

        <button
          className="py-3 px-4 bg-cyan-600 hover:bg-cyan-500 rounded-lg"
          onClick={handleClick}
        >
          CLICK THIS SOUNDS
        </button>
      </div>
    </div>
  );
};

export default EasyShorta;
