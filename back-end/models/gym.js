const mongoose = require("mongoose");

const gymSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: "GymClass" }],
  trainers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Gym", gymSchema);
