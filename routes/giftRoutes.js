const express = require('express');
const router = express.Router();
const db = require('../models/db'); // Connects to MongoDB

// Route for /api/gifts
router.get('/', async (req, res) => {
  res.send('/api/gifts route working!');
});

// Route for /api/gifts/:id
router.get('/:id', async (req, res) => {
  res.send(`/api/gifts/${req.params.id} route working!`);
});

module.exports = router;
