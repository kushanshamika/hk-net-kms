const aws = require('aws-sdk');

const KnowledgeArticle = require('../models/KnowledgeArticle');
const Document = require('../models/Document');

aws.config.update({
  accessKeyId: 'DO00WUTAW22C63QPXBAB',
  secretAccessKey: '1pDSM5MhRpZc3X1sSjkMVQXiIsgbnTKEycEcDLRKYiA',
  region: 'blr1',
  endpoint: 'blr1.digitaloceanspaces.com'
});

const s3 = new aws.S3();

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

exports.getAllKnowledgeArticles = async (req, res) => {
  try {
    const knowledgeArticles = await KnowledgeArticle.find();
    res.status(200).json(knowledgeArticles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


exports.searchEntities = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).send('Query parameter is required');
    }

    const knowledgeResults = await KnowledgeArticle.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } },
      ],
    });

    const documentResults = await Document.find({
      $or: [
        { filename: { $regex: query, $options: 'i' } },
        { title: { $regex: query, $options: 'i' } },
      ],
    });

    // Generate pre-signed URLs for document results
    const documentResultsWithPresignedURLs = await Promise.all(documentResults.map(async (doc) => {
      const params = {
        Bucket: 'hk-net',
        Key: doc.filename,
        Expires: 6000, // URL expiration time in seconds
      };

      const presignedURL = await s3.getSignedUrlPromise('getObject', params);
      return { ...doc.toObject(), presignedURL };
    }));

    res.status(200).json({ knowledgeArticles: knowledgeResults, documents: documentResultsWithPresignedURLs });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getKnowledgeArticleById = async (req, res) => {
  try {
    const { articleId } = req.params;

    const knowledgeArticle = await KnowledgeArticle.findById(articleId);

    if (!knowledgeArticle) {
      return res.status(404).send('Knowledge article not found');
    }

    res.status(200).json(knowledgeArticle);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};