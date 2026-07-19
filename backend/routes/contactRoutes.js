const express = require("express");
const router = express.Router();

const { addContact,getContacts,deleteContact } = require("../controllers/contactControllers");
const adminAuth = require("../middleware/adminAuth");

router.post("/", addContact);
router.get("/", adminAuth,getContacts);
router.delete("/:id",adminAuth, deleteContact);

module.exports = router;