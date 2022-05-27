const express = require("express");
const router = express.Router();
const GymClass = require("../models/gymClass");
const auth = require("../middleware/auth");
const User = require("../models/user");

// Getting all
router.get("/", async (req, res) => {
  try {
    const classes = await GymClass.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating one
router.post("/", auth, async (req, res) => {
  const gymClass = new GymClass({
    ...req.body,
    trainer: res.user,
  });
  try {
    const newClass = await gymClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id/clients", getClass, auth, async (req, res) => {
  const client = await User.findById(res.user._id);
  if (!client) {
    throw new Error("Please authenticate!");
  }
  res.gymClass.clients.push(client);
  try {
    const updatedClass = await res.gymClass.save();
    res.json(updatedClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", getClass, async (req, res) => {
  if (req.body.name != null) {
    res.gymClass.name = req.body.name;
  }
  if (req.body.price != null) {
    res.gymClass.price = req.body.price;
  }
  if (req.body.capacity != null) {
    res.gymClass.capacity = req.body.capacity;
  }
  if (req.body.date != null) {
    res.gymClass.date = req.body.date;
  }
  try {
    const updatedClass = await res.gymClass.save();
    res.json(updatedClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getClass, async (req, res) => {
  try {
    await res.gymClass.remove();
    res.json({ message: "Deleted class" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getClass(req, res, next) {
  let gymClass;
  try {
    gymClass = await GymClass.findById(req.params.id);
    if (gymClass == null) {
      return res.status(404).json({ message: "Cannot find class" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.gymClass = gymClass;
  next();
}

module.exports = router;
