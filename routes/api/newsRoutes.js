const express = require("express");
const router = express.Router();

const { getAllNews, newsSearch } = require("../../controllers/news");

router.get("/", getAllNews);
// router.get("/search", newsSearch);

module.exports = router;
