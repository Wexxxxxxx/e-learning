const express = require("express");
const {
  getInfo,
  getAllInfo,
  createInfo,
  updateInfo,
  deleteInfo,
} = require("../controllers/infoController");

const router = express.Router();

router.get("/", getAllInfo);
router.get("/:id", getInfo);
router.post("/", createInfo);
router.patch("/:id", updateInfo);
router.delete("/:id", deleteInfo);

module.exports = router;
