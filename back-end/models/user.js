const mongoose = require("mongoose");
const npmValidator = require("validator");

const trainerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return npmValidator.isEmail(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", trainerSchema);
