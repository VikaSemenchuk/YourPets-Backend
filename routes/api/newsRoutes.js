const express = require("express");
const { getAllNews } = require('../../controllers/index');

// const ctrl = require("../../controllers/contacts");
// const schemas = require('../../schemas/contacts')

const router = express.Router();

router.get("/", getAllNews);

module.exports = router