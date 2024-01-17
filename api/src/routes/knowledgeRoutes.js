const express = require('express');
const router = express.Router();
const knowledgeController = require('../controllers/knowledgeController');

router.post('/knowledge/article', knowledgeController.createKnowledgeArticle);
router.get('/knowledge/articles', knowledgeController.getAllKnowledgeArticles); 
router.get('/search', knowledgeController.searchEntities);
router.get('/knowledge/article/:articleId', knowledgeController.getKnowledgeArticleById);

module.exports = router;