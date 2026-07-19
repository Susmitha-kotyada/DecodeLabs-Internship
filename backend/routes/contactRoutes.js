const express = require("express");
const router = express.Router();

const { addContact,getContacts,deleteContact } = require("../controllers/contactControllers");

router.post("/", addContact);
router.get("/", getContacts);
router.delete("/:id", deleteContact);

module.exports = router;