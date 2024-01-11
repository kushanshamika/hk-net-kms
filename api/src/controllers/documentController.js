const Document = require('../models/Document');

exports.uploadDocument = async (req, res) => {
  try {
    const { originalname, path } = req.file;
    const { userId } = req.body;
    const newDocument = new Document({ filename: originalname, filepath: path, userId });
    await newDocument.save();
    res.status(201).send('Document uploaded successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};