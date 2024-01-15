const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

router.post('/upload', documentController.uploadDocument);
router.get('/documents', documentController.getAllDocuments);

module.exports = router;