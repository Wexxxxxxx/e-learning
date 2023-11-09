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
  const [accuracy, setAccuracy] = useState(0);
  const [savedNotes, setsavedNotes] = useState([]);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const calculatePronunciationAccuracy = (
    transcript,
    referencePronunciation
  ) => {
    const phonemes = transcript.split(" ");
    const referencePhonemes = referencePronunciation.split(" ");

    const correctPhonemes = phonemes.filter(
      (phoneme, index) => phoneme === referencePhonemes[index]
    );

    const accuracy = correctPhonemes.length / phonemes.length;

    return accuracy * 100;
  };

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("Stopped Mic on End");
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
        handleSavenNote();
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

      // Calculate accuracy
      const trueTranscript = ["app", "banana", "cherry"];
      const accuracy =
        calculatePronunciationAccuracy(transcript, referencePronunciation) * 90;

      setAccuracy(accuracy);

      // Check if the word is spoken correctly
      if (transcript == trueTranscript) {
        setAccuracy(95);
        console.log("The word is spoken correctly!");
      } else {
        console.log("The word is spoken incorrectly.");
      }

      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleSavenNote = () => {
    setsavedNotes([...savedNotes, note]);
    setNote("");
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      {isListening ? <span></span> : <span></span>}
      <button
        className={isListening ? "pulse-button btn-danger" : "pulse-button"}
        onClick={() => setIsListening((prevState) => !prevState)}
      >
        {isListening ? <span>🎙️Stop</span> : <span>🛑Start</span>}
      </button>
      <p className=" w-300 overflow-hidden whitespace-nowrap overflow-ellipsis border border-gray-300">
        {note}
      </p>
      <div className="text-green-500 font-bold mb-2">
        <p>Accuracy: {accuracy.toFixed(2)}%</p>
      </div>
      <>
        <h2>Notes</h2>
        {savedNotes.map((n) => (
          <p key={n}>{n}</p>
        ))}
      </>
    </div>
  );
};

export default Activities;
