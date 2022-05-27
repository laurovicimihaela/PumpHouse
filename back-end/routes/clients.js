const express = require("express");
const auth = require("../middleware/auth");
const gymClass = require("../models/gymClass");
const User = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const trainers = await User.find({ role: "CLIENT" });
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/classes", auth, async (req, res) => {
  try {
    const classes = await gymClass.find({ clients: res.user._id });
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
