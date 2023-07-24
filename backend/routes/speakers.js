const express = require('express');
const router = express.Router();
const Speaker = require('../models/speaker');

// GET all speakers
router.get('/', async (req, res) => {
  try {
    const speakers = await Speaker.find();
    res.json(speakers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new speaker
router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    const speaker = new Speaker({ name });
    const newSpeaker = await speaker.save();
    res.status(201).json(newSpeaker);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
