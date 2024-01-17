import React, { Fragment, useState } from 'react';
import { Container, Typography } from '@mui/material';

import axios from '../config/axiosConfig';

const articleContainerStyle = {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const Article = ( props ) => {

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {

    axios.get(`/knowledge/article/${props.articleId}`)
      .then(response => {
        setArticle(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(e => {
        setLoading(false);
      });
  }, [props.articleId])

  return (
    <Container component="main" maxWidth="md">
      <div style={articleContainerStyle}>

        {loading && <Typography variant="body1">Loading...</Typography>}

        {!loading && article ? (

          <Fragment>
            <Typography variant="h6" sx={{ mb: 5 }}>{article.title}</Typography>
            <Typography variant="body1">{article.content}</Typography>
          </Fragment>


        ) : (
          !loading && <Typography variant="body1">Article not found.</Typography>
        )}
      </div>
    </Container>
  );
};

export default Article;
