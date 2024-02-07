import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PreviewIcon from '@mui/icons-material/Preview';

import Title from './Title';
import axios from '../config/axiosConfig';
import { IconButton } from '@mui/material';

export default function Documents() {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {

      axios.get('/documents?appId=a667ddd8-1a75-4b34-babc-b041d89a11e8')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, [])

  return (
    <React.Fragment>
      <Title>Recent Documents</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Project</TableCell>
            <TableCell>Uploaded By</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.title.slice(0, 50)}</TableCell>
              <TableCell>{row.project}</TableCell>
              <TableCell>{row.userId.slice(0, 250)}</TableCell>
              <TableCell><IconButton aria-label="delete" href={row.presignedURL} target='_blank'> <PreviewIcon /> </IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}