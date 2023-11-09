const mongoose = require("mongoose");

const Word = require("../models/WordModel");

const GetWordsByRandom = async (req, res) => {
  const result = Word.aggregate([
    { $sample: { size: 3 } },
  ]);

  let output = [];

  for await (const item of result) {
    output.push(item)
  }

  return !result
    ? res.status(400).json({ error: `No such service for Barangay ${brgy}` })
    : res.status(200).json(output);
};

module.exports = {
    GetWordsByRandom
}