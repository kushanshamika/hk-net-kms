const express = require('express');
const router = express.Router();
const knowledgeController = require('../controllers/knowledgeController');

router.post('/knowledge/article', knowledgeController.createKnowledgeArticle);

module.exports = router;