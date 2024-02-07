import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import { Link } from 'react-router-dom';

import axios from '../config/axiosConfig';

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
    const [documentResults, setDocumentResults] = useState([]);
  
    const handleSearch = () => {

      axios.get(`/search?query=${searchTerm}&appId=a667ddd8-1a75-4b34-babc-b041d89a11e8`)
      .then(response => {
        setSearchResults(response.data.knowledgeArticles);
        setDocumentResults(response.data.documents);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  
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
          {searchResults && searchResults.map((result) => (
            <Card key={result._id} style={styles.card}>
              <CardContent>
                <Typography variant="h6">{result.title}</Typography>
                <Typography>{result.content.slice(0, 250)}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" to={`../article/${result._id}`} component={Link}>Read More</Button>
              </CardActions>
            </Card>
          ))}
          {documentResults && documentResults.map((result) => (
            <Card key={result._id} style={styles.card}>
              <CardContent>
                <Typography variant="h6">{result.title}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={result.presignedURL} target='_blank'>Preview</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </Container>
    );
};

export default SearchForm;
