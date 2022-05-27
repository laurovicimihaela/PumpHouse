const express = require("express");
const router = express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/me", auth, async (req, res) => {
  res.json(res.user);
});

router.patch("/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["password", "first_name", "last_name"];
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

router.delete("/", auth, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted user" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.json({ user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/logout", auth, async (req, res) => {
  try {
    res.user.tokens = res.user.tokens.filter(
      (token) => token.token !== res.token
    );
    await res.user.save();
    res.json({ message: "Log Out" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/logoutAll", auth, async (req, res) => {
  try {
    res.user.tokens = [];
    await res.user.save();
    res.json({ message: "Log Out from all devices" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
