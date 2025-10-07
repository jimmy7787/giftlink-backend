const express = require('express');
const router = express.Router();
const db = require('../models/db'); // ✅ Connects to MongoDB

router.get('/gifts', async (req, res) => {
  res.send('Gift route working!');
});

module.exports = router;
