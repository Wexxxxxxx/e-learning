const Info = require("../models/infoModel");
const mongoose = require("mongoose");

const getInfo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such info" });
  }

  const result = await Info.findById(id);

  return !result
    ? res.status(400).json({ error: "No such info" })
    : res.status(200).json(result);
};

const getAllInfo = async (req, res) => {
  const result = await Info.find();

  return !result
    ? res.status(400).json({ error: "No such info" })
    : res.status(200).json(result);
};

const createInfo = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  const result = await Info.create({ firstName, lastName, email });

  return res.status(200).json(result);
};

const updateInfo = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;

  const result = await Info.findOneAndUpdate(
    { _id: id },
    { firstName, lastName, email },
    { new: true }
  );

  return res.status(200).json(result);
};

const deleteInfo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such info" });
  }

  const result = await Info.findOneAndDelete({ _id: id });

  return !result
    ? res.status(400).json({ error: "No such info" })
    : res.status(200).json(result);
};

module.exports = {
  getInfo,
  getAllInfo,
  createInfo,
  updateInfo,
  deleteInfo,
};
