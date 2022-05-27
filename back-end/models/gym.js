const mongoose = require("mongoose");

const gymSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
  trainers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trainer" }],
});

module.exports = mongoose.model("Gym", gymSchema);
