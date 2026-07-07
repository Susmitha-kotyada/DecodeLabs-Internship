const express = require("express");
const router = express.Router();
const Destination = require("../models/Destination");

// GET all destinations
router.get("/", async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new destination
router.post("/", async (req, res) => {
  try {
    const destination = new Destination(req.body);
    const savedDestination = await destination.save();
    res.status(201).json(savedDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// GET destinations by category
router.get("/category/:category", async (req, res) => {
    try {
        const destinations = await Destination.find({
            category: req.params.category
        });

        res.json(destinations);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;