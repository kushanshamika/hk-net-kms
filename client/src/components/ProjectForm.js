import React, { useState } from 'react';
import { Button, Container, TextField, Typography, createStyles } from '@mui/material';

import axios from '../config/axiosConfig';

const styles = createStyles({
  formContainer: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formField: {
    width: '100%',
    marginBottom: '1rem',
  },
  submitButton: {
    marginTop: '1rem',
  },
});


export default function ProjectForm() {
    const [formData, setFormData] = useState({
      name: '',
      description: '',
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      axios.post('/project', formData)
      .then(response => {
      console.log('Form submitted successfully:', response.data);
      })
      .catch(error => {
      console.error('Error submitting form:', error);
      });
    };
  
  return (
    <Container component="main" maxWidth="md">
    <div style={styles.formContainer}>
      <Typography variant="h4">Create Project</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          style={styles.formField}
          label="Project Name"
          variant="outlined"
          fullWidth
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          style={styles.formField}
          label="Project Description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <Button
          style={styles.submitButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  </Container>
  )
}
