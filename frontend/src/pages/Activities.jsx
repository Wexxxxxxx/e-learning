import React from "react";
import { useState, useEffect } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const Activities = () => {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
        setNote("");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  return (
    <div className="flex flex-col justify-center items-center  ">
      {isListening ? <span></span> : <span></span>}
      <button onClick={() => setIsListening((prevState) => !prevState)}>
        🎙️
      </button>
      <p className=" w-300 overflow-hidden whitespace-nowrap overflow-ellipsis border border-gray-300">
        {note}
      </p>
    </div>
  );
};

export default Activities;
