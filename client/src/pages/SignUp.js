import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import axios from '../config/axiosConfig';
import Copyright from '../components/Copyright';


export default function SignUp() {

    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        axios.post('/register', formData)
        .then(response => {;
            navigate('../login');
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
    };

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
        sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}
    >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="username"
            autoComplete="email"
            value={formData.usernamename} 
            onChange={handleChange}
            autoFocus
        />
        <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password} 
            onChange={handleChange}
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Sign In
        </Button>
        <Grid container justifyContent="flex-end">
            <Grid item>
            <Link href="/login" variant="body2">
                Already have an account? Sign in
            </Link>
            </Grid>
        </Grid>
        </Box>
    </Box>
    <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}