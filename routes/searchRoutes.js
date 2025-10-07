const express = require('express');
const router = express.Router();
const db = require('../models/db'); // Connects to MongoDB
const mongoose = require('mongoose');

// Assuming you have a Gift model
const Gift = mongoose.model('Gift', new mongoose.Schema({
  name: String,
  category: String
}));

// Filter gifts by category
router.get('/search', async (req, res) => {
  const { category } = req.query;
  try {
    const results = await Gift.find({ category });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to search by category' });
  }
});

module.exports = router;
