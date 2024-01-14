import React from 'react';
import NavBar from '../components/NavBar';
import { Box, Container, CssBaseline, Grid, Paper, Toolbar } from '@mui/material';
import Copyright from '../components/Copyright';
import SearchForm from '../components/SearchForm';


export default function Search() {
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <NavBar />
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <SearchForm />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  </Box>
  )
}
