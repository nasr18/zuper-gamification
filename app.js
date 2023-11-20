const express = require("express");
const logger = require("morgan");

const { User, Activity } = require("./db");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Zuper Gamification API!" });
});

// Get leaderboard for the current month
app.get("/leaderboard/:month", async (req, res) => {
  const month = req.params.month;
  const users = await User.find({ "activities.month": month })
    .sort({ points: -1 })
    .exec();

  res.json(users);
});

// Get user details
app.get("/users/:userId", async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findById(userId)
    .populate("activities.activity")
    .exec();
  res.json(user);
});

// Update user's activity for a specific month
app.post("/update-activity/:userId", async (req, res) => {
  const userId = req.params.userId;
  const { activityId, month } = req.body;

  const user = await User.findById(userId);
  user.activities.push({ activity: activityId, month });
  user.points += activity.points;
  await user.save();

  res.json(user);
});

module.exports = app;
