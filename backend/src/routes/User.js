const express = require("express");
const router = express.Router();

const {
    CreateUser,
    GetUserId,
    GetAllUser
  } = require("../controllers/usercontroller");

// GET ALL USER
router.get("/", GetAllUser);

// GET USER BY ID
router.get("/:id", GetUserId);

//  POST A NEW WORDS
router.post("/", CreateUser);

module.exports = router;