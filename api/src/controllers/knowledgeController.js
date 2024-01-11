const KnowledgeArticle = require('../models/KnowledgeArticle');

exports.createKnowledgeArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newKnowledgeArticle = new KnowledgeArticle({ title, content });
    await newKnowledgeArticle.save();
    res.status(201).send('Knowledge article created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};