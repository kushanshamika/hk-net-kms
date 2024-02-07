import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Title from './Title';
import axios from '../config/axiosConfig';
import { IconButton } from '@mui/material';
import { KeyboardDoubleArrowRight } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Articles() {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {

      axios.get('/knowledge/articles')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, [])

  return (
    <React.Fragment>
      <Title>Recent Articles</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Content</TableCell>
            <TableCell>Project</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.title.slice(0, 50)}</TableCell>
              <TableCell>{row.content.slice(0, 250)}</TableCell>
              <TableCell>{row.project}</TableCell>
              <TableCell><IconButton component={Link} to={`/article/${row._id}`} aria-label="read"> <KeyboardDoubleArrowRight /> </IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}