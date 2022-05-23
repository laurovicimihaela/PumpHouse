const express = require("express");
const router = express.Router();
const Trainer = require("../models/trainer");
const idValidator = require("../shared/idValidator");

// Getting all
router.get("/", async (req, res) => {
  try {
    const trainer = await Trainer.find();
    res.json(trainer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get("/:id", getTrainer, (req, res) => {
  res.json(res.trainer);
});

// Creating one
router.post("/", async (req, res) => {
  const trainer = new Trainer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
  });
  try {
    const newTrainer = await trainer.save();
    res.status(201).json(newTrainer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One
router.patch("/:id", async (req, res) => {
  if (!idValidator.isValidMoongoseId(req.params.id)) {
    return res.status(404).json({ message: "Invalid id" });
  }

  const updates = Object.keys(req.body);
  const allowedUpdates = ["firstName", "lastName", "email", "phoneNumber"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid field in request body!" });
  }

  try {
    const trainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!trainer) {
      return res.status(404).json({ message: "Cannot find trainer" });
    }

    res.send(trainer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One
router.delete("/:id", getTrainer, async (req, res) => {
  try {
    await res.trainer.remove();
    res.json({ message: "Deleted trainer" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getTrainer(req, res, next) {
  if (!idValidator.isValidMoongoseId(req.params.id)) {
    return res.status(404).json({ message: "Invalid id" });
  }

  let trainer;
  try {
    trainer = await Trainer.findById(req.params.id);
    if (trainer == null) {
      return res.status(404).json({ message: "Cannot find trainer" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.trainer = trainer;
  next();
}

module.exports = router;
