const mongoose = require("mongoose");
const npmValidator = require("validator");

const trainerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
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
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(07[0-9]{8})$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number`,
    },
  },
});

module.exports = mongoose.model("Trainer", trainerSchema);
