const express = require("express");
const router = express.Router();

const { getAllNews } = require("../../controllers/news");

router.get("/", getAllNews);

module.exports = router;
