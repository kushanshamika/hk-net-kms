const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  title: String,
  filename: String,
  userId: String,
});

module.exports = mongoose.model('Document', documentSchema);