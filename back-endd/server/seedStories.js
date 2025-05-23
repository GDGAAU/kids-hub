require("dotenv").config();
const mongoose = require("mongoose");
const Story = require("./models/Story");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const stories = [
  {
    title: "The Girl Who Planted Stars",
    content:
      "In a sleepy village tucked between the hills, lived a girl named Sela who believed stars were seeds dropped by the moon...",
    author: "Anonymous",
  },
  {
    title: "The Principal's Kid",
    content:
      "No one knew the new kid was the principal’s child — until they stood up to a bully, shut down gossip...",
    author: "Anonymous",
  },
];

async function seedStories() {
  try {
    await Story.insertMany(stories);
    console.log("Stories added!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Failed to insert stories:", err);
  }
}

seedStories();
