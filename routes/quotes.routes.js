const express = require("express");
const baseController = require("../controllers/quotes.controller");

const router = express.Router();

router.get("/", baseController.getRandomQuote)

module.exports = router;