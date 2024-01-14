// components/SearchPage.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from '@mui/material';

const styles = {
    searchContainer: {
      marginTop: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    searchInput: {
      width: '100%',
      marginBottom: '1rem',
    },
    resultContainer: {
      marginTop: '2rem',
    },
    card: {
      marginBottom: '1rem',
    },
  };

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = () => {
      // Perform search logic (replace with your actual search implementation)
      // For demonstration purposes, we are using a static list of results
      const results = [
        { id: 1, title: 'Result 1', content: 'Lorem ipsum dolor sit amet.' },
        { id: 2, title: 'Result 2', content: 'Consectetur adipiscing elit.' },
        { id: 3, title: 'Result 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      ];
  
      setSearchResults(results);
    };
  
    return (
      <Container component="main" maxWidth="md">
        <div style={styles.searchContainer}>
          <TextField
            style={styles.searchInput}
            label="Search"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
  
        <div style={styles.resultContainer}>
          {searchResults.map((result) => (
            <Card key={result.id} style={styles.card}>
              <CardContent>
                <Typography variant="h6">{result.title}</Typography>
                <Typography>{result.content}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    );
};

export default SearchForm;
