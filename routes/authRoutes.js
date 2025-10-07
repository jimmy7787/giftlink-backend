const express = require('express');
const router = express.Router();
const db = require('../models/db'); // Connects to MongoDB

// Find current user by username
router.get('/user/:username', async (req, res) => {
  const username = req.params.username;
  try {
    const user = await db.collection('users').findOne({ username });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
