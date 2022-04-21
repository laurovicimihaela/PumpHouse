const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  trainer: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Trainer' 
  },
  clients: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }
  ],
  price: {
    type: Number,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
})



module.exports = mongoose.model('GymClass', classSchema)