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

async function getClient(req, res, next) {
  let client;
  try {
    client = await Client.findById(req.params.id);
    if (client == null) {
      return res.status(404).json({ message: "Cannot find client" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.client = client;
  next();
}

module.exports = router;
