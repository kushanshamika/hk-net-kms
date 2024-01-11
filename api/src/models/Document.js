const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  filename: String,
  filepath: String,
  userId: String,
});

module.exports = mongoose.model('Document', documentSchema);