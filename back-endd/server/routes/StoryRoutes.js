const express = require("express");
const router = express.Router();
const Story = require("../models/Story");

router.get("/", async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stories" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newStory = new Story({ title, content, author });
    await newStory.save();
    res.status(201).json(newStory);
  } catch (err) {
    res.status(400).json({ error: "Failed to add story" });
  }
});

module.exports = router;
