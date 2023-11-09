const express = require("express");
const router = express.Router();

const {
  GetWordsByRandom
} = require("../controllers/WordController");

// const upload = require("../config/Multer");

router.get("/", GetWordsByRandom);
// router.post("/", upload.array("files", 10), CreateServices);
// router.patch("/:id", upload.array("files", 10), UpdateServices);
// router.patch("/archived/:id", ArchiveService);

module.exports = router;
