require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const storyRoutes = require("./routes/StoryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/api/stories", storyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
