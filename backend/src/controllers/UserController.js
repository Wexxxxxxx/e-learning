const mongoose = require("mongoose");
const user = require("../models/userModel");

//  GET USER BY ID
const GetUserId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such info" });
    }

    const result = await user.findById(id);

    return !result
      ? res.status(400).json({ error: "No such info" })
      : res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//  GET ALL USER
const GetAllUser = async (req, res) => {
  const result = await user.find();

  return !result
    ? res.status(400).json({ error: "No such info" })
    : res.status(200).json(result);
};


//  CREATE USER
const CreateUser = async (req, res) => {
  try {
    const {
      user_id,
      section,
      first_name,
      last_name,
      middle_name,
      username,
      password,
      email,
      type,
    } = req.body;

    console.log(
      user_id,
      section,
      first_name,
      last_name,
      middle_name,
      username,
      password,
      email,
      type
    );

    const result = await user.create({
      user_id,
      section,
      first_name,
      last_name,
      middle_name,
      username,
      password,
      email,
      type,
    });

    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  CreateUser,
  GetUserId,
  GetAllUser,
};
