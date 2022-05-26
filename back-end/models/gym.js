const mongoose = require("mongoose");

const gymSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],

  location: {
    type: [Number],
    required: true,
  },
});

module.exports = mongoose.model("Gym", gymSchema);
