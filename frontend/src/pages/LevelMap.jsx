import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import level1 from "../assets/img/Level1Map.png";
import level2 from "../assets/img/Level2Map.png";
import level3 from "../assets/img/Level3Map.png";
import level4 from "../assets/img/Level4Map.png";

const LevelMap = () => {
  const [formdata, setFormData] = useState({
    dungeonName: "",
    difficulty: "",
    maxLvl: "",
    items: [
      {
        lvl: "",
        maxWords: "",
        words: "",
      },
    ],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const obj = {
      dungeonName: "Tropical Island, Ice Island, Lava Island, Tropical Island",
      difficulty: formData.difficulty,
      maxLvl: formData.maxLvl,
      items: [
        {
          lvl: formData.lvl,
          maxWords: formData.maxWords,
          words: formData.words,
        },
      ],
    };
  };

  useEffect(() => {
    const levelsContainer = document.querySelector(".levels");
    levelsContainer.classList.add("centered");
  }, []);

  const imageContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const Stages = [
    {
      type: "tropical",
      photo: level1,
      text: "Tropical Island",
      link: "/tropical",
    },
    {
      type: "ice",
      photo: level2,
      text: "Ice Island",
      link: "/ice",
    },
    {
      type: "lava",
      photo: level3,
      text: "Lava Island",
      link: "/lava",
    },
    {
      type: "space",
      photo: level4,
      text: "Space Island",
      link: "/space",
    },
  ];

  return (
    <div className="bg-cyan-600">
      <div className="image-container m-10 bg-cyan-600">
        <h1 className="text-center font-bold text-5xl tracking-widest">
          STAGE LEVELS
        </h1>
        <motion.div
          variants={imageContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-10 levels"
        >
          {Stages.map((stage, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.2 }}
              className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-12 centered level-container ${stage.type}`}
            >
              <Link to={stage.link}>
                <motion.div variants={item} className="image-container">
                  <div className="weather-effect"></div>
                  <motion.img
                    variants={item}
                    src={stage.photo}
                    className="w-full"
                    alt={stage.text}
                  />
                  <div className="progress-bar"></div>
                </motion.div>
                <motion.p
                  variants={item}
                  className="relative text-2xl font-bold"
                >
                  {stage.text}
                </motion.p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LevelMap;
