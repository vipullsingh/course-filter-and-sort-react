const express = require('express');
const router = express.Router();
const Topic = require('../models/topic');

// GET all topics
router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new topic
router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    const topic = new Topic({ name });
    const newTopic = await topic.save();
    res.status(201).json(newTopic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
