const express = require("express");
const { getAllFriends } = require('../../controllers/index');

// const ctrl = require("../../controllers/contacts");
// const schemas = require('../../schemas/contacts')

const router = express.Router();

router.get("/", getAllFriends);

module.exports = router