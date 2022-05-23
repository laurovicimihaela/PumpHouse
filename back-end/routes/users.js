const express = require("express");
const router = express.Router();
const User = require("../models/user");
const idValidator = require("../shared/idValidator");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getUser, async (req, res) => {
  res.json(res.user);
});

router.post("/", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/:id", getUser, async (req, res) => {
  if (!idValidator.isValidMoongoseId(req.params.id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  const updates = Object.keys(req.body);
  const allowedUpdates = ["email", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    res.status(400).json({ error: "Invalid field in request body!" });
  }

  try {
    updates.forEach((update) => (res.user[update] = req.body[update]));
    await res.user.save();
    res.json(res.user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted user" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  if (!idValidator.isValidMoongoseId(req.params.id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

module.exports = router;
