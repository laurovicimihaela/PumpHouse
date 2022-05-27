const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const Gym = require("../models/gym");
const User = require("../models/user");

// Getting all
router.get("/", async (req, res) => {
  try {
    const gym = await Gym.find();
    res.json(gym);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting one
router.get("/:id", getGym, (req, res) => {
  res.json(res.gym);
});

//Creating one
router.post("/", async (req, res) => {
  const gym = new Gym(req.body);
  try {
    const newGym = await gym.save();
    res.status(201).json(newGym);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id/trainers", getGym, auth, async (req, res) => {
  trainer = await User.findById(res.user._id);
  if (!trainer) {
    throw new Error("Please authenticate!");
  }

  res.gym.trainers.push(trainer);

  try {
    const updatedGym = await res.gym.save();
    res.json(updatedGym);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating one
router.patch("/:id", getGym, async (req, res) => {
  if (req.body.name != null) {
    res.gym.name = req.body.name;
  }
  if (req.body.location != null) {
    res.gym.location = req.body.location;
  }
  try {
    const updatedGym = await res.gym.save();
    res.json(updatedGym);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Deleting One
router.delete("/:id", getGym, async (req, res) => {
  try {
    await res.gym.remove();
    res.json({ message: "Gym deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getGym(req, res, next) {
  let gym;
  try {
    gym = await Gym.findById(req.params.id);
    if (gym == null) {
      return res.status(404).json({ message: "Cannot find gym" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.gym = gym;
  next();
}

module.exports = router;
