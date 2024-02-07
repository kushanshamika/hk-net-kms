// components/ProjectList.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import axios from '../config/axiosConfig';

const projects = [
  { id: 1, name: 'Project 1', description: 'Description for Project 1' },
  { id: 2, name: 'Project 2', description: 'Description for Project 2' },
  { id: 3, name: 'Project 3', description: 'Description for Project 3' },
];

const ProjectList = () => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
  
        axios.get('/projects')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [])
  return (
    <Container component="main" maxWidth="md">
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/project"
          style={{ marginBottom: '1rem' }}
        >
          Add Project
        </Button>

        <List>
          {data && data.map((project, index) => (
            <React.Fragment key={project._id}>
              <ListItem>
                <ListItemText
                  primary={project.name}
                  secondary={project.description}
                />
              </ListItem>
              {index < projects.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </div>
    </Container>
  );
};

export default ProjectList;
