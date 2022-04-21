const express = require('express')
const router = express.Router()
const Trainer = require('../models/trainer')

// Getting all
router.get('/', async (req, res) => {
  try {
    const trainer = await Trainer.find()
    res.json(trainer)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getTrainer, (req, res) => {
  res.json(res.trainer)
})

// Creating one
router.post('/', async (req, res) => {
  const trainer = new Trainer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  })
  try {
    const newTrainer = await trainer.save()
    res.status(201).json(newTrainer)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getTrainer, async (req, res) => {
  if (req.body.firstName != null) {
    res.trainer.firstName = req.body.firstName
  }
  if (req.body.lastName != null) {
    res.trainer.lastName = req.body.lastName
  }
  if (req.body.email != null) {
    res.trainer.email = req.body.email
  }
  if (req.body.phoneNumber != null) {
    res.trainer.phoneNumber = req.body.phoneNumber
  }
  try {
    const updatedTrainer = await res.trainer.save()
    res.json(updatedTrainer)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getTrainer, async (req, res) => {
  try {
    await res.trainer.remove()
    res.json({ message: 'Deleted trainer' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getTrainer(req, res, next) {
  let trainer
  try {
    trainer = await Trainer.findById(req.params.id)
    if (trainer == null) {
      return res.status(404).json({ message: 'Cannot find trainer' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.trainer = trainer
  next()
}

module.exports = router