const express = require("express");
const router = express.Router();

const { getAllFriends } = require("../../controllers/friends");

router.get("/", getAllFriends);

module.exports = router;
