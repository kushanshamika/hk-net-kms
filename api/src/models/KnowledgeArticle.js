const mongoose = require('mongoose');

const knowledgeArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model('KnowledgeArticle', knowledgeArticleSchema);