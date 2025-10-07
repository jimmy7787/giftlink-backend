const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'your-mongodb-url-here', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
