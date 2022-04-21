const mongoose = require('mongoose')

const gymSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  classes: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
  ],
  location: {
    type: "Point",
    coordinates: [-73.856077, 40.848447]
  }
})



module.exports = mongoose.model('Gym', gymSchema)