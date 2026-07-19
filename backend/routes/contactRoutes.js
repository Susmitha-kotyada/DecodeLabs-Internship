const express = require("express");
const router = express.Router();

const { addContact } = require("../controllers/contactControllers");

router.post("/", addContact);

module.exports = router;