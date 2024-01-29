const Document = require('../models/Document');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

let uniqueFileName;

aws.config.update({
  accessKeyId: 'DO00WUTAW22C63QPXBAB',
  secretAccessKey: '1pDSM5MhRpZc3X1sSjkMVQXiIsgbnTKEycEcDLRKYiA',
  region: 'blr1', // e.g., 'nyc3'
  endpoint: 'blr1.digitaloceanspaces.com'
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'hk-net',
    acl: 'private',
    key: function (req, file, cb) {
      uniqueFileName = Date.now() + '-' + file.originalname; // Use a unique file name
      cb(null, uniqueFileName);
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
  }),
}).single('file');

exports.uploadDocument = (req, res) => {

  upload(req, res, async function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    try {
      
      const newDocument = new Document({ filename: uniqueFileName, userId: req.body.userId, title: req.body.title, project: req.body.project, appId: req.body.appId });
      await newDocument.save();
      res.status(201).send('Document uploaded successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
};

exports.getAllDocuments = async (req, res) => {
  try {
    const { appId } = req.query;

    if (!appId) {
      return res.status(400).send('App ID is required');
    }
    const documents = await Document.find({ appId });
    
    // Generate pre-signed URLs for each document
    const documentsWithPresignedURLs = await Promise.all(documents.map(async (doc) => {
      const params = {
        Bucket: 'hk-net',
        Key: doc.filename,
        Expires: 6000, // URL expiration time in seconds
      };

      const presignedURL = await s3.getSignedUrlPromise('getObject', params);
      return { ...doc.toObject(), presignedURL };
    }));

    res.status(200).json(documentsWithPresignedURLs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
