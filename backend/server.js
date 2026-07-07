const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const destinationRoutes = require("./routes/destinationRoutes");

dotenv.config();

// Connect Database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/destinations", destinationRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to Explore Bharat Backend 🚀");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});