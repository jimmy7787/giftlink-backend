const express = require('express');
const app = express();
const db = require('./models/db'); // Connects to MongoDB

const searchRoutes = require('./routes/searchRoutes');

app.use(express.json());

// Mount the /api/search route
app.use('/api/search', searchRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
