import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';

import { useAuth } from '../hooks/AuthProvider';
import axios from '../config/axiosConfig';

const formContainerStyle = {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const formFieldStyle = {
  width: '100%',
  marginBottom: '1rem',
};

const uploadButtonStyle = {
  marginTop: '2rem',
};

const uploadedFileContainerStyle = {
  marginTop: '2rem',
  padding: '1rem',
};

const fileInputLabelStyle = {
  backgroundColor: '#3f51b5',
  color: '#fff',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
};

const fileInputStyle = {
  display: 'none',
};

const DocumentUploadForm = () => {
  const user = useAuth();

  const [documentTitle, setDocumentTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTitleChange = (e) => {
    setDocumentTitle(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Implement the file upload logic here
    // You can use FormData to send the file and title to the server
    const formData = new FormData();
    formData.append('title', documentTitle);
    formData.append('file', selectedFile);
    formData.append('userId', user.user);

    axios.post('/upload', formData)
    .then(response => {
    console.log('Form submitted successfully:', response.data);
    })
    .catch(error => {
    console.error('Error submitting form:', error);
    });

    // Perform the file upload using your API or other backend logic
    console.log('Upload:', formData);
  };

  return (
    <Container component="main" maxWidth="md">
      <div style={formContainerStyle}>
        <Typography variant="h4">Document Upload</Typography>
        <TextField
          style={formFieldStyle}
          label="Title"
          variant="outlined"
          fullWidth
          value={documentTitle}
          onChange={handleTitleChange}
        />
        <input
          type="file"
          accept=".pdf, .doc, .docx"
          onChange={handleFileChange}
          style={fileInputStyle}
          id="file-input"
        />
        <label htmlFor="file-input" style={fileInputLabelStyle}>
          Choose File
        </label>
        {selectedFile && (
          <Paper elevation={3} style={uploadedFileContainerStyle}>
            <Typography variant="h6">Selected File:</Typography>
            <Typography>{selectedFile.name}</Typography>
          </Paper>
        )}
        <Button
          style={uploadButtonStyle}
          variant="contained"
          color="primary"
          onClick={handleUpload}
        >
          Upload
        </Button>
      </div>
    </Container>
  );
};

export default DocumentUploadForm;
