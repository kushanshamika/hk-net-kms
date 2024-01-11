const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://hkDB:6ISc5s3753991SOm@cluster0.c6jw7zz.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const authRoutes = require('./routes/authRoutes');
const documentRoutes = require('./routes/documentRoutes');
const knowledgeRoutes = require('./routes/knowledgeRoutes');

app.use(authRoutes);
app.use(documentRoutes);
app.use(knowledgeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
